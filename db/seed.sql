CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(25),
price INT,
img TEXT
);

INSERT INTO products (
product_name,
price,
img
) VALUES (
'Cheetos',
4,
'https://images-na.ssl-images-amazon.com/images/I/91dl7O-wxhL._SX425_PIbundle-40,TopRight,0,0_AA425SH20_.jpg'
),
(
'Slim Jim',
8,
'https://target.scene7.com/is/image/Target/GUEST_09c8ff9d-b838-413e-a594-ceb1e4a12f7f?wid=488&hei=488&fmt=pjpeg'
);

SELECT * FROM products;