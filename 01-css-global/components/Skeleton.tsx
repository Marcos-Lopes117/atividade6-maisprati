import React from 'React';
import '../styles/Skeleton.css';

export function Skeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-price"></div>
        <div className="skeleton-line skeleton-rating"></div>
        <div className="skeleton-line skeleton-button"></div>
      </div>
    </div>
  );
}