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


<!--foricons-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="/assets/css/circlebutton.css" rel="stylesheet">
  <link href="/assets/css/alertbox.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Bverify by Sabaoon Bedar

  * Author: Sabaoon Bedar

  ======================================================== -->
</head>

<body>



  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      {{-- <h1 class="logo mr-auto"><a href="#">Bverify</a></h1> --}}
      <!-- Uncomment below if you prefer to use an image logo -->
    <a href="{{route('homepage')}}" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>

      <nav class="nav-menu d-none d-lg-block">

        <ul>
            <li><a href="{{route('homepage')}}"> <i class="fa fa-arrow-circle-left" style="font-size:16px;" >
            </i>&nbsp;back</a></li>
          {{-- <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li class="active"><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li> --}}
           <li class="drop-down"><a style="color:#4272f5">
            <i class="fa fa-power-off" style="font-size:16px"></i>

            {{ Auth::user()->name }} </a>
            <ul>
              <li><a href="{{ route('logout') }}"
                onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                              <i class="fa fa-sign-out" aria-hidden="true"></i>

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
          <a data-toggle="modal" data-target="#infoModel">
            <span class="glyphicon glyphicon-info-sign"></span>
          </a>


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


  <!-- ======= Hero Section ======= -->
  {{-- <section id="hero">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url(assets/img/slide/slide-1.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Bverify</span></h2>
              <p class="animate__animated animate__fadeInUp">Bverify is the System of Verification, it is developed for the Department of Computer Science. </p>
              <a href="#about" class="get-started-btn animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item" style="background-image: url(assets/img/slide/slide-2.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">under construction</h2>
              <p class="animate__animated animate__fadeInUp">this slide is under construction very soon the information would be share</p>
              <a href="#about" class="get-started-btn animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item" style="background-image: url(assets/img/slide/slide-3.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">under construction</h2>
              <p class="animate__animated animate__fadeInUp">this is under construction and very soon you will see the updates</p>
              <a href="#about" class="get-started-btn animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section><!-- End Hero --> --}}
<br>
<br>

<br>
<span class="landing-wrapper">
  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 style="color:  #3084e4">Student Section</h2>
          <p>Upload Excel Sheet</p>
        </div>



        @if(session()->has('message'))
        <div class="position">
        <div class="alert_excel_success">

          <span class="closebtn_normal_success" onclick="this.parentElement.style.display='none';">&times;</span>

          {{ session()->get('message') }}
      </div>
    </div>
      @endif


        <div class="row content" >
          {{-- <div class="col-lg-6">
            <p>
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div> --}}


          <div class="card-body shadow p-3 mb-5 bg-white rounded form_body">



            @if ($errors->any())
            <div class="warning_position">
            <div class="alertwarning">
                <span class="closebtn_warning" onclick="this.parentElement.style.display='none';">&times;</span>

           <ul>
                    @foreach ($errors->all() as $error)
                        <li>Something Went Wrong: &nbsp; {{ $error }}</li>
                    @endforeach
                </ul>
   </div>
            </div>
        @endif




        <a href="{{route('slist.index')}}">
                <div class="divtop">
                <div class="iconposition">
                <div class="pulse1"></div>
                <div class="pulse2"></div>
                <div class="icon"></div>
                </div>
                </a>
            </div>


            <form action="{{ route('StudentImport') }}" method="POST" enctype="multipart/form-data" id="submit">
                @csrf

                {{-- <div class="custom-file">
                    <input type="file" name="file" class="custom-file-input form-control">
                    <label class="custom-file-label" for="inputGroupFile01"></label>
                  </div> --}}




                        {{-- <div class="custom-file">
                            <input type="file" class="custom-file-input" id="myInput" aria-describedby="myInput">
                            <label class="custom-file-label" for="myInput">Choose file</label>
                        </div>
                        <div class="input-group-append">
                        </div> --}}



        <input type="file" name="file" class="shadow p-3 mb-5 rounded form_sheet w-75 p-3 mw-100" >
<br>


                <a class="importbutton" href=""
                onclick="event.preventDefault();
                              document.getElementById('submit').submit();"
                >Upload List Data</a>
                <a class="importbutton" href="{{ route('StudentExport') }}">Export List Data</a>
            </form>
        </div>




        </div>


      </div>
    </section><!-- End About Section -->
<br>
<br>
<br>
<br>









  </main></span><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
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
  </footer><!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>
