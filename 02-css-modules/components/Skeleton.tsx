import styles from '../styles/Skeleton.module.css';

export function Skeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={`${styles.skeletonLine} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonPrice}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonRating}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonButton}`}></div>
      </div>
    </div>
  );
}