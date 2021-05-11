<?php

namespace App\Imports;


use App\Student;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Hash;
class StudentImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Student([

             'registration_num' => $row['registration_num'],
             'name'  => $row['name'],
             'father_name' => $row['father_name'],
             'gender' => $row['gender'],
             'address'  => $row['address'],
             'contact_no'  => $row['contact_no'],
             'programe'  => $row['programe'],
             'semester'  => $row['semester'],
             'admission_date'  => \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['admission_date']),
             'batch'  => $row['batch'],
             'email_address'  => $row['email_address'],
             'board'  => $row['board'],
             'ssc_total'  => $row['ssc_total'],
             'ssc_obtain'  => $row['ssc_obtain'],
             'hssc_total'  => $row['hssc_total'],
             'hssc_obtain'  => $row['hssc_obtain'],


        ]);
    }
}
