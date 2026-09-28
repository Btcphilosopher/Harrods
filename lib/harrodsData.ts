export interface HarrodsProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  formattedPrice: string;
  image: string;
  description: string;
  exclusive?: boolean;
  edition?: string;
  inStock: boolean;
}

export interface EditorialFeature {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  linkText: string;
}

export const HARRODS_CATEGORIES = [
  { id: 'new-in', label: 'NEW IN', count: 184 },
  { id: 'women', label: 'WOMEN', count: 940 },
  { id: 'men', label: 'MEN', count: 720 },
  { id: 'jewellery-watches', label: 'JEWELLERY & WATCHES', count: 310 },
  { id: 'beauty', label: 'BEAUTY', count: 540 },
  { id: 'food-wine', label: 'FOOD & WINE', count: 420 },
  { id: 'home-lifestyle', label: 'HOME & LIFESTYLE', count: 390 },
  { id: 'toys-gifts', label: 'TOYS & GIFTS', count: 215 },
  { id: 'the-harrods-edit', label: 'THE HARRODS EDIT', count: 95 },
];

export const CATEGORY_TILES = [
  {
    id: 'women',
    title: 'WOMEN',
    subtitle: 'ICONIC STYLE. TIMELESS APPEAL',
    image: '/images/category-women.jpg',
    href: '#women',
    tagline: 'From couture tailoring to emerging runway innovators',
  },
  {
    id: 'men',
    title: 'MEN',
    subtitle: 'EXCEPTIONAL BRANDS. DISTINCTIVE STYLE',
    image: '/images/category-men.jpg',
    href: '#men',
    tagline: 'Savile Row craftsmanship meets international design houses',
  },
  {
    id: 'jewellery-watches',
    title: 'JEWELLERY & WATCHES',
    subtitle: 'RARE PIECES. LASTING LEGACIES.',
    image: '/images/category-watches.jpg',
    href: '#jewellery-watches',
    tagline: 'High jewellery masterworks & grand complications',
  },
  {
    id: 'food-wine',
    title: 'FOOD & WINE',
    subtitle: 'THE FINEST FLAVOURS FROM AROUND THE WORLD',
    image: '/images/category-food.jpg',
    href: '#food-wine',
    tagline: 'The historic Harrods Food Halls & Grand Cru cellars',
  },
  {
    id: 'home-lifestyle',
    title: 'HOME & LIFESTYLE',
    subtitle: 'EXTRAORDINARY LIVING, AT HOME AND BEYOND',
    image: '/images/category-home.jpg',
    href: '#home-lifestyle',
    tagline: 'Architectural lighting, bespoke furniture & rare crystal',
  },
];

export const EDITORIAL_ITEMS: EditorialFeature[] = [
  {
    id: 'patek-philippe',
    tag: 'EXCLUSIVE',
    title: 'PATEK PHILIPPE',
    subtitle: 'THE 2025 COLLECTION',
    image: '/images/patek-philippe.jpg',
    linkText: 'EXPLORE HOROLOGY',
  },
  {
    id: 'harrods-gallery',
    tag: 'ART & CULTURE',
    title: 'THE HARRODS GALLERY',
    subtitle: 'VISIT NOW',
    image: '/images/harrods-gallery.jpg',
    linkText: 'EXHIBITIONS',
  },
  {
    id: 'private-shopping',
    tag: 'EXPERIENCES',
    title: 'PRIVATE SHOPPING',
    subtitle: '& BESPOKE SERVICES',
    image: '/images/bespoke-shopping.jpg',
    linkText: 'BOOK CONCIERGE',
  },
];

export const CURATED_PRODUCTS: HarrodsProduct[] = [
  {
    id: 'prod-1',
    name: 'Grand Complications Chronograph 18k Rose Gold',
    brand: 'Patek Philippe',
    category: 'jewellery-watches',
    price: 84500,
    formattedPrice: '£84,500',
    image: '/images/patek-philippe.jpg',
    description: 'Mechanical self-winding movement with perpetual calendar, moon phases, and day/night indication in hand-finished rose gold.',
    exclusive: true,
    edition: 'Knightsbridge Salon Allocation',
    inStock: true,
  },
  {
    id: 'prod-2',
    name: 'Hand-Cut Double-Faced Cashmere Trench Coat',
    brand: 'Burberry Prorsum',
    category: 'women',
    price: 3890,
    formattedPrice: '£3,890',
    image: '/images/category-women.jpg',
    description: 'Woven in Scotland from pure uncombed Loro Piana cashmere with horn buttons and tonal belt.',
    exclusive: true,
    inStock: true,
  },
  {
    id: 'prod-3',
    name: 'Bespoke Double-Breasted Wool-Silk Overcoat',
    brand: 'Tom Ford',
    category: 'men',
    price: 4650,
    formattedPrice: '£4,650',
    image: '/images/category-men.jpg',
    description: 'Peak lapels with Milanese buttonhole, unstructured shoulders, and silk lining in signature charcoal.',
    exclusive: false,
    inStock: true,
  },
  {
    id: 'prod-4',
    name: 'Imperial Beluga Caviar Selection (250g)',
    brand: 'Harrods Food Halls',
    category: 'food-wine',
    price: 1850,
    formattedPrice: '£1,850',
    image: '/images/category-food.jpg',
    description: 'Hand-selected large pearlescent pearls aged under cellar master supervision in Knightsbridge, presented in a chilled brass caddy with mother-of-pearl spoons.',
    exclusive: true,
    edition: 'Harrods Food Hall Reserve',
    inStock: true,
  },
  {
    id: 'prod-5',
    name: 'Sculptural Brass Reading Lamp & Lounge Suite',
    brand: 'B&B Italia',
    category: 'home-lifestyle',
    price: 12400,
    formattedPrice: '£12,400',
    image: '/images/category-home.jpg',
    description: 'Hand-burnished solid brass architectural luminaire paired with woven linen seating designed for contemporary salon living.',
    exclusive: false,
    inStock: true,
  },
  {
    id: 'prod-6',
    name: 'Millésime Vintage Champagne 2012 Jeroboam',
    brand: 'Dom Pérignon',
    category: 'food-wine',
    price: 3200,
    formattedPrice: '£3,200',
    image: '/images/category-food.jpg',
    description: 'A monument of finesse and smoked minerality from an exceptional harvest, cellar-stored at Harrods No. 1 Cellar.',
    exclusive: true,
    inStock: true,
  },
];

export const LUXURY_SEARCH_BRANDS = [
  'Patek Philippe',
  'Cartier',
  'Chanel',
  'Louis Vuitton',
  'Dior',
  'Rolex',
  'Audemars Piguet',
  'Boucheron',
  'Brunello Cucinelli',
  'Loro Piana',
  'Tom Ford',
  'Creed',
  'Baccarat',
  'Dom Pérignon',
  'Harrods Knightsbridge Hampers',
];
