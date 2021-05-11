<html>
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <style>
    .container_form {
        max-width: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }



      .btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}

#img-upload{
    width: 100%;
}


      </style>

      <meta charset="utf-8">
      <meta content="width=device-width, initial-scale=1.0" name="viewport">

      <title>Bverify</title>
      <meta content="Bverify" name="descriptison">
      <meta content="Bverify" name="keywords">

    {{-- for icons --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">



      <!-- Favicons -->
      <link href="/assets/img/favicon.png" rel="icon">
      <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">
      {{-- data for form --}}



    {{-- =========================================================================================== --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script>


    {{-- for icons  --}}

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <!------ Include the above in your HEAD tag ---------->

      <!-- Google Fonts -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />

      <!-- Vendor CSS Files -->

      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

      <!-- Template Main CSS File -->

      <!-- =======================================================
      * Template Name: Bverify by Sabaoon Bedar

      * Author: Sabaoon Bedar

      ======================================================== -->


<script>


    $(document).ready( function() {
    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {

		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;

		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }

		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }

		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		});
	});


    </script>









    </head>

<body>




    {{-- <div class="form-group">
        <label>Upload Image</label>
        <div class="input-group">

                <span class="btn btn-primary btn-file" >
     Browse…       <input type="file" id="imgInp">
                </span>

            <div>
            <input type="text" class="form-control" readonly >
            </div>
        </div>
        <div style="width:20%; height:20%;" class="shadow-lg ">

        <img id='img-upload'/>
    </div> --}}



    <form method="post" action="{{ url('store_image/insert_image') }}"  enctype="multipart/form-data">
        @csrf








  <br />
  <h3 align="center">Insert Image to Bverify</h3>
    <br />
    @if($errors->any())
    <div class="alert alert-danger">
           <ul>
           @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
           @endforeach
           </ul>
        </div>
    @endif

    @if(session()->has('success'))
     <div class="alert alert-success">
     {{ session()->get('success') }}
     </div>
    @endif
    <br />


<div style="position: relative; left:30%; border-width:2px">
    <div class="form-group" >
        <label>Upload Image</label>
        <div class="input-group">

                <span class="btn btn-primary btn-file"  >
     Browse…       <input type="file" id="imgInp" name="user_image" width="100%">


@error('imgInp')
 <div ></div>
    <div >{{ $message }}</div>
@enderror

    </span>

            <div>
            <input type="text" class="form-control" readonly >
            </div>
        </div>
        <div style="width:17%; padding: 20px; position: sticky " >

        <img id='img-upload' class="shadow-lg rounded-circle" style='position: relative; left:78%; bottom:69%'/>
    </div>

    </div>
</div>

    <Br>

        <input type="submit" name="store_image" class="btn btn-primary"  />
       </div>
       </form>

    {{-- <script>
        $(document).ready(function() {
            document.getElementById("jimage").onchange = function () {
                var reader = new FileReader();

                reader.onload = function (e) {
                    if (e.total > 250000) {
                        $('#imageerror').text('Image too large');
                        $jimage = $("#jimage");
                        $jimage.val("");
                        $jimage.wrap('<form>').closest('form').get(0).reset();
                        $jimage.unwrap();
                        $('#uploadedimage').removeAttr('src');
                        return;
                    }
                    $('#imageerror').text('');
                    document.getElementById("uploadedimage").src = e.target.result;
                };
                reader.readAsDataURL(this.files[0]);
            };
        });
    </script> --}}









          {{-- <p>
            <input type="hidden" name="MAX_UPLOAD_SIZE" value="250000">
            <span class="btn btn-primary btn-file" >
           Choose Image <input type="file" name="jimage" id="jimage">
            </span>


            <img id="uploadedimage" width="300px" class="rounded-circle" />
        </p>
        <p>
            <span id="imageerror" style="font-weight: bold; color: red"></span>
        </p> --}}














         {{-- <div class="form-group">
          <div class="row">
           <label class="col-md-4" align="right">Select Profile Image</label>
           <div class="col-md-8">
            <input type="file" name="user_image" />
           </div>
          </div>
         </div> --}}








      </div>
     </div>
     <div class="panel panel-default">
         <div class="panel-heading">
             <h3 class="panel-title">User Data</h3>
         </div>
         <div class="panel-body">
         <div class="table-responsive">
                <table class="table table-bordered table-striped">
                  <tr>
                     <th width="30%">Image</th>
                     <th width="70%">Name</th>
                  </tr>
                  @foreach($data ?? '' as $row)
                  <tr>
                   <td>
                    <img src="{{'uploads//'. $row->user_image }}"  class="rounded-circle shadow-lg rounded-circle" width="75"  />
                   </td>
                   <td>{{ $row->user_name }}</td>
                  </tr>
                  @endforeach
              </table>
              {!! $data ?? ''->links() !!}
             </div>
         </div>
     </div>











 </body>
</html>








