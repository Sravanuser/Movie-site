
export default function loading() {
  return (
  <div className= "slide" style={{background: "#10171E"}}>
  <div className="w-screen h-screen flex justify-center items-center flex-col gap-6 md:items-start md:ml-20">
  <div className="bg-neutral-600 h-[200px] w-[200px]">
  </div>
  <div className="flex flex-col gap-4">
  <div className="w-[340px] bg-neutral-600 h-4 md:w-[480px]"></div>
  <div className="w-[300px] bg-neutral-600 h-4 md:w-[400px]"></div>
  <div className="w-[280px] bg-neutral-600 h-4 md:w-[350px]"></div>
  </div>
  <div className="flex gap-8">
    <div className="rounded-lg bg-neutral-600 w-[80px] h-[30px]"></div>
    <div className="rounded-lg bg-neutral-600 w-[80px] h-[30px]"></div>
  </div>
  </div>  
  </div>
)
}
