import { useNavigate } from 'react-router';
import styles from './popap.module.scss';

export const Popap: React.FC = () => {
  const navigate = useNavigate();
  const handleCloseClick = () => {
    navigate(-1);
  };
  return <div className={styles.popap} onClick={handleCloseClick}></div>;
};
