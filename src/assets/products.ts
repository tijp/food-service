export enum CATEGORIES {
  SALADS = 'Salades',
  APPETIZERS = 'Hapjes',
};

export const products: Product[] = [{
  id: '1',
  title: 'Huzarensalade',
  category: CATEGORIES.SALADS,
  description: 'Lekker salade met frisse stukjes appel, voor een verjaardag, bbq of gewoon lekker voor de zomerdag. De garnering kan per seizoen verschillen.',
  prices: [{
    id: 'a',
    description: '4 personen',
    price: 15,
  }, {
    id: 'b',
    description: '8 personen',
    price: 25,
  }],
  img: require('assets/images/huzaren.jpg'),
}, {
  id: '2',
  title: 'Rundvleessalade',
  category: CATEGORIES.SALADS,
  description: 'Hou je meer van een vollere salade, kies dan voor de rundvleessalade. Heb je voorkeur voor bepaalde vleeswaren wat betreft de garnering, dan hou ik daar uiteraard rekening mee!',
  prices: [{
    id: 'a',
    description: '4 personen',
    price: 15,
  }, {
    id: 'b',
    description: '8 personen',
    price: 25,
  }],
  img: require('assets/images/rundvlees.jpg'),
}, {
  id: '3',
  title: 'Gemixte Hapjes',
  category: CATEGORIES.APPETIZERS,
  description: 'Leuke schaal met lekkere hapjes, voor ieder wat wils en ook hier is het uiteraard mogelijk bepaalde keuzes kenbaar te maken, dan hou ik daar gewoon rekening mee!',
  prices: [{
    id: 'a',
    price: 13,
  }],
  img: require('assets/images/gemixte-hapjes.jpg'),
}, {
  id: '4',
  title: 'Gevulde eieren',
  category: CATEGORIES.APPETIZERS,
  description: 'Lekkere gevulde verse eitjes, doen het altijd goed op een feestje, maar wat een gepruts om te maken……gewoon lekker makkelijk bestellen bij Els.',
  prices: [{
    id: 'a',
    description: '10 stuks',
    price: 7,
  }, {
    id: 'b',
    description: '20 stuks',
    price: 12,
  }],
  img: require('assets/images/gevulde-eitjes.jpg'),
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
