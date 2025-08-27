import type { Product } from '../../src/types/product';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="relative p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full aspect-square object-cover rounded-md"
        loading="lazy"
      />
      <div className="mt-3 flex flex-col gap-2">
        <h3 className="text-lg font-bold line-clamp-2 text-zinc-900 dark:text-gray-100">{product.title}</h3>
        <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">R$ {product.price.toFixed(2)}</p>
        <div className="text-yellow-400 text-lg">
          {Array(Math.round(product.rating)).fill('★').join('')}
        </div>
        {product.tag && (
          <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-md self-start">
            {product.tag}
          </span>
        )}
        <Button variant="solid" onClick={onAddToCart}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}