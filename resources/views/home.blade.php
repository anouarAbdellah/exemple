@extends('layouts.layout')
@section('links')
    <link href="{{ asset('css/main_styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/responsive.css') }}" rel="stylesheet">
    <title>Hamza Mall</title>
@endsection
@section('content')

    <!-- Home -->

    <div class="home">

        <!-- Home Slider -->


        <section class="slider-section">

            <div class="swiper-container slideshow">

                <div class="swiper-wrapper">

                    <div class="swiper-slide slide">
                        <div class="slide-image" style="background-image: url(/storage/images/fitness.jpg)"></div>
                        <span class="slide-title">Fitness</span>
                    </div>

                    <div class="swiper-slide slide">
                        <div class="slide-image" style="background-image: url(/storage/images/background2.jpg)"></div>
                        <span class="slide-title">New collections</span>
                    </div>

                    <div class="swiper-slide slide">
                        <div class="slide-image" style="background-image: url(/storage/images/maison_et_cuisine.jpg)"></div>
                        <span class="slide-title">kitchen</span>
                    </div>

                    <!--         <div class="swiper-slide slide">
                        <div class="slide-imageswiper-lazy" data-background="https://images.unsplash.com/photo-1538083024336-555cf8943ddc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b476a51b19889e13182c0e4827af18&auto=format&fit=crop&w=1950&q=80">
                        </div>
                        </div>
                        <span class="slide-title">Exotic places</span>
                      </div>

                      <div class="swiper-slide slide">
                        <div class="slide-image swiper-lazy" data-background="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e07d2457879a4e15577ec75a31023e47&auto=format&fit=crop&w=2134&q=80">
                        </div>
                        <span class="slide-title">Meet ocean</span>
                      </div>

                      <div class="swiper-slide slide">
                        <div class="slide-image swiper-lazy" data-background="https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267bba9a4e280ec64388fe8fb01e9d1b&auto=format&fit=crop&w=1950&q=80">
                        </div>
                        <span class="slide-title">Around the world</span>
                      </div> -->

                </div>

                <div class="slideshow-pagination"></div>

                <div class="slideshow-navigation">
                    <div class="slideshow-navigation-button prev"><span class="fas fa-chevron-left"></span></div>
                    <div class="slideshow-navigation-button next"><span class="fas fa-chevron-right"></span></div>
                </div>

            </div>

        </section>
    </div>

    <!-- Promo -->

    <div class="promo">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section_title_container text-center">
                        <div class="section_subtitle">seulement le meilleur</div>
                        <div class="section_title">promo prix</div>
                    </div>
                </div>
            </div>
            <div class="row promo_container">

                <!-- Promo Item -->
                <div class="col-lg-4 promo_col">
                    <div class="promo_item">
                        <div class="promo_image">
                            <img src="/storage/images/promo_1.jpg" alt="">
                            <div class="promo_content promo_content_1">
                                <div class="promo_title">Nos promotions</div>
                            </div>
                        </div>
                        <div class="promo_link"><a href="/products/promo">Decouvrir</a></div>
                    </div>
                </div>

                <!-- Promo Item -->
                <div class="col-lg-4 promo_col">
                    <div class="promo_item">
                        <div class="promo_image">
                            <img src="/storage/images/promo_2.jpg" alt="">
                            <div class="promo_content promo_content_2">
                                <div class="promo_title">Nos nouveauté</div>
                            </div>
                        </div>
                        <div class="promo_link"><a href="/products/new">Découvrir</a></div>
                    </div>
                </div>

                <!-- Promo Item -->
                <div class="col-lg-4 promo_col">
                    <div class="promo_item">
                        <div class="promo_image">
                            <img src="/storage/images/promo_3.jpg" alt="">
                            <div class="promo_content promo_content_3">
                                <div class="promo_title">best sales</div>
                            </div>
                        </div>
                        <div class="promo_link"><a href="/products/best">Découvrir</a></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- New Arrivals -->

    <div class="arrivals">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section_title_container text-center">
                        <div class="section_subtitle">seulement le meilleur</div>
                        <div class="section_title">nouveaux produits</div>
                    </div>
                </div>
            </div>
            <div class="row products_container">

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
                                            <span style="font-size: 13px;text-decoration: line-through">{{ $product->old_price }}Dhs</span>
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

    <!-- Extra -->

    <div class="extra clearfix">
        <div class="extra_promo extra_promo_1">
            <div class="extra_promo_image" style="background-image:url(/storage/images/electronique.jpg)"></div>
            <div class="extra_1_content d-flex flex-column align-items-center justify-content-center text-center">
                <div class="extra_1_price">-30%</div>
                <div class="extra_1_title">sur les produits electroniques</div>
                <div class="extra_1_text">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
                <div class="button extra_1_button"><a href="checkout.html">check out</a></div>
            </div>
        </div>
        <div class="extra_promo extra_promo_2">
            <div class="extra_promo_image" style="background-image:url(/storage/images/kitchen2.jpg)"></div>
            <div class="extra_2_content d-flex flex-column align-items-center justify-content-center text-center">
                <div class="extra_2_title">
                    <div class="extra_2_center">&</div>
                    <div class="extra_2_top">Maison</div>
                    <div class="extra_2_bottom">Cuisine</div>
                </div>
                <div class="extra_2_text">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
                <div class="button extra_2_button"><a href="checkout.html">check out</a></div>
            </div>
        </div>
    </div>

    <!-- Gallery -->

    <div class="gallery">
        <div class="gallery_image" style="background-image:url(/storage/images/background6.jpg)"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="gallery_title text-center">
                        <ul>
                            <li><a href="#">#HamzaMall</a></li>
                            <li><a href="#">#HamzaMallinstagram</a></li>
                            <li><a href="#">#Chanaa</a></li>
                        </ul>
                    </div>
                    <div class="gallery_text text-center">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
                </div>
            </div>
        </div>
        <div class="gallery_slider_container">

            <!-- Gallery Slider -->
            <div class="owl-carousel owl-theme gallery_slider">

                <!-- Gallery Item -->
                <div class="owl-item gallery_item">
                    <a class="colorbox" href="/storage/images/gallery_1.jpg">
                        <img src="/storage/images/gallery_1.jpg" alt="">
                    </a>
                </div>

                <!-- Gallery Item -->
                <div class="owl-item gallery_item">
                    <a class="colorbox" href="/storage/images/gallery_2.jpg">
                        <img src="/storage/images/gallery_2.jpg" alt="">
                    </a>
                </div>

                <!-- Gallery Item -->
                <div class="owl-item gallery_item">
                    <a class="colorbox" href="/storage/images/gallery_3.jpg">
                        <img src="/storage/images/gallery_3.jpg" alt="">
                    </a>
                </div>

                <!-- Gallery Item -->
                <div class="owl-item gallery_item">
                    <a class="colorbox" href="/storage/images/gallery_4.jpg">
                        <img src="/storage/images/gallery_4.jpg" alt="">
                    </a>
                </div>

                <!-- Gallery Item -->
                <div class="owl-item gallery_item">
                    <a class="colorbox" href="/storage/images/gallery_5.jpg">
                        <img src="/storage/images/gallery_5.jpg" alt="">
                    </a>
                </div>

                <!-- Gallery Item -->
                <div class="owl-item gallery_item">
                    <a class="colorbox" href="/storage/images/gallery_6.jpg">
                        <img src="/storage/images/gallery_6.jpg" alt="">
                    </a>
                </div>

            </div>
        </div>
    </div>




    <script>
        // The Slideshow class.
        class Slideshow {
            constructor(el) {

                this.DOM = {el: el};

                this.config = {
                    slideshow: {
                        delay: 3000,
                        pagination: {
                            duration: 3,
                        }
                    }
                };

                // Set the slideshow
                this.init();

            }
            init() {

                var self = this;

                // Charmed title
                this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
                this.DOM.slideTitle.forEach((slideTitle) => {
                    charming(slideTitle);
                });

                // Set the slider
                this.slideshow = new Swiper (this.DOM.el, {

                    loop: true,
                    autoplay: {
                        delay: this.config.slideshow.delay,
                        disableOnInteraction: false,
                    },
                    speed: 500,
                    preloadImages: true,
                    updateOnImagesReady: true,

                    // lazy: true,
                    // preloadImages: false,

                    pagination: {
                        el: '.slideshow-pagination',
                        clickable: true,
                        bulletClass: 'slideshow-pagination-item',
                        bulletActiveClass: 'active',
                        clickableClass: 'slideshow-pagination-clickable',
                        modifierClass: 'slideshow-pagination-',
                        renderBullet: function (index, className) {

                            var slideIndex = index,
                                number = (index <= 8) ? '0' + (slideIndex + 1) : (slideIndex + 1);

                            var paginationItem = '<span class="slideshow-pagination-item">';
                            paginationItem += '<span class="pagination-number">' + number + '</span>';
                            paginationItem = (index <= 8) ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>' : paginationItem;
                            paginationItem += '</span>';

                            return paginationItem;

                        },
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.slideshow-navigation-button.next',
                        prevEl: '.slideshow-navigation-button.prev',
                    },

                    // And if we need scrollbar
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },

                    on: {
                        init: function() {
                            self.animate('next');
                        },
                    }

                });

                // Init/Bind events.
                this.initEvents();

            }
            initEvents() {

                this.slideshow.on('paginationUpdate', (swiper, paginationEl) => this.animatePagination(swiper, paginationEl));
                //this.slideshow.on('paginationRender', (swiper, paginationEl) => this.animatePagination());

                this.slideshow.on('slideNextTransitionStart', () => this.animate('next'));

                this.slideshow.on('slidePrevTransitionStart', () => this.animate('prev'));

            }
            animate(direction = 'next') {

                // Get the active slide
                this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'),
                    this.DOM.activeSlideImg = this.DOM.activeSlide.querySelector('.slide-image'),
                    this.DOM.activeSlideTitle = this.DOM.activeSlide.querySelector('.slide-title'),
                    this.DOM.activeSlideTitleLetters = this.DOM.activeSlideTitle.querySelectorAll('span');

                // Reverse if prev
                this.DOM.activeSlideTitleLetters = direction === "next" ? this.DOM.activeSlideTitleLetters : [].slice.call(this.DOM.activeSlideTitleLetters).reverse();

                // Get old slide
                this.DOM.oldSlide = direction === "next" ? this.DOM.el.querySelector('.swiper-slide-prev') : this.DOM.el.querySelector('.swiper-slide-next');
                if (this.DOM.oldSlide) {
                    // Get parts
                    this.DOM.oldSlideTitle = this.DOM.oldSlide.querySelector('.slide-title'),
                        this.DOM.oldSlideTitleLetters = this.DOM.oldSlideTitle.querySelectorAll('span');
                    // Animate
                    this.DOM.oldSlideTitleLetters.forEach((letter,pos) => {
                        TweenMax.to(letter, .3, {
                            ease: Quart.easeIn,
                            delay: (this.DOM.oldSlideTitleLetters.length-pos-1)*.04,
                            y: '50%',
                            opacity: 0
                        });
                    });
                }

                // Animate title
                this.DOM.activeSlideTitleLetters.forEach((letter,pos) => {
                    TweenMax.to(letter, .6, {
                        ease: Back.easeOut,
                        delay: pos*.05,
                        startAt: {y: '50%', opacity: 0},
                        y: '0%',
                        opacity: 1
                    });
                });

                // Animate background
                TweenMax.to(this.DOM.activeSlideImg, 1.5, {
                    ease: Expo.easeOut,
                    startAt: {x: direction === 'next' ? 200 : -200},
                    x: 0,
                });

                //this.animatePagination()

            }
            animatePagination(swiper, paginationEl) {

                // Animate pagination
                this.DOM.paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
                this.DOM.activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
                this.DOM.activePaginationItemLoader = this.DOM.activePaginationItem.querySelector('.pagination-separator-loader');

                console.log(swiper.pagination);
                // console.log(swiper.activeIndex);

                // Reset and animate
                TweenMax.set(this.DOM.paginationItemsLoader, {scaleX: 0});
                TweenMax.to(this.DOM.activePaginationItemLoader, this.config.slideshow.pagination.duration, {
                    startAt: {scaleX: 0},
                    scaleX: 1,
                });


            }

        }

        const slideshow = new Slideshow(document.querySelector('.slideshow'));

    </script>
@endsection