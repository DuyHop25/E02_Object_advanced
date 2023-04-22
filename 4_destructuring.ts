import { Product, createProduct } from "./2_product";

/**
 * Hàm kiểm tra thông tin của một sản phẩm có hợp lệ không.
 * @param product Sản phẩm cần kiểm tra
 * @returns true nếu sản phẩm hợp lệ, false nếu không hợp lệ
 */
function isValid(product: Product): boolean {

    let resuilt: boolean = true;                // biến kết quả

    // Trích xuất và đổi tên các thuộc tính của đối tượng product
    const { name : nameProduct, price: priceProduct }: Product = product;   

    if (nameProduct == "" || priceProduct < 0)  // Kiểm tra tên và giá 
        resuilt = false;

    return resuilt;
}


/**
 * Hàm thực hiện chức năng hàm kiểm tra sản phẩm hợp lệ
 */
function main(): void {

    console.log("Thông tin sản phẩm")

    const product = createProduct("Pen", -10);
    console.log(product);

    //product.input();                           // Nhập sản phẩm mới 
    //console.log(product);

    const resuiltCheck = isValid(product);

    if (resuiltCheck == true)
        console.log("Sản phẩm hợp lệ");
    else
        console.log("Sản phẩm không hợp lệ");

}
main();
