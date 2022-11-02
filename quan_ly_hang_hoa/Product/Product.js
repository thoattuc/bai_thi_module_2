"use strict";
/* ----Class: Thong Tin Mat Hang---- */
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productID, productName, sectors, price, amount, dateCreated, introduct) {
        this.productID = productID;
        this.productName = productName;
        this.sector = sectors;
        this.price = price;
        this.amount = amount;
        this.dateCreated = dateCreated;
        this.describe = introduct;
    }
    Product.prototype.getProductID = function () {
        return this.productID;
    };
    Product.prototype.getProductName = function () {
        return this.productName;
    };
    Product.prototype.getSector = function () {
        return this.sector;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getAmount = function () {
        return this.amount;
    };
    Product.prototype.getDateCreated = function () {
        return this.dateCreated;
    };
    Product.prototype.getDescribe = function () {
        return this.describe;
    };
    Product.prototype.setProductName = function (value) {
        this.productName = value;
    };
    Product.prototype.setSector = function (value) {
        this.sector = value;
    };
    Product.prototype.setPrice = function (value) {
        this.price = value;
    };
    Product.prototype.setAmount = function (value) {
        this.amount = value;
    };
    Product.prototype.setDate = function (value) {
        this.dateCreated = new Date();
    };
    Product.prototype.setDescribe = function (value) {
        this.describe = value;
    };
    return Product;
}());
exports.Product = Product;
