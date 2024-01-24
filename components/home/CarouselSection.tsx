"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  movieList: any[];
}
const CarouselSection = ({ movieList }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mt-10">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="mx-auto 2xl:w-[60%]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          startIndex: 0,
          loop: true,
        }}
      >
        <CarouselContent className="items-center">
          {movieList.map((item, index) => {
            return (
              <CarouselItem
                key={item.id}
                className={`${item.background} relative transition ${
                  index + 1 === current
                    ? "h-60 rounded-3xl sm:h-[330px] md:h-[395px]"
                    : "h-56 sm:h-[305px] md:h-[364px]"
                } basis-11/12 overflow-hidden bg-cover bg-center lg:basis-4/6 xl:basis-7/12`}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                  alt={item.title}
                  fill={true}
                  sizes="100%"
                />
                <div className="absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-t from-stone-950"></div>
                <div
                  className={`absolute bottom-0 mb-7 ${
                    index + 1 === current ? "ml-4" : "ml-1"
                  }`}
                >
                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="hidden text-white md:block">{item.overview}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
