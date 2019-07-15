<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Value extends Model
{
    protected $fillable=['caracteristique_id','value'];
    function caracteristique(){
        return $this->belongsTo('App\Caracteristique');
    }
}
