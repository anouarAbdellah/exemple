<?php

namespace App\Http\Controllers;

use App\Caracteristique;
use App\Deal;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    function all($name){
        $products=Product::where([['category',$name],['stock','>',0]])->paginate(30);
        return view('products')->with(['products'=>$products,'name'=>$name]);
    }
    function new(){
        $products=Product::where('new',1)->paginate(30);
        return view('products')->with(['products'=>$products,'name'=>"Nouveauté"]);
    }
    function promo(){
        $products=Product::where('old_price','>','new_price')->paginate(30);
        return view('products')->with(['products'=>$products,'name'=>"Promotions"]);
    }
    function best(){
        $deals=DB::table('deal_product')->groupBy(['product_id'])->get(['product_id']);
        $ids=[];
        foreach ($deals as $deal){
            $ids[]=$deal->product_id;
        }
        $products=Product::whereIn('id',$ids)->paginate(30);

        return view('products')->with(['products'=>$products,'name'=>"Best_Sales"]);
    }
    function show($id){
        $product=Product::find($id);
        $caracteristiques=Caracteristique::where('product_id',$product->id)->get();
        return view('product')->with(['product'=>$product,'caracteristiques'=>$caracteristiques]);
    }
    function search(Request $request){
        $search=$request->input('keyword');
        $products=Product::where('name','LIKE',"%{$search}%")->orWhere('description','LIKE',"%{$search}%")->get();
        return view('products')->with(['products'=>$products,'name'=>'search']);
    }
}
