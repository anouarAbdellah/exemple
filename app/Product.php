<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable=['name','category','image','old_price','new_price',"description",'rating','new','stock'];

    function images(){
        return $this->hasMany('App\Image');
    }
    function caracteristiques(){
        return $this->hasMany('App\Caracteristique');
    }
    function deals(){
        return $this->belongsToMany('App\Deal','deal_product','product_id','deal_id')->withPivot(['qty','details']);
    }
}
