export enum CATEGORIES {
  ONE = 'Category 1',
  TWO = 'Category 2',
};

const products: Product[] = [{
  id: '1',
  title: 'Item 1',
  category: CATEGORIES.ONE,
  price: 23.99,
  img: require('assets/images/food1.jpg'),
}, {
  id: '2',
  title: 'Item 2',
  category: CATEGORIES.ONE,
  price: 19.99,
  img: require('assets/images/food2.jpg'),
}, {
  id: '3',
  title: 'Item 3',
  category: CATEGORIES.ONE,
  price: 29.99,
  img: require('assets/images/food3.jpg'),
}, {
  id: '4',
  title: 'Item 1',
  category: CATEGORIES.TWO,
  price: 5.99,
  img: require('assets/images/food4.jpg'),
}, {
  id: '5',
  title: 'Item 2',
  category: CATEGORIES.TWO,
  price: 7.99,
  img: require('assets/images/food5.jpg'),
}, {
  id: '6',
  title: 'Item 3',
  category: CATEGORIES.TWO,
  price: 4.99,
  img: require('assets/images/food6.jpg'),
}];

export const findProduct = (id: string) =>
  products.find(product => product.id === id);

export const getProductFromCategory = (category: CATEGORIES) =>
  products.filter(product => product.category === category);

export default products;
