<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function index(){
        $products=Product::where(['new'=>1])->limit(3)->get();
        return view('home')->with(['products'=>$products]);
    }
}
