"use client";

import BannerSection from "@/components/singleMovie/BannerSection";
import CastSection from "@/components/singleMovie/CastSection";
import { fetchSingleMovie } from "@/utils";

const page = async ({ params }: any) => {
  const { id } = params;
  const results = await fetchSingleMovie({ id });

  return (
    <>
      <div className="container">
        <BannerSection movieDetail={results} />
        <CastSection cast={results.credits.cast} />
      </div>
    </>
  );
};

export default page;
