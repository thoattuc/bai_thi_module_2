import {ProductManager} from "./ProductManager/ProductManager";
import * as readlineSync from "readline-sync";
import {Menu} from "./Menu/Menu";

function menu() {
    console.log("1: Thêm mặt hàng");
    console.log("2: Hiển thị danh sách hàng hóa");
    console.log("3: Xóa mặt hàng");
    console.log("4: Chỉnh sửa mặt hàng");
    console.log("5: Tìm mặt hàng");
    console.log("0: Thoát");
}

let exit = false
while (!exit) {
    menu()
    let number = +readlineSync.question("SELECT FUNCTION: ")
    switch (number) {
        case Menu.add:
            ProductManager.importProduct();
            break;
        case Menu.showList:
            console.table(ProductManager.showListProduct());
            break;
        case Menu.delete:
            ProductManager.deleteProduct();
            break;
        case Menu.edit:
            ProductManager.editProduct();
            break;
        case Menu.search:
            console.log(ProductManager.searchProduct());
            break;
        case Menu.exit:
            exit = true
    }
}