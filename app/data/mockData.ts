import { Product, Category, Store, Messenger } from '../types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Groceries',
    description: 'Fresh produce, pantry items, and household essentials',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'c2',
    name: 'Electronics',
    description: 'Gadgets, accessories, and tech essentials',
    image: 'https://images.pexels.com/photos/1474234/pexels-photo-1474234.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'c3',
    name: 'Fashion',
    description: 'Clothing, footwear, and accessories',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'c4',
    name: 'Home & Garden',
    description: 'Furniture, decor, and gardening supplies',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'c5',
    name: 'Health & Beauty',
    description: 'Personal care, cosmetics, and wellness products',
    image: 'https://images.pexels.com/photos/2253834/pexels-photo-2253834.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const stores: Store[] = [
  {
    id: 's1',
    name: 'Central Market',
    address: '123 Main St, Downtown',
    location: { lat: 40.7128, lng: -74.0060 },
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
    openingHours: 'Mon-Sat: 8AM-9PM, Sun: 9AM-7PM'
  },
  {
    id: 's2',
    name: 'Tech Haven',
    address: '456 Innovation Ave, Midtown',
    location: { lat: 40.7484, lng: -73.9857 },
    image: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800',
    openingHours: 'Mon-Fri: 10AM-8PM, Sat-Sun: 11AM-6PM'
  },
  {
    id: 's3',
    name: 'Fashion District',
    address: '789 Style Blvd, Uptown',
    location: { lat: 40.7831, lng: -73.9712 },
    image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
    openingHours: 'Daily: 10AM-9PM'
  },
  {
    id: 's4',
    name: 'Home Essentials',
    address: '321 Comfort Lane, Suburbs',
    location: { lat: 40.6782, lng: -73.9442 },
    image: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=800',
    openingHours: 'Mon-Sat: 9AM-10PM, Sun: 10AM-8PM'
  },
  {
    id: 's5',
    name: 'Wellness Center',
    address: '555 Health Street, Eastside',
    location: { lat: 40.7214, lng: -73.9877 },
    image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=800',
    openingHours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-6PM, Sun: Closed'
  }
];

export const products: Product[] = [
  // Groceries
  {
    id: 'p1',
    name: 'Organic Fruit Basket',
    description: 'Assortment of fresh organic fruits including apples, bananas, and berries',
    price: 24.99,
    images: [
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c1',
    available: true,
    storeIds: ['s1', 's4']
  },
  {
    id: 'p2',
    name: 'Artisanal Bread Selection',
    description: 'Freshly baked sourdough, multigrain, and ciabatta bread',
    price: 18.50,
    images: [
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/137103/pexels-photo-137103.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c1',
    available: true,
    storeIds: ['s1']
  },
  {
    id: 'p3',
    name: 'Premium Coffee Beans',
    description: '1lb of single-origin, fair trade coffee beans',
    price: 15.99,
    images: [
      'https://images.pexels.com/photos/2252554/pexels-photo-2252554.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4829098/pexels-photo-4829098.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c1',
    available: true,
    storeIds: ['s1', 's5']
  },
  
  // Electronics
  {
    id: 'p4',
    name: 'Wireless Earbuds',
    description: 'Bluetooth 5.0 earbuds with noise cancellation and 24hr battery life',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c2',
    available: true,
    storeIds: ['s2']
  },
  {
    id: 'p5',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled speaker with virtual assistant integration',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1378435/pexels-photo-1378435.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c2',
    available: true,
    storeIds: ['s2', 's4']
  },
  {
    id: 'p6',
    name: 'External Battery Pack',
    description: '20,000mAh power bank with fast charging capability',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5766867/pexels-photo-5766867.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c2',
    available: false,
    storeIds: ['s2']
  },
  
  // Fashion
  {
    id: 'p7',
    name: 'Designer Sunglasses',
    description: 'UV-protected polarized sunglasses with premium case',
    price: 75.00,
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c3',
    available: true,
    storeIds: ['s3']
  },
  {
    id: 'p8',
    name: 'Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID protection',
    price: 45.50,
    images: [
      'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c3',
    available: true,
    storeIds: ['s3', 's1']
  },
  
  // Home & Garden
  {
    id: 'p9',
    name: 'Ceramic Planter Set',
    description: 'Set of 3 decorative ceramic planters in various sizes',
    price: 34.99,
    images: [
      'https://images.pexels.com/photos/6957889/pexels-photo-6957889.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c4',
    available: true,
    storeIds: ['s4']
  },
  {
    id: 'p10',
    name: 'Scented Candle Collection',
    description: 'Set of 4 premium scented candles with long burn time',
    price: 29.99,
    images: [
      'https://images.pexels.com/photos/3059375/pexels-photo-3059375.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4262421/pexels-photo-4262421.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c4',
    available: true,
    storeIds: ['s4', 's5']
  },
  
  // Health & Beauty
  {
    id: 'p11',
    name: 'Skincare Gift Set',
    description: 'Complete skincare routine with cleanser, moisturizer, and serum',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c5',
    available: true,
    storeIds: ['s5']
  },
  {
    id: 'p12',
    name: 'Aromatherapy Essential Oils',
    description: 'Set of 6 pure essential oils for diffusers and home use',
    price: 42.00,
    images: [
      'https://images.pexels.com/photos/3735160/pexels-photo-3735160.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4465129/pexels-photo-4465129.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'c5',
    available: true,
    storeIds: ['s5', 's4']
  }
];

export const messengers: Messenger[] = [
  {
    id: 'm1',
    userId: 'u1',
    name: 'Carlos Rodriguez',
    transportType: 'bicycle',
    baseRate: 5.00,
    ratePerKm: 1.50,
    maxDistance: 5,
    maxWeight: 10,
    rating: 4.8,
    avatar: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=150',
    available: true
  },
  {
    id: 'm2',
    userId: 'u2',
    name: 'Elena Martinez',
    transportType: 'motorcycle',
    baseRate: 7.50,
    ratePerKm: 1.25,
    maxDistance: 15,
    maxWeight: 20,
    rating: 4.7,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    available: true
  },
  {
    id: 'm3',
    userId: 'u3',
    name: 'Javier Lopez',
    transportType: 'car',
    baseRate: 10.00,
    ratePerKm: 1.00,
    maxDistance: 30,
    maxWeight: 50,
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    available: true
  },
  {
    id: 'm4',
    userId: 'u4',
    name: 'Alicia Garcia',
    transportType: 'van',
    baseRate: 15.00,
    ratePerKm: 1.20,
    maxDistance: 40,
    maxWeight: 100,
    rating: 4.6,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    available: false
  }
];

// Helper functions to get data
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsByStore = (storeId: string): Product[] => {
  return products.filter(product => product.storeIds.includes(storeId));
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getStoreById = (id: string): Store | undefined => {
  return stores.find(store => store.id === id);
};

export const getMessengerById = (id: string): Messenger | undefined => {
  return messengers.find(messenger => messenger.id === id);
};

export const getAvailableMessengers = (): Messenger[] => {
  return messengers.filter(messenger => messenger.available);
};