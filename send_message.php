<?php
// Menghubungkan ke database
require_once 'config.php';

// Fungsi untuk membersihkan input
function clean_input($data) {
    global $conn;
    return mysqli_real_escape_string($conn, htmlspecialchars($data));
}

$message = '';
$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = clean_input($_POST['nama']);
    $email = clean_input($_POST['email']);
    $pesan = clean_input($_POST['pesan']);

    if (!empty($nama) && !empty($email) && !empty($pesan)) {
        $sql = "INSERT INTO messages (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";
        if (mysqli_query($conn, $sql)) {
            $message = "Pesan Anda berhasil dikirim.";
        } else {
            $error = "Maaf, terjadi kesalahan saat mengirim pesan.";
        }
    } else {
        $error = "Maaf, semua kolom harus diisi.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesan Terkirim</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .container {
            max-width: 600px;
            margin-top: 50px;
        }
        .alert {
            margin-top: 20px;
        }
        .back-button {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="text-center">Status Pengiriman Pesan</h2>
        <?php if ($message): ?>
            <div class="alert alert-success"><?php echo $message; ?></div>
        <?php elseif ($error): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>

        <div class="text-center back-button">
            <button class="btn btn-primary" onclick="window.history.back()">Kembali</button>
        </div>
    </div>
</body>
</html>
