<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Caracteristique extends Model
{
    protected $fillable=['product_id','name'];
    function values(){
        return $this->hasMany('App\Value');
    }
}
