interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  img: string;
}

interface BasketItem {
  product: Product;
  amount: number;
}
