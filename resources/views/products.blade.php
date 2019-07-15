@extends('layouts.layout')
@section('links')

    <link href="{{ asset('css/categories.css') }}" rel="stylesheet">
    <link href="{{ asset('css/categories_responsive.css') }}" rel="stylesheet">
    <link href="{{ asset('css/jquery-ui.css') }}" rel="stylesheet">
    <link href="{{ asset('css/jquery.mCustomScrollbar.css') }}" rel="stylesheet">
    <script src="{{ asset('js/isotope.pkgd.min.js') }}"></script>
    <script src="{{ asset('js/jquery-ui.js') }}"></script>
    <script src="{{ asset('js/jquery.mCustomScrollbar-ui.js') }}"></script>
    <script src="{{ asset('js/categories_custom.js') }}"></script>
    <title>{{ $name }}</title>
@endsection

@section('content')

    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" style="background-attachment:fixed;background-image: url(/storage/images/{{ $name }}.jpg);background-size: 100%;background-position: center;" data-speed="0.8"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="home_container">
                        <div class="home_content">
                            <div class="home_title">{{ $name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Products -->

    <div class="products">
        <div class="container">

            <div class="row products_container">
                <div class="col">

                    <!-- Products -->

                    <div class="product_grid">
                        @foreach($products as $product)
                        <!-- Product -->
                            <div class="product">
                                <a href="/product/{{ $product->id }}">
                                    <div class="product_image"><div class="prod-image" style="background-image: url(/storage/images/{{ $product->image }})" alt=""></div></div>
                                </a>
                            <div class="rating rating_{{ $product->rating }}" data-rating="{{ $product->rating }}">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product_content clearfix">
                                <div class="product_info">
                                    <div class="product_name"><a href="/product/{{ $product->id }}">{{ $product->name }}</a></div>
                                    <div class="product_price">{{ $product->new_price }}Dhs
                                        @if($product->new_price < $product->old_price)
                                            <span style="font-size: 11px;text-decoration: line-through">{{ $product->old_price }}Dhs</span>
                                        @endif
                                    </div>
                                </div>
                                <div class="product_options">
                                    <a href="/product/{{ $product->id }}"> <div class="product_fav product_option">+</div></a>
                                </div>
                            </div>
                        </div>


                            @endforeach
                    </div>
                </div>

            </div>
        </div>

    </div>
    </div>
@endsection