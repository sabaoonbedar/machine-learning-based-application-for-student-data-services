<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Images;
use Illuminate\Support\Facades\Response;
use Intervention\Image\Facades\Image;

class StoreImageController extends Controller
{
    function index()
    {
     $data = Images::latest()->paginate(5);
     return view('store_image', compact('data'))
       ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    function insert_image(Request $request)
    {
        $this->validate($request, array(
            // 'user_name' => 'required',
            'user_image' => 'image|mimes:jpeg,png,jpg,svg|max:2048',
            ));

        $person  = new Images() ;
        $person->user_name = $request->user_name;

        if($request->hasFile('user_image')){
            $image = $request->file('user_image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            Image::make($image)->resize(160, 160)->save('uploads//'.$filename);
            $person->user_image = $filename;

        }else{

            return redirect()->back()->with('no file', 'upload image');
        };

        // $places = $request->places;
        $person->save();
     return redirect()->back()->with('success', 'Image store in database successfully');
    }



    function fetch_image($image_id)
    {
     $image = Images::findOrFail($image_id);

     $image_file = Image::make($image->user_image);

     $response = Response::make($image_file);

     $response->header('Content-Type', 'image/jpeg');

     return $response;
    }
}
