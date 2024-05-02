"use client";
import { useStore } from "@/store/store";
import ProductDetails from "../products/ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/helpers";

export default function OrderSummary() {
  const store = useStore((state) => state.order);
  const total = useMemo(
    () =>
      store.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      ),
    [store]
  );
  return (
    <div className="mt-9 lg:flex lg:justify-between">
      <div className="w-full lg:w-2/3">
        {store.length === 0 ? (
          <p className="text-gray-600 mt-5">There's nothing here.</p>
        ) : (
          store.map((item) => (
            <ProductDetails key={item.product.id} item={item} />
          ))
        )}
      </div>
      {store.length > 0 && (
        <div className="w-full lg:w-1/3">
          <p className="text-2xl mt-5 font-bold text-gray-500 text-center  p-2 rounded-md shadow-md">
            Total:{" "}
            <span className="text-blue-800">{formatCurrency(total)}</span>
          </p>
          <button className="bg-blue-500 mt-5 text-white font-bold px-3 py-2 rounded-md hover:bg-blue-700 transition-all w-full">
            Pay Order
          </button>
        </div>
      )}
    </div>
  );
}
