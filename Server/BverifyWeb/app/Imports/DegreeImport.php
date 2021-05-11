<?php

namespace App\Imports;

use App\DegreeVerify;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Hash;

class DegreeImport implements ToModel, WithHeadingRow
{


    public function transformDate($value, $format = 'd-m-Y')
    {
        if (!strlen($value)) return null;

        try {
            return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value));
        } catch (\ErrorException $e) {
            return \Carbon\Carbon::createFromFormat($format, $value);
        }
    }


    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {


        return new DegreeVerify([

            'registration_num' => $row['registration_num'],
            'name'  => $row['name'],
            'father_name' => $row['father_name'],
            'admission_date' => \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['admission_date']),
            'graduation_date' => \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['graduation_date']),
            'email_address'  => $row['email_address'],
            'cnic' => $row['cnic'],
            'passport_num' => $row['passport_num'],
            'status'   => $row['status'],


            //   'admission_date' => $this->transformDate($row['admission_date']),
            //   'graduation_date' => $this->transformDate($row['graduation_date']),

            // 'name'     => $row['name'],
            // 'email'    => $row['email'],
            // 'password' => Hash::make($row['password']),
        ]);
    }
}
