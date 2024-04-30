import ProductCart from "@/components/products/ProductCart";
import { prisma } from "@/lib/prisma";

async function getProduct(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });

  return products;
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProduct(params.category);

  return (
    <>
      <h1 className="text-center font-bold text-3xl my-4 text-slate-400">Choose your next <span className="text-blue-500">Meal</span>.</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
        {
          products.map(product => (
            <ProductCart key={product.id} product={product} />
          ))
        }

      </div>
    </>

  );
}
