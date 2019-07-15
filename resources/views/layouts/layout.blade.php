
<!-- Designed and Developed by Anouar Abdellah  -->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Oswald:500" rel="stylesheet">
    <script>!function(e){"undefined"==typeof module?this.charming=e:module.exports=e}(function(e,n){"use strict";n=n||{};var t=n.tagName||"span",o=null!=n.classPrefix?n.classPrefix:"char",r=1,a=function(e){for(var n=e.parentNode,a=e.nodeValue,c=a.length,l=-1;++l<c;){var d=document.createElement(t);o&&(d.className=o+r,r++),d.appendChild(document.createTextNode(a[l])),n.insertBefore(d,e)}n.removeChild(e)};return function c(e){for(var n=[].slice.call(e.childNodes),t=n.length,o=-1;++o<t;)c(n[o]);e.nodeType===Node.TEXT_NODE&&a(e)}(e),e});
    </script>
    <meta name="description" content="Nous sommes la galerie d’achat en ligne N°1 au Maroc Grâce à notre site de vente en ligne accessible à tous et facile d’utilisation, retrouvez les meilleurs articles de puéricultures, également des jouets, une gamme de maquillage inédite au Maroc à des prix très compétitifs, un choix de plantes d’intérieur à offrir ou pour chez vous et enfin tout l'univers de la Mode : chaussures, vêtements et accessoires pour toute la famille… Vos commandes vous sont livrées dans les plus brefs délais partout au Maroc ! Pour plus de sécurité et d'efficacité, vous payez au moment de la livraison. En cas d’anomalie, vous disposez de sept (7) jours calendaires à compter du jour de la réception pour retourner votre produit.">
    <meta name="keywords" content="Vetement,e-commerce,store,prix,mode,collection">
    <meta name="author" content="Anouar Abdellah">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('links')
    <link rel="icon" href="/storage/images/short_logo.png" type="icon/png">
</head>
<body>

<div class="super_container">
<!-- Header -->

<header class="header">
    <div class="header_inner d-flex flex-row align-items-center justify-content-start">
        <div class="logo"><a href="/"><img src="/storage/images/short_logo.png" style="width: 40px;"> </a></div>
        <nav class="main_nav">
            <ul>
                <li><a href="/products/fitness">fitness</a></li>
                <li><a href="/products/vetement">vetements</a></li>
                <li><a href="/products/maison_et_cuisine">maison et cuisine</a></li>
                <li><a href="/products/electronique">electroniques</a></li>
                <li><a href="/products/beauté">beauté</a></li>
            </ul>
        </nav>
        <div class="header_content ml-auto">
            <div class="search header_search">
                {{ Form::open(['url'=>'/search']) }}
                    <input type="search" name="keyword" class="search_input" required="required">
                    <button type="submit" id="search_button" class="search_button"><img src="/storage/images/magnifying-glass.svg" alt=""></button>
                {{ Form::close() }}
            </div>
            <div class="shopping">
                <!-- Cart -->
                <a href="/basket">
                    <div class="cart">
                        <img src="/storage/images/shopping-bag.svg" alt="">
                        <div class="cart_num_container">
                            <div class="cart_num_inner">
                                <div class="cart_num">{{ count(\Illuminate\Support\Facades\Session::get('products')) }}</div>
                            </div>
                        </div>
                    </div>
                </a>
                @guest
                    <a href="/login">
                        <div class="avatar">
                            <img src="/storage/images/avatar.svg" alt="">
                        </div>
                    </a>
                @else
                    <a href="/user">
                        <div class="avatar">
                            <img src="/storage/images/avatar.svg" alt="">
                        </div>
                    </a>
                    <a href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();" style="font-size: 20px;color: #646464;">
                        <div class="avatar">
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>

            @endguest
                <!-- Avatar -->

            </div>
        </div>

        <div class="burger_container d-flex flex-column align-items-center justify-content-around menu_mm"><div></div><div></div><div></div></div>
    </div>
</header>

<!-- Menu -->

<div class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
    <div class="menu_close_container"><div class="menu_close"><div></div><div></div></div></div>
    <div class="logo menu_mm"><a href="#"><img style="width: 50%;" src="/storage/images/logo.png"> </a></div>
    <div class="search">
        {{ Form::open(['url'=>'/search']) }}
            <input type="search" name="keyword" class="search_input menu_mm" required="required">
            <button type="submit" id="search_button_menu" class="search_button menu_mm"><img class="menu_mm" src="/storage/images/magnifying-glass.svg" alt=""></button>
        {{ Form::close() }}
    </div>
    <nav class="menu_nav">
        <ul class="menu_mm">
            <li class="menu_mm"><a href="/">home</a></li>
            <li class="menu_mm"><a href="/products/vetement">vetements</a></li>
            <li class="menu_mm"><a href="/products/fitness">fitness</a></li>
            <li class="menu_mm"><a href="/products/maison_et_cuisine">maison et cuisine</a></li>
            <li class="menu_mm"><a href="/products/electronique">electroniques</a></li>
            <li class="menu_mm"><a href="/products/beauté">beauté</a></li>
            <li class="menu_mm"><a href="/contact">contactez-nous</a></li>
        </ul>
    </nav>
</div>
<!-- Designed and Developed by Anouar Abdellah  -->
@yield('content')

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="footer_logo"><a href="/"><img src="/storage/images/logo.png" style="width: 20%"> </a></div>
                    <nav class="footer_nav">
                        <ul>
                            <li><a href="/products/fitness">fitness</a></li>
                            <li><a href="/products/vetement">vetements</a></li>
                            <li><a href="/products/maison_et_cuisine">maison et cuisine</a></li>
                            <li><a href="/products/electronique">electroniques</a></li>
                            <li><a href="/products/beauté">beauté</a></li>
                            <li><a href="/contact">contactez-nous</a></li>
                        </ul>
                    </nav>
                    <div class="footer_social">
                        <ul>
                            <li><a href="https://api.whatsapp.com/send?phone=212707029003&text=&source=&data=" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/hamzamall.ma/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.facebook.com/hamzamall.ma/?modal=admin_todo_tour" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div class="copyright">
                        Designed by Anouar &copy;
                </div>
            </div>
        </div>
    </footer>
</div>


</body>
</html>