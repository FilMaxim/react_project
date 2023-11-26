import styles from './description.module.css';
import { CloseButton } from '../Button/close-button';
import { wrapper } from '@/lib/store';
import { getDescription, getRunningQueriesThunk, useGetDescriptionQuery } from '@/lib/peopleApi';
import { useRouter } from 'next/router';
import { Details } from '@/types';

export const DescriptionPerson = ({ data }: Details) => {
  return (
    <div data-testid="desc-page">
      <CloseButton />
      <h3 role="heading"> Детали персонажа: {data.details?.name}</h3>

      <div className={styles.description} data-testid="character-page">
        {!data.details ? (
          <h2>Ничего не найдено 😟 </h2>
        ) : (
          <>
            <p className={styles.p}>Birth year: {data.details.birth_year} </p>
            <p className={styles.p}>Gender: {data.details.gender} </p>
            <p className={styles.p}>Mass: {data.details.mass} kg</p>
            <p className={styles.p}>Height: {data.details.height} mm</p>
            <p className={styles.p}>Skin Color: {data.details.skin_color} </p>
            <p className={styles.p}>Hair Color: {data.details.hair_color} </p>
            <p className={styles.p}>Eye Color: {data.details.eye_color} </p>
          </>
        )}
      </div>
    </div>
  );
};
