import { formatCurrency } from '@/helpers';
import { products } from '@/prisma/data/products';
import { Product } from '@prisma/client';
import Image from 'next/image';

interface ProductCartProps {
  product: Product;
}

export default function ProductCart({ product }: ProductCartProps) {
  return (
    <div className='border m-2 rounded-md shadow-md bg-white relative sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl mx-auto p-4 h-[600px] md:h-[900px] flex flex-col justify-between'>

      <Image
        className='w-full h-auto'
        width={400}
        height={400}
        src={`/productsImages/${product.image}.jpg`}
        alt={`Image of ${product.name}`}
      />
      <div className='p-5'>
        <h3 className=' text-xl md:text-2xl font-bold'>{product.name}</h3>
        <p className='mt-5 font-bold text-xl text-amber-500'>
          {formatCurrency(product.price)}
        </p>
        <button
          className='bg-blue-500 text-xs md:text-md rounded-md font-bold text-white px-4 py-2 mt-5 w-full hover:bg-blue-800 transition-all'
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}
