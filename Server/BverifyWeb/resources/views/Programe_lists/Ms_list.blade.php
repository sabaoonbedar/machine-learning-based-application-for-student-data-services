



<!DOCTYPE html>
<html lang="en">

<head>
<style>



 .modal {
background: linear-gradient(rgba(233, 230, 230, 0.603), rgba(152, 203, 238, 0.329), rgba(153, 158, 161, 0.315));

}

.fade-out{
    -webkit-transition: opacity 0.15s linear;
transition: opacity 0.1s linear;
    opacity: 1;

    transition: ease-in-out 0.1s;

}



    </style>


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
  <link href="/assets/css/style.css" rel="stylesheet">
  <link href="/assets/css/alertbox.css" rel="stylesheet">

</head>
  <!-- Template Main CSS File -->


  <!-- =======================================================
  * Template Name: Bverify by Sabaoon Bedar

  * Author: Sabaoon Bedar

  ======================================================== -->


<body>


    <div class=" modal fade-out"  id="studentmodal"  >
        <div class="modal-dialog modal-sm modal-lg modal-xl">
          <div class="modal-content" >
          </div>
        </div>
      </div>




{{--
     <div class="modal fade" id="theModal">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
          </div>
        </div>
      </div> --}}

      {{-- <a  class="tablebuttons" href="{{route('model')}}" data-target="#theModal" data-toggle="modal"></a><br> --}}


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


          {{-- <li><a href="{{route('homepage')}}"><span class="glyphicon glyphicon-home" style="font-size:13px;" ></span>&nbsp;Home</a> --}}
        </li>
          <li><a href="{{route('homepage')}}"> <i class="fa fa-arrow-circle-left" style="font-size:16px;" >
          </i>&nbsp;back</a></li>

          {{--
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
        <h2 style="color:  #3084e4">MS Students  </h2></span>
          <p>List of MS Students</p>
        </div>






        <div class="card-body tablelocation">


          @if(session()->has('message'))

          <div class="normal_alert_position">
          <div class="alert_normal_success">

            <span class="closebtn_normal_success" onclick="this.parentElement.style.display='none';">&times;</span>

            {{ session()->get('message') }}
        </div>
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

    <br><div class="tablelocation" style="margin-left: -7%">
    <div class="table-responsive-lg ">
    <table class="table-bordered shadow-lg">
    <thead>
      <tr class="text-white text-bold text-capitalize flex-auto" style="background-color: #19293d; font-size:12px">
        <th class="tablepadding">Picture</th>
        <th class="tablepadding">Registration NO</th>
        <th class="tablepadding">Name</th>
        <th class="tablepadding">Father Name</th>
        <th class="tablepadding">Gender</th>
        <th class="tablepadding">Address</th>
        <th class="tablepadding">Contact No</th>
        <th class="tablepadding">Programe</th>
        <th class="tablepadding">Admission Date</th>
        <th class="tablepadding">Batch</th>
        <th class="tablepadding">Email Address</th>
        <th class="tablepadding">Board</th>
        <th class="tablepadding">SSC Total</th>
        <th class="tablepadding">SSC Obtain</th>
        <th class="tablepadding">HSSC Total</th>
        <th class="tablepadding">HSSC Obtain</th>
        <th class="tablepadding">Created</th>


        <th class="tablepadding"><span class="glyphicon glyphicon-cog"></span>
        </th>
      </tr>
    </thead>
    <tbody id="myTable">
        @foreach ($items as $item)
      <tr class= "bg-light">

        <td class="tablepadding" >


            <?php
            $id = $item->id;
            $encrypted = encrypt($id);
      ?>

@if($item->user_image!==null)

<img src="{{'uploads//'. $item->user_image }}"  class="rounded-circle shadow-lg rounded-circle"  style=" padding:3px; width:12rem; height:auto" />

            @elseif($item->user_image==null)
     <a class="form_image_button" style ="align-items: center" href="{{route('slist.edit',$encrypted)}}"> <span class="glyphicon glyphicon-edit"></span> Add Picture</a>

@endif




        </td>
        <td class="tablepadding" style="10%">{{ $item->registration_num }}</td>
        <td class="tablepadding">{{ $item->name }}</td>
        <td class="tablepadding">{{ $item->father_name }}</td>
        <td class="tablepadding">{{ $item->gender }}</td>
        <td class="tablepadding">{{ $item->address }}</td>
        <td class="tablepadding">{{ $item->contact_no }}</td>
        <td class="tablepadding">{{ $item->programe}}</td>
        <td class="tablepadding">{{ $item->admission_date }}</td>
        <td class="tablepadding">{{ $item->batch}}</td>
        <td class="tablepadding">{{ $item->email_address }}</td>
        <td class="tablepadding">{{ $item->board }}</td>
        <td class="tablepadding">{{ $item->ssc_total}}</td>
        <td class="tablepadding">{{ $item->ssc_obtain}}</td>
        <td class="tablepadding">{{ $item->hssc_total}}</td>
        <td class="tablepadding">{{ $item->hssc_obtain}}</td>
        <td class="tablepadding">{{ $item->created_at}}</td>

        <td class="tablepadding">
            <?php
            $id = $item->id;
            $encrypted = encrypt($id);
      ?>

        <form action="{{route('slist.destroy',$item->id)}}" method="POST" id="submit">

  <a  class="tablebuttons" href="{{route('slist.show',$encrypted)}}" data-target="#studentmodal" data-toggle="modal"><span class="glyphicon glyphicon-eye-open"></span></a><br>

            <a class="tablebuttons" href="{{route('slist.edit',$encrypted)}}"> <span class="glyphicon glyphicon-edit"></span></a><br>
                @csrf
                @method('DELETE')
<div class="tablebuttons">
                <a onclick="this.closest('form').submit();return false;" >

                <span class="glyphicon glyphicon-trash"></span>
            </a>
        </div>


            </form>

    </td>
      </tr>

      @endforeach
    </tbody>
    </table></div></div>
    <br>
    <div>
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
<footer id="footer">
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
