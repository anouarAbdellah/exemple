<!DOCTYPE html>
<!-- Designed and Developed by Anouar Abdellah  -->
<html >
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Hamza Mall</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link rel="icon" href="/storage/images/short_logo.png" type="icon/png">

    <!-- Styles -->
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>
<body>
<div class="mail-box">
    <aside class="sm-side leftPart">
        <div class="user-head">
            <a class="inbox-avatar" href="/admin">
                <img src="/storage/images/logo.png" class="nav-settings__member-photo"
                     alt="Strict voyages" width="70">
            </a>
            <div class="user-name">
                <h5><a href="#">{{ Auth::user()->name }}</a></h5>
                <span><a href="#">{{ Auth::user()->email }}</a></span>
            </div>
            <a class="mail-dropdown pull-right" href="javascript:;">
                <i class="fa fa-chevron-down"></i>
            </a>
        </div>
        <ul class="inbox-nav inbox-divider">
            <li id="inbox-li">
                <a href="/admin"><i class="fa fa-inbox"></i> Inbox {!!  \App\Mail::where('seen',0)->count() > 0 ? '<span class="label label-danger pull-right">'.\App\Mail::where('seen',0)->count().'</span>' : ''  !!}</a>

            </li>
            <li id="newsletter-li">
                <a href="/admin/newsletter"><i class="fa fa-envelope"></i> Newsletter</a>
            </li>
            <li id="products-li">
                <a href="/admin/products"><i class="fas fa-box"></i> Produits</a>
            </li>
            <li id="deals-li">
                <a href="/admin/deals"><i class="fa fa-calendar"></i> Commandes {!!  \App\Deal::where('status','nouveau')->count() > 0 ? '<span class="label label-danger pull-right">'.\App\Deal::where('status','nouveau')->count().'</span>' : ''  !!}</a>

            </li>
        </ul>

    </aside>
    <aside class="lg-side">
@yield('content')
    </aside>
</div>
<style>
    .leftPart{
        position: fixed;
    }
</style>
<script>
    var winh = $(window).height();
    $('.leftPart').height(winh);
</script>
</body>
</html>
