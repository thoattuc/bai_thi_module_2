/* ----Class: Thong Tin Mat Hang---- */

export class Product {
    private productID: number;
    private productName: string;
    private sector: string;
    private price: number;
    private amount: number;
    private dateCreated: Date;
    private describe: string;

    constructor(productID: number,
    productName: string,
    sectors: string,
    price: number,
    amount: number,
    dateCreated: Date,
    introduct: string) {
        this.productID = productID;
        this.productName = productName;
        this.sector = sectors;
        this.price = price;
        this.amount = amount;
        this.dateCreated = dateCreated;
        this.describe = introduct;
    }

    getProductID(): number{
        return this.productID;
    }

    getProductName(): string{
        return this.productName;
    }

    getSector(): string{
        return this.sector;
    }

    getPrice(): number{
        return this.price;
    }

    getAmount(): number{
        return this.amount;
    }

    getDateCreated(): Date{
        return this.dateCreated;
    }

    getDescribe(): string{
        return this.describe;
    }

    setProductName(value: string): void{
        this.productName = value;
    }
    setSector(value: string): void{
        this.sector = value;
    }
    setPrice(value: number): void{
        this.price = value;
    }
    setAmount(value: number): void{
        this.amount = value;
    }
    setDate(value: Date): void{
        this.dateCreated = new Date();
    }
    setDescribe(value: string): void{
        this.describe = value;
    }

}