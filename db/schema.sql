DROP DATABASE IF EXISTS dj_bookingDB;
CREATE database dj_bookingDB;

USE dj_bookingDB;

CREATE TABLE dj_profile (
  id  INT (10) AUTO_INCREMENT,
  dj_name VARCHAR(100) NOT NULL,
  dj_bio VARCHAR(300) NULL,
  dj_zip INT(5) NOT NULL,
  dj_phone DECIMAL(10) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE vendor_profile (
  id INT (10) AUTO_INCREMENT,
  vendor_name VARCHAR(100) NOT NULL,
  vendor_zip INT(5) NOT NULL,
  vendor_phone DECIMAL(10) NOT NULL,
  event_location VARCHAR(300) NOT NULL,
  event_time INT(5) NOT NULL,
  cover_ticket_price INT(5) NOT NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO dj_profile(dj_name, dj_bio, dj_zip, dj_phone)
VALUES ("DJ V-RAM", "Best in the West... and the rest", 90640, 3236336720);
