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

            <li><a href="{{route('dlist.index')}}"> <i class="fa fa-arrow-circle-left" style="font-size:16px;" >
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
          <h2 style="color:  #3084e4">Edit Information of "{{$d_item->name}}"</h2>
        <p>Edit   "{{$d_item->name}}"</p>
        </div>

        @if(session()->has('message'))
        <div class="alertnormal">
            <span class="closebtnnormal" onclick="this.parentElement.style.display='none';">&times;</span>

            {{ session()->get('message') }}
        </div>

    @endif

    {{-- <div class="alertsuccess">
        <span class="closebtnsuccess" onclick="this.parentElement.style.display='none';">&times;</span>

    <div class="circleboxsuccess">
        <strong class="circleboxtextsuccess">Success!</strong>
                </div>
                <div class="alertboxtextsuccess"><strong>List of validations required for every field below:</strong>

            </div>
    </div> --}}



    @if ($errors->any())
    <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>

        <div class="circlebox">
<strong class="circleboxtext">Something Went Wrong!</strong>
        </div>
        <div class="alertboxtext"><strong>List of validations required for every field below:</strong>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul></div>

    </div>
@endif




    <div class="page-content">
          <div class="wizard-v5-content">
			<div class="wizard-form">
		        <form class="form-register" id="submit" action={{route('dlist.update',$d_item->id)}}  method="POST" enctype="multipart/form-data">

                    @csrf
                    @method('PATCH')


                    <div id="form-total">
		        		<!-- SECTION 1 -->
			            <h2>
			            	<span class="step-icon"><i class="zmdi zmdi-check"></i></span>
			            	<span class="step-text">Personal Information</span>
			            </h2>
			            <section>
			                <div class="inner">
								<div class="form-row">
									<div class="form-holder">
										<label for="first_name">Name</label>
                                    <input type="text" placeholder="eg: sabaoon" class="form-control" id="name" name="name" value="{{old('name',$d_item->name)}}" class="@error('title') is-invalid @enderror" required>
 @error('name')
 <div class="triangle-left"></div>
    <div class="alertinside">{{ $message }}</div>
@enderror
									</div>
									<div class="form-holder">
										<label for="last_name">Father Name</label>
										<input type="text" placeholder="eg: abdul baseer" class="form-control" id="father_name" name="father_name" value="{{old('father_name',$d_item->father_name)}}">

                                     @error('father_name')
                                        <div class="triangle-right"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror


                                    </div>
                                </div>








								{{-- <div class="form-row">
									<div id="radio">
										<label for="gender">Gender:</label>
										<input type="radio" name="gender" value="male" checked> Male
  										<input type="radio" name="gender" value="female"> Female
									</div>
                                </div> --}}

                                <div class="form-row">
                                <div class="form-holder">
                                    <label for="first_name">Registration No</label>
                                    <input type="text" placeholder="eg: abc/234/s" class="form-control" id="registration_num" name="registration_num" value="{{old('registraion_num',$d_item->registration_num)}}">

                                    @error('registration_num')
                                        <div class="triangle-left"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror

                                </div>

                                </div>





                                <div class="form-row">


