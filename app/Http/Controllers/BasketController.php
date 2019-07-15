<?php

namespace App\Http\Controllers;

use App\Deal;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class BasketController extends Controller
{
    function addProduct(Request $request,$id){

        if(Session::get('products') == null){
            \session()->put('products',[]);
        }
        $basketProds=Session::get('products');
        if(Session::get('products')==null){
            $basketProds=[];
        }
        $a=0;
        foreach($basketProds as $key=>$pro){
            if($pro['id']==$id){
                $pro['qty']+=$request->input("qty");
                if($request->input("color")!=null and $request->input('color')!=""){
                    $pro["color"]=$request->input("color");
                }
                if($request->input("size")!=null and $request->input('size')!=""){
                    $pro["size"]=$request->input("size");
                }
                $basketProds[$key]=$pro;
                \session(['products'=>$basketProds]);
                $a=1;
                break;
            }
        }
        if($a==0){
            $product=["id"=>$id,"qty"=>$request->input("qty")];
            if($request->input("color")!=null and $request->input('color')!=""){
                $product["color"]=$request->input("color");
            }
            if($request->input("size")!=null and $request->input('size')!=""){
                $product["size"]=$request->input("size");
            }
            \session()->push('products',$product);
        }
        return redirect('basket');
    }
    function basket(){
        $ids=[];
        $basketProds=Session::get('products');

        if(Session::get('products')==null){
            $basketProds=[];
        }
        $total=0;
        foreach($basketProds as $pro){
            $ids[]=$pro['id'];
        }

        $products=Product::whereIn('id',$ids)->get();
        foreach ($products as $key=>$product) {

            foreach($basketProds as $pro){
                if($product->id==$pro['id']){
                    $products[$key]['qty']=$pro['qty'];
                    $total+=($product->new_price*$pro['qty']);
                    if(isset($pro['color'])){
                        $products[$key]["color"]=$pro["color"];
                    }
                    if(isset($pro["size"])){
                        $products[$key]["size"]=$pro["size"];
                    }
                }
            }
        }
        return view('basket')->with(["products"=>$products,"total"=>$total]);
    }
    function clear(){
        \session()->remove('products');
        return redirect('/');
    }
    function remove($id){
        $basketProds=Session::get('products');
        foreach($basketProds as $key=>$pro){
            if($id==$pro['id']){
                unset($basketProds[$key]);
            }
        }
        \session(['products'=>$basketProds]);
        return redirect('/basket');
    }
    function update(Request $request){
        $ids=[];
        $basketProds=Session::get('products');
        if(Session::get('products')==null){
            $basketProds=[];
        }
        $total=0;
        $totalProduct=0;
        foreach($basketProds as $pro){
            $ids[]=$pro['id'];
        }
        $products=Product::whereIn('id',$ids)->get();
        foreach ($products as $key=>$product) {
        foreach($basketProds as $key=>$pro){
            if($pro['id']==$request->input('id')){
                $pro['qty']=$request->input('value');
                $basketProds[$key]=$pro;
                \session(['products'=>$basketProds]);
                if($product->id==$pro['id']) {
                    $totalProduct = $product->new_price * $pro['qty'];
                }
            }
            if($product->id==$pro['id']) {
                $totalProduct = $product->new_price * $pro['qty'];
                $total += ($product->new_price * $pro['qty']);
            }
        }
        }
        $data=['totalProduct'=>$totalProduct,'total'=>$total];
        echo json_encode($data);
    }
    function checkout(){
        $ids=[];
        $basketProds=Session::get('products');
        if(Session::get('products')==null){
            $basketProds=[];
        }

        if(sizeof($basketProds) <= 0){
            return redirect('/');
        }
        $total=0;
        foreach($basketProds as $pro){
            $ids[]=$pro['id'];
        }

        $products=Product::whereIn('id',$ids)->get();
        foreach ($products as $key=>$product) {

            foreach($basketProds as $pro){
                if($product->id==$pro['id']){
                    $total+=($product->new_price*$pro['qty']);
                }
            }
        }
        return view('checkout')->with('total',$total);
    }
    function place(Request $request){
        $this->validate($request,['name'=>'required','email'=>'email|required','phone'=>'required','address'=>'required']);
        $order=['name'=>$request->input('name'),'email'=>$request->input('email'),'address'=>$request->input('address'),'phone'=>$request->input('phone'),'status'=>'nouveau'];
        $deal=Deal::create($order);
        $ids=[];
        $basketProds=Session::get('products');
        if(Session::get('products')==null){
            $basketProds=[];
        }
        foreach($basketProds as $pro){
            $ids[]=$pro['id'];
        }

        $products=Product::whereIn('id',$ids)->get();
        foreach ($products as $key=>$product) {
            $proToStore=[];
            foreach($basketProds as $pro){
                if($product->id==$pro['id']){
                    $proToStore['product_id']=$product->id;
                    $proToStore['deal_id']=$deal->id;
                    $proToStore['qty']=$pro['qty'];
                    $proToStore['details']='';
                    if(isset($pro["color"])){
                        $proToStore['details'].='(couleur : '.$pro["color"].' ) ';
                    }
                    if(isset($pro["size"])){
                        $proToStore['details'].='(taille : '.$pro["size"].' ) ';
                    }
                    DB::table('deal_product')->insert($proToStore);
                }
            }
        }
        \session()->forget('products');
        return view('success');
    }
}
