interface Category {
  id: number;
  name: string;
  slug: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
  category: Category;
}
