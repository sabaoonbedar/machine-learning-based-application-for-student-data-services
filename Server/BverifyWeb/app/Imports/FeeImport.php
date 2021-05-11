<?php

namespace App\Imports;


use App\FeeVerify;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Hash;
class FeeImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new FeeVerify([

            'registration_num' => $row['registration_num'],
             'name'  => $row['name'],
             'father_name' => $row['father_name'],
             'semester' => $row['semester'],
             'balance' => $row['balance'],
             'status'   => $row['status'],




            // 'name'     => $row['name'],
            // 'email'    => $row['email'],
            // 'password' => Hash::make($row['password']),
        ]);
    }
}
