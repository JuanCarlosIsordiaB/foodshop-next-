import Link from "next/link";
import React from "react";

interface CategoryProps {
  name: string;
  slug: string;
}

export const SideBarOption = ({ name, slug }: CategoryProps) => {
  return (
    <li>
      <Link
        href={`/order/${slug}`}
        className="flex items-center p-2 text-white rounded-lg hover:bg-blue-400 my-2"
      >
        {name}
      </Link>
    </li>
  );
};