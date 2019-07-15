@extends('layouts.layout')
@section('links')

    <link href="{{ asset('css/contact.css') }}" rel="stylesheet">
    <link href="{{ asset('css/contact_responsive.css') }}" rel="stylesheet">
    <script src="{{ asset('js/contact_custom.js') }}"></script>
    <title>Contactez-nous</title>
@endsection

@section('content')

    <!-- Home -->

    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" data-image-src="/storage/images/contact.jpg" data-speed="0.8"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="home_container">
                        <div class="home_content">
                            <div class="home_title">Contactez-nous</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Contact Form -->

    <div class="contact">
        <div class="container">

            <div class="row">
                <div class="col">
                    @if(isset($success))
                        <div class="alert alert-success">
                            Votre message est bien reçu
                        </div>
                    @endif
                    <div class="review_form_container">
                        <div class="review_form_title">Contactez-nous</div>
                        <div class="review_form_content">
                            {{ Form::open(['url'=>'/contact/send']) }}
                                <div class="d-flex flex-md-row flex-column align-items-start justify-content-between">
                                    <input type="text"
                                           @if(\Illuminate\Support\Facades\Auth::check())
                                           value="{{ Auth::user()->name }}"
                                           @endif
                                           class="review_form_input" name="name" placeholder="Nom" required="required">
                                    <input type="email"
                                           @if(\Illuminate\Support\Facades\Auth::check())
                                           value="{{ Auth::user()->email }}"
                                           @endif
                                           class="review_form_input" name="email" placeholder="E-mail" required="required">
                                    <input type="text"
                                           @if(\Illuminate\Support\Facades\Auth::check())
                                           value="{{ Auth::user()->phone }}"
                                           @endif
                                           class="review_form_input" name="phone" placeholder="Telephone">
                                </div>
                                <input type="text" class="review_form_input" name="subject" style="width: 100%;margin-top: 27px;" placeholder="Sujet">
                                <textarea class="review_form_text" name="message" placeholder="Message"></textarea>
                                <button type="submit" class="review_form_button">send message</button>
                            {{ Form::close() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Text -->

    <div class="contact_text">
        <div class="container">
            <div class="row">

                <!-- Contact Info -->
                <div class="col-lg-5">

                    <div class="contact_info">
                        <div class="contact_title">Nos infos</div>
                        <div class="contact_info_content">
                            <ul>
                                <li>
                                    <div class="contact_info_icon"><img src="/storage/images/contact_info_1.png" alt=""></div>
                                    <div class="contact_info_text">Rosia Road, no67, Gibraltar UK</div>
                                </li>
                                <li>
                                    <div class="contact_info_icon"><img src="/storage/images/contact_info_2.png" alt=""></div>
                                    <div class="contact_info_text">hamzamall.shop@gmail.com</div>
                                </li>
                                <li>
                                    <div class="contact_info_icon"><img src="/storage/images/contact_info_3.png" alt=""></div>
                                    <div class="contact_info_text">+212 707-029003</div>
                                </li>
                            </ul>
                        </div>
                        <div class="contact_info_social">
                            <ul>
                                <li><a href="https://www.facebook.com/hamzamall.ma/?modal=admin_todo_tour" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/hamzamall.ma/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=212707029003&text=&source=&data=" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection