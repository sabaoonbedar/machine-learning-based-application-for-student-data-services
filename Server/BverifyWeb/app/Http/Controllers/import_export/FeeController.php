<?php

namespace App\Http\Controllers;

use App\FeeVerify;
use Illuminate\Http\Request;

use App\Exports\FeeExport;
use App\Imports\FeeImport;

use Maatwebsite\Excel\Facades\Excel;

class FeeController extends Controller
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function importExportView()
    {
       return view('excel_imports.fee_excel');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function export()
    {
        return Excel::download(new FeeExport, 'Fees_Students_List.xlsx');
    }

    /**
    * @return \Illuminate\Support\Collection
    */

public function index(){
//for showing the data you imported to be displayed.
$data=Feeverify::orderBy('created_at','DESC')->get();
return view('excel_imports.fee_excel',compact('data'));

}


    public function import(Request $request)
    {


        $request->validate([
            'file' => 'bail|required|mimes:csv,xlsx',
        ]);

        Excel::import(new FeeImport,request()->file('file'));

        return back()->with('message',"The Data of the Excel Sheet is successfully uploaded");
    }
}
