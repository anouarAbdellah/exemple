@extends('layouts.layout')
@section('links')

    <link href="{{ asset('css/contact.css') }}" rel="stylesheet">
    <link href="{{ asset('css/contact_responsive.css') }}" rel="stylesheet">
    <title>Mon compte</title>
@endsection

@section('content')
    <style>
        .form-control{
            color: #2d2d2d;
        }
    </style>
    <!-- Home -->

    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" data-image-src="/storage/images/user.jpg" data-speed="0.8"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="home_container">
                        <div class="home_content">
                            <div class="home_title">Mon compte</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 20px;">
        @include('flash-messages')
        <div style="margin: 20px" class="alert alert-secondary">
            si vous vouler pas changer le mot de passe laissez le vide
        </div>
        {!! Form::open(['url'=>'user/save','enctype'=>'multipart/form-data']) !!}
        <div class="form-group">
            {!! Form::label('name','Nom :') !!}
            {!! Form::text('name',\Illuminate\Support\Facades\Auth::user()->name,['class'=>'form-control','placeholder'=>'Nom ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('phone','Telephone :') !!}
            {!! Form::text('phone',\Illuminate\Support\Facades\Auth::user()->phone,['class'=>'form-control','placeholder'=>'Telephone ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('address','Addresse :') !!}
            {!! Form::text('address',\Illuminate\Support\Facades\Auth::user()->address,['class'=>'form-control','placeholder'=>'Addresse ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('email','Email :') !!}
            {!! Form::text('email',\Illuminate\Support\Facades\Auth::user()->email,['class'=>'form-control','placeholder'=>'Email ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('password','Mot de passe :') !!}
            {!! Form::password('password',['class'=>'form-control','placeholder'=>'Mot de passe ...']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('password_confirmation','Confirmer mot de passe :') !!}
            {!! Form::password('password_confirmation',['class'=>'form-control','placeholder'=>'Confirmer mot de passe ...']) !!}
        </div>
        <div class="form-group">
            {!! Form::submit('Modifier',['class'=>'btn btn-outline-info form-control']) !!}
        </div>
        {!! Form::close() !!}
    </div>

@endsection