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

  .chart {
  width: 120%;
  min-height: 450px;
}
.row {
  margin:0 !important;
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


  <link href="/WizardForm/vendorwizard/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/WizardForm/vendorwizard/icofont/icofont.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/WizardForm/csswizard/nunito-font.css">
  <link rel="stylesheet" type="text/css" href="/WizardForm/fontswizard/material-design-iconic-font/css/material-design-iconic-font.min.css">
  <link rel="stylesheet" href="/WizardForm/csswizard/style.css"/>


{{-- =========================================================================================== --}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script>

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
  <link href="/assets/css/alertbox.css" rel="stylesheet">

{{-- ====================for googlecharts ===================== --}}
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>



<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">






//   console.log(students);
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(draw_LineChart);
google.charts.setOnLoadCallback(draw_PieChart);
google.charts.setOnLoadCallback(gender_PieChart);
google.charts.setOnLoadCallback(programe_PieChart);
google.charts.setOnLoadCallback(status_PieChart);
google.charts.setOnLoadCallback(semester_PieChart);


var students = <?php echo $students_registered; ?>;


  function draw_LineChart() {
    var data = google.visualization.arrayToDataTable(students);
    var options = {
      title: 'No of Students Admissions per Year ',
      curveType: 'function',
      legend: { position: 'bottom' }

    };
    var chart = new google.visualization.LineChart(document.getElementById('linechart'));
    chart.draw(data, options);
  }

  var Verified_Students = <?php echo $verify_data; ?>

  function draw_PieChart()
        {
            var data = google.visualization.arrayToDataTable(Verified_Students);
            var options = {
                title : 'Verified or not Verified Students',

            };
            var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
            chart.draw(data, options);
        }


        var gender_data = <?php echo $gender_data; ?>

        function gender_PieChart()
        {
            var data = google.visualization.arrayToDataTable(gender_data);
            var options = {
                title : 'Male or Female enroll students',
                pieHole: 0.4,

            };
            var chart = new google.visualization.PieChart(document.getElementById('gender_piechart'));
            chart.draw(data, options);
        }



        var programe_data = <?php echo $programe_data; ?>

        function programe_PieChart()
        {
            var data = google.visualization.arrayToDataTable(programe_data);
            var options = {
                title : 'Total Students in different Programes',
                pieHole: 0.5,

            };
            var chart = new google.visualization.PieChart(document.getElementById('programe_piechart'));
            chart.draw(data, options);
        }


        var status_data = <?php echo $status_data; ?>

function status_PieChart()
{
    var data = google.visualization.arrayToDataTable(status_data);
    var options = {
        title : 'Students percentage for Fees',
        pieHole: 0.5,

    };
    var chart = new google.visualization.PieChart(document.getElementById('status_piechart'));
    chart.draw(data, options);
}



var semester_data = <?php echo $semester_data; ?>

function semester_PieChart()
{
    var data = google.visualization.arrayToDataTable(semester_data);
    var options = {
        title : 'Semester based students percentage',
        pieHole: 0.5,

    };
    var chart = new google.visualization.PieChart(document.getElementById('semester_piechart'));
    chart.draw(data, options);
}




</script>









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
      <a href="{{route('homepage')}}" class="logo mr-auto"><img src="/assets/img/logo.png" alt="" class="img-fluid"></a>

      <nav class="nav-menu d-none d-lg-block">

        <ul>
            <li><a href="{{route('homepage')}}"> <i class="fa fa-arrow-circle-left" style="font-size:16px;" >
            </i>&nbsp;back</a></li>
          {{-- <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li class="active"><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li> --}}
           <li class="drop-down"><a style="color:#4272f5">{{ Auth::user()->name }} </a>
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




<main id="main">

    <!-- ======= About Section ======= -->

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 style="color:  #3084e4">All Information in the form of graphs</h2>
        <p>Generated Reports </p>
        </div>


        <hr style="width:100%"/>

<div style="position:relative; left:-100px">
<div class="col-md-4 col-md-offset-4">

  </div>
  <div class="clearfix"></div>
  <div class="col-md-6">
    <div id="pie_chart" class="chart"></div>
  </div>
  <div class="col-md-6">
    <div id="linechart" class="chart"></div>
  </div>
  <hr style="width:100%"/>

  <div class="col-md-6">
    <div id="gender_piechart" class="chart"></div>
  </div>
  <div class="col-md-6">
    <div id="programe_piechart" class="chart"></div>
  </div>

  <div class="col-md-6">
    <div id="status_piechart" class="chart"></div>
  </div>

  <div class="col-md-6">
    <div id="semester_piechart" class="chart"></div>
  </div>




</div>
<div>


























    </section><!-- End About Section -->




</main>








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
