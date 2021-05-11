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
  }</style>

  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Bverify</title>
  <meta content="Bverify" name="descriptison">
  <meta content="Bverify" name="keywords">



  <!-- Favicons -->
  <link href="/assets/img/favicon.png" rel="icon">
  <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  {{-- data for form --}}


  <link href="/WizardForm/vendorwizard/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/WizardForm/vendorwizard/icofont/icofont.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/WizardForm/csswizard/nunito-font.css">
  <link rel="stylesheet" type="text/css" href="/WizardForm/fontswizard/material-design-iconic-font/css/material-design-iconic-font.min.css">
  <link rel="stylesheet" href="/WizardForm/csswizard/style.css"/>


{{-- =========================================================================================== --}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

{{-- for icons  --}}

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />

  <!-- Vendor CSS Files -->
  <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="/assets/vendor/aos/aos.css" rel="stylesheet">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

  <!-- Template Main CSS File -->
  <link href="/assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Bverify by Sabaoon Bedar

  * Author: Sabaoon Bedar

  ======================================================== -->
</head>

<body>




    <div class="modal-header">
        <h5 class="modal-title" id="infoModel" style="color:#4272f5; font-size: 18px; font-weight: bold">What is Bverify?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body"> --}}


<p>this is poping up the message</p>





       </div>

       <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>







  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      {{-- <h1 class="logo mr-auto"><a href="#">Bverify</a></h1> --}}
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="{{route('homepage')}}" class="logo mr-auto"><img src="/assets/img/logo.png" alt="" class="img-fluid"></a>

      <nav class="nav-menu d-none d-lg-block">

        <ul>
          {{-- <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li class="active"><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li> --}}
           <li class="drop-down"><a href="#">{{ Auth::user()->name }} </a>
            <ul>
              <li><a href="{{ route('logout') }}"
                onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                 {{ __('Logout') }}</a>

                 <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
                {{-- </li> --}}
                {{-- <li><a href="{{ route('register') }}">{{ __('Register') }}</a></li> --}}
                {{-- @if (Route::has('register'))
                <li>
                    <a href="{{ route('register') }}">{{ __('Register') }}</a>
                </li>  @endif --}}
              {{-- <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li> --}}
              {{-- <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li> --}}
            </ul>

          </li>

          {{-- <li><a href="#contact">Contact</a></li> --}}
        <li>
            {{-- <a href="#">
            <span class="glyphicon glyphicon-info-sign"></span>
          </a> --}}
          {{-- <a data-toggle="modal" data-target="#infoModel">
            <span class="glyphicon glyphicon-info-sign"></span>
          </a> --}}


        </li>

        </ul>
      </nav><!-- .nav-menu -->
{{--
      <a  class="get-started-btn"  href="{{ route('logout') }}"
      onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
       {{ __('Logout') }}</a>
       <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form> --}}
    {{-- </div> --}}
  </header><!-- End Header -->


<br><br><br>
<div class="landing-wrapper">
<main id="main">

    <!-- ======= About Section ======= -->

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 style="color:  #3084e4">Details of "{{$d_data->name}}"</h2>
        <p>Detials </p>
        </div>

        <div class="card-body">


            <table class="table shadow p-3 bg-white mb-5">
                <thead>
                  <tr style="font-size:12px" class="flex-center">



                    <th scope="col">Registration NO</th>
                    <th scope="col">Name</th>
                    <th scope="col">Father Name</th>
                    <th scope="col">Admission Date</th>
                    <th scope="col">Graduation Date</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">CNIC</th>
                    <th scope="col">Passport NO</th>
                    <th scope="col">Status</th>



                  </tr>
                </thead>
                <tbody>
                  <tr style="font-size:12px">

                  <td>{{$d_data->registration_num}}</td>



                    <td>{{$d_data->name}}</td>


                    <td>{{$d_data->father_name}}</td>




                    <td>{{$d_data->admission_date}}</td>



                    <td>{{$d_data->graduation_date}}</td>

                    <td>{{$d_data->email_address}}</td>
                    <td>{{$d_data->cnic}}</td>
                    <td>{{$d_data->passport_num}}</td>
                    <td>{{$d_data->status}}</td>

                  </tr>



                </tbody>
              </table>


        </div>


    </section><!-- End About Section -->


    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">


        <div class="section-title">
          <h2>Below Details show thet the Student is Varified or Not Varified</h2>
          {{-- <p>T</p> --}}
        </div>

       @if($d_data->status === "Verified" || $d_data->status==="verified" )




          <div class="testimonial-wrap">
            <div class="testimonial-item iconbox_color_blue">
              {{-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> --}}
              <h3>{{$d_data->name}}   <br><br><div class="verifytext">Verified<div> </h3>
              <h4>Father Name:  &nbsp; {{$d_data->father_name}}</h4>



              <p>

                <i class="bx bxs-quote-alt-left quote-icon-left"></i>

                <table class="table">

            <tr><td>Registration No:</td><td>{{$d_data->registration_num}} </td>
            <tr><td>Email Address:</td><td>{{$d_data->email_address}}</td> </tr>
            <tr><td>CNIC:</td><td>{{$d_data->cnic}}</td> </tr>
            <tr><td>Passport No:</td><td>{{$d_data->passport_num}}</td> </tr>


                  </table>

                  {{-- Condition of the status --}}

                  @if($d_data->status === "Verified" || $d_data->status==="verified" )

                  <span class="glyphicon glyphicon-ok-circle icon_tick"></span>

                    @else

                     <span class="glyphicon glyphicon-remove-circle icon_cross">

                     @endif

{{-- =============================================================================================== --}}



                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>



@else

{{-- <================>
else started from here
<================> --}}



    <div class="testimonial-wrap">
      <div class="testimonial-item iconbox_color">
        {{-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> --}}
        <h3>{{$d_data->name}}   <br><br><div class="notverifytext">Not Verified<div> </h3>
            <h4>Father Name:  &nbsp; {{$d_data->father_name}}</h4>
        <p>
          <i class="bx bxs-quote-alt-left quote-icon-left"></i>

          <table class="table">

<tr><td>Registration No:</td><td>{{$d_data->registration_num}} </td>
<tr><td>Email Address:</td><td>{{$d_data->email_address}}</td> </tr>
<tr><td>CNIC:</td><td>{{$d_data->cnic}}</td> </tr>
<tr><td>Passport No:</td><td>{{$d_data->passport_num}}</td> </tr>


            </table>

            {{-- Condition of the status --}}

            @if($d_data->status === "Varified" || $d_data->status==="varified" )

            <span class="glyphicon glyphicon-ok-circle icon_tick"></span>

              @else

               <span class="glyphicon glyphicon-remove-circle icon_cross">

               @endif

{{-- =============================================================================================== --}}

<i class="bx bxs-quote-alt-right quote-icon-right"></i>
</p>
</div>
</div>






@endif


          {{-- <div class="testimonial-wrap"></div> --}}

          {{-- <div class="testimonial-wrap">
            <div class="testimonial-item"> --}}
              {{-- <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""> --}}
              {{-- <h3>{{$d_data->name}}</h3>
              <h4>Father Name:  &nbsp; {{$d_data->father_name}}</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div> --}}


        </div>

      </div>
    </section><!-- End Testimonials Section -->






</main>







{{-- <!-- ======= Footer ======= -->
<footer id="footer" class="w-100 p-3 mw-100">
    {{-- <div class="footer-top">

    </div> --}}

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Department of Computer Science</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <span class="fotter_color">Sabaoon Bedar</span>
      </div>
    </div>
  </footer></div><!-- End Footer --> --}}




  <div id="preloader"></div>
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


  <!-- Vendor JS Files -->
  <script src="/assets/vendor/jquery/jquery.min.js"></script>
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="/assets/vendor/php-email-form/validate.js"></script>
  <script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="/assets/vendor/counterup/counterup.min.js"></script>
  <script src="/assets/vendor/venobox/venobox.min.js"></script>
  <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="/assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="/assets/js/main.js"></script>



  {{-- for form data --}}

  <script src="/WizardForm/jswizard/jquery-3.3.1.min.js"></script>
	<script src="/WizardForm/jswizard/jquery.steps.js"></script>
	<script src="/WizardForm/jswizard/main.js"></script>
</body>

</html>
