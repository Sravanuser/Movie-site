import Slider from "./Slider/Slider";
import  Trending_Movies  from "./DisplayData/Movies/Trending_Movies";
import  Popular_Movies  from "./DisplayData/Movies/Popular_Movies";
import  Trending_Shows  from "./DisplayData/Shows/Trending_Shows";
import  TopRated_Shows  from "./DisplayData/Shows/TopRated_Shows";



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