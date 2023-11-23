import styles from './loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div>
      <div className={styles.loader}></div>
    </div>
  );
};
