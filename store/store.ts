import { OrderItem } from "@/interfaces/category.interface";
import { create } from "zustand";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[];
  addProduct: (product: Product) => void;
  increaseQuantity: (product: Product["id"]) => void;
  decreaseQuantity: (product: Product["id"]) => void;
  deleteProduct: (product: Product["id"]) => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addProduct: (product) => {
    const { categoryId, image, ...data } = product;

    let items: OrderItem[] = [];

    if (get().order.find((item) => item.product.id === product.id)) {
      items = get().order.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: (item.quantity + 1) * item.product.price,
            }
          : item
      );
    } else {
      items = [
        ...get().order,
        { product, quantity: 1, subtotal: 1 * product.price },
      ];
    }

    set((state) => ({
      order: items,
    }));
  },
  increaseQuantity: (id) => {
    const items = get().order.map((item) =>
      item.product.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            subtotal: (item.quantity + 1) * item.product.price,
          }
        : item
    );

    set((state) => ({
      order: items,
    }));
  },
  decreaseQuantity: (id) => {
    const items = get().order.map((item) =>
      item.product.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: (item.quantity - 1) * item.product.price,
          }
        : item
    );

    set((state) => ({
      order: items,
    }));
  },
  deleteProduct: (id) => {
    const items = get().order.filter((item) => item.product.id !== id);

    set((state) => ({
      order: items,
    }));
  },
  
}));
