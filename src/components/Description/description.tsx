import styles from './description.module.scss';
import { CloseButton } from '../Button/close-button';
import { Loader } from '../Loader/loader';
import { wrapper } from '@/lib/store';
import { getDescription, getRunningQueriesThunk, useGetDescriptionQuery } from '@/lib/peopleApi';
import { useRouter } from 'next/router';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = Number(context.params?.id) || 1;
    store.dispatch(getDescription.initiate({ id }));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
export const DescriptionPerson: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isFetching } = useGetDescriptionQuery(id);


  return (
    <div data-testid="desc-page">
      <CloseButton />
      <h3 role="heading"> Детали персонажа: {data ? data.name : id}</h3>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={styles.description} data-testid="character-page">
          {!data ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <>
              <p>Birth year: {data.birth_year} </p>
              <p>Gender: {data.gender} </p>
              <p>Mass: {data.mass} kg</p>
              <p>Height: {data.height} mm</p>
              <p>Skin Color: {data.skin_color} </p>
              <p>Hair Color: {data.hair_color} </p>
              <p>Eye Color: {data.eye_color} </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
