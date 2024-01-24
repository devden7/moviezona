import { Input } from "@/components/ui/input";
import Image from "next/image";

const Search = () => {
  return (
    <div className="background-dark900_white100 flex-center rounded-lg pl-2">
      <Image src="/assets/search.svg" alt="search" width={20} height={20} />
      <Input
        type="text"
        placeholder="Search movies"
        className="background-dark900_white100 ml-2 border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
