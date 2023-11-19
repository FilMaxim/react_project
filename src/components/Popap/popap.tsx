import { useNavigate } from 'react-router';
import styles from './popap.module.scss';
import { useSearchParams } from 'react-router-dom';

export const Popap: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleCloseClick = () => {
    navigate(`/?${searchParams.toString()}`);
  };
  return <div className={styles.popap} onClick={handleCloseClick}></div>;
};