<script>
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
    </script>



                                <div class="form-holder form-holder-2">
                                <label for="address">Upload Picture of {{$d_item->name}}</label>
                                    <input type="file" id="jimage" name="user_image" style="color: white" value="{{old('user_image',$d_item->user_image)}}">

                                    @error('user_image')
                                    <div class="triangle-left"></div>
                                       <div class="alertinside">{{ $message }}</div>
                                   @enderror


                                    <div class="input-group">

                                <div>

                                <img id='uploadedimage' class="shadow-lg rounded-circle" style='position: relative; left:40%; bottom:-5%' width="40%"/>
                            </div>
                        </div>
                                </div>
                            </div>


								<div class="form-row">
									<div class="form-holder form-holder-2">
										<label for="address">Email Address</label>
										<input type="text" placeholder="eg: Baidar.sabaoon@gmail.com" class="form-control" id="email_address" name="email_address" value="{{old('email_address',$d_item->email_address)}}">
                                        <span><i class="zmdi zmdi-pin"></i></span>

                                        @error('email_address')
                                        <div class="triangle-left"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror

									</div>
								</div>
								<div class="form-row">
									<div class="form-holder">
										<label for="phone">Admission Date</label>
										<input type="text" placeholder="eg: 03-04-2015" class="form-control" id="admission_date" name="admission_date" value="{{old('admission_date',$d_item->admission_date)}}">

                                        @error('admission_date')
                                        <div class="triangle-left"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror

                                    </div>
									<div class="form-holder">
										<label for="code">Graduation Date</label>
										<input type="text" class="form-control" id="graduation_date"  placeholder="eg: 03-04-2019" name="graduation_date" value="{{old('graduation_date',$d_item->graduation_date)}}">

                                        @error('graduation_date')
                                        <div class="triangle-right"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror


                                    </div>
								</div>
								{{-- <div class="form-row form-row-date">
									<div class="form-holder form-holder-2">
										<label for="date" class="special-label">Date of Birth:</label>
										<select name="date" id="date" class="form-control">
											<option value="15" selected>15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
										</select>
										<select name="month" id="month" class="form-control">
											<option value="Jan" selected>Jan</option>
											<option value="Feb">Feb</option>
											<option value="Mar">Mar</option>
											<option value="Apr">Apr</option>
											<option value="May">May</option>
										</select>
										<select name="year" id="year" class="form-control">
											<option value="2018" selected>2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
										</select>
									</div>
								</div>
							</div> --}}
			            </section>
						<!-- SECTION 2 -->
			            <h2>
			            	<span class="step-icon"><i class="zmdi zmdi-check"></i></span>
			            	<span class="step-text">More Details</span>
			            </h2>
			            <section>
			                <div class="inner">
								<div class="form-row">
									<div class="form-holder">
										<label for="bank">CNIC</label>
										<input type="text" placeholder="eg: 17301-9992-213-1" class="form-control input-step-2" id="cnic" name="cnic" value="{{old('cnic',$d_item->cnic)}}">
                                        {{-- <span><i class="zmdi zmdi-search"></i></span> --}}

                                        @error('cnic')
                                        <div class="triangle-left"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror

									</div>
									<div class="form-holder">
										<label for="branch">Passport No</label>
										<input type="text" placeholder="eg: P0033343442" class="form-control input-step-2" id="passport_num" name="passport_num" value="{{old('passport_num',$d_item->passport_num)}}">

                                        @error('passport_num')
                                        <div class="triangle-right"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror

                                    </div>
								</div>
								{{-- <div class="form-row">
									<div class="form-holder form-holder-2">
										<label for="email">Email Address:</label>
										<input type="email" name="email" class="email input-step-2-1" id="email" placeholder="ex: example@email.com" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}">
									</div>
								</div> --}}
								<div class="form-row">
                                    <div class="form-holder">
									<div class="form-group">
                                        <label for="status">Status</label>

                                        <select id="status" name="status"
                                        style="
                                     color:black;
                                        font-family: 'Nunito', sans-serif;
	                                    font-size: 18px;
	                                    font-weight: 400;
                                        ">




@if($d_item->status=="Verified" || $d_item->status=="verified" )
                                            <option value="Verified" selected>Verified</option>
                                            <option value="Not Verified">Not Verified</option>
@elseif($d_item->status=="not verified" || $d_item->status=="Not Verified")

                                            <option value="Verified">Verified</option>
                                            <option value="Not Verified" selected>Not Verified</option>


@endif








                                          </select>






                                        </div>
										{{-- <input type="text" class="form-control" id="graduation_date"  placeholder="eg: 03-04-2019" name="graduation_date" value="{{old('graduation_date',$d_item->graduation_date)}}"> --}}

                                        @error('select')
                                        <div class="triangle-right"></div>
                                           <div class="alertinside">{{ $message }}</div>
                                       @enderror


                                    </div>


                                </div>
			                </div>

								{{-- <div class="form-row">
									<div class="form-holder form-holder-2">
										<label for="account_number">Account Number:</label>
										<input type="text" placeholder="4576-6970-3801-2620" class="form-control input-step-2-2" id="account_number" name="account_number">
										<span class="card"><i class="zmdi zmdi-card"></i></span>
									</div>
								</div>
								<div class="form-row form-row-date form-row-step-2">
									<div class="form-holder form-holder-2">
										<label for="date_2" class="special-label">Expiry Date:</label>
										<select name="date_2" id="date_2" class="form-control">
											<option value="15" selected>15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
										</select>
										<select name="month_2" id="month_2" class="form-control">
											<option value="Jan" selected>Jan</option>
											<option value="Feb">Feb</option>
											<option value="Mar">Mar</option>
											<option value="Apr">Apr</option>
											<option value="May">May</option>
										</select>
										<select name="year_2" id="year_2" class="form-control">
											<option value="2018" selected>2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
										</select>
									</div>
								</div>
							</div> --}}
			            </section>
			            <!-- SECTION 3 -->
			            <h2>
			            	<span class="step-icon"><i class="zmdi zmdi-check"></i></span>
			            	<span class="step-text">Confirm Details</span>
			            </h2>
			            <section>
			                <div class="inner">
			                	<h3>Comfirm Details</h3>
								<div class="form-row table-responsive" style="width:90%">
									<table class="table" >
										<tbody >

          {{-- ======================================================================            --}}

          <script type="text/javascript">
            $('#name').change(function(){

                $('#name-val').html('');

                    $('#name-val').append($('#name').val());

            });
            </script>

