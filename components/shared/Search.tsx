"use client";

import { Input } from "@/components/ui/input";
import { searchSchema } from "@/lib/validation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Search = () => {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: { keyword: "" },
  });

  const testSearch = (data: any) => {
    router.push(`/search?q=${data.keyword}`);
  };
  return (
    <div>
      <form
        className="background-dark900_white100 flex-center rounded-lg pl-2"
        onSubmit={handleSubmit(testSearch)}
      >
        <Image src="/assets/search.svg" alt="search" width={20} height={20} />
        <Controller
          name="keyword"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Search movies"
              className="background-dark900_white100 ml-2 border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              {...field}
            />
          )}
        />
      </form>
      {errors.keyword?.message && (
        <p className="text-xs text-red-500 dark:text-red-400 ">
          {errors.keyword?.message}
        </p>
      )}
    </div>
  );
};

export default Search;
