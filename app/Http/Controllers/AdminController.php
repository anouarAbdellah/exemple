<?php

namespace App\Http\Controllers;

use App\Deal;
use App\Destination;
use App\Image;
use App\Mail;
use App\Mail\Newsletter;
use App\Mail\Reply;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:admin");
    }
    public function index(){
        $emails=Mail::orderBy('created_at','desc')->paginate(50);
        return view("admin.inbox")->with(['emails'=>$emails]);
    }
    public function productAdd(){
        return view("admin.addProduct");
    }
    public function productEdit($id){
        $product=Product::find($id);
        return view("admin.editProduct")->with('product',$product);
    }
    public function productStore(Request $request){
        $this->validate($request,['name'=>'required','new_price'=>'required','old_price'=>'required','rating'=>'required','stock'=>'required','category'=>'required','description'=>'required','image'=>'required|image']);
        $filenamewithext=$request->file('image')->getClientOriginalName();
        $filename=pathinfo($filenamewithext,PATHINFO_FILENAME);
        $ext=$request->file('image')->getClientOriginalExtension();
        $filetostore=$filename.'_'.time().'.'.$ext;
        $request->file('image')->storeAs('public/images',$filetostore);
        $product=['name'=>$request->input('name'),'new_price'=>$request->input('new_price'),'old_price'=>$request->input('old_price'),'stock'=>$request->input('stock'),'category'=>$request->input('category'),'rating'=>$request->input('rating'),'description'=>$request->input('description'),'image'=>$filetostore];
        if($request->input('new')=='on'){
            $product['new']=1;
        }
        else{
            $product['new']=0;
        }
        Product::create($product);
        return view("admin.addProduct")->with(['success'=>'produit bien ajouté']);
    }
    public function productSave(Request $request,$id){
        $this->validate($request,['name'=>'required','new_price'=>'required','old_price'=>'required','rating'=>'required','stock'=>'required','category'=>'required','description'=>'required']);
        $pro=Product::find($id);
        if($request->hasFile('image')){
            $filenamewithext=$request->file('image')->getClientOriginalName();
            $filename=pathinfo($filenamewithext,PATHINFO_FILENAME);
            $ext=$request->file('image')->getClientOriginalExtension();
            $filetostore=$filename.'_'.time().'.'.$ext;
            $request->file('image')->storeAs('public/images',$filetostore);
            $pro->image=$filetostore;
        }
        $product=['name'=>$request->input('name'),'new_price'=>$request->input('new_price'),'old_price'=>$request->input('old_price'),'stock'=>$request->input('stock'),'category'=>$request->input('category'),'rating'=>$request->input('rating'),'description'=>$request->input('description')];
        if($request->input('new')=='on'){
            $product['new']=1;
        }
        else{
            $product['new']=0;
        }
        $pro->name=$product['name'];
        $pro->stock=$product['stock'];
        $pro->rating=$product['rating'];
        $pro->new=$product['new'];
        $pro->description=$product['description'];
        $pro->new_price=$product['new_price'];
        $pro->old_price=$product['old_price'];
        $pro->category=$product['category'];
        $pro->save();
        return view("admin.editProduct")->with(['product'=>$pro,'success'=>'bien modifier']);
    }
    public function deleteProduct($id){
        $product=Product::find($id);
        $product->delete();
        return redirect('/admin/products');
    }
    public function addImage($id){
        $images=Image::where('product_id',$id)->get();
        return view('admin.addImage')->with(['images'=>$images,'id'=>$id]);
    }
    public function deleteImage($imageId,$id){
        $image=Image::find($imageId);
        $image->delete();
        return redirect('/admin/image/add/'.$id);
    }
    public function saveImage(Request $request,$id){
        $this->validate($request,['image'=>'required']);
        $filenamewithext=$request->file('image')->getClientOriginalName();
        $filename=pathinfo($filenamewithext,PATHINFO_FILENAME);
        $ext=$request->file('image')->getClientOriginalExtension();
        $filetostore=$filename.'_'.time().'.'.$ext;
        $request->file('image')->storeAs('public/images',$filetostore);
        $image=['path'=>$filetostore,'product_id'=>$id];
        Image::create($image);
        return redirect('/admin/image/add/'.$id);
    }
    public function deals(){
        $commandes=Deal::orderBy('status','desc')->orderBy('created_at','desc')->paginate('30');
        return view('admin.deals')->with('deals',$commandes);
    }
    public function deal($id){
        $deal=Deal::find($id);
        $total=0;
        foreach($deal->products as $product){
            $total+=$product->new_price*$product->pivot->qty;
        }
        return view('admin.deal')->with(['deal'=>$deal,'total'=>$total]);
    }
    public function products(){
        $products=Product::orderBy('stock','desc')->paginate(50);
        return view("admin.products")->with(['products'=>$products]);
    }
    public function updateStatus(Request $request){
        $id=$request->input('id');
        $value=$request->input('value');
        $deal=Deal::find($id);
        $deal->status=$value;
        $deal->save();
    }
    public function email($id){
        $email=Mail::find($id);
        $email->seen=1;
        $email->save();
        return view('admin.fullemail')->with(['id'=>$id,'email'=>$email]);
    }
    public function deleteMail($id){
        $email=Mail::find($id);
        $email->delete();
        return redirect('/admin');
    }
    public function replyMail($id){
        $email=Mail::find($id);
        return view('admin.reply')->with(['email'=>$email,'id'=>$id]);
    }
    public function newsletter(){
        return view('admin.newsletter');
    }
    public function sendMail(Request $request,$id){
        $this->validate($request,['email'=>'email|required','subject'=>'required','message'=>'required']);
        $email=$request->input();
        $user=['name'=>$request->input('email')];
        \Illuminate\Support\Facades\Mail::to($user)->send(new Reply($email));
        return redirect('/admin/reply/'.$id)->with(['success'=>'Message sent successfully!']);
    }
    public function sendnewsletter(Request $request){
        $this->validate($request,['subject'=>'required','message'=>'required']);
        $mail=$request->input();
        $users=User::all();
        foreach ($users as $user){
            $email=['name'=>$user->email];
            Mail::to($email)->send(new Newsletter($mail));
            return redirect('/admin/newsletter')->with(['success'=>'Sent successfully!']);
        }
    }
}
