<?php

namespace App\Exports;

use App\FeeVerify;
use Maatwebsite\Excel\Concerns\FromCollection;

class FeeExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return FeeVerify::all();
    }
}
