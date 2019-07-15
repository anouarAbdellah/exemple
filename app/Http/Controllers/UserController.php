<?php

namespace App\Http\Controllers;

use App\Deal;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function dashboard(){
        return view('dashboard');
    }
    public function infos(){
        return view('infos');
    }
    public function deals(){
        $deals=Deal::where('email',Auth::user()->email)->get();
        return view('deals')->with('deals',$deals);
    }
    public function save(Request $request){
        $this->validate($request,['name'=>'required','email'=>'required|email','address'=>'required','phone'=>'required']);
        if($request->input('password')!=null){
            $this->validate($request,['password'=>'confirmed']);
        }
        $user=User::find(Auth::user()->id);
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->address=$request->input('address');
        $user->phone=$request->input('phone');
        Auth::user()->name=$request->input('name');
        Auth::user()->email=$request->input('email');
        Auth::user()->address=$request->input('address');
        Auth::user()->phone=$request->input('phone');

        if($request->input('password')!=null){
            $user->password=Hash::make($request->input('phone'));
        }
        $user->save();
        return view('infos')->with('success','modifié avec succes');
    }
}
