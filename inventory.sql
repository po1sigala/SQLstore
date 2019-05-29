DROP DATABASE IF EXISTS  storeDB;
CREATE DATABASE storeDB;

USE storeDB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NOT NULL,
    item_price DECIMAL(65,2) NOT NULL,
    stock_quant INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("sony tv","electronics", 1000.00, 20);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("samsung tv","electronics", 850.99, 60);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("iphone","electronics", 1000.99, 200);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("asus laptop","electronics", 1500.99, 5);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("ipone charger","electronics", 25.99, 80);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES(" burberry watch","acessories", 255.99, 30);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("hair comb","grooming", 8.99, 1000);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("cologne","grooming", 75.99, 80);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("coffee","groceries", 35.99, 150);

INSERT INTO products(product_name,department_name,item_price,stock_quant)
VALUES("dress shoes","clothing", 499.99, 30);

SELECT * FROM products;


