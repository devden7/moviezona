import CarouselSection from "@/components/home/CarouselSection";
import SectionMovie from "@/components/home/SectionMovie";
import { fetchMovies } from "@/utils";

async function Home() {
  const page = 1;
  const movieResult = await fetchMovies(page);
  const isMovieResultEmpty = movieResult.length < 1 || !movieResult;
  return (
    <>
      <CarouselSection movieList={movieResult.results.slice(0, 10)} />
      <SectionMovie
        movieList={movieResult.results}
        isEmpty={isMovieResultEmpty}
      />
    </>
  );
}

export default Home;
