<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Degreeverify extends Migration
{
    /**
     * note that the index function is used for the purpose of better search.
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('degree_verifies', function (Blueprint $table) {
            $table->mediumText('user_image')-> nullable();
            $table->id();
            $table->string('registration_num')->index()->unique()->nullable();
            $table->string('name');
            $table->string('father_name');
            $table->date('admission_date');
            $table->date('graduation_date');
            $table->string('email_address');
            $table->string('cnic');
            $table->string('passport_num');
            $table->string('status')->nullable();
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
        Schema::dropIfExists('degreeverify');
    }
}
