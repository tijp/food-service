export enum CATEGORIES {
  ONE = 'Category 1',
  TWO = 'Category 2',
};

export const newProduct: Product = {
  id: '7',
  title: 'Pizza Tonno',
  category: CATEGORIES.ONE,
  price: 26.99,
  img: require('assets/images/food4.jpg'),
};

export const products: Product[] = [{
  id: '1',
  title: 'Pizza Margherita',
  category: CATEGORIES.ONE,
  price: 23.99,
  img: require('assets/images/food1.jpg'),
}, {
  id: '2',
  title: 'Spaghetti Bolognese',
  category: CATEGORIES.ONE,
  price: 19.99,
  img: require('assets/images/food2.jpg'),
}, {
  id: '3',
  title: 'Spinazie',
  category: CATEGORIES.ONE,
  price: 29.99,
  img: require('assets/images/food3.jpg'),
}, {
  id: '4',
  title: 'Hamburger',
  category: CATEGORIES.TWO,
  price: 5.99,
  img: require('assets/images/food4.jpg'),
}, {
  id: '5',
  title: 'Sperziebonen',
  category: CATEGORIES.TWO,
  price: 7.99,
  img: require('assets/images/food5.jpg'),
}, {
  id: '6',
  title: 'Bruine Bonen',
  category: CATEGORIES.TWO,
  price: 4.99,
  img: require('assets/images/food6.jpg'),
}];

export const findProduct = (id: string) =>
  products.find(product => product.id === id);

export const getProductFromCategory = (category: CATEGORIES) =>
  products.filter(product => product.category === category);
