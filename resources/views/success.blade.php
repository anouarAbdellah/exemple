@extends('layouts.layout')

@section('links')
    <link href="{{ asset('css/checkout.css') }}" rel="stylesheet">
    <link href="{{ asset('css/checkout_responsive.css') }}" rel="stylesheet">
    <script src="{{ asset('js/checkout_custom.js') }}"></script>
    <title>Commander</title>
@endsection

@section('content')
    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" style="background-attachment:fixed;background-image: url(/storage/images/checkout.jpg);background-size: cover;background-position: center;background-repeat:no-repeat;" data-speed="0.8"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="home_container">
                        <div class="home_content">
                            <div class="home_title">Placer un ordre</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="alert alert-secondary" style="margin-top: 50px;font-size: 20px;padding: 30px;font-weight: 600;">
            nous avons reçu vos ordres et nous allons repondre le plutôt possible <i class="fas fa-check-circle" style="color: #139a25;"></i>
        </div>
    </div>
@endsection