import { OrderItem, Product } from "@/interfaces/category.interface";
import { create } from "zustand";




interface Store {
    order: OrderItem[];
    addProduct: (product: Product) => void;
}


export const useStore = create<Store>((set) => ({
    order: [],
    addProduct: (product) => {console.log('Agregando producto al carrito', product.name)}
}))