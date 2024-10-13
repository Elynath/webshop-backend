

import { Order } from "./order";
import { Product } from "./product";

export class User {
    private userId: string;
    private name: string;
    private email: string;
    private orders: Order[] = [];

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    
    placeOrder(products: Product[]): Order {
        const newOrder = new Order(this.generateOrderId(), products);
        this.orders.push(newOrder);
        return newOrder;
    }

    
    private generateOrderId(): string {
        return `ORD-${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;
    }

    
    getUserId(): string {
        return this.userId;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getOrders(): Order[] {
        return this.orders;
    }
}
