export enum CATEGORIES {
  SALADS = 'Salades',
  APPETIZERS = 'Hapjes',
};

export const products: Product[] = [{
  id: '1',
  title: 'Huzaren Salade - 4/8/? personen',
  category: CATEGORIES.SALADS,
  price: 25,
  img: require('assets/images/food1.jpg'),
}, {
  id: '2',
  title: 'Rundvlees Salade - 4/8/? personen',
  category: CATEGORIES.SALADS,
  price: 25,
  img: require('assets/images/food2.jpg'),
}, {
  id: '3',
  title: 'Gemixte Hapjes',
  category: CATEGORIES.APPETIZERS,
  price: 13,
  img: require('assets/images/food3.jpg'),
}, {
  id: '4',
  title: 'Gevulde eieren - 10/20 stuks',
  category: CATEGORIES.APPETIZERS,
  price: 6,
  img: require('assets/images/food4.jpg'),
}];

export const findProduct = (id: string) =>
  products.find(product => product.id === id);

export const getProductFromCategory = (category: CATEGORIES) =>
  products.filter(product => product.category === category);
