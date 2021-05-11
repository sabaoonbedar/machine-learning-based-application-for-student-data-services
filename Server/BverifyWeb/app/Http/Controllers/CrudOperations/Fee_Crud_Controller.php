<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\FeeVerify;
use App\Rules\StatusValidate;
use Dotenv\Result\Success;
//use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;



class Fee_Crud_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

//        $items = FeeVerify::All();
//        return response()->json($items);

        $items = FeeVerify::latest()->paginate(10);

         return view('Data_Lists.fee_list',compact('items'))
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

        FeeVerify::create($request->all());

       // return redirect()->route('FeeVerify.index')->with('success','Item created successfully.');

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
    public function show($flist)
    {
        $Decrypt_id = Crypt::decrypt($flist);

        $d_data = FeeVerify::findOrFail($Decrypt_id);

return view('Show_Data.fee_show', compact('d_data'));
    }

    /**
     * Show the form for editing the specified resource.ç
     *
     * @param  \App\FeeVerify $FeeVerify
     * @return \Illuminate\Http\Response
     */

     //Remember one point in order to know that how to pass the variable to the view you have to see the
    //route list. and the variable should be taken which is mentioned their.
    public function edit($flist)
    {

        $Decrypt_id = Crypt::decrypt($flist);

        $d_item = FeeVerify::findOrFail($Decrypt_id);

      return view('Edit_Sheets.fee_edit',compact('d_item'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  FeeVerify
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$flist)
    {


        $this->validate($request, array(
            'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
            'registration_num' => 'bail|required|min:2',
            'name' => 'bail|required|min:2',
            'father_name' => 'bail|required|min:2|',
            'semester' => 'bail|required',
            'balance' => 'bail|required',
            // 'status' => ['required',new StatusValidate],

            ));






$user  = FeeVerify::find($flist) ;


if($request->hasFile('user_image')){
    $image = $request->file('user_image');
    $filename = time() . '.' . $image->getClientOriginalExtension();
    Image::make($image)->resize(160, 160)->save('uploads//'.$filename);
    $user->user_image = $filename;


}

$user->registration_num = $request->input('registration_num');
$user->name = $request->input('name');
$user->father_name = $request->input('father_name');
$user->semester = $request->input('semester');
$user->balance = $request->input('balance');
$user->status = $request->input('status');

// $places = $request->places;

$user->save();

return redirect('flist')->with('message', 'The data has successfully updated');






    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(FeeVerify $flist)
    {



        $flist->delete();


     return redirect()->route('flist.index')
                                    ->with('message',$flist->name.' son of '.$flist->father_name.' record has been successfully deleted');


    }



}
