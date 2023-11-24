"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { TrendingMovies } from "../utils/request";
import { CiPlay1 } from "react-icons/ci";
import Loading from "./Loading";
import Image from "next/image";

export default function Slider() {
  const [movies, setmovies] = useState([]);
  const [slide, setslide] = useState(0);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function data() {
      try{
      let all = await TrendingMovies();
      setmovies(all);
      }catch(error){
        console.error("error fetching data",error);
      }finally{
        setloading(false);
      }
    }
    data();
  }, []);
  const nextSlide = () => {
    setslide(slide === movies.length - 1 ? 0 : slide + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9800);
    return () => {
      clearInterval(interval);
    };
  }, [slide]);
  return (
    <>
    {loading ? <Loading/> : (<div className="min-width=[100vw]">
      {movies.map((item: any, id: number) => {
        return (
          <div
            key={id}
            className={slide === id ? "slide" : "images images-hidden"}
            style={{
              background: `transparent url(https://image.tmdb.org/t/p/w500/${item.poster_path}) no-repeat center center`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="h-screen w-screen flex flex-col items-center justify-center md:items-start md:justify-center md:ml-20 gap-3">
              <div className="h-[200px] w-[200px] relative z-10">
                <Image
                  className="h-full w-full rounded-lg"
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt="images" width={200} height={200}
                />
              </div>
              <div className="text-white text-center md:text-start z-10 flex flex-col gap-1.5 md:w-1/2">
                <h1 className="font-semibold text-2xl md:text-4xl text-blue-200">
                  {item.title}
                </h1>
                <h2 className="text-md md:text-lg px-2 md:px-0">
                  {item.overview}
                </h2>
              </div>
              <div className="z-10 text-white flex gap-6 mt-2">
                <button className="flex justify-center items-center border-2 border-solid bg-white">
                  <CiPlay1 color="skyblue" className="play" size={25} />
                </button>
                <button className="border-2 border-solid text-sky-200 font-medium hover:bg-white duration-200">
                  Watchlist
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>)
  }
  </>
  );
}
