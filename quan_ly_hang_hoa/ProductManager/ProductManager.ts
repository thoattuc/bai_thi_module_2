/* ----Quan ly mat hang---- */

import {Product} from "../Product/Product";
import * as readlineSync from 'readline-sync';
export class ProductManager {
    static products: Product[] = [];

    static importProduct() {
        let productID = readlineSync.question('Ma hang: ');
        let productName = readlineSync.question('Ten hang: ');
        let sector = readlineSync.question('Loai hang: ');
        let price = readlineSync.question('Gia tien (vnd): ');
        let amount = readlineSync.question('So luong: ');
        let dateCreated = new Date();
        let describe = readlineSync.question('Mo ta: ');

        let product = new Product(productID, productName, sector, price, amount, dateCreated, describe);

        this.products.push(product);
    }

    static showListProduct(): Product[] {
        let alert ="Không có mặt hàng nào ở đây!"
        if(this.products.length !== 0){
            return this.products;
        } else {
            console.log(`${alert}`);
        }
    }

    static deleteProduct(): Product[] {
        let index = +readlineSync.question('Nhap ma hang muon xoa: ');
        this.products.splice(index, 1);
        return this.products
    }

    static editProduct(): void {
        let index = readlineSync.question('Nhap ma hang muon sua: ');
        this.products[index].setProductName(readlineSync.question('Ten hang moi: '));
        this.products[index].setSector(readlineSync.question('Loai hang moi: '));
        this.products[index].setPrice(readlineSync.question('Gia moi(vnd): '));
        this.products[index].setAmount(readlineSync.question('So luong moi: '));
        this.products[index].setDate(readlineSync.question(`${new Date()}`));
        this.products[index].setDescribe(readlineSync.question('Mo ta moi: '));
    }

    static searchProduct() {
        let product = readlineSync.question('Nhap mat hang can tim: ');
        let productNeeded = [];
        let count = 0;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].getProductName().includes(product)) {
                productNeeded.push(this.products[i]);
            }
            count++;
        }
        return productNeeded;
    }
}