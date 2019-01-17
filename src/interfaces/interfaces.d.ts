interface PriceOption {
  id: string;
  price: number;
  description?: string,
}

interface Product {
  id: string;
  title: string;
  category: string;
  prices: PriceOption[];
  img: string;
}

interface BasketItem {
  id: string;
  productId: string;
  priceId: string;
  amount: number;
  title: string;
  description?: string;
}
