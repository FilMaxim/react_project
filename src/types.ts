export interface DataAPI {
  count: number;
  next: string | null;
  previouls: string | null;
  results: Persone[];
}

export interface Persone {
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color?: string;
  films?: [string];
  gender?: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  species?: [];
  starships?: [string];
  url: string;
  vehicles?: [string];
}

export interface StarWarsCharactersState {
  characters: Array<Persone>;
  isLoading: boolean;
}

export interface SearchState {
  searchValue: string;
}

export interface Props {
  data: {
    people: Persone[],
    maxPage: number,
  }
}
export interface PropsDet {
  data: {
    people: Persone[],
    maxPage: number,
    details?: Persone;
  }
}

export interface Details {
  data: {
    details?: Persone;
  }
}

export type State = {
  value: string;
};

export interface IData {
  people: Persone[];
  maxPage: number
}
