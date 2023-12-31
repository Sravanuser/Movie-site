import React from "react";
import { MovieDetails } from "@/app/utils/request";
import { CiPlay1 } from "react-icons/ci";
import { MdPlaylistAddCircle } from "react-icons/md";
import { FindTv } from "@/app/utils/request";
import Image from "next/image";

interface params {
  params: {
    cateogery: string;
    slug: string;
  };
}
interface Genres {
  name: string;
  id: number;
}
interface seasons{
  id:number;
  name:string;
}
export default async function MovieDetail({ params: params }: params) {
  const ShowTvData = await FindTv(params.slug);
  let modifiedDate = ShowTvData.first_air_date.slice(0, -6);
  console.log(ShowTvData);
  return (
    <div>
      <div className="mt-10">
          <div key={ShowTvData.id} className="flex flex-col">
            <div
              className="w-full h-[50vh] lg:h-screen"
              style={{
                background: `transparent url(https://image.tmdb.org/t/p/w500/${ShowTvData.backdrop_path}) no-repeat center center `,
                backgroundSize: "100% 100%",
                filter: "contrast(1)",
              }}
            ></div>
            <div className="flex flex-col gap-2 mt-3 z-index-2 relative">
              <div className="z-10 text-white flex gap-3 mt-2 ml-2">
                <button className="flex justify-center items-center border-2 border-solid bg-white hover:rounded-xl duration-200 md:h-9 md:w-20">
                  <CiPlay1 color="red" className="play" size={25} />
                </button>
                <button className="flex justify-center items-center border-2 border-solid bg-white hover:rounded-xl duration-200 md:h-9 md:w-20">
                  <MdPlaylistAddCircle color="red" className="play" size={25} />
                </button>
              </div>
              <h1 className="text-red-200 text-2xl font-bold">
                {ShowTvData.name}
              </h1>
              <div className="flex gap-1 text-slate-300 text-sm">
                <p>{modifiedDate}</p>
                <span className="border-l-2 h-5 border-slate-300 border-solid mt-1"></span>
                {ShowTvData.genres.map((item: Genres) => {
                  return (
                    <div key={item.id}>
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-slate-100 text-md md:text-lg">
                {ShowTvData.overview}
              </p>
            </div>
            <div className="bg-black">
      <h1 className="text-red-500 text-lg md:text-xl ml-6 font-semibold">Seasons</h1>
    <div className="w-screen flex md:gap-6 gap-1 Trending ml-1 mt-2">
      {
        ShowTvData.seasons.map((item:seasons)=>{
          return(
            <div key={item.id}>
                <div className="w-40 h-40 md:w-60 md:h-60">
                <Image className="w-40 h-40 md:h-60 md:w-60 rounded-md contrast-75 hover:contrast-125 duration:200" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="images" height={200} width={200}/>
               <p>{item.name}</p>
                </div>
            </div>
          )  
        })
      }
    </div>
        </div>
      </div>
      </div>
    </div>
  );
}
