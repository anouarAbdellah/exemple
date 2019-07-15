<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $fillable=['name','email','phone','address','qty',"status"];

    function products(){
        return $this->belongsToMany(Product::class,'deal_product','deal_id','product_id')->withPivot(['qty','details']);
    }
}
