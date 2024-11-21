export interface Product {
  id: string;
  type: 'hardware' | 'license' | 'training' | 'expert';
  name: string;
  description: string;
  price: string;
  logo: string;
  features?: string[];
  specs?: Record<string, string>;
  category?: string;
}

export const products: Product[] = [
  {
    id: 'surface-pro',
    type: 'hardware',
    name: 'Surface Pro 9',
    description: 'La tablette professionnelle la plus polyvalente',
    price: 'À partir de 1199€',
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf',
    specs: {
      processor: 'Intel Core i7 12th Gen',
      memory: '16GB LPDDR5',
      storage: '512GB SSD',
      display: '13" PixelSense Flow Display'
    }
  },
  {
    id: 'salesforce',
    type: 'license',
    name: 'Salesforce Sales Cloud',
    description: 'La solution CRM n°1 mondiale',
    price: 'À partir de 25€/mois',
    logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
    features: [
      'Gestion des contacts et comptes',
      'Suivi des opportunités',
      'Tableaux de bord personnalisables'
    ]
  },
  {
    id: 'azure-training',
    type: 'training',
    name: 'Formation Microsoft Azure',
    description: 'Maîtrisez le cloud computing',
    price: 'À partir de 499€',
    logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg',
    features: [
      'Introduction au Cloud Computing',
      'Services Azure fondamentaux',
      'Sécurité et conformité'
    ]
  },
  {
    id: 'cloud-expert',
    type: 'expert',
    name: 'Expert Cloud Azure',
    description: 'Architecture et déploiement cloud',
    price: 'À partir de 890€/jour',
    logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg',
    features: [
      'Conseil en architecture cloud',
      'Migration d\'applications',
      'Optimisation des coûts'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByType = (type: Product['type']): Product[] => {
  return products.filter(product => product.type === type);
};