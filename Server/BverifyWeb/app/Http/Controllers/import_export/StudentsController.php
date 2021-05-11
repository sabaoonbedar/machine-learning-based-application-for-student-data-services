<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Exports\StudentExport;
use App\Imports\StudentImport;
use App\Student;
use Maatwebsite\Excel\Facades\Excel;

class StudentsController extends Controller
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
       return view('excel_imports.student_excel');
    }

    public function index(){
        //for showing the data you imported to be displayed.
        $data=Student::orderBy('created_at','DESC')->get();
        return view('excel_imports.student_excel',compact('data'));

        }



    /**
    * @return \Illuminate\Support\Collection
    */
    public function export()
    {
        return Excel::download(new StudentExport, 'Students_List.xlsx');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function import(Request $request)
    {

        $request->validate([
            'file' => 'bail|required|mimes:csv,xlsx',
        ]);

        Excel::import(new StudentImport,request()->file('file'));

        return back()->with('message',"The Data of the Excel Sheet is successfully uploaded");
    }
}
