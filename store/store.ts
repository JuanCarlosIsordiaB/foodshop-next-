import { OrderItem } from "@/interfaces/category.interface";
import { create } from "zustand";




interface Store {
    order: OrderItem[];
}


export const useStore = create<Store>((set) => ({
    order: [],
    addProduct: (product: OrderItem) => set((state) => ({ order: [...state.order, product] })),
    removeProduct: (product: OrderItem) => set((state) => ({ order: state.order.filter((item) => item.product.id !== product.product.id) })),
}))