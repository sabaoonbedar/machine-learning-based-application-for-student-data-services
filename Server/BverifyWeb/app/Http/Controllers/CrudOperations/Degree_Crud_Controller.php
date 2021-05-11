<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\DegreeVerify;
use App\Rules\StatusValidate;

//use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Intervention\Image\Facades\Image;

class Degree_Crud_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

//        $items = DegreeVerify::All();
//        return response()->json($items);

        $items = DegreeVerify::latest()->paginate(10);

         return view('Data_Lists.degree_list',compact('items'))
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

        DegreeVerify::create($request->all());

       // return redirect()->route('DegreeVerify.index')->with('success','Item created successfully.');

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
    public function show($dlist)
    {
        $Decrypt_id = Crypt::decrypt($dlist);

        $d_data = DegreeVerify::findOrFail($Decrypt_id);

return view('Show_Data.degree_show', compact('d_data'));
    }

    /**
     * Show the form for editing the specified resource.ç
     *
     * @param  \App\DegreeVerify $DegreeVerify
     * @return \Illuminate\Http\Response
     */

     //Remember one point in order to know that how to pass the variable to the view you have to see the
    //route list. and the variable should be taken which is mentioned their.
    public function edit($dlist)
    {

        $Decrypt_id = Crypt::decrypt($dlist);

        $d_item = DegreeVerify::findOrFail($Decrypt_id);

      return view('Edit_Sheets.degree_edit',compact('d_item'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  DegreeVerify
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$dlist)
    {
// return $request;


        $this->validate($request, array(
            // 'user_name' => 'required',
            'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
            'name' => 'bail|required|min:2',
            'father_name' => 'bail|required|min:2|',
            'registration_num' => 'bail|required',
            'email_address' => 'bail|required|email',
            'admission_date' => 'bail|required|date_format:Y-m-d',
            'graduation_date' => 'bail|required|date_format:Y-m-d',
            'cnic' => 'required|alpha_num',
            'passport_num' => 'bail|required|alpha_num',
            'status' => ['required',new StatusValidate],

            ));






$user  = DegreeVerify::find($dlist) ;


if($request->hasFile('user_image')){
    $image = $request->file('user_image');
    $filename = time() . '.' . $image->getClientOriginalExtension();
    Image::make($image)->resize(160, 160)->save('uploads//'.$filename);
    $user->user_image = $filename;


}

$user->registration_num = $request->input('registration_num');
$user->name = $request->input('name');
$user->father_name = $request->input('father_name');
$user->admission_date = $request->input('admission_date');
$user->graduation_date = $request->input('graduation_date');
$user->email_address = $request->input('email_address');
$user->cnic = $request->input('cnic');
$user->passport_num = $request->input('passport_num');
$user->status = $request->input('status');

// $places = $request->places;

$user->save();

return redirect('dlist')->with('message', 'The data has successfully updated');
}












    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(DegreeVerify $dlist)
    {



     $dlist->delete();

     return redirect()->route('dlist.index')
                           ->with('message',$dlist->name.' son of '.$dlist->father_name.' record has been successfully deleted');

    }



}
