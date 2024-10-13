import { Product } from "../models/product";

export class InventoryService {
    private products: Product[] = [];

    
    addProduct(product: Product): void {
        this.products.push(product);
    }

    
    removeProductById(productId: string): boolean {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }

    
    findProduct(query: string): Product | undefined {
        return this.products.find(product => product.id === query || product.name.toLowerCase() === query.toLowerCase());
    }

    
    checkProductAvailability(productId: string): boolean {
        return this.products.some(product => product.id === productId);
    }

    
    listAllProducts(): Product[] {
        return this.products;
    }
}