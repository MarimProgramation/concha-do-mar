export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  image: string;
  badge?: string;
  badgeEn?: string;
  weight?: string;
  ingredients?: string;
  ingredientsEn?: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  itemCount: number;
  description: string;
  descriptionEn: string;
}



export const products: Product[] = [
  {
    id: "1",
    name: "Filetes de Cavala em Conserva",
    nameEn: "Canned Mackerel Fillets",
    price: 4.99,
    description: "Filetes de cavala cuidadosamente selecionados e conservados em azeite virgem extra. Um sabor autêntico do mar português, perfeito para acompanhar com pão quente ou numa salada fresca.",
    descriptionEn: "Carefully selected mackerel fillets preserved in extra virgin olive oil. An authentic taste of the Portuguese sea, perfect to accompany with warm bread or in a fresh salad.",
    category: "Conservas de Peixe",
    categoryEn: "Fish Preserves",
    image: "/img/Patecavala.png",
    badge: "Mais Vendido",
    badgeEn: "Best Seller",
    weight: "120g",
    ingredients: "Cavala, azeite virgem extra, sal",
    ingredientsEn: "Mackerel, extra virgin olive oil, salt",
    inStock: true,
  },
  {
    id: "2",
    name: "Polvo em Conserva",
    nameEn: "Canned Octopus",
    price: 6.49,
    description: "Polvo tenro e saboroso, preparado segundo receitas tradicionais portuguesas e conservado em azeite com um toque de alho e louro. Uma iguaria do Atlântico.",
    descriptionEn: "Tender and flavorful octopus, prepared following traditional Portuguese recipes and preserved in olive oil with a touch of garlic and bay leaf. An Atlantic delicacy.",
    category: "Conservas de Marisco",
    categoryEn: "Seafood Preserves",
    image: "/img/Polvocozido.png",
    badge: "Novidade",
    badgeEn: "New",
    weight: "110g",
    ingredients: "Polvo, azeite virgem extra, alho, louro, sal",
    ingredientsEn: "Octopus, extra virgin olive oil, garlic, bay leaf, salt",
    inStock: true,
  },
];

export const categories: Category[] = [
  {
    id: "conservas-peixe",
    name: "Conservas de Peixe",
    nameEn: "Fish Preserves",
    image: "/img/cavalapolvo.png",
    itemCount: 6,
    description: "Os melhores peixes do Atlântico",
    descriptionEn: "The finest Atlantic fish",
  },
  {
    id: "arte-xavega",
    name: "Arte Xávega",
    nameEn: "Arte Xávega",
    image: "/img/por%20do%20sol%202.jpeg",
    itemCount: 6,
    description: "A tradição da pesca artesanal portuguesa",
    descriptionEn: "The tradition of Portuguese artisanal fishing",
  },
];



export const instagramImages = [
  "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565680018434-b513d5e37e69?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=400&fit=crop",
];
