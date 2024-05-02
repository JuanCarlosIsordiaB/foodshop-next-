import OrderUI from "@/components/order/OrderSummary";

export default function OrderPage() {
  return (
    <div className=" flex flex-col text-center justify-center">
      <h1 className="text-gray-500 font-bold text-4xl mt-9">Summary <span className="text-blue-500">Order</span></h1>
      <OrderUI />
    </div>
  );
}
