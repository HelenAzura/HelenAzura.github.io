<?php 
$favorite_color = "зеленый";
$favorite_number = 42;
$welcome_text = "Привет, мой любимый цвет - " . $favorite_color . ", а любимое число - " . $favorite_number .".";
print($welcome_text);
?>

require('products_db.php');
require('components/header.php');

$id = $_GET['product_id'];

$title = get_product_title($id);
$img_url = get_img_url($id);

require('components/product_info.php');
require('components/footer.php');