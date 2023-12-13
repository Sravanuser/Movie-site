"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { TrendingMovies } from "../../utils/request";
import { CiPlay1 } from "react-icons/ci";
import Loading from "./Loading";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdPlaylistAddCircle } from "react-icons/md";
import Link from "next/link";

export default function Slider() {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);
  interface sliderData {
    title: string;
    id: number;
    overview: string;
    backdrop_path: string;
    poster_path: string;
  }
  useEffect(() => {
    async function data() {
      try {
        let all = await TrendingMovies();
        setmovies(all);
      } catch (error) {
        console.error("error fetching data", error);
      } finally {
        setloading(false);
      }
    }
    data();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={true}
            showIndicators={false}
          >
            {movies.map((item: sliderData, id: number) => {
              return (
                <div
                  key={id}
                  style={{
                    background: `transparent url(https://image.tmdb.org/t/p/w500/${item.poster_path}) no-repeat center center`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <Link href={`/MoviesData/Trending/${item.id}`}>
                    <div className="h-screen w-screen flex flex-col items-center justify-center md:items-start md:justify-center md:ml-20 gap-3 images">
                      <div className="h-[200px] w-[200px] relative z-10">
                        <Image
                          className="h-full w-full rounded-lg brightness-125"
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt="images"
                          width={200}
                          height={200}
                          priority={true}
                        />
                      </div>
                      <div className="text-white text-center md:text-start z-10 flex flex-col gap-1.5 md:w-1/2">
                        <h1 className="font-semibold text-2xl md:text-4xl text-blue-200">
                          {item.title}
                        </h1>
                        <h2 className="text-sm md:text-md px-2 md:px-0">
                          {item.overview}
                        </h2>
                      </div>
                      <div className="z-10 text-white flex gap-6 mt-2">
                        <button className="flex justify-center items-center border-2 border-solid bg-white hover:rounded-xl duration-200 md:h-9 md:w-20">
                          <CiPlay1 color="red" className="play" size={25} />
                        </button>
                        <button className="flex justify-center items-center border-2 border-solid bg-white hover:rounded-xl duration-200 md:h-9 md:w-20">
                          <MdPlaylistAddCircle
                            color="red"
                            className="play"
                            size={25}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </>
  );
}
