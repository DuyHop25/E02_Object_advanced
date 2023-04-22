import { Product, createProduct } from './2_Product';
import { Cart, createCart } from './2_cart';

/**
 * Hàm nhập và in ra thông tin sản phẩm file 2_Product
 */
function Product() {

    console.log("Nhập thông tin sản phẩm \n");

    let result_product = createProduct("Pen", 20);   // sản phẩm truyền mặc định

    result_product.input();                         // Nhập sản phẩm mới

    console.log("\n Thông tin sản phẩm", result_product);

}
Product();



/**
 * Hàm nhập và in ra thông tin giỏ hàng file 2_cart
 */
function Cart() {

    console.log("\nNhập thông tin giỏ hàng \n");

    let resultCart = createCart();

    resultCart.input();                             // Nhập sản phẩm mới

    console.log("Thông tin giỏ hàng \n", resultCart);

    console.log("\nTổng giá sản phẩm của giỏ hàng (giảm giá 10%):", resultCart.priceTotal(10), "VND");
    console.log("\nTổng giá sản phẩm của giỏ hàng (giảm giá 20%):", resultCart.priceTotal(20), "VND");

}
Cart();


