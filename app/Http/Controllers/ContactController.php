<?php

namespace App\Http\Controllers;

use App\Mail;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function show(){
        return view('contact');
    }
    function send(Request $request){
        $mail=['subject'=>$request->input('subject'),'name'=>$request->input('name'),'email'=>$request->input('email'),'phone'=>$request->input('phone'),'message'=>$request->input('message'),'seen'=>0];
        Mail::create($mail);
        return view('contact')->with('success',1);
    }
}
