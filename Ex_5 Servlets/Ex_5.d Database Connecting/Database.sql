CREATE DATABASE photography;

USE photography;

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    feedback TEXT NOT NULL
);
