<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/scan', function () {
    return view('content.scan');
});

Route::get('/pendaftaran', function () {
    return view('pendaftaran');
});
Route::get('/login', function () {
    return view('login');
});
Route::get('/admin', function () {
    return view('content.admin.admin');
});