"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { fetchMovies, searchMovies } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import { convertDateToMonthYear, formatNumberRating } from "@/lib/utils";

interface Props {
  typePage: string;
  keyParams?: string | string;
  filter?: string;
}

const LoadMore = ({ typePage, keyParams, filter }: Props) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(2);

  const fetchDataWithBtn = async () => {
    let fetchData: any;
    if (typePage === "homePage") {
      fetchData = await fetchMovies({ filter, page });
    } else {
      fetchData = await searchMovies(keyParams, page);
    }
    setPage((prev) => prev + 1);
    setData((prev: any) => [...prev, ...fetchData.results]);
  };

  return (
    <>
      <div className="flex-between mt-10 flex-wrap gap-y-5 sm:gap-y-12">
        {data.map((list: any) => (
          <Link href={`/movie/${list.id}`} key={list.id}>
            <div className="flex w-[200px] flex-col gap-3 xs:w-[203px] sm:w-[185px] md:w-[165px] lg:w-[180px]">
              <div
                className={`relative flex h-64 items-end overflow-hidden rounded-xl duration-300 hover:-translate-y-2 hover:transition`}
              >
                <Image
                  src={
                    list.poster_path === null
                      ? "/assets/no image.jpg"
                      : `https://image.tmdb.org/t/p/w500/${list.poster_path}`
                  }
                  alt={list.title}
                  fill={true}
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="w-full rounded-b-xl bg-none backdrop-blur-sm">
                  <div className="flex-between w-full border-t-[1px] border-black px-2 py-3 text-white xs:gap-3">
                    <div className="flex-between gap-2 rounded-full bg-primary-500 px-3 py-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="15"
                        width="15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <p className="text-sm">
                        {formatNumberRating(list.vote_average)}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">
                      {convertDateToMonthYear(list.release_date)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-14 overflow-hidden">
                <p className="text-lg font-semibold ">{list.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button
          className="text-black_white background-dark900_white100 hover:bg-slate-100 hover:dark:bg-[#2d3232]"
          onClick={fetchDataWithBtn}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export default LoadMore;
