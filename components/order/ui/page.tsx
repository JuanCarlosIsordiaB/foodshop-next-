import Link from "next/link";
import React from "react";
import {useParams} from "next/navigation"

interface CategoryProps {
  name: string;
  slug: string;
}

export const SideBarOption = ({ name, slug }: CategoryProps) => {
  const params = useParams<{category: string}>();
  console.log(params)
  return (
    <li>
      <Link
        href={`/order/${slug}`}
        className={`flex items-center p-2 text-white rounded-lg hover:bg-blue-400 my-2 ${slug === params.category ? 'bg-blue-400' : ''}`}
      >
        {name}
      </Link>
    </li>
  );
};
