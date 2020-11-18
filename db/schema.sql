CREATE DATABASE wyz6xr1ilvrqvnsb;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    primaary key("id")
)

SELECT * from burgers;