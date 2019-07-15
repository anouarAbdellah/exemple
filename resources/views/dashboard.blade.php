@extends('layouts.layout')
@section('links')

    <link href="{{ asset('css/contact.css') }}" rel="stylesheet">
    <link href="{{ asset('css/contact_responsive.css') }}" rel="stylesheet">
    <title>Mon compte</title>
@endsection

@section('content')

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
    <div class="container">
        <ul style="margin-top: 20px;font-size: 25px;list-style: inside;color: #4c98e3;">
            <li><a href="/user/infos">Mes informations</a> </li>
            <li><a href="/user/deals">Mes commandes</a> </li>
        </ul>
    </div>

@endsection