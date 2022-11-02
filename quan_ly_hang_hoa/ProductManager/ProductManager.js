"use strict";
/* ----Quan ly mat hang---- */
exports.__esModule = true;
exports.ProductManager = void 0;
var Product_1 = require("../Product/Product");
var readlineSync = require("readline-sync");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    ProductManager.importProduct = function () {
        var productID = readlineSync.question('Ma hang: ');
        var productName = readlineSync.question('Ten hang: ');
        var sector = readlineSync.question('Loai hang: ');
        var price = readlineSync.question('Gia tien (vnd): ');
        var amount = readlineSync.question('So luong: ');
        var dateCreated = new Date();
        var describe = readlineSync.question('Mo ta: ');
        var product = new Product_1.Product(productID, productName, sector, price, amount, dateCreated, describe);
        this.products.push(product);
    };
    ProductManager.showListProduct = function () {
        var alert = "Khong co mat hang nao o day!";
        if (this.products.length !== 0) {
            return this.products;
        }
        else {
            console.log("".concat(alert));
        }
    };
    ProductManager.deleteProduct = function () {
        var index = +readlineSync.question('Nhap ma hang muon xoa: ');
        this.products.splice(index, 1);
        return this.products;
    };
    ProductManager.editProduct = function () {
        var index = readlineSync.question('Nhap ma hang muon sua: ');
        this.products[index].setProductName(readlineSync.question('Ten hang moi: '));
        this.products[index].setSector(readlineSync.question('Loai hang moi: '));
        this.products[index].setPrice(readlineSync.question('Gia moi(vnd): '));
        this.products[index].setAmount(readlineSync.question('So luong moi: '));
        this.products[index].setDate(readlineSync.question("".concat(new Date())));
        this.products[index].setDescribe(readlineSync.question('Mo ta moi: '));
    };
    ProductManager.searchProduct = function () {
        var product = readlineSync.question('Nhap mat hang can tim: ');
        var productNeeded = [];
        var count = 0;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].getProductName().includes(product)) {
                productNeeded.push(this.products[i]);
            }
            count++;
        }
        return productNeeded;
    };
    ProductManager.products = [];
    return ProductManager;
}());
exports.ProductManager = ProductManager;
