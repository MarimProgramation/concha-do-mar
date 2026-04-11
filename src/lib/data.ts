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
  comingSoon?: boolean;
  seasonal?: string;
  seasonalEn?: string;
  suggestion?: string;
  suggestionEn?: string;
  packInfo?: string;
  packInfoEn?: string;
  drainWeight?: string;
  drainWeightEn?: string;
  characteristics?: string[];
  characteristicsEn?: string[];
  conservationProcess?: string;
  conservationProcessEn?: string;
  storageConditions?: string;
  storageConditionsEn?: string;
  shelfLife?: string;
  shelfLifeEn?: string;
  packaging?: string;
  packagingEn?: string;
  intendedUse?: string;
  intendedUseEn?: string;
  observations?: string;
  observationsEn?: string;
  commercialInfo?: string;
  commercialInfoEn?: string;
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
    name: "Polvo Inteiro em Conserva",
    nameEn: "Whole Octopus Preserve",
    price: 12.00,
    description: "Polvo inteiro, previamente cozido no ponto certo e conservado em frasco de vidro com a própria água de cozedura, preservando o sabor natural e autêntico do mar. Produto pronto a consumir, ideal para saladas, arroz de polvo, pratos tradicionais ou consumo direto.",
    descriptionEn: "Whole octopus, pre-cooked to perfection and preserved in a glass jar with its own cooking water, keeping the natural and authentic flavour of the sea. Ready to eat, ideal for salads, octopus rice, traditional dishes or direct consumption.",
    category: "Conservas Artesanais",
    categoryEn: "Artisanal Preserves",
    image: "/img/Polvocozido.png",
    badge: "Produção Limitada",
    badgeEn: "Limited Batch",
    weight: "aprox. 800g",
    drainWeight: "aprox. 400g",
    drainWeightEn: "approx. 400g",
    ingredients: "Polvo, Água",
    ingredientsEn: "Octopus, Water",
    inStock: true,
    seasonal: "Produto sazonal — disponível apenas de novembro a março",
    seasonalEn: "Seasonal product — available only from November to March",
    suggestion: "Consumo direto, saladas, arroz de polvo, polvo à lagareiro e outros pratos tradicionais.",
    suggestionEn: "Direct consumption, salads, octopus rice, polvo à lagareiro and other traditional dishes.",
    characteristics: [
      "Produto esterilizado",
      "Pronto a consumir",
      "Sem adição de sal ou aditivos",
      "Produto sazonal (disponível apenas de novembro a março)",
    ],
    characteristicsEn: [
      "Sterilized product",
      "Ready to eat",
      "No added salt or additives",
      "Seasonal product (available only from November to March)",
    ],
    conservationProcess: "Produto submetido a tratamento térmico de esterilização em autoclave, garantindo a segurança alimentar e a estabilidade microbiológica.",
    conservationProcessEn: "Product subjected to autoclave sterilization heat treatment, ensuring food safety and microbiological stability.",
    storageConditions: "Conservar em local fresco e seco. Após abertura, conservar refrigerado e consumir no prazo máximo de 24 horas.",
    storageConditionsEn: "Store in a cool, dry place. After opening, keep refrigerated and consume within 24 hours.",
    shelfLife: "12 meses, desde que mantidas as condições adequadas de conservação.",
    shelfLifeEn: "12 months, provided adequate storage conditions are maintained.",
    packaging: "Frasco de vidro com tampa metálica adequada para conserva, com fecho hermético e formação de vácuo.",
    packagingEn: "Glass jar with a metal lid suitable for preserving, with hermetic seal and vacuum formation.",
    intendedUse: "Consumo direto, saladas, arroz de polvo, polvo à lagareiro e outros pratos tradicionais.",
    intendedUseEn: "Direct consumption, salads, octopus rice, polvo à lagareiro and other traditional dishes.",
    observations: "Produto artesanal, produzido em pequena escala, sujeito a variações naturais de peso e textura.",
    observationsEn: "Artisanal product, produced in small batches, subject to natural variations in weight and texture.",
    commercialInfo: "Valor para revenda (lojista): 10,00 € / unidade",
    commercialInfoEn: "Reseller price (retailer): €10.00 / unit",
  },
  {
    id: "2",
    name: "Cavala em Conserva",
    nameEn: "Mackerel Preserve",
    price: 6.00,
    description: "Filetes de cavala da nossa costa, marinados e cuidadosamente conservados em azeite. Produto artesanal, saudável e rico em ómega-3, com um sabor autêntico e intenso do mar.",
    descriptionEn: "Mackerel fillets from our coast, marinated and carefully preserved in olive oil. Artisanal, healthy product rich in omega-3, with an authentic and intense flavour of the sea.",
    category: "Conservas Artesanais",
    categoryEn: "Artisanal Preserves",
    image: "/img/filetescavala.png",
    badge: "Em Breve",
    badgeEn: "Coming Soon",
    weight: "aprox. 190g",
    ingredients: "Cavala, azeite, vinagre, limão, sal",
    ingredientsEn: "Mackerel, olive oil, vinegar, lemon, salt",
    inStock: false,
    comingSoon: true,
    suggestion: "Perfeita com pão quente, numa salada ou como petisco. Acompanhe com um vinho verde fresco.",
    suggestionEn: "Perfect with warm bread, in a salad or as a snack. Pair with a fresh Vinho Verde.",
    characteristics: [
      "Peixe da nossa costa",
      "Produto artesanal e natural",
      "Rico em ómega-3",
    ],
    characteristicsEn: [
      "Fish from our coast",
      "Artisanal and natural product",
      "Rich in omega-3",
    ],
    storageConditions: "Produto esterilizado — conservar em local fresco e seco.",
    storageConditionsEn: "Sterilized product — store in a cool, dry place.",
    shelfLife: "12 meses",
    shelfLifeEn: "12 months",
  },
  {
    id: "3",
    name: "Paté de Cavala",
    nameEn: "Mackerel Pâté",
    price: 4.00,
    description: "Patê artesanal de cavala, cuidadosamente preparado com ingredientes naturais e selecionados. Perfeito para entradas, tostas ou tábuas de degustação.",
    descriptionEn: "Artisanal mackerel pâté, carefully prepared with natural and selected ingredients. Perfect for starters, toast or tasting boards.",
    category: "Conservas Artesanais",
    categoryEn: "Artisanal Preserves",
    image: "/img/Patecavala.png",
    badge: "Artesanal",
    badgeEn: "Handmade",
    weight: "90g",
    ingredients: "Filetes de cavala, pickles, azeite, vinagre, alho e pimenta",
    ingredientsEn: "Mackerel fillets, pickles, olive oil, vinegar, garlic and pepper",
    inStock: false,
    comingSoon: true,
    suggestion: "Perfeito para entradas, tostas ou tábuas de degustação.",
    suggestionEn: "Perfect for starters, toast or tasting boards.",
    characteristics: [
      "Sem corantes nem conservantes artificiais",
      "Rico em ómega-3 e proteínas",
    ],
    characteristicsEn: [
      "No artificial colourings or preservatives",
      "Rich in omega-3 and protein",
    ],
    storageConditions: "Produto esterilizado — conservar em local fresco e seco.",
    storageConditionsEn: "Sterilized product — store in a cool, dry place.",
    shelfLife: "12 meses",
    shelfLifeEn: "12 months",
  },
  {
    id: "4",
    name: "Pack Polvo — 2 Frascos",
    nameEn: "Octopus Pack — 2 Jars",
    price: 22.00,
    originalPrice: 24.00,
    description: "Dois frascos do nosso polvo inteiro artesanal. Ideal para partilhar ou guardar. Produção limitada — disponível enquanto durar o lote.",
    descriptionEn: "Two jars of our whole artisanal octopus. Perfect for sharing or keeping. Limited production — available while stocks last.",
    category: "Packs",
    categoryEn: "Packs",
    image: "/img/doispolvos.png",
    badge: "Poupe 2€",
    badgeEn: "Save €2",
    weight: "2 × aprox. 800g",
    ingredients: "Polvo, Água",
    ingredientsEn: "Octopus, Water",
    inStock: true,
    packInfo: "Pack de 2 frascos de Polvo Inteiro",
    packInfoEn: "Pack of 2 Whole Octopus jars",
  },
  {
    id: "5",
    name: "Pack Polvo — 3 Frascos",
    nameEn: "Octopus Pack — 3 Jars",
    price: 32.00,
    originalPrice: 36.00,
    description: "Três frascos do nosso polvo artesanal. O melhor valor para quem conhece e quer repetir. Lote limitado — não perca.",
    descriptionEn: "Three jars of our artisanal octopus. The best value for those who know and want more. Limited batch — don't miss out.",
    category: "Packs",
    categoryEn: "Packs",
    image: "/img/trespolvos.png",
    badge: "Poupe 4€",
    badgeEn: "Save €4",
    weight: "3 × aprox. 800g",
    ingredients: "Polvo, Água",
    ingredientsEn: "Octopus, Water",
    inStock: true,
    packInfo: "Pack de 3 frascos de Polvo Inteiro",
    packInfoEn: "Pack of 3 Whole Octopus jars",
  },
];

export const categories: Category[] = [
  {
    id: "conservas-peixe",
    name: "As Nossas Conservas",
    nameEn: "Our Preserves",
    image: "/img/cavalapolvo.png",
    itemCount: 5,
    description: "Do mar ao frasco, feito à mão",
    descriptionEn: "From sea to jar, handmade",
  },
  {
    id: "arte-xavega",
    name: "A Nossa Pesca",
    nameEn: "Our Fishing",
    image: "/img/por%20do%20sol%202.jpeg",
    itemCount: 0,
    description: "Pesca noturna, tradição artesanal",
    descriptionEn: "Night fishing, artisanal tradition",
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
