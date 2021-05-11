<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DegreeVerify extends Model
{
    protected $fillable = [
        'user_image',
        'registration_num',
        'name',
        'father_name',
        'admission_date',
        'graduation_date',
        'email_address',
        'cnic',
        'passport_num',
        'status',
    ];

}
