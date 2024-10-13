import { Product } from "../models/product";
import { Order } from "../models/order";

export interface IOrderService {
    placeOrder(userId: string, products: Product[]): Order;
    checkProductAvailability(productId: string): boolean;
}