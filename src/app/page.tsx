import Slider from "./Slider/Slider";
import  Trending_Movies  from "./Movies/Trending_Movies";
import  Popular_Movies  from "./Movies/Popular_Movies";
import  Trending_Shows  from "./Shows/Trending_Shows";
import  TopRated_Shows  from "./Shows/TopRated_Shows";

export default async function Home() {
  return (
    <div>
      <Slider/>   
      <Trending_Movies/>   
      <Popular_Movies/>   
      <Trending_Shows/>   
      <TopRated_Shows/>   
    </div>
  )
}