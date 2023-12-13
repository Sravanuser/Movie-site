import Link from "next/link";
import { TrendingShows } from "../../utils/request";
import Image from "next/image";


export default async function Trending_Shows() {
    let ShowsData = await TrendingShows();
    interface ShowsData{
      title : string;
      poster_path : string;
      id : number;
    }
  return (
    <div className="bg-black overflow-hidden">
      <h1 className="text-red-500 text-lg md:text-xl ml-6 font-semibold">Trending Shows</h1>
    <div className="w-screen flex md:gap-6 gap-1 Trending ml-1 mt-2">
      {
        ShowsData.map((item:ShowsData,id:number)=>{
          return(
            <div key={id}>
              <Link href={`/TvShowsData/Trending/${item.id}`}>
                <div className="w-40 h-40 md:w-60 md:h-60">
                <Image className="w-40 h-40 md:h-60 md:w-60 rounded-md contrast-75 hover:contrast-125 duration:200" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="images" height={200} width={200}/>
                </div>
              </Link>
            </div>
          )  
        })
      }
    </div>
    </div>
  )
}
