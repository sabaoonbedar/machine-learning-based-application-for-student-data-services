<?php

namespace App\Http\Controllers;

use App\DegreeVerify;
use Illuminate\Http\Request;
use App\Exports\DegreeExport;
use App\Imports\DegreeImport;
use Maatwebsite\Excel\Facades\Excel;

class DegreeController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth');
    }


    /**
    * @return \Illuminate\Support\Collection
    */
    public function importExportView()
    {
       return view('excel_imports.degree_excel');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function export()
    {
        return Excel::download(new DegreeExport, 'Graduated_Students_List.xlsx');
    }


    public function index(){
        //for showing the data you imported to be displayed.
        $data=DegreeVerify::orderBy('created_at','DESC')->get();
        return view('excel_imports.degree_excel',compact('data'));

        }



    /**
    * @return \Illuminate\Support\Collection
    */
    public function import(Request $request)
    {

        $request->validate([
            'file' => 'bail|required|mimes:csv,xlsx',
        ]);

        Excel::import(new DegreeImport,request()->file('file'));

        return back()->with('message',"The Data of the Excel Sheet is successfully uploaded");
    }
}
