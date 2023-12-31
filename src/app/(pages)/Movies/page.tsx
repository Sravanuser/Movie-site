import { Firstpage } from "@/app/utils/request";
import { Secondpage } from "@/app/utils/request";
import { TrendingMovies } from "@/app/utils/request";
import { Popular } from "@/app/utils/request";
import Image from "next/image";
import Link from "next/link";


export default async function Page() {
  let Movies = await Firstpage();
  let Movies1 = await Secondpage();
  let Movies2 = await TrendingMovies();
  let Movies3 = await Popular();
  let data = [...Movies, ...Movies1, ...Movies3, ...Movies2];
  return (
    <div className="min-w-screen">
      <div className="w-full">
        <div className="flex mt-20 text-white justify-center mb-4">
          <div className="flex gap-1 md:gap-6">
            <button className="p-1 bg-indigo-900 hover:bg-cyan-400 w-14 h-8 text-sm md:w-20 md:h-10 rounded-2xl">
              All
            </button>
            <button className="rounded-2xl p-1 bg-indigo-900 w-14 h-8 text-sm md:w-20 md:h-10 hover:bg-cyan-400">
              Action
            </button>
            <button className="rounded-2xl p-1 bg-indigo-900 w-14 h-8 text-sm md:w-20 md:h-10 hover:bg-cyan-400">
              Horror
            </button>
            <button className="rounded-2xl p-1 bg-indigo-900 w-20 h-8 text-sm md:w-24 md:h-10 hover:bg-cyan-400">
              Animation
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 gap-1 justify-center w-full md:gap-4">
          {data.map((item, id: number) => {
            return (
              <div key={id} className="m-0 p-0">
                <Link href={`/MoviesData/Movies/${item.id}`}>
                <div>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="images"
                    className="w-40 h-40 md:w-60 md:h-60 sm:h-32 sm:w-32 contrast-125"
                    width={500}
                    height={500}
                  />
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
