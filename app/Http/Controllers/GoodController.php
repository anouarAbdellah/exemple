<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class GoodController extends Controller
{
    function index(){
        Artisan::call('down');
    }
    function wakeUp(){
        Artisan::call('up');
    }
    function storageLink(){
        Artisan::call('storage:link');
    }
    function migrate(){
        Artisan::call('migrate');
    }

}
