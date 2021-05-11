<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Feeverify extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fee_verifies', function (Blueprint $table) {
            $table->mediumText('user_image')-> nullable();
            $table->id();
            $table->string('registration_num')->index()->unique()->nullable();
            $table->string('name');
            $table->string('father_name');
            $table->string('semester');
            $table->decimal('balance');
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
        Schema::dropIfExists('feeverify');
    }
}
