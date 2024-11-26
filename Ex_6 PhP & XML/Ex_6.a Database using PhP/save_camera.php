<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "photography";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect data from form
$name = $_POST['name'];
$camera = $_POST['camera'];

// Insert into database
$sql = "INSERT INTO favorite_cameras (name, camera_model) VALUES ('$name', '$camera')";

if ($conn->query($sql) === TRUE) {
    echo "Thank you, $name! Your favorite camera ($camera) has been recorded.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
