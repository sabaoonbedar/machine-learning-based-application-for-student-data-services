<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ChartsController extends Controller
{


    public function charts()
    {


// ============this is used for the pie chart in order to know how many students are verified or not verified==========>

 $data = DB::table('degree_verifies')
           ->select(
            DB::raw('status as verify'),
            DB::raw('count(*) as number'))
            ->orderby('status','desc')
           ->groupBy('status')
           ->get();
        $result_verified[] = ['Verified', 'Number'];
        foreach($data as $key => $value)
        {
          $result_verified[++$key] = [$value->verify, $value->number];
        }

//========================================================ends==============================>



// ==========this is for the graph of line chart which displays the values of students admission per year===============>

 $Rstudents = DB::table('students')
        ->select(
            DB::raw("year(admission_date) as year"),
            DB::raw("Count(*) as total_students"))

        ->orderBy("admission_date")
        ->groupBy(DB::raw("year(admission_date)"))
        ->get();


$result_Students[] = ['Year','Students'];
foreach ($Rstudents as $key => $value) {
$result_Students[++$key] = [$value->year,$value->total_students];
}


//========================================================ends==============================>



// ============piechart for the male and females==========================>

$gender_data = DB::table('students')
        ->select(
    DB::raw('gender as gender'),
     DB::raw('count(*) as number'))
         ->orderby('gender','desc')
         ->groupBy('gender')
          ->get();

$result_gender[] = ['Gender', 'Num'];
foreach($gender_data as $key => $value)
{
$result_gender[++$key] = [$value->gender, $value->number];
}

//========================================================ends==============================>



//====================== Piechart for the ms bsc msc etc====================================>
$programe_students = DB::table('students')
        ->select(
            DB::raw("programe as programe"),
            DB::raw("count(programe) as total_students")
            )


        ->orderBy("programe")
        ->groupBy(DB::raw("programe"))
        ->get();


$result_programe[] = ['Year','Students'];
foreach ($programe_students as $key => $value) {
$result_programe[++$key] = [$value->programe,$value->total_students];
}
//========================================================ends==============================>



// ==========================Piechart for the fees status===================================>
$status_students = DB::table('fee_verifies')
        ->select(
            DB::raw("status as status"),
            DB::raw("count(semester) as total_students")
            )


        ->orderBy("status")
        ->groupBy(DB::raw("status"))
        ->get();


$result_status[] = ['Status','Students'];
foreach ($status_students as $key => $value) {
$result_status[++$key] = [$value->status,$value->total_students];
}
//========================================================ends==============================>




// ======================Piechart for the semester wise fees etc============================>
$status_students = DB::table('fee_verifies')
        ->select(
            DB::raw("semester as semester"),
            DB::raw("count(balance) as total_students")
            )


        ->orderBy("semester")
        ->groupBy(DB::raw("semester"))
        ->get();


$result_semester[] = ['Semester','Students'];
foreach ($status_students as $key => $value) {
$result_semester[++$key] = [$value->semester,$value->total_students];
}
//========================================================ends==============================>



//=================values are passed here to the view=======================================>

        return view('Reports')->with('verify_data', json_encode($result_verified))
        ->with('students_registered',json_encode($result_Students))
        ->with('gender_data',json_encode($result_gender))
        ->with('programe_data',json_encode($result_programe))
        ->with('status_data',json_encode($result_status))
        ->with('semester_data',json_encode($result_semester))

        ;
    }













}
