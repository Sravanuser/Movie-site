import {TrendingMovies} from "../../utils/request";
import Image from "next/image";

export default async function Trending_Movies() {
    let Trending = await TrendingMovies();
  return (
    <div className="bg-black overflow-hidden">
      <h1 className="text-red-500 text-lg md:text-xl ml-6 font-semibold">Trending Movies</h1>
    <div className="w-screen flex md:gap-6 gap-1 Trending ml-1 mt-2">
      {
        Trending.map((item:any,id:number)=>{
          return(
            <div key={id}>
                <div className="w-40 h-40 md:w-60 md:h-60">
                <Image className="w-40 h-40 md:h-60 md:w-60 rounded-md hover:contrast-125 contrast-75 duration:200" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="images" width={200} height={200}/>
                </div>
            </div>
          )  
        })
      }
    </div>
    </div>
  )
}
