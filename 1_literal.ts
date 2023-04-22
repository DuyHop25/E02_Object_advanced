import { question } from "readline-sync"

// Định nghĩa kiểu Product
type Product = {
  name: string;
  price: number;
  input: () => void;
};


/**
 * Hàm định nghĩa đối tượng sản phẩm
 */
const product: Product = {


  // Khai báo thuộc tính
  name: "",
  price: 0,


  // Định nghĩa phương thức
  /**
   * Phương thức nhập thông tin của một product
   */
  input(): void {
    this.name = (question("nhap ten: "));
    this.price = Number(question("nhap gia: "));
  }
};


// Test method
product.input();
console.log(product);

