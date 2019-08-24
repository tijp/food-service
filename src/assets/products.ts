export enum CATEGORIES {
  SALADS = 'Salades',
  APPETIZERS = 'Hapjes',
};

export const products: Product[] = [{
  id: '1',
  title: 'Huzarensalade',
  category: CATEGORIES.SALADS,
  description: 'Lekker salade met frisse stukjes appel, voor een verjaardag, bbq of gewoon lekker voor de zomerdag. De garnering kan per seizoen verschillen. Voorkeuren voor de garnering kunnen worden doorgegeven tijdens het bestellen, dan hou ik daar rekening mee!.',
  img: require('assets/images/huzaren.jpeg'),
  prices: [
    { id: 'a', description: '6 personen', price: 20 },
    { id: 'b', description: '8 personen', price: 25 },
    { id: 'c', description: '10 personen', price: 30 },
  ],
}, {
  id: '2',
  title: 'Rundvleessalade',
  category: CATEGORIES.SALADS,
  description: 'Hou je meer van een vollere salade, kies dan voor de rundvleessalade. Heb je voorkeur voor bepaalde vleeswaren wat betreft de garnering, dan hou ik daar uiteraard rekening mee!',
  img: require('assets/images/rundvlees.jpeg'),
  prices: [
    { id: 'a', description: '6 personen', price: 20 },
    { id: 'b', description: '8 personen', price: 25 },
    { id: 'c', description: '10 personen', price: 30 },
  ],
}, {
  id: '3',
  title: 'Hapjes',
  category: CATEGORIES.APPETIZERS,
  description: 'Leuke schaal met lekkere hapjes, voor ieder wat wils. Maak keuze tussen standaard en luxe hapjes, zoals wrap met zalm, runderrookvlees omwikkeld met ei en nog veel meer! Variërend van €0,50 tot €0,80 per stuk.',
  img: require('assets/images/hapjes2.jpg'),
  prices: [
    { id: 'a', description: 'Standaard hapje per stuk', price: 0.5 },
    { id: 'b ', description: 'Luxe hapje per stuk', price: 0.8 },
  ],
}, {
  id: '4',
  title: 'Gevulde eieren',
  category: CATEGORIES.APPETIZERS,
  description: 'Lekkere gevulde verse eitjes, doen het altijd goed op een feestje, maar wat een gepruts om te maken……gewoon lekker makkelijk bestellen bij Els.',
  img: require('assets/images/gevulde-eitjes.jpg'),
  prices: [
    { id: 'a', description: 'Per stuk', price: 0.8 },
  ],
}, {
  id: '5',
  title: 'Hapjes voor kids',
  category: CATEGORIES.APPETIZERS,
  description: 'Leuke schaal met hapjes voor de kids. Bevat snoepgoed en gezond fruit met leuke decoraties.',
  img: require('assets/images/hapjes-voor-kids.jpg'),
  prices: [
    { id: 'a', description: 'Per stuk', price: 0.50 },
  ],
}];

export const findProduct = (id: string) =>
  products.find(product => product.id === id);

export const findPrice = (productId: string, priceId: string) => {
  const product = findProduct(productId);
  if (!product) return null;

  return product.prices.find(price => price.id === priceId);
}

export const getProductsFromCategory = (category: string) =>
  products.filter(product => product.category === category);
