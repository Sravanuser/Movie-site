"use client";
import { Firstpage } from "@/app/utils/request";
import { Secondpage } from "@/app/utils/request";
import { Thirdpage } from "@/app/utils/request";
import { useState } from "react";
import  { useEffect } from "react";

export default function Page() {
  const [data, setdata] = useState<any[]>([]);  
  useEffect(()=>{
    async function FetchData(){
      let Movies = await Firstpage();
      let Movies1 = await Secondpage();
      let Movies2 = await Thirdpage();
      setdata([...Movies,...Movies1,...Movies2]);
    }
    FetchData();
  },[])
  return (
    <div className="min-w-screen">
    <div className="w-full">
    <div className="flex mt-20 text-white justify-center">
        <button className="bg-red-400 rounded-none border-2 border-purple-300 border-solid">All</button>
        <button className="bg-red-400 rounded-none">Action</button>
        <button className="bg-red-400 rounded-none">Adventure</button>
        <button className="bg-red-400 rounded-none">Sci-fi</button>
        <button className="bg-red-400 rounded-none">Horror</button>
        <button className="bg-red-400 rounded-none">Animation</button>
      </div>
    <div className="flex flex-wrap mt-10 gap-1 justify-evenly w-full md:gap-4 md:mx-4">
        {
          data.map((item:any,id:number)=>{
            return(
              <div key={id} className="m-0 p-0">
                <div className="">
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="images" className="w-32 h-32 md:w-60 md:h-60"/>
                </div>
              </div>
            )
          })
        }
    </div>
    </div>
    </div>
  )
}
