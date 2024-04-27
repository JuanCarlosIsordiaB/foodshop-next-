import OrderSidebar from "@/components/order/OrderUI";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="md:flex">
        <main>{children}</main>
      </div>
    </>
  );
}
