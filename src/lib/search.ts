import { mockProducts } from '../features/product/data/mockData';

export interface SearchResult {
  id: string;
  type: 'hardware' | 'license' | 'training' | 'expert';
  name: string;
  description: string;
  category?: string;
  logo: string;
}

// Convertir les données mockées en format plat
const allProducts = [
  ...Object.values(mockProducts.hardware),
  ...Object.values(mockProducts.license),
  ...Object.values(mockProducts.training),
  ...Object.values(mockProducts.expert)
];

export async function searchProducts(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) return [];

  const normalizedQuery = query.toLowerCase().trim();

  const results = allProducts
    .filter(product => {
      const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = product.description.toLowerCase().includes(normalizedQuery);
      const typeMatch = product.type.toLowerCase().includes(normalizedQuery);
      
      return nameMatch || descriptionMatch || typeMatch;
    })
    .map(item => ({
      id: item.id,
      type: item.type,
      name: item.name,
      description: item.description,
      category: item.type.charAt(0).toUpperCase() + item.type.slice(1),
      logo: item.logo
    }))
    .slice(0, 8);

  return results;
}