import { formatCurrency } from "@/helpers";
import { OrderItem } from "@/interfaces/category.interface";
import { useStore } from "@/store/store";
import { PlusIcon, MinusIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useMemo } from "react";


interface ProductDetailsProps {
  item: OrderItem;
}

export default function ProductDetails({ item }: ProductDetailsProps) {
    const increaseQuantity = useStore((state) => state.increaseQuantity);
    const decreaseQuantity = useStore((state) => state.decreaseQuantity);
    const deleteProduct = useStore((state) => state.deleteProduct);
    const disableDecreaseButton = useMemo(() => item.quantity === 1, [item]);


    const confirmationDeleteItem = (id:any) => {
        const confirmDelete = window.confirm("¿Estás seguro de eliminar este producto?");
        if (confirmDelete) {
          deleteProduct(id);
        }

    }

  return (

    

    <div className="shadow-xl space-y-1 p-4 m-1 bg-white rounded-md   border-t  ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{item.product.name} </p>

          <button type="button" onClick={() => {confirmationDeleteItem(item.product.id)}}>
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">{formatCurrency(item.product.price)}</p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button type="button" disabled={disableDecreaseButton} className="disabled:opacity-35" onClick={() => {decreaseQuantity(item.product.id)}}>
            <MinusIcon className="h-6 w-6" />

          </button>

          <p className="text-lg font-black ">{item.quantity}</p>

          <button type="button" onClick={() => {increaseQuantity(item.product.id)}}>
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {formatCurrency(item.subtotal)}
          <span className="font-normal"></span>
        </p>
      </div>
    </div>
  );
}
