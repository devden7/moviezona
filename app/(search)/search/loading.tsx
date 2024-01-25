import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex flex-wrap gap-4">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-8 w-52" />
        </div>
        <div className="mt-8 flex flex-wrap gap-y-7 xs:gap-x-5 sm:gap-y-12 md:gap-x-3 md:gap-y-6">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((item) => (
            <div key={item}>
              <div
                className={`flex h-64 w-[180px] flex-col gap-2 rounded-xl border-2 border-slate-100 bg-white dark:border-none dark:bg-white/20 md:w-[165px] lg:w-[180px]`}
              >
                <Skeleton
                  className={`relative h-4/5 w-full overflow-hidden rounded-xl`}
                />
                <div className="flex flex-col items-center self-center">
                  <b className=" text-sm"></b>
                  <p className="text-black500_white700 text-xs"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
