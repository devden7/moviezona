import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container">
      <div className=" mt-10">
        <div className="flex gap-4">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-10" />
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
      <div className="relative h-[650px] overflow-hidden rounded-3xl px-10 py-6 sm:h-[450px] md:p-3">
        <div className="flex-between flex-col gap-5 p-10 xs:p-4 md:flex-row">
          <Skeleton className="relative z-10 mx-auto h-96 overflow-hidden rounded-xl  xs:w-[200px] sm:w-[300px] md:w-[250px] lg:w-1/3" />
          <div></div>
          <div className="z-10 md:w-[70%]"></div>
        </div>
      </div>
      <h2 className=" mt-10 text-4xl font-bold xl:text-3xl">Cast</h2>
      <div className="mt-8 flex flex-wrap gap-y-7 xs:gap-x-5 sm:gap-y-12 md:gap-x-3 md:gap-y-6">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
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
  );
};

export default Loading;
