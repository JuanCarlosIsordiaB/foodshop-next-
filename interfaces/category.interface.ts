export interface Category {
  id: number;
  name: string;
  slug: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
  category?: Category;
}
export interface OrderItem {
  product: Product;
  subtotal: number;
  quantity: number;
}
