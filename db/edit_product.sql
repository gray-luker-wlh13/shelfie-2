UPDATE products
SET product_name = ($1), price = ($2), img = ($3)
WHERE id = ($4);