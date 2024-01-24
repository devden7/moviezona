/* eslint-disable camelcase */
import React from "react";
import { Button } from "../ui/button";
import { convertDateToYear, convertToHourMinute } from "@/lib/utils";
import Image from "next/image";

const BannerSection = ({ movieDetail }: any) => {
  const {
    poster_path,
    backdrop_path,
    original_title,
    release_date,
    genres,
    runtime,
    overview,
    credits,
  } = movieDetail;

  const gendresList = genres.map((gendre: any) => gendre.name).join(", ");

  const crewList = credits.crew.filter(
    (credit: any) => credit.popularity >= 30 && credit.job === "Director"
  );

  return (
    <section>
      <div className="mb-5 mt-10">
        <p className="text-xl font-semibold tracking-wide">
          Home &gt; <span>{original_title}</span>
        </p>
      </div>
      <div className="relative overflow-hidden rounded-3xl px-10 py-6 md:p-3">
        <Image
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
          alt={original_title}
          fill={true}
          sizes="100px"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="flex-between flex-col gap-5 p-10 xs:p-4 md:flex-row">
          <div className="relative z-10 mx-auto h-96 overflow-hidden rounded-xl xs:w-[200px] sm:w-[300px] md:w-[250px] lg:w-1/3">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              fill={true}
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 -z-0 h-full w-full bg-gradient-to-t from-stone-950 backdrop-blur-sm"></div>
          <div className="z-10 md:w-[70%]">
            <div className="flex items-center gap-1">
              <h1 className="text-3xl font-bold tracking-wide text-white xs:my-5 sm:my-2 md:text-2xl">
                {original_title}{" "}
                <span className="font-normal">
                  ({convertDateToYear(release_date)})
                </span>
              </h1>
              <Button className="background-dark900_white100 p-3">
                <svg
                  stroke="currentColor"
                  fill="#000"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                </svg>
              </Button>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-1 text-white xs:text-sm">
              <p>{release_date}</p>
              <p>•</p>
              <div className="flex gap-2">{gendresList}</div>
              <p>•</p>
              <p>{convertToHourMinute(runtime)}</p>
            </div>

            <div className="mt-7 tracking-wide text-white">
              <p className="text-xl font-semibold">Overview</p>
              <p className="mt-3">{overview}</p>
            </div>
            <div className="mt-7 tracking-wide text-white">
              {crewList.map((crew: any) => (
                <div key={crew.id}>
                  <p className="text-lg font-semibold">{crew.name}</p>
                  <p>{crew.job}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
