import { question } from 'readline-sync';
import { Product, createProduct } from './2_Product';

// Định nghĩa kiểu Cart
type Cart = {
  productList: Product[];
  customer: string;
  input: () => void;
  priceTotal: (discount: number) => number;
};


/**
 * Factory function tạo ra đối tượng Cart
 * @returns Đối tượng giỏ hàng --> Cart
 */
function createCart(): Cart {
  const cart: Cart = {

    // Khai báo thuộc tính
    productList: [],
    customer: "string",


    // Định nghĩa phương thức
    /**
     * Phương thức nhập thông tin giỏ hàng
    */
    input() {
      // Nhập tên khách hàng
      cart.customer = question("Nhap ten khach hang: ");

      // Vòng lặp để nhập mảng sản phẩm
      while (true) {

        // Tạo đối tượng sản phẩm mới bằng hàm createProduct
        const createProduct = (name: string, price: number): Product => {

          const product: Product = {
            name,
            price,

            input(): void {
              this.name = (question("nhap ten san pham: "));
              this.price = Number(question("nhap gia san pham: "));
            }
          }
          return product;
        }

        // Thêm đối tượng sản phẩm (đã có dữ liệu) vào mảng productList

        let product = createProduct("pen", 10); // sản phẩm mặc định
        product.input();                        // Nhập sản phẩm mới
        cart.productList.push(product);         // Thêm dữ liệu vào mảng

        console.log('\nSản phẩm đã thêm thành công.');

        // // Xử lý tiếp tục / dừng lại
        const next = question('Nhan phim N de dung, nhan phim bat ki de tiep tuc: ');
        console.log("");
        if (next == "N")
          break;
      }
    },


    /**
    * Tính tổng giá của các sản phẩm trong giỏ hàng sau khi đã trừ đi khuyến mãi
    * @param discount là một số nguyên trong đoạn [0, 100] cho biết tỉ lệ phần trăm được giảm giá.
    * @returns Tổng giá
    */
    priceTotal(discount: number = 0) {
      // Nếu mảng rỗng thì tổng giá là 0
      if (cart.productList.length == 0)
        return 0;

      // Nếu mảng không rỗng thì xử lý tiếp
      // Tính tổng giá
      let total = 0;
      for (let item of cart.productList) {
        total += item.price;
      }

      // Xử lý giảm giá
      total = total - (total * discount / 100);

      return total;
    },
  }
  return cart;
}




// Xuất kiểu Cart và factory function createCart
export { Cart, createCart };