import { TopRated } from "@/app/utils/request";
import { TrendingShows } from "@/app/utils/request";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
    const TopShows = await TopRated();
    const TrendingShow = await TrendingShows();
    let ShowsData = [...TopShows,...TrendingShow];
    return (
      <div className="min-w-screen">
      <div className="w-full">
        <div className="flex mt-20 text-white justify-center mb-4">
          <div className="flex gap-1 md:gap-6 flex-wrap">
            <button className="p-1 bg-indigo-900 hover:bg-cyan-400 w-16 h-9 md:w-20 md:h-10 rounded-2xl">All</button>
            <button className="rounded-2xl p-1 bg-indigo-900 w-16 h-9 md:w-20 md:h-10 hover:bg-cyan-400">Action</button>
            <button className="rounded-2xl p-1 bg-indigo-900 w-16 h-9 md:w-20 md:h-10 hover:bg-cyan-400">Horror</button>
            <button className="rounded-2xl p-1 bg-indigo-900 w-24 h-9 md:w-24 md:h-10 hover:bg-cyan-400">Animation</button>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 gap-2 justify-center w-full md:gap-3">
          {ShowsData.map((item, id: number) => {
            return (
              <div key={id} className="m-0 p-0">
                <Link href={`/Shows/${item.id}`}>
                <div>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="images"
                    className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60"
                    width={500} height={500} 
                  />
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}