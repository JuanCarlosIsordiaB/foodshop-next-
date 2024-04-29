import { prisma } from '@/lib/prisma';
import React from 'react'



async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;

}

const getCategoriesSideBar = () => {
  
  
  return (
    <div>getCategories</div>
  )
}

export default getCategories