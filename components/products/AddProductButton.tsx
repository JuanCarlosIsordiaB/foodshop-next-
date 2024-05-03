"use client";

import { Product } from "@/interfaces/category.interface";
import { useStore } from "@/store/store";
import { Toaster, toast } from "sonner";

interface ProductAdded {
  product: Product;
}

export const AddProductButton = ({ product }: ProductAdded) => {
  const addProduct = useStore((state) => state.addProduct);

  const clickAddProductAlert = () => {
    addProduct(product);
    toast.success('Product added to cart!'); // Utiliza toast.success para mostrar una notificación de éxito
  };

  return (
    <div>
      <button
        onClick={clickAddProductAlert}
        className="bg-blue-500 text-xs md:text-md rounded-md font-bold text-white px-4 py-2 mt-5 w-full hover:bg-blue-800 transition-all"
      >
        Add to Cart
      </button>
      <Toaster position="top-right" richColors  /> 
    </div>
  );
};

export default AddProductButton;
