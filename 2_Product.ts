import { question } from "readline-sync"

// Định nghĩa kiểu Product
type Product = {
  name: string;
  price: number;
  input: () => void;
};

const createProduct = (name: string, price: number): Product => {

  // Đối tượng Product
  const product: Product = {
    name,
    price,

    // Định nghĩa phương thức
    /**
     * Phương thức nhập thông tin của một product
     */
    input(): void {
      this.name = (question("nhap ten: "));
      this.price = Number(question("nhap gia: "));
    }
  }

  return product;
}
// Xuất kiểu Product và đối tượng product
export { Product, createProduct };