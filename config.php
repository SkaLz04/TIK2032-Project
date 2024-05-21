<?php
$servername = "localhost";
$username = "root"; // Username default untuk XAMPP
$password = ""; // Password default untuk XAMPP
$dbname = "myportofolio"; // Pastikan ini adalah nama database yang benar

// Membuat koneksi
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Memeriksa koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
