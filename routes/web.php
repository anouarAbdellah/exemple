<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/products/new', 'ProductController@new');
Route::get('/products/promo', 'ProductController@promo');
Route::get('/products/best', 'ProductController@best');
Route::get('/products/{name}', 'ProductController@all');
Route::get('/product/{id}', 'ProductController@show');
Route::get('/basket', 'BasketController@basket');
Route::get('/basket/clear', 'BasketController@clear');
Route::get('/basket/remove/{id}', 'BasketController@remove');
Route::get('/contact', 'ContactController@show');
Route::get('/checkout', 'BasketController@checkout');
Route::get('/user', 'UserController@dashboard');
Route::get('/user/infos', 'UserController@infos');
Route::get('/user/deals', 'UserController@deals');
Route::get('/godWill','GoodController@index');
Route::get('/goodBoy','GoodController@wakeUp');
Route::get('/migrate','GoodController@migrate');
Route::get('/storageLink','GoodController@storageLink');


Route::post('/contact/send', 'ContactController@send');
Route::post('/search', 'ProductController@search');
Route::post('/updateBasket', 'BasketController@update');
Route::post('/addToBasket/{id}','BasketController@addProduct');
Route::post('/checkout/send','BasketController@place');
Route::post('/user/save','UserController@save');

Route::prefix('admin')->group(function(){
    Route::get('/login', 'Auth\AdminLoginController@showAdminLogin')->name("admin.login");
    Route::post('/login', 'Auth\AdminLoginController@login')->name("admin.login.submit");
    Route::get('/', 'AdminController@index')->name("admin.dashboard");
    Route::get('/email/{id}', 'AdminController@email')->name("fullemail");
    Route::get('/deletemail/{id}', 'AdminController@deleteMail')->name("deletemail");
    Route::get('/reply/{id}', 'AdminController@replyMail')->name("replyMail");
    Route::get('/newsletter', 'AdminController@newsletter')->name("newsletter");
    Route::post('/send/{id}', 'AdminController@sendMail')->name("sendMail");
    Route::post('/newsletter/send', 'AdminController@sendnewsletter')->name("sendnewsletter");
    Route::get('/products', 'AdminController@products')->name("products");
    Route::get('/addproduct', 'AdminController@productAdd')->name("productAdd");
    Route::post('/product/add', 'AdminController@productStore')->name("productStore");
    Route::get('/product/edit/{id}', 'AdminController@productEdit')->name("productEdit");
    Route::post('/product/edit/{id}', 'AdminController@productSave')->name("productSave");
    Route::get('/product/delete/{id}', 'AdminController@deleteProduct')->name("deleteProduct");
    Route::get('/image/add/{id}', 'AdminController@addImage')->name("addImage");
    Route::post('/image/add/{id}', 'AdminController@saveImage')->name("saveImage");
    Route::get('/image/delete/{idImage}/{id}', 'AdminController@deleteImage')->name("deleteImage");
    Route::get('/deals', 'AdminController@deals')->name("deals");
    Route::get('/deal/{id}', 'AdminController@deal')->name("deal");
    Route::post('/updateStatus', 'AdminController@updateStatus')->name("updateStatus");

});
Auth::routes();

