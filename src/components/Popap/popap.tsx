import { useSearchParams } from 'next/navigation';
import styles from './popap.module.scss';
import { useRouter } from 'next/router';

export const Popap: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleCloseClick = () => {
    router.push(`/?${searchParams.toString()}`);
  };
  return <div className={styles.popap} onClick={handleCloseClick}></div>;
};
