import dynamic from "next/dynamic";
import Carousel from "./DisplayData/Slider/Slider";
const Trending_Movies = dynamic(() => import("./DisplayData/Movie/Trending_Movies"));
const Popular_Movies = dynamic(() => import("./DisplayData/Movie/Popular_Movies"));
const Trending_Shows = dynamic(() => import("./DisplayData/Show/Trending_Shows"));
const TopRated_Shows = dynamic(() => import("./DisplayData/Show/TopRated_Shows"));


export default async function Home() {
  return (
    <div>
      <Carousel/>   
      <Trending_Movies/>   
      <Popular_Movies/>   
      <Trending_Shows/>   
      <TopRated_Shows/>   
    </div>
  )
}