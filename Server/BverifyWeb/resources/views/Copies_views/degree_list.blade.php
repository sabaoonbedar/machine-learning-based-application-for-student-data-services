



<!DOCTYPE html>
<html lang="en">

<head>
<style>
    <style>
        .input-icons i {
            position: absolute;
        }

        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }

        .icon {
            padding: 10px;
            min-width: 40px;
        }

        .input-field {
            width: 100%;
            padding: 10px;
            text-align: center;
        }
    </style>


  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Bverify</title>
  <meta content="Bverify" name="descriptison">
  <meta content="Bverify" name="keywords">



  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  {{-- for running javascript --}}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="/assets/css/alertbox.css" rel="stylesheet">

</head>
  <!-- Template Main CSS File -->


  <!-- =======================================================
  * Template Name: Bverify by Sabaoon Bedar

  * Author: Sabaoon Bedar

  ======================================================== -->


<body>


    <div class="modal fade text-center" id="infoModal">
        <div class="modal-dialog">
          <div class="modal-content">
          </div>
        </div>
      </div>


      <div class="modal fade text-center" id="theModal">
        <div class="modal-dialog">
          <div class="modal-content">
          </div>
        </div>
      </div>

    <!-- Modal -->
   {{-- <div class="modal fade" id="infoModel" tabindex="-1" role="dialog" aria-labelledby="infoModel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">

      </div>
    </div>
  </div>






    {{-- <script>
    document.querySelector('.custom-file-input').addEventListener('change',function(e){
        var fileName = document.getElementById("myInput").files[0].name;
        var nextSibling = e.target.nextElementSibling
        nextSibling.innerText = fileName
      })
      </script> --}}

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      {{-- <h1 class="logo mr-auto"><a href="#">Bverify</a></h1> --}}
      <!-- Uncomment below if you prefer to use an image logo -->
    <a href="{{route('homepage')}}" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>

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





  <main id="main">




    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
        <h2 style="color:  #3084e4">Degree Section  </h2></span>
          <p>Uploaded Excel Sheet</p>
        </div>


        <a href="{{route('model')}}" data-target="#theModal" data-toggle="modal">Lab 6</a>




        <div class="card-body tablelocation">


          @if(session()->has('message'))
          <div class="alertnormalsuccess">

            <span class="closebtnnormalsuccess" onclick="this.parentElement.style.display='none';">&times;</span>

            {{ session()->get('message') }}
        </div>

        @endif

{{--
        @if(session()->has('message'))
        <div class="alert alert-success">
            {{ session()->get('message') }}
        </div>
    @endif --}}



<div class="card-body">

    <span class="glyphicon glyphicon-search" style="font-size: 18px; color:gray"></span>
    <input class=" card-body shadow p-3 mb-5 bg-white rounded" id="myInput" type="text"  placeholder="Search..">

</div>

    <br>
    <table class="table-bordered shadow-lg tablelocation">
    <thead>
      <tr class="text-white text-bold text-capitalize flex-auto" style="background-color: #19293d; font-size:12px">
        <th class="tablepadding">Registration NO</th>
        <th class="tablepadding">Name</th>
        <th class="tablepadding">Father Name</th>
        <th class="tablepadding">Admission Date</th>
        <th class="tablepadding">Graduation Date</th>
        <th class="tablepadding">Email Address</th>
        <th class="tablepadding">CNIC</th>
        <th class="tablepadding">Passport NO</th>
        <th class="tablepadding">Status</th>
        <th class="tablepadding"><span class="glyphicon glyphicon-cog"></span>
        </th>
      </tr>
    </thead>
    <tbody id="myTable">
        @foreach ($items as $item)
      <tr class= "bg-light">
        <td class="tablepadding" style="10%">{{ $item->registration_num }}</td>
        <td class="tablepadding">{{ $item->name }}</td>
        <td class="tablepadding">{{ $item->father_name }}</td>
        <td class="tablepadding">{{ $item->admission_date }}</td>
        <td class="tablepadding">{{ $item->graduation_date }}</td>
        <td class="tablepadding">{{ $item->email_address }}</td>
        <td class="tablepadding">{{ $item->cnic }}</td>
        <td class="tablepadding">{{ $item->passport_num}}</td>
        <td class="tablepadding">{{ $item->status}}</td>

        <td class="tablepadding">

        <form action="{{route('dlist.destroy',$item->id)}}" method="POST" id="submit">
            <?php
            $id = $item->id;
            $encrypted = encrypt($id);
      ?>
  <a  class="tablebuttons" href="{{route('dlist.show',$encrypted)}}" data-target="#infoModal" data-toggle="modal"><span class="glyphicon glyphicon-eye-open"></span></a><br>






            <a class="tablebuttons" href="{{route('dlist.edit',$encrypted)}}"> <span class="glyphicon glyphicon-edit"></span></a><br>
                @csrf
                @method('DELETE')

                <a class="tablebuttons" href=""
                onclick="event.preventDefault();
                              document.getElementById('submit').submit();"
                >

                <span class="glyphicon glyphicon-trash"></span>
            </a>
            </form>

    </td>
      </tr>

      @endforeach
    </tbody>
    </table>
    <br>
    <div class="border-dark justify-content-center align-items-center">
    <div>{{$items ?? ''->links()}}</div>
    </div>

    </div>
      </div>

    <script>
    $(document).ready(function(){
    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    });
    });
    </script>









      </div>
    </section><!-- End About Section -->
<br>
<br>
<br>
<br>









  </main></span><!-- End #main -->

  <!-- ======= Footer ======= -->
<footer id="footer" class="tablelocation">
    <div class="footer-top">

    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Department of Computer Science</span></strong>. All Rights Reserved
      </div>
      <div class="credits">

        Designed by <span class="fotter_color">Sabaoon Bedar</span>
      </div>
    </div>
  </footer><!-- End Footer --> --}}

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
