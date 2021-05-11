<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Students extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->mediumText('user_image')-> nullable();
            $table->id();
            $table->string('registration_num')->index()->unique()->nullable();
            $table->string('name');
            $table->string('father_name');
            $table->string('gender');
            $table->string('address');
            $table->string('contact_no');
            $table->string('programe');
            $table->string('semester')->nullable();
            $table->date('admission_date');
            $table->string('batch')->index();
            $table->string('email_address');
            $table->string('board');
            $table->integer('ssc_total');
            $table->integer('ssc_obtain');
            $table->integer('hssc_total');
            $table->integer('hssc_obtain');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');

    }
}
