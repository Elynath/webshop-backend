import { IOrderService } from "./IOrderService";
import { InventoryService } from "./inventoryService";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Order } from "../models/order";

export class UserService implements IOrderService {
    private users: User[] = [];
    private inventoryService: InventoryService;

    constructor(inventoryService: InventoryService) {
        this.inventoryService = inventoryService;
    }

    
    addUser(user: User): void {
        this.users.push(user);
    }

    
    placeOrder(userId: string, products: Product[]): Order {
        const user = this.users.find(u => u.getUserId() === userId);
        if (!user) {
            throw new Error("Felhasználó nem található");
        }

        
        for (const product of products) {
            if (!this.inventoryService.checkProductAvailability(product.id)) {
                throw new Error(`A termék nem elérhető: ${product.name}`);
            }
        }

        
        const newOrder = user.placeOrder(products);
        return newOrder;
    }

    
    checkProductAvailability(productId: string): boolean {
        return this.inventoryService.checkProductAvailability(productId);
    }
}