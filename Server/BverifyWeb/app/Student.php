<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'user_image',
        'registration_num',
        'name',
        'father_name',
        'gender',
        'address',
        'contact_no',
        'programe',
        'semester',
        'admission_date',
        'batch',
        'email_address',
        'board',
        'ssc_total',
        'ssc_obtain',
        'hssc_total',
        'hssc_obtain',
    ];
}
