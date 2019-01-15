export enum CATEGORIES {
  SALADS = 'Salades',
  APPETIZERS = 'Hapjes',
};

export const products: Product[] = [{
  id: '1',
  // title: 'Huzaren Salade - 4/8/? personen',
  title: 'Food 1',
  category: CATEGORIES.SALADS,
  prices: [{
    id: 'a',
    description: '4 personen',
    price: 15,
  }, {
    id: 'b',
    description: '8 personen',
    price: 25,
  }],
  img: require('assets/images/food1.jpg'),
}, {
  id: '2',
  title: 'Rundvlees Salade',
  category: CATEGORIES.SALADS,
  prices: [{
    id: 'a',
    description: '4 personen',
    price: 15,
  }, {
    id: 'b',
    description: '8 personen',
    price: 25,
  }],
  img: require('assets/images/food2.jpg'),
}, {
  id: '3',
  title: 'Gemixte Hapjes',
  category: CATEGORIES.APPETIZERS,
  prices: [{
    id: 'a',
    price: 13,
  }],
  img: require('assets/images/food3.jpg'),
}, {
  id: '4',
  title: 'Gevulde eieren',
  category: CATEGORIES.APPETIZERS,
  prices: [{
    id: 'a',
    description: '10 stuks',
    price: 6,
  }, {
    id: 'b',
    description: '20 stuks',
    price: 11,
  }],
  img: require('assets/images/food4.jpg'),
}];

export const findProduct = (id: string) =>
  products.find(product => product.id === id);

export const findPrice = (productId: string, priceId: string) => {
  const product = findProduct(productId);
  if (!product) return null;

  return product.prices.find(price => price.id === priceId);
}

export const getProductFromCategory = (category: CATEGORIES) =>
  products.filter(product => product.category === category);
