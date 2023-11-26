import Link from "next/link";
import utilStyles from "./persons.module.css";
import { useRouter } from "next/dist/client/router";
import { Persone, Props } from "@/types";
import { getId } from "@/utils/get-id";
import LimitSelect from "../Limit-selest/limit-selest";
import { Pagination } from "../Pagination/pagination";
import { useSearchParams } from "next/navigation";

export default function Persons({ data }: Props) {
  const router = useRouter();
  const { page, limit, search } = router.query;
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div>
        <h1 className={utilStyles.title}>Персонажи Звездных Войн</h1>
        <div>
          {data.people && data.people.length === 0 ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <ul>
              {data &&
                data.people.map((character: Persone) => (
                  <li data-testid="link-card" className="item" key={character.url}>
                    <Link href={`/details/${getId(character.url)}?${page ? `page=${page}` : ""}${limit ? `&limit=${limit}` : ""}${search ? `&search=${search}` : ""}`}>
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
          <Pagination count={data.maxPage} />
        </div>
      </div>
    </section>
  );
}
