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
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {
          products.map(product => (
            <ProductCart key={product.id} product={product} />
          ))
        }

      </div>
    </>

  );
}
