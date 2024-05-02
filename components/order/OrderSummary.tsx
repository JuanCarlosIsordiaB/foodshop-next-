'use client'
import { useStore } from "@/store/store";
import ProductDetails from "../products/ProductDetails";

export default function OrderSummary() {
    const store = useStore((state) => state.order);
    return (
        <div className=" bg-white">
            {
                store.length === 0 ? (
                    <p>No hay nada</p>
                ): (
                    store.map((item) => (
                        <ProductDetails key={item.product.id} item={item} />
                    ))
                    
                )
            }
        </div>
    )
}