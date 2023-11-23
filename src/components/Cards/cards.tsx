import Head from "next/head";
import Link from "next/link";
import utilStyles from "./persons.module.scss";
import { useRouter } from "next/dist/client/router";
import { wrapper } from "@/lib/store";
import { getRunningQueriesThunk, getsPeople, useGetsPeopleQuery } from "@/lib/peopleApi";
import { Loader } from "../Loader/loader";
import { Persone } from "@/types";
import { getId } from "@/utils/get-id";
import LimitSelect from "../Limit-selest/limit-selest";
import { Pagination } from "../Pagination/pagination";
import { useSearchParams } from "next/navigation";

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     const pageCurrent = Number(context.params?.page) || 1;
//     const limitCurrent = Number(context.params?.limit) || 10;
//     const search = Number(context.params?.search) || '';
//     store.dispatch(getsPeople.initiate({ search, pageCurrent, limitCurrent }));
//     await Promise.all(store.dispatch(getRunningQueriesThunk()));
//     const a = store.getState().peopleApi.queries
//     return {
//       props: {},
//     };
//   }
// );
export default function Persons(data: { cards: Persone[]; maxPage: number; }) {
  // const limitAPI = 10;
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const pageCurrent = parseInt(router.query.page as string, 10) || 1;
  // const limitCurrent = parseInt(router.query.limit as string, 10) || limitAPI;
  // const search = router.query.search || '';
  // const result = useGetsPeopleQuery({ search, pageCurrent, limitCurrent })

  // const { isFetching, error, data } = result;
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div>
        <h1 className={utilStyles.title}>Персонажи Звездных Войн</h1>

        <div>
          {data && data.cards.length === 0 ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <ul>
              {data &&
                data.cards.map((character: Persone) => (
                  <li data-testid="link-card" className="item" key={character.url}>
                    <Link href={`/details/${getId(character.url)}`}>
                      <div>Name: {character.name}</div>
                      <div>Birth year: {character.birth_year} </div>
                      <div>Gender: {character.gender} </div>
                      <div>Mass: {character.mass} kg</div>
                      <div>Height: {character.height} mm</div>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
          <LimitSelect></LimitSelect>
          <Pagination count={data ? data.maxPage : 1} />
        </div>

      </div>
    </section>
  );
}
