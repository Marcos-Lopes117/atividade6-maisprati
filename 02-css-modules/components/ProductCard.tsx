import React from 'react';
import type { Product } from '../../src/types/product';
import styles from '../styles/ProductCard.module.css';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
        loading="lazy"
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
        <div className={styles.productRating}>
          {Array(Math.round(product.rating)).fill('★').join('')}
        </div>
        {product.tag && <span className={styles.productTag}>{product.tag}</span>}
        <Button variant="solid" onClick={onAddToCart}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}