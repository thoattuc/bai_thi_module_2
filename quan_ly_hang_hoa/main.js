"use strict";
exports.__esModule = true;
var ProductManager_1 = require("./ProductManager/ProductManager");
var readlineSync = require("readline-sync");
var Menu_1 = require("./Menu/Menu");
function menu() {
    console.log("1: Thêm mặt hàng");
    console.log("2: Hiển thị danh sách hàng hóa");
    console.log("3: Xóa mặt hàng");
    console.log("4: Chỉnh sửa mặt hàng");
    console.log("5: Tìm mặt hàng");
    console.log("0: Thoát");
}
var exit = false;
while (!exit) {
    menu();
    var number = +readlineSync.question("SELECT FUNCTION: ");
    switch (number) {
        case Menu_1.Menu.add:
            ProductManager_1.ProductManager.importProduct();
            break;
        case Menu_1.Menu.showList:
            console.table(ProductManager_1.ProductManager.showListProduct());
            break;
        case Menu_1.Menu["delete"]:
            ProductManager_1.ProductManager.deleteProduct();
            break;
        case Menu_1.Menu.edit:
            ProductManager_1.ProductManager.editProduct();
            break;
        case Menu_1.Menu.search:
            console.log(ProductManager_1.ProductManager.searchProduct());
            break;
        case Menu_1.Menu.exit:
            exit = true;
    }
}
