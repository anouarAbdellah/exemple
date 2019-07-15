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

    <div class="checkout">
        <div class="container">
            <div class="row">
                @include('flash-messages')
                <!-- Billing Details -->
                <div class="col-lg-6">
                    <div class="billing">
                        <div class="checkout_title">billing details</div>
                        <div class="checkout_form_container">
                            {{ Form::open(['url'=>'checkout/send','id'=>'checkout_form']) }}
                                    <input type="text"
                                    @if(\Illuminate\Support\Facades\Auth::check())
                                            value="{{ Auth::user()->name }}"
                                    @endif
                                   class="checkout_input" name="name" placeholder="Nom et prenom" required="required">
                                <input type="phone"
                                    @if(\Illuminate\Support\Facades\Auth::check())
                                            value="{{ Auth::user()->phone }}"
                                    @endif
                                    class="checkout_input" name="phone" placeholder="Telephone">
                                <input type="text"
                                    @if(\Illuminate\Support\Facades\Auth::check())
                                            value="{{ Auth::user()->email }}"
                                    @endif
                                    class="checkout_input" name="email" placeholder="E-mail" required="required">
                                <input type="text"
                                    @if(\Illuminate\Support\Facades\Auth::check())
                                            value="{{ Auth::user()->address }}"
                                    @endif
                                    class="checkout_input" name="address" placeholder="Addresse" required="required">

                            <div class="payment_options">
                                <button class="cart_total_button" type="submit">Commander</button>
                            </div>
                            {{ Form::close() }}
                        </div>
                    </div>
                </div>

                <!-- Cart Details -->
                <div class="col-lg-6">
                    <div class="cart_details">
                        <div class="checkout_title">Total</div>
                        <div class="cart_total">
                            <ul>
                                <li class="d-flex flex-row align-items-center justify-content-start">
                                    <div class="cart_total_title">Subtotal</div>
                                    <div class="cart_total_price ml-auto">{{ $total }}Dhs</div>
                                </li>
                                <li class="d-flex flex-row align-items-center justify-content-start">
                                    <div class="cart_total_title">Shipping</div>
                                    <div class="cart_total_price ml-auto">30Dhs</div>
                                </li>
                                <li class="d-flex flex-row align-items-start justify-content-start total_row">
                                    <div class="cart_total_title">Total</div>
                                    <div class="cart_total_price ml-auto">{{ $total+30 }}Dhs</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection