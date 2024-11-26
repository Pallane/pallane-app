import React from 'react';
import { useCartStore } from '../../store/cartStore';

export default function CartBadge() {
  const totalItems = useCartStore((state) => state.totalItems());

  if (totalItems === 0) return null;

  return (
    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
      {totalItems}
    </div>
  );
}