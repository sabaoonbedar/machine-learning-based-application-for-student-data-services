<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Student;
use App\Rules\StatusValidate;
use Dotenv\Result\Success;
//use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;



class Students_Crud_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

//        $items = Student::All();
//        return response()->json($items);

        $items = Student::latest()->paginate(10);

         return view('Data_Lists.student_list',compact('items'))
             ->with('i', (request()->input('page', 1) - 1) * 5);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

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
        //     'Name' => 'required',
        //     'Email' => 'required|email',
        //     'password' => 'required|alpha_num|',
        // ]);

        Student::create($request->all());

       // return redirect()->route('Student.index')->with('success','Item created successfully.');

return redirect()->back()->with('message', 'Your account has been successfully created');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //Remember one point in order to know that how to pass the variable to the view you have to see the
    //route list. and the variable should be taken which is mentioned their.
    public function show($slist)
    {
        $Decrypt_id = Crypt::decrypt($slist);

        $d_data = Student::findOrFail($Decrypt_id);

return view('Show_Data.student_show', compact('d_data'));
    }

    /**
     * Show the form for editing the specified resource.ç
     *
     * @param  \App\Student $Student
     * @return \Illuminate\Http\Response
     */

     //Remember one point in order to know that how to pass the variable to the view you have to see the
    //route list. and the variable should be taken which is mentioned their.
    public function edit($slist)
    {

        $Decrypt_id = Crypt::decrypt($slist);

        $d_item = Student::findOrFail($Decrypt_id);

      return view('Edit_Sheets.student_edit',compact('d_item'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  Student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slist)
    {
//rememeber for image uploading or updating it is important that the form enctype
//enctype="multipart/form-data"


        $this->validate($request, array(


            'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
            'name' => 'bail|required|min:2',
            'father_name' => 'bail|required|min:2|',
            'registration_num' => 'bail|required',
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


            ));




            $user  = Student::find($slist) ;


            if($request->hasFile('user_image')){
                $image = $request->file('user_image');
                $filename = time() . '.' . $image->getClientOriginalExtension();
                Image::make($image)->resize(160, 160)->save('uploads//'.$filename);
                $user->user_image = $filename;


            }

            $user->registration_num = $request->input('registration_num');
            $user->name = $request->input('name');
            $user->father_name = $request->input('father_name');
            $user->gender = $request->input('gender');
            $user->address = $request->input('address');
            $user->contact_no = $request->input('contact_no');
            $user->programe = $request->input('programe');
            $user->admission_date = $request->input('admission_date');
            $user->batch = $request->input('batch');
            $user->email_address = $request->input('email_address');
            $user->board = $request->input('board');
            $user->ssc_total = $request->input('ssc_total');
            $user->ssc_obtain = $request->input('ssc_obtain');
            $user->hssc_total = $request->input('hssc_total');
            $user->hssc_obtain = $request->input('hssc_obtain');


            // $places = $request->places;

            $user->save();

            return redirect('slist')->with('message', 'The data has successfully updated');










//         $request->validate([


//             // 'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
//             // 'name' => 'bail|required|min:2',
//             // 'father_name' => 'bail|required|min:2|',
//             // 'registration_num' => 'bail|required',
//             // 'email_address' => 'bail|required|email',
//             // 'admission_date' => 'bail|required|date_format:Y-m-d',
//             // 'gender' => 'bail|required',
//             // 'contact_no' => 'bail|required|digits_between:1,11',
//             // 'programe' => 'bail|required',
//             // 'batch' => 'bail|required',
//             // 'board' => 'bail|required',
//             // 'address' => 'bail|required',
//             // 'ssc_total' => 'bail|required|max:4',
//             // 'ssc_obtain' => 'bail|required|max:4',
//             // 'hssc_total' => 'bail|required|max:4',
//             // 'hssc_total' => 'bail|required|max:4',


// // for the purpose to understand
// //             'passport_num' => 'bail|required|alpha_num|unique:degree_verifies',

// //             'Email' => 'required|email',
// //             'password' => 'required|alpha_num|min:8|',
//         ]);





    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $slist)
    {



        $slist->delete();


     return redirect()->route('slist.index')
                                    ->with('message',$slist->name.' son of '.$slist->father_name.' record has been successfully deleted');


    }



}
