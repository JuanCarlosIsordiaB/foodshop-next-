import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React, { useEffect } from "react";

async function getCategoriesSideBar() {
  return await prisma.category.findMany();
}

export const GetCategories = async () => {
  const menuCategories = await getCategoriesSideBar();
  
  return (
    <div>
      {menuCategories.map((item) => (
        <li key={item.name} className="mt-4">
          <Link
            href={""}
            className="flex items-center p-2 text-white rounded-lg hover:bg-blue-400"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
};
