@extends('layouts.layout')
@section('links')
    <link href="{{ asset('css/cart.css') }}" rel="stylesheet">
    <link href="{{ asset('css/cart_responsive.css') }}" rel="stylesheet">
    <script src="{{ asset('js/cart_custom.js') }}"></script>
    <title>Mon panier</title>
@endsection

@section('content')
    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" style="background-attachment:fixed;background-image: url(/storage/images/cart.jpg);background-size: cover;background-position: center;background-repeat:no-repeat;" data-speed="0.8"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="home_container">
                        <div class="home_content">
                            <div class="home_title">Panier</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart -->

    <div class="cart_container">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="cart_title">Mon panier</div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="cart_bar d-flex flex-row align-items-center justify-content-start">
                        <div class="cart_bar_title_name">Produit</div>
                        <div class="cart_bar_title_content ml-auto">
                            <div class="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                                <div class="cart_bar_title_price">Prix</div>
                                <div class="cart_bar_title_quantity">Quantite</div>
                                <div class="cart_bar_title_total">Totale</div>
                                <div class="cart_bar_title_button"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="cart_products">
                        <ul>
                            @foreach($products as $product)
                                <li class=" cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
                                    <div class="cart_bar_title_name"><!-- Product Image -->
                                        <div class="cart_product_image"><img style="width: 100px;" class="prod_img" src="storage/images/{{ $product->image }}" alt="{{ $product->name }}"><a href="/product/{{ $product->id }}" style="color: #232323;font-size: 20px;">{{ $product->name }}</a></div></div>
                                    <div class="cart_bar_title_content ml-auto">
                                        <div class="cart_bar_title_content_inner d-flex flex-row align-items-center justify-content-end">
                                            <div class="cart_bar_title_price"><!-- Product Price -->
                                                <div class="cart_product_price">{{ $product->new_price }}Dhs</div></div>
                                            <div class="cart_bar_title_quantity"><!-- Product Quantity -->
                                                <div class="product_quantity_container">
                                                    <div class="product_quantity clearfix">
                                                        <input id="quantity_input{{ $product->id }}" class="qty-input" type="text" pattern="[0-9]*" data-id="{{ $product->id }}" value="{{ $product->qty }}">
                                                        <div class="quantity_buttons">
                                                            <div class="quantity_inc quantity_control quantity_inc_button" data-id="{{ $product->id }}"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                                                            <div class="quantity_dec quantity_control quantity_dec_button" data-id="{{ $product->id }}"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                                                        </div>
                                                    </div>
                                                </div></div>
                                            <div class="cart_bar_title_total"><!-- Products Total Price -->
                                                <div class="cart_product_total" id="product-total{{ $product->id }}">{{ $product->new_price * $product->qty }}Dhs</div>
                                            </div>
                                            <div class="cart_bar_title_button"><!-- Product Cart Trash Button -->
                                                <div class="cart_product_button">
                                                    <a href="/basket/remove/{{ $product->id }}"> <button class="cart_product_remove"><img src="/storage/images/trash.png" alt=""></button></a>
                                                </div></div>
                                        </div>
                                    </div>


                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="cart_control_bar d-flex flex-md-row flex-column align-items-start justify-content-start">
                        <a href="/basket/clear"><button class="button_clear cart_button">Vider le panier</button></a>
                        <a href="/products/new"><button class="button_update cart_button_2 ml-md-auto">continuer shopping</button></a>
                    </div>
                </div>
            </div>
            @if(count($products) > 0)
            <div class="row cart_extra">
                <!-- Cart Total -->
                <div class="col-lg-5 offset-lg-1">
                    <div class="cart_total">
                        <div class="cart_title">Totale</div>
                        <ul>
                            <li class="d-flex flex-row align-items-center justify-content-start">
                                <div class="cart_total_title">Totale brut</div>
                                <div class="cart_total_price ml-auto" id="total">{{ $total }}Dhs</div>
                            </li>
                            <li class="d-flex flex-row align-items-center justify-content-start">
                                <div class="cart_total_title">Livraison</div>
                                <div class="cart_total_price ml-auto">30Dhs</div>
                            </li>
                            <li class="d-flex flex-row align-items-center justify-content-start">
                                <div class="cart_total_title">Totale</div>
                                <div class="cart_total_price ml-auto" id="totalLivraison">{{ $total+30 }}Dhs</div>
                            </li>
                        </ul>
                        <a href="/checkout"><button class="cart_total_button">Commander</button></a>
                    </div>
                </div>
            </div>
            @endif
        </div>
    </div>

    <script>
        $('.qty-input').change(function(){
            updateValues($(this).data("id"),$(this).val());
        });
        $('.quantity_inc_button').click( function()
        {
            var id=$(this).data('id');
            var input = $('#quantity_input'+id);
            var originalVal = input.val();
            var endVal = parseFloat(originalVal) + 1;
            input.val(endVal);
            updateValues(id,endVal);
        });

        $('.quantity_dec_button').on('click', function()
        {
            var id=$(this).data('id');
            var input = $('#quantity_input'+id);
            var originalVal = input.val();
            if(originalVal > 0)
            {
                var endVal = parseFloat(originalVal) - 1;
                input.val(endVal);
                updateValues(id,endVal);
            }
        });
        function updateValues(id,value) {
            var token="{{ csrf_token()  }}";
            $.ajax({
                url: '/updateBasket',
                type:'post',
                data:{id:id,value:value,_token:token},
                async:false,
                dataType:'json',
                success:function (data) {
                    $('#product-total'+id).html(data.totalProduct);
                    $('#total').html(data.total);
                    $('#totalLivraison').html(parseFloat(data.total)+30);
                }
                }
            )
        }
    </script>
@endsection