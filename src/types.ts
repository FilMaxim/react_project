export interface Persone {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: [string];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: [string];
  url: string;
  vehicles: [string];
}

export interface StarWarsCharactersState {
  characters: Array<Persone>;
  isLoading: boolean;
}

export interface SearchState {
  searchValue: string;
}

export type Props = {
  callback: (value: string) => void;
  value: string;
};

export type State = {
  value: string;
};
