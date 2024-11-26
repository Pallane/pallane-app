import React from 'react';
import { useParams } from 'react-router-dom';
import BaseProductLayout from '../features/product/layouts/BaseProductLayout';
import LicenseDetail from '../features/product/components/LicenseDetail';
import TrainingDetail from '../features/product/components/TrainingDetail';
import HardwareDetail from '../features/product/components/HardwareDetail';
import ExpertDetail from '../features/product/components/ExpertDetail';
import { mockProducts } from '../features/product/data/mockData';

export default function ProductDetail() {
  const { id } = useParams();
  
  // Extraire le type et l'index du produit depuis l'ID
  const [type] = id?.split('-') || [];
  
  // Trouver le produit de base correspondant au type
  let product;
  switch (type) {
    case 'hardware':
      product = mockProducts.hardware.surface;
      break;
    case 'license':
      product = mockProducts.license.salesforce;
      break;
    case 'training':
      product = mockProducts.training.azure;
      break;
    case 'expert':
      product = mockProducts.expert.cloud;
      break;
    default:
      return <div>Produit non trouvé</div>;
  }

  const renderProductContent = () => {
    switch (type) {
      case 'license':
        return <LicenseDetail product={product} />;
      case 'training':
        return <TrainingDetail product={product} />;
      case 'hardware':
        return <HardwareDetail product={product} />;
      case 'expert':
        return <ExpertDetail product={product} />;
      default:
        return null;
    }
  };

  return (
    <BaseProductLayout product={product}>
      {renderProductContent()}
    </BaseProductLayout>
  );
}