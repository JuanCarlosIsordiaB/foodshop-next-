'use client'

import { Product } from "@/interfaces/category.interface";
import { useStore } from "@/store/store";

interface ProductAdded {
    product: Product;
}
export const AddProductButton = ({product}:ProductAdded) => {
    const addProduct = useStore((state) => state.addProduct);
  return (
    <button
      onClick={() => addProduct(product)}
      className="bg-blue-500 text-xs md:text-md rounded-md font-bold text-white px-4 py-2 mt-5 w-full hover:bg-blue-800 transition-all"
    >
      Add to Cart
    </button>
  );
};

export default AddProductButton;
