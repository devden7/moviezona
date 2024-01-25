import CarouselSection from "@/components/home/CarouselSection";
import SectionMovie from "@/components/home/SectionMovie";
import { fetchMovies } from "@/utils";

const Home = async () => {
  const page = 1;
  const results = await fetchMovies({ filter: "popularity.desc", page });
  return (
    <>
      <CarouselSection movieList={results.results.slice(0, 10)} />
      <div className="container">
        <SectionMovie />
      </div>
    </>
  );
};

export default Home;
