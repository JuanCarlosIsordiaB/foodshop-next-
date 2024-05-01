'use client'
import { useStore } from "@/store/store";

export default function OrderSummary() {
    const store = useStore((state) => state.order);
    return (
        <div className=" bg-white">
            {
                store.length === 0 ? (
                    <p>No hay nada</p>
                ): (
                    <p>Si hay</p>
                )
            }
        </div>
    )
}