import { OrderItem } from "@/interfaces/category.interface";
import { create } from "zustand";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[];
  addProduct: (product: Product) => void;
}

export const useStore = create<Store>((set) => ({
  order: [],
  addProduct: (product) => {
    
    const {categoryId, image, ...data} = product;
    console.log(data);

    set((state) => ({
      order: [...state.order, { product, quantity: 1, subtotal: product.price}]
      
    }));
    
    
  }
}));
