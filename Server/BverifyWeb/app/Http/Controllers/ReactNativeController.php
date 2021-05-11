<?php

namespace App\Http\Controllers;

use App\DegreeVerify;
use Illuminate\Http\Request;
use App\Rules\StatusValidate;
use App\Student;
use App\FeeVerify;
use App\User;
use App\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class ReactNativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=DegreeVerify::All();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required',
        //     'fathername' => 'required|email',
        //     'details' => 'required|alpha_num|',
        // ]);

        DegreeVerify::create($request->all());
        return response()->json([
        "code" => 200,
        "message" => "Data has successfully entered",
        ]);




    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $request->validate([



            'name' => 'bail|required|min:2',
            'father_name' => 'bail|required|min:2|',
            // 'registration_num' => 'bail|required',
            'email_address' => 'bail|required|email',
            'admission_date' => 'bail|required|date_format:Y-m-d',
            'graduation_date' => 'bail|required|date_format:Y-m-d',
            'cnic' => 'required|alpha_num',
            'passport_num' => 'bail|alpha_num',
            'status' => ['required',new StatusValidate],

        ]);

        $task = DegreeVerify::find($id);
        $task = $task->update($request->All());

        // DegreeVerify::where('id', $id)->update($request->all());

        return response()->json([
            "code" => 300,
            "message" => "Task Updated successfully",

        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $task = DegreeVerify::where('id',$id);
        $task = $task->delete();
        // $data=DegreeVerify::All();
        return response()->json([
        "code" => 100,
        "message" => "Data deleted successfully",
        ]);
    }




// ===================================================================================
// Crud operations for Students Table
// ===================================================================================

public function students_list()
{
    $data=Student::All();
    return response()->json($data);
}



public function students_delete($id)
    {

        $task = Student::where('id',$id);
        $task = $task->delete();
        // $data=Student::All();
        return response()->json([
        "code" => 100,
        "message" => "Data deleted successfully",
        ]);
    }






    public function students_update(Request $request, $id)
    {

        $request->validate([

            // 'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
            'name' => 'bail|required|min:2',
            'father_name' => 'bail|required|min:2|',
            // 'registration_num' => 'bail|required',
            'email_address' => 'bail|required|email',
            'admission_date' => 'bail|required|date_format:Y-m-d',
            'gender' => 'bail|required',
            'contact_no' => 'bail|required|digits_between:1,11',
            'programe' => 'bail|required',
            'batch' => 'bail|required',
            'board' => 'bail|required',
            'address' => 'bail|required',
            'ssc_total' => 'bail|required|max:4',
            'ssc_obtain' => 'bail|required|max:4',
            'hssc_total' => 'bail|required|max:4',
            'hssc_total' => 'bail|required|max:4',


        ]);

        $task = Student::find($id);
        $task = $task->update($request->All());

        // DegreeVerify::where('id', $id)->update($request->all());

        return response()->json([
            "code" => 300,
            "message" => "Task Updated successfully",

        ]);
    }





public function msc(){


    $data=Student::where('programe','msc')
    ->orderBy('name', 'asc')
    ->get();

    return response()->json($data);



}


public function phd(){


    $data=Student::where('programe','phd')
    ->orderBy('name', 'asc')
    ->get();

    return response()->json($data);



}



public function bs(){


    $data=Student::where('programe','bs')
    ->orderBy('name', 'asc')
    ->get();

    return response()->json($data);



}



public function ms(){


    $data=Student::where('programe','ms')
    ->orderBy('name', 'asc')
    ->get();

    return response()->json($data);



}








public function male_students(){


    $data=Student::where('gender','male')
    ->orderBy('gender', 'asc')
    ->get();

    return response()->json($data);



}




public function female_students(){


    $data=Student::where('gender','female')
    ->orderBy('gender', 'asc')
    ->get();

    return response()->json($data);



}











// ===================================================================================
// Crud operations for Students Table
// ===================================================================================




// ===================================================================================
//  operations for Feeverify Table
// ===================================================================================


public function fee_students_list()
{
    $data=FeeVerify::All();
    return response()->json($data);
}



public function fee_update(Request $request, $id)
    {

        $request->validate([

            // 'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
            'registration_num' => 'bail|required|min:2',
            'name' => 'bail|required|min:2',
            'father_name' => 'bail|required|min:2|',
            'semester' => 'bail|required',
            'balance' => 'bail|required',
            // 'status' => ['required',new StatusValidate],


        ]);

        $task = Feeverify::find($id);
        $task = $task->update($request->All());

        // DegreeVerify::where('id', $id)->update($request->all());

        return response()->json([
            "code" => 300,
            "message" => "Task Updated successfully",

        ]);
    }




    public function fee_delete($id)
    {

        $task = FeeVerify::where('id',$id);
        $task = $task->delete();
        // $data=Student::All();
        return response()->json([
        "code" => 100,
        "message" => "Data deleted successfully",
        ]);
    }





// ===================================================================================
//  operations for Feeverify Table
// ===================================================================================




// ===================================================================================
//  operations for Scanner
// ===================================================================================




public function scan_fetch($reg_no){


    $data=FeeVerify::where('registration_num',$reg_no)
    ->orderBy('name', 'asc')
    ->get();

    return response()->json($data);



}



public function scan_fetch_degree($reg_no){


    $data=DegreeVerify::where('registration_num',$reg_no)
    ->orderBy('name', 'asc')
    ->get();

    return response()->json($data);



}



// ===================================================================================
//  operations for Graphs
// ===================================================================================


public function LineChart(){

// ==========this is for the graph of line chart which displays the values of students admission per year===============>

$Rstudents = DB::table('students')
->select(
    DB::raw("year(admission_date) as year"),
    DB::raw("Count(*) as students"))

->orderBy("admission_date")
->groupBy(DB::raw("year(admission_date)"))
->get();




return response()->json($Rstudents);
//========================================================ends==============================>


}


public function Programe_Pie_Chart(){



//====================== Piechart for the ms bsc msc etc====================================>
$programe_students = DB::table('students')
        ->select(
            DB::raw("programe as programe"),
            DB::raw("count(programe) as total_students")
            )


        ->orderBy("programe")
        ->groupBy(DB::raw("programe"))
        ->get();

        return response()->json($programe_students);

//========================================================ends==============================>






}


public function gender_pie_chart(){


// ============piechart for the male and females==========================>

$gender_data = DB::table('students')
        ->select(
    DB::raw('gender as gender'),
     DB::raw('count(*) as number'))
         ->orderby('gender','desc')
         ->groupBy('gender')
          ->get();



          return response()->json($gender_data);




//========================================================ends==============================>

        }



        public function verify_pie_chart(){


            // ============piechart for the male and females==========================>

            $status_students = DB::table('fee_verifies')
            ->select(
                DB::raw("status as status"),
                DB::raw("count(semester) as total_students")
                )


            ->orderBy("status")
            ->groupBy(DB::raw("status"))
            ->get();


                      return response()->json($status_students);




            //========================================================ends==============================>

                    }




                    public function SemesterStudents_pieChart(){

                        // ==========this is for the graph of bar chart which displays the values of semester based students per year===============>

                        $Pstudents = DB::table('students')
                        ->select(
                            DB::raw("semester as semester"),
                            DB::raw("Count(programe) as students"))

                        ->orderBy("admission_date")
                        ->groupBy(DB::raw("semester"))
                        ->get();




                        return response()->json($Pstudents);
                        //========================================================ends==============================>


                        }






                        public function degree_verify_pieChart(){

                            // ==========this is for the graph of line chart which displays the values of students admission per year===============>

                            $Pstudents = DB::table('degree_verifies')
                            ->select(
                                DB::raw("status as status"),
                                DB::raw("count(*) as number"))

                            ->orderBy("status")
                            ->groupBy(DB::raw("status"))
                            ->get();




                            return response()->json($Pstudents);
                            //========================================================ends==============================>


                            }


                            public function graduated_students_per_year(){

                                // ==========this is for the graph of line chart which displays the values of students admission per year===============>

                                $Pstudents = DB::table('degree_verifies')
                                ->select(
                                    DB::raw("year(graduation_date) as year"),
                                    DB::raw("count(*) as number"))

                                ->orderBy("graduation_date")
                                ->groupBy(DB::raw("year(graduation_date)"))
                                ->get();




                                return response()->json($Pstudents);
                                //========================================================ends==============================>


                                }

// ===================================================================================
//  operations for Scanner
// ===================================================================================



// ===================================================================================
//  operations for Authentication
// ===================================================================================

public function login(Request $request){

    $LoginDetailsWithEmail = $request->only('email','password');

    $LoginDetailsWithUsername = $request->only('name','password');

    $name=User::where('name',$request->name)->get();

//    $email_name= User::where('email',$request->email) ->get();


// $email_name = DB::table('users')
// ->join('roles', function ($join) {
//     $join->on('users.id', '=', 'roles.users_id');

// })
// ->get();

$email_name= DB::table('users')
->join('roles', 'users.id', '=', 'roles.users_id')
->where('email',$request->email)
->get();



   if(Auth::attempt($LoginDetailsWithEmail)){

       return response()->json(['message'=>'Authentication Successful','code'=>"300",'information'=>$email_name]);

   }else if(Auth::attempt($LoginDetailsWithUsername)){

       return response()->json(['message'=>'Authentication Successful','code'=>"300",'information'=>$name]);

   }

   else{

       return response()->json(['message'=>'Authentication Failed','code'=>"401"]);

   }



   }






// ===================================================================================
//  operations for Authentication
// ===================================================================================

//------------------------------------------------------------------------------------

// ===================================================================================
//  Admin Account Registration
// ===================================================================================



public function admin_register(Request $request){

    $request->validate([

        'name' => 'bail|required|min:2',
        'email' => 'required | string | email | max:255 | unique:users',
        'password' => 'required | string | min:8',
    ]);

//note you can do it through transactions as well.

    $usertable= new User; // object created from User Model class

    $rolesTable = new Role; // object created from Role Model class

//insertion in one table
$usertable->name = $request['name'];
$usertable->email = $request['email'];
$usertable->password = Hash::make($request['password']);
$usertable->save();


//now insertion in another table
$rolesTable->roles = $request['roles'];
$rolesTable->users_id = $usertable->id;   //previous key which is created
$rolesTable->created_by = $request['created_by'];

$rolesTable->save();




    // User::create([
    //     'name' => $request['name'],
    //     'email' => $request['email'],
    //     'password' => Hash::make($request['password']),
    // ]);



//   User::create($request->all());

  return response()->json(['message'=>'Registration Successful','code'=>"300"]);

}





public function role_register(Request $request){

    $request->validate([

        'name' => 'bail|required|min:2',
        'email' => 'required | string | email | max:255 | unique:users',
        'password' => 'required | string | min:8',
        'roles' =>'required',
    ]);

//note you can do it through transactions as well.

    $usertable= new User; // object created from User Model class

    $rolesTable = new Role; // object created from Role Model class

//insertion in one table
$usertable->name = $request['name'];
$usertable->email = $request['email'];
$usertable->password = Hash::make($request['password']);
$usertable->save();


//now insertion in another table
$rolesTable->roles = $request['roles'];
$rolesTable->users_id = $usertable->id;   //previous key which is created
$rolesTable->created_by = $request['created_by'];

$rolesTable->save();




    // User::create([
    //     'name' => $request['name'],
    //     'email' => $request['email'],
    //     'password' => Hash::make($request['password']),
    // ]);



//   User::create($request->all());

  return response()->json(['message'=>'Registration Successful','code'=>"300"]);

}



public function Account_List(){

$Accounts = DB::table('users')
->join('roles', function ($join) {
    $join->on('users.id', '=', 'roles.users_id');

})
->get();



return response()->json($Accounts);






}


public function Administration_Delete($id)
    {

        $task = User::where('id',$id);
        $task = $task->delete();
        // $data=DegreeVerify::All();
        return response()->json([
        "code" => 300,
        "message" => "Data deleted successfully",
        ]);
    }




    public function admin_change_roles(Request $request, $id)
    {



        $task = Role::find($id);
        $task = $task->update($request->All());

        // DegreeVerify::where('id', $id)->update($request->all());

        return response()->json([
            "code" => 300,
            "message" => "Task Updated successfully",

        ]);
    }



    public function password_change_user(Request $request, $id)
    {


        $request->validate([

            'password' => 'required | string | min:8',
        ]);




        $users = User::find($id);

        $users->password = Hash::make($request['password']);
        $users->save();

        // DegreeVerify::where('id', $id)->update($request->all());

        return response()->json([
            "code" => 300,
            "message" => "Password has successfully changed",

        ]);
    }

// ===================================================================================
//  settings operations
// ===================================================================================


// ===================================================================================
//  OCR search
// ===================================================================================


    public function ocr_fetch($reg_no){


        $data=Student::where('registration_num',$reg_no)
        ->orderBy('name', 'asc')
        ->get();

        return response()->json($data);



    }







//end of class
}










