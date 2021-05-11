<?php

namespace App\Http\Controllers;

use App\DegreeVerify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ViewController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


public function home_view(){


    return view('Home');



}


public function wizard_form(){


return view('Show_Data.model');

}




public function productsListing() {
    $products       =       DegreeVerify::all();

    return view("barchart", compact("products"));
}

//======================= data fetching for views of BS MS MSC BSC
public function msc(){

    $items = DB::table('students')
    ->select(DB::raw('*,programe'))
    ->where('programe','msc')
    ->paginate(10);

    return view('Programe_lists.Msc_list',compact('items'))
        ->with('i', (request()->input('page', 1) - 1) * 5);


}

public function bs(){

    $items = DB::table('students')
    ->select(DB::raw('*,programe'))
    ->where('programe','bs')
    ->paginate(10);

    return view('Programe_lists.Bs_list',compact('items'))
        ->with('i', (request()->input('page', 1) - 1) * 5);


}



public function phd(){

    $items = DB::table('students')
    ->select(DB::raw('*,programe'))
    ->where('programe','phd')
    ->paginate(10);

    return view('Programe_lists.Phd_list',compact('items'))
        ->with('i', (request()->input('page', 1) - 1) * 5);


}



public function ms(){

    $items = DB::table('students')
    ->select(DB::raw('*,programe'))
    ->where('programe','MS')
    ->paginate(10);

    return view('Programe_lists.Ms_list',compact('items'))
        ->with('i', (request()->input('page', 1) - 1) * 5);


}



}
