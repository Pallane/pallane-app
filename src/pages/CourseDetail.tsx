import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../features/product/data/mockData';
import TrainingDetail from '../features/product/components/TrainingDetail';
import ProductSidebar from '../features/product/components/ProductSidebar';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = mockProducts.training[courseId as keyof typeof mockProducts.training];

  if (!course) {
    return (
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Cours non trouvé</h1>
          <p className="text-gray-600">Le cours que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TrainingDetail product={course} />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar product={course} />
          </div>
        </div>
      </div>
    </div>
  );
}