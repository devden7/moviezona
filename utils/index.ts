import { ParamsSingleMovie } from "@/types";

export const fetchMovies = async (page: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzdkM2Y3ODViMWVkMzE5ZWNlYzg5MGVjNmE3MzRhYSIsInN1YiI6IjY1OWNiNjM1N2ZjYWIzMDA5N2Y3YTJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yTiRXzhxmpFl9q1xjZVK-OIXffeLTOvYzhrzOPz1HD4",
    },
  };
  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  );
  const data = await result.json();

  console.log(data);
  return data;
};

export const fetchSingleMovie = async (params: ParamsSingleMovie) => {
  const { id } = params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzdkM2Y3ODViMWVkMzE5ZWNlYzg5MGVjNmE3MzRhYSIsInN1YiI6IjY1OWNiNjM1N2ZjYWIzMDA5N2Y3YTJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yTiRXzhxmpFl9q1xjZVK-OIXffeLTOvYzhrzOPz1HD4",
    },
  };

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,
    options
  );
  const data = await result.json();

  return data;
};