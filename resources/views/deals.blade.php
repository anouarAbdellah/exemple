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
    <div class="container" style="margin-top: 20px;">
        <table class="table table-bordered">
            <thead>
                <th>la date</th>
                <th>l'addresse</th>
                <th>les produits</th>
            </thead>
            <tbody>
                @foreach($deals as $deal)
                    <tr>
                        <td>{{ $deal->created_at }}</td>
                        <td>{{ $deal->address }}</td>
                        <td>
                            <ul>
                                @foreach($deal->products as $product)
                                    <li><a target="_blank" href="/product/{{ $product->id }}">{{ $product->name }}</a> {{ $product->pivot->details }} quantité : {{ $product->pivot->qty }}</li>
                                @endforeach
                            </ul>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

@endsection