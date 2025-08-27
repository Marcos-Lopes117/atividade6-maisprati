import produto from '../assets/produto.png';

export const products = [
  {
    id: '1',
    title: 'Produto Incrível A',
    price: 150.00,
    rating: 4.5,
    tag: "Novo", // Deve ser 'Novo' ou 'Promo'
    image: produto,
  },
  {
    id: '2',
    title: 'Produto Sensacional B',
    price: 250.00,
    rating: 4.8,
    tag: "Promo", // Deve ser 'Novo' ou 'Promo'
    image: produto,
  },
  {
    id: '3',
    title: 'Outro Produto C',
    price: 99.00,
    rating: 4.2,
    tag: "Novo", // Ou 'Promo'
    image: produto,
  },
  // Continue a lista, garantindo que a tag seja 'Novo' ou 'Promo'
  {
    id: '4',
    title: 'Oferta Especial D',
    price: 75.00,
    rating: 3.9,
    tag: "Promo",
    image: produto,
  },
  {
    id: '5',
    title: 'Item de Luxo E',
    price: 450.00,
    rating: 5.0,
    tag: "Novo",
    image: produto,
  },
  {
    id: '6',
    title: 'Produto Clássico F',
    price: 120.00,
    rating: 4.7,
    tag: "Promo",
    image: produto,
  },
];