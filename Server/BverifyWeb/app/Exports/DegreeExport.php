<?php

namespace App\Exports;

use App\DegreeVerify;
use Maatwebsite\Excel\Concerns\FromCollection;

class DegreeExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return DegreeVerify::all();
    }
}
