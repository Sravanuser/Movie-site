import {Popular} from "../utils/request";

export default async function Popular_Movies() {
    let ball = await Popular();
  return (
    <div className="bg-black">
      <h1 className="text-red-500 text-2xl ml-10 font-semibold">Popular Movies</h1>
    <div className="w-screen flex gap-6 Trending ml-6 mt-2">
      {
        ball.map((item:any,id:number)=>{
          return(
            <div key={id} className="">
                <div className="w-44 h-44 md:w-60 md:h-60">
                <img className="w-full h-full rounded-md" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="images"/>
                </div>
            </div>
          )  
        })
      }
    </div>
    </div>
  )
}
