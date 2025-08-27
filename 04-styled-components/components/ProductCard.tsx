
import type { Product } from '../../src/types/product';
import styled from 'styled-components';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  box-shadow: ${(props) => props.theme.cardShadow};
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;

  &:hover,
  &:focus-within {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ProductPrice = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.priceColor};
  font-weight: 600;
`;

const ProductRating = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
`;

const ProductTag = styled.span`
  background-color: ${(props) => props.theme.tagColor};
  color: ${(props) => props.theme.tagTextColor};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  align-self: flex-start;
`;

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.title} loading="lazy" />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        <ProductRating>
          {Array(Math.round(product.rating)).fill('★').join('')}
        </ProductRating>
        {product.tag && <ProductTag>{product.tag}</ProductTag>}
        <Button variant="solid" onClick={onAddToCart}>
          Adicionar
        </Button>
      </ProductInfo>
    </CardContainer>
  );
}