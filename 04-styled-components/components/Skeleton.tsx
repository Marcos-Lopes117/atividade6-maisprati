
import styled, { keyframes } from 'styled-components';

// 1. Definição da animação
const pulseAnimation = keyframes`
  0% {
    background-color: #f6f7f8;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f6f7f8;
  }
`;

// 2. Componentes estilizados
const SkeletonContainer = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${pulseAnimation} 1.5s infinite ease-in-out;
  background-color: #f6f7f8;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  border-radius: 8px;
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonLine = styled.div`
  height: 16px;
  background-color: #ccc;
  border-radius: 4px;
  width: 100%;
`;

const SkeletonTitle = styled(SkeletonLine)`
  width: 80%;
`;

const SkeletonPrice = styled(SkeletonLine)`
  width: 40%;
`;

const SkeletonRating = styled(SkeletonLine)`
  width: 30%;
`;

const SkeletonButton = styled(SkeletonLine)`
  height: 38px;
  margin-top: 8px;
`;

export function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonTitle />
        <SkeletonPrice />
        <SkeletonRating />
        <SkeletonButton />
      </SkeletonContent>
    </SkeletonContainer>
  );
}