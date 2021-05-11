<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeeVerify extends Model
{
    protected $fillable = [
        'user_image',
        'registration_num',
        'name',
        'father_name',
        'semester',
        'balance',
        'status',
    ];
}
