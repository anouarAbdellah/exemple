@extends('layouts.layout')

@section('links')
    <link href="{{ asset('css/product.css') }}" rel="stylesheet">
    <link href="{{ asset('css/product_responsive.css') }}" rel="stylesheet">
    <script src="{{ asset('js/product_custom.js') }}"></script>
    <title>{{ $product->name }}</title>
@endsection

@section('content')
    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" style="background-attachment:fixed;background-image: url(/storage/images/{{ $product->category }}.jpg);background-size: 100%;background-position: center;" data-speed="0.8"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="home_container">
                        <div class="home_content">
                            <div class="home_title">{{ $product->category }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="current_page">
                        <ul>
                            <li><a href="categories.html">{{ $product->category }}</a></li>
                            <li>{{ $product->name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row product_row">

                <!-- Product Image -->
                <div class="col-lg-7">
                    <div class="product_image">
                        <div class="product_image_large"><div id="large-image" style="width: 100%;background-image: url(/storage/images/{{ $product->image }});height: 600px;background-size: cover;background-position: center;background-repeat: no-repeat;"></div></div>
                        <div class="product_image_thumbnails d-flex flex-row align-items-start justify-content-start">
                            <div class="product_image_thumbnail" style="background-image:url(/storage/images/{{ $product->image }})" data-image="/storage/images/{{ $product->image }}"></div>
                            @foreach($product->images as $image)
                                <div class="product_image_thumbnail" style="background-image:url(/storage/images/{{ $image->path }})" data-image="/storage/images/{{ $image->path }}"></div>
                            @endforeach
                        </div>
                    </div>
                </div>

                <!-- Product Content -->
                <div class="col-lg-5">
                    <div class="product_content">
                        <div class="product_name">{{ $product->name }}</div>
                        <div class="product_price">
                            {{ $product->new_price }}Dhs
                        @if($product->new_price < $product->old_price)
                            <span style="font-size: 13px;text-decoration: line-through">{{ $product->old_price }}Dhs</span>
                        @endif
                        </div>
                        <div class="rating rating_{{ $product->rating }}" data-rating="{{ $product->rating }}">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product_text">
                            <p>{{ $product->description }}</p>
                        </div>
                        {{ Form::open(['url'=>"/addToBasket/".$product->id]) }}
                        <!-- Product Quantity -->
                        <div class="product_quantity_container">
                            <span>Quantity</span>
                            <div class="product_quantity clearfix">
                                <input id="quantity_input" type="text" pattern="[0-9]*" name="qty" value="1">
                                <div class="quantity_buttons">
                                    <div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                                    <div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                        <!-- Product Size -->

                        <div class="product_size_container">
                            @foreach($product->caracteristiques as $cara)
                                <div>
                                    <span>{{ $cara->name }}</span>
                                    <div class="product_size">
                                <ul class="d-flex flex-row align-items-start justify-content-start">
                                    @foreach($cara->values as $value)
                                        <li>
                                            <label style="font-size: 20px;" for="radio_{{ $value->id }}">{{ $value->value }}</label>
                                            <input style="margin: 0px 5px;" type="radio" id="radio_{{ $value->id }}" value="{{ $value->value }}" name="{{ $cara->name }}" required>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                                </div>
                            @endforeach
                            <Button type="submit" class="button cart_button">add to cart</Button>
                        </div>
                        {{ Form::close() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection