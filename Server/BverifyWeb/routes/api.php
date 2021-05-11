<?php

use App\Http\Controllers\ReactNativeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// declaration in one line
// Route::resource('data', 'ReactNativeController@index');


// Route::resource('data', 'CrudController');


// ===================================================================================
// Crud operations for DegreeVerifies Table
// ===================================================================================



Route::get('/data', 'ReactNativeController@index');
Route::put('data/{id}/update', 'ReactNativeController@update');
Route::delete('data/{id}', 'ReactNativeController@destroy');
Route::post('create', 'ReactNativeController@store');



// ===================================================================================
// Crud operations for Students Table
// ===================================================================================

Route::get('/students/data', 'ReactNativeController@students_list');
Route::put('/students/data/{id}/update', 'ReactNativeController@students_update');
Route::delete('/students/data/{id}', 'ReactNativeController@students_delete');
Route::get('/students/msc/data', 'ReactNativeController@msc');
Route::get('/students/phd/data', 'ReactNativeController@phd');
Route::get('/students/bs/data', 'ReactNativeController@bs');
Route::get('/students/ms/data', 'ReactNativeController@ms');
Route::get('/students/male/data', 'ReactNativeController@male_students');
Route::get('/students/female/data', 'ReactNativeController@female_students');


// ===================================================================================
//  operations for feeverify Table
// ===================================================================================

Route::get('fee/students/data', 'ReactNativeController@fee_students_list');
Route::put('fee/data/{id}/update', 'ReactNativeController@fee_update');
Route::delete('fee/delete/{id}', 'ReactNativeController@fee_delete');




// ===================================================================================
//  operations for Scanner
// ===================================================================================


Route::get('scanned/data/{reg_no}', 'ReactNativeController@scan_fetch');
Route::get('degree/scanned/data/{reg_no}', 'ReactNativeController@scan_fetch_degree');


// ===================================================================================
//  operations for Charts
// ===================================================================================

Route::get('linechart', 'ReactNativeController@LineChart');
Route::get('ProgramePieChart', 'ReactNativeController@Programe_Pie_Chart');
Route::get('GenderPieChart', 'ReactNativeController@gender_pie_chart');
Route::get('VerificationPieChart', 'ReactNativeController@verify_pie_chart');
Route::get('SemesterPieChart', 'ReactNativeController@SemesterStudents_pieChart');
Route::get('DegreePieChart', 'ReactNativeController@degree_verify_pieChart');
Route::get('graduatedLineChart', 'ReactNativeController@graduated_students_per_year');

// ===================================================================================
//  operations for Charts
// ===================================================================================




// ===================================================================================
//  Authentication
// ===================================================================================


Route::post('login', 'ReactNativeController@login');


// ===================================================================================
//  Authentication
// ===================================================================================


// ===================================================================================
//  Settings operations Registration
// ===================================================================================

Route::post('register_admin', 'ReactNativeController@admin_register');
Route::post('register_role', 'ReactNativeController@role_register');
Route::get('AccountList', 'ReactNativeController@Account_List');
Route::delete('administration/{id}', 'ReactNativeController@Administration_Delete');
Route::put('administrationRoles/{id}', 'ReactNativeController@admin_change_roles');
Route::put('passwordChangeRole/{id}', 'ReactNativeController@password_change_user');



// ===================================================================================
//  Settings operations Registration
// ===================================================================================


// ===================================================================================
//  Ocr search
// ===================================================================================


Route::get('ocrStudents/{reg_no}', 'ReactNativeController@ocr_fetch');
