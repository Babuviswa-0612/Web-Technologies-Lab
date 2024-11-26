CREATE DATABASE photography;

USE photography;

CREATE TABLE favorite_cameras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    camera_model VARCHAR(100) NOT NULL
);
