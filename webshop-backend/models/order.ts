import { Product } from "./product";


export enum OrderStatus {
    New = "Új",
    InProgress = "Feldolgozás alatt",
    Shipped = "Kiszállítva"
}

export class Order {
    orderId: string;
    products: Product[];
    status: OrderStatus;

    constructor(orderId: string, products: Product[]) {
        this.orderId = orderId;
        this.products = products;
        this.status = OrderStatus.New; 
    }

    
    updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }

    
    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}