import Image from "next/image";

interface Props {
  cast: any[];
}

const CastSection = ({ cast }: Props) => {
  return (
    <section>
      <h2 className="mt-10 text-4xl font-bold xl:text-3xl">Cast</h2>
      <div className="mt-8 flex flex-wrap gap-y-7 xs:gap-x-5 sm:gap-y-12 md:gap-x-3 md:gap-y-6">
        {cast.map((item) => (
          <div key={item.id}>
            <div
              className={`flex h-64 w-[200px] flex-col gap-2 rounded-xl border-2 border-slate-100 bg-white dark:border-none dark:bg-white/20   md:w-[165px] lg:w-[180px]`}
            >
              <div
                className={`relative h-4/5 w-full overflow-hidden rounded-xl`}
              >
                <Image
                  src={
                    item.profile_path === null
                      ? "/assets/no image.jpg"
                      : `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  }
                  alt={item.profile_path !== null ? item.character : " "}
                  fill={true}
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex flex-col items-center self-center">
                <b className=" text-sm">{item.name}e</b>
                <p className="text-black500_white700 text-xs">
                  {item.character}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CastSection;
