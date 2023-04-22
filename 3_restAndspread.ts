/**
 * Hàm cho phép tạo mảng mới bằng cách mở rộng mảng có trước.
 * @param arr Mảng cần được mở rộng
 * @param elements Rest parameter chứa các phần tử sẽ được dùng để mở rộng mảng arr
 * @returns Mảng mới là tổng hợp từ mảng arr và các giá trị trong tham số elements.
 */
export function extendArray(arr: number[],...elements: (number[])): number[]{
    const tmp: number[] = [...arr,...elements];
    return tmp;
}

/**
 * Hàm Thực hiện chức năng hàm tạo mảng mới bằng cách mở rộng mảng có trước
 */
function main():void{
    
    // Mảng cho trước
    const arr: number[] = [1,2,3];
    console.log("Mảng cho trước ban đầu:\t\t\t  ",arr);

    // Tổng hợp mảng arr và các đối số truyền vào
    const arr_general = extendArray(arr,4,5,6);
    console.log("Mảng tổng hợp sau khi truyền thêm giá trị:",arr_general);

}
main();