{{-- ==============================================================================  --}}

											<tr class="space-row">
                                                <th>Name:</th>
												<td id="name-val"></td>
											</tr>


      {{-- ======================================================================            --}}

 <script type="text/javascript">
    $('#father_name').change(function(){

        $('#father-val').html('');

            $('#father-val').append($('#father_name').val());

    });
    </script>

{{-- ==============================================================================  --}}

                                            <tr class="space-row">
                                                <th>Father Name:</th>
												<td id="father-val"></td>
											</tr>


      {{-- ======================================================================            --}}

<script type="text/javascript">
    $('#registration_num').change(function(){

        $('#registration-val').html('');

            $('#registration-val').append($('#registration_num').val());

    });
    </script>

{{-- ==============================================================================  --}}



                                            <tr class="space-row">
                                                <th>Registration No:</th>
												<td id="registration-val"></td>
                                            </tr>


{{-- ======================================================================            --}}

<script type="text/javascript">
    $('#email_address').change(function(){

        $('#email-val').html('');

            $('#email-val').append($('#email_address').val());

    });
    </script>

{{-- ==============================================================================  --}}


											<tr class="space-row">
												<th>Email Address:</th>
												<td id="email-val"></td>
                                            </tr>


{{-- ======================================================================            --}}

<script type="text/javascript">
    $('#admission_date').change(function(){

        $('#admission-val').html('');

            $('#admission-val').append($('#admission_date').val());

    });
    </script>

{{-- ==============================================================================  --}}


                                            <tr class="space-row">
												<th>Admission Date</th>
												<td id="admission-val"></td>
                                            </tr>






{{-- ======================================================================            --}}

<script type="text/javascript">
    $('#graduation_date').change(function(){

        $('#graduation-val').html('');

            $('#graduation-val').append($('#graduation_date').val());

    });
    </script>

{{-- ==============================================================================  --}}


											<tr class="space-row">
												<th>Graduation Date</th>
												<td id="graduation-val"></td>
                                            </tr>


{{-- ======================================================================            --}}

<script type="text/javascript">
    $('#cnic').change(function(){

        $('#cnic-val').html('');

            $('#cnic-val').append($('#cnic').val());

    });
    </script>

{{-- ==============================================================================  --}}




											<tr class="space-row">
												<th>CNIC</th>
												<td id="cnic-val"></td>
                                            </tr>


{{-- ======================================================================            --}}

<script type="text/javascript">
    $('#passport_num').change(function(){

        $('#passport_val').html('');

            $('#passport-val').append($('#passport_num').val());

    });
    </script>

{{-- ==============================================================================  --}}

                                            <tr class="space-row">
												<th>Passport</th>
												<td id="passport-val"></td>
                                            </tr>




{{-- ======================================================================            --}}

<script type="text/javascript">
    $('#status').change(function(){

        $('#status_val').html('');

            $('#status-val').append($('#status').val());

    });
    </script>

{{-- ==============================================================================  --}}

                                            <tr class="space-row">
												<th>Status</th>
												<td id="status-val"></td>
                                            </tr>





                                        </tbody>

                                    </table>

                                </div>


                            </div>


                            <a href=""
                            onclick="event.preventDefault();
                                          document.getElementById('submit').submit();"
                            >
                            <div class="send_position">
                               <div class="sendbutton">
                                <span class="glyphicon glyphicon-send" style="font-size: 40px"></span>
Update
                               </div>

                            </div>
                            </a>
                        </section>

                    </div>

                </form>



			</div>
          </div>



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
