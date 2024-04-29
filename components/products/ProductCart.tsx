import { formatCurrency } from '@/helpers';
import { products } from '@/prisma/data/products';
import {Product } from '@prisma/client';
import Image from 'next/image';

interface ProductCartProps {
  product: Product;

}

export default function ProductCart({ product}: ProductCartProps) {
  return (
    <div className='border bg-white relative' >
      <Image  width={400} height={400} src={`/products/${product.image}.jpg`} alt={`Image of ${product.name}`}/>
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{product.name}</h3>
        <p className='mt-5 font-bold text-xl text-amber-500'>
          {formatCurrency(product.price) }
        </p>
        <button
          className='bg-blue-500 rounded-md font-bold text-white px-4 py-2 mt-5 w-full hover:bg-blue-800 transition-all'
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}
