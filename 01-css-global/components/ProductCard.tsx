
import React from 'React';
import type { Product } from '../../src/types/product';
import '../styles/ProductCard.css'; // Importe o CSS global
import { Button } from '../../01-css-global/components/Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void; // Adicione esta linha
}
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <div className="product-rating">
          {Array(Math.round(product.rating)).fill('★').join('')}
        </div>
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <Button variant="solid" onClick={onAddToCart}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}