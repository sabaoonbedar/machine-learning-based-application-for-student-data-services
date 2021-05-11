<!DOCTYPE html>
<html lang="en">

<head>


  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Bverify</title>
  <meta content="Bverify" name="descriptison">
  <meta content="Bverify" name="keywords">



  <!-- Favicons -->

  {{-- data for form --}}




{{-- =========================================================================================== --}}

{{-- for icons  --}}

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="jquery-3.5.1.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>

<link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <!-- Google Fonts -->

  <!-- Vendor CSS Files -->

  <!-- Template Main CSS File -->

  <!-- =======================================================
  * Template Name: Bverify by Sabaoon Bedar

  * Author: Sabaoon Bedar

  ======================================================== -->
</head>

<body>

    <div data-aos="fade">


  <div class="modal-header"  style="background-color:#19293d;">

    @if($d_data->status === "Cleared" || $d_data->status==="cleared" )



    <h3 class="modal-title" id="infoModel" style="color:white; font-size: 18px; font-weight: bold">


            Information of {{$d_data->name}}

        </h3>
    @else

    <h4 class="modal-title"   id="infoModel" style="color:white; font-size: 18px; font-weight: bold">


    Information of {{$d_data->name}}

    </h4>



    @endif



        <button type="button" class="close"  style="color: white"  data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body" >





        @if($d_data)









               @if($d_data->status === "Cleared" || $d_data->status==="cleared" )



    <div>
                  <div class="card-body">
                    <div class="card-body iconbox_color_blue">
                      {{-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> --}}
                      <h3>{{$d_data->name}}   <br><br><div class="verifytext">Cleared<div> </h3>



                        @if($d_data->user_image!==null)
                        <img src="{{'uploads//'. $d_data->user_image }}"  class="rounded-circle  rounded-circle" width="125" style="padding:3px; position: absolute; right:10%; Top:9%" />
@else
<h4  style="padding:3px; position: absolute; right:10%; Top:9%; color:red;" >No Picture</h4>
@endif


                      <h4>Father Name:  &nbsp; {{$d_data->father_name}}</h4>



                      <p>


                        <table class="table">

                    <tr><td>Registration No:</td><td>{{$d_data->registration_num}} </td>
                    <tr><td>Smester:</td><td>{{$d_data->semester}}</td> </tr>
                    <tr><td>Balance:</td><td>{{$d_data->balance}}</td> </tr>


                          </table>

                          {{-- Condition of the status --}}

                          @if($d_data->status === "Cleared" || $d_data->status==="cleared" )

                       <div class="blink_me">   <span class="glyphicon glyphicon-ok-circle icon_tick"></span></div>

                            @else

                       <div class="blink_me">      <span class="glyphicon glyphicon-remove-circle icon_cross"></span></div>

                             @endif

        {{-- =============================================================================================== --}}



                      </p>
                    </div>
                  </div>



        @else

        {{-- <================>
        else started from here
        <================> --}}


        <div class="card-body">
            <div class="card-body iconbox_color_red">
              {{-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> --}}
              <h3>{{$d_data->name}}   <br><br><div class="blink_me"><div class="notverifytext">Not Cleared<div></div> </h3>



              @if($d_data->user_image!==null)
              <img src="{{'uploads//'. $d_data->user_image }}"  class="rounded-circle  rounded-circle" width="125" style="padding:3px; position: absolute; right:10%; Top:9%" />
@else
<h4  style="padding:3px; position: absolute; right:10%; Top:9%; color:red;" >No Picture</h4>
@endif


              <h4>Father Name:  &nbsp; {{$d_data->father_name}}</h4>



              <p>


                <table class="table">

            <tr><td>Registration No:</td><td>{{$d_data->registration_num}} </td>
            <tr><td>Email Address:</td><td>{{$d_data->email_address}}</td> </tr>
            <tr><td>CNIC:</td><td>{{$d_data->cnic}}</td> </tr>
            <tr><td>Passport No:</td><td>{{$d_data->passport_num}}</td> </tr>


                  </table>

                  {{-- Condition of the status --}}

                  @if($d_data->status === "Cleared" || $d_data->status==="cleared" )

                 <div class="blink_me"> <span class="glyphicon glyphicon-ok-circle icon_tick"></span></div>

                    @else

                   <div class="blink_me">  <span class="glyphicon glyphicon-remove-circle icon_cross"></span></div>

                     @endif

{{-- =============================================================================================== --}}



              </p>
            </div>
          </div>







        @endif





                </div>


            {{-- </section><!-- End Testimonials Section --> --}}






        {{-- </main> --}}







       </div>


       {{-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> --}}










  {{-- <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a> --}}

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

  @else
  <div id="preloader"></div>
  @endif
  <!-- Vendor JS Files -->


  <!-- Template Main JS File -->




  {{-- for form data --}}
</div>
</body>

</html>
