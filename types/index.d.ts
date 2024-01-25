export interface ParamsSingleMovie {
  id: string;
}

export interface ParamsFetch {
  filter?: string;
  page: number;
}

export interface ParamsSearchMovies {
  query: string | undefined;
  page: number;
}
