import styles from './description.module.scss';
import { useParams } from 'react-router-dom';
import { CloseButton } from '../Button/close-button';
import { Loader } from '../Loader/loader';
import { useGetDescriptionQuery } from '../../features/peopleApi';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsLoadingDesc } from '../../features/isLoadingDescSlice';

export const DescriptionPerson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useGetDescriptionQuery(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoadingDesc(isFetching));
  }, [dispatch]);

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
