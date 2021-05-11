<?php

use Illuminate\Routing\RouteUrlGenerator;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use League\CommonMark\Util\UrlEncoder;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



//<=======================================Authentication Routes=======================================>
Auth::routes();

//<=======================================end of authentication routes=======================================>

Route::group(['middleware' => 'auth'], function () {


//<=======================================Different Views routes=======================================>

Route::get('/','ViewController@home_view')->name('homepage');

//<=======================================end different view routes=======================================>




//<=======================================Degree import export routes=======================================>


Route::get('degree', 'DegreeController@importExportView')->name('degree_import');
Route::get('degree_export', 'DegreeController@export')->name('DegreeExport')->middleware('auth');
Route::post('degree_import', 'DegreeController@import')->name('DegreeImport')->middleware('auth');

//<=======================================degree import export routes end=======================================>



//<=======================================Fee import export routes=======================================>

Route::get('fee', 'FeeController@importExportView')->name('fee_import');
Route::get('fee_export', 'FeeController@export')->name('FeeExport');
Route::post('fee_import', 'FeeController@import')->name('FeeImport');

//<=======================================fee import export routes end=======================================>



//<=======================================students import export routes=======================================>

Route::get('students', 'StudentsController@importExportView')->name('students_import');
Route::get('students_export', 'StudentsController@export')->name('StudentExport');
Route::post('students_import', 'StudentsController@import')->name('StudentImport');


//<=======================================student import export routes end=======================================>



// =================Routes for crud operations==========================
Route::resource('dlist', 'Degree_Crud_Controller');
Route::resource('slist', 'Students_Crud_Controller');
Route::resource('flist', 'Fee_Crud_Controller');

//============================end crud ==================================


//============================Routes for charts ==================================

Route::get('reports','ChartsController@charts')->name('reports');


//============================end charts ==================================

//============================Routes for registerpage ==================================

Route::get('MScdata','ViewController@msc')->name('msc_list');
Route::get('BSdata','ViewController@bs')->name('bs_list');
Route::get('PHDdata','ViewController@phd')->name('phd_list');
Route::get('MSdata','ViewController@Ms')->name('ms_list');


//============================end charts ==================================


});



//<=======================================Practice Routes=======================================>



Route::get('/model','ViewController@wizard_form')->name('model');

// Route::get('/modeldata', function () {

//     return view('Show_Data.model');
// });





// Route::get('/loginform', function () {
//     return view('login_form');
// });
// Route::get('/home', 'HomeController@index')->name('home');




Route::get('barchart','ViewController@productsListing');




//<=======================================end practice Routes=======================================>





Route::get('store_image', 'StoreImageController@index')->name('store_image');

Route::post('store_image/insert_image', 'StoreImageController@insert_image');

Route::get('store_image/fetch_image/{id}', 'StoreImageController@fetch_image');
