"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="  m-4 ">
      <h1 className="text-center text-4xl font-bold">This is the weekend</h1>
      <h1 className="text-center text-4xl font-bold">
        The weekend contain 2 days which is
      </h1>
      <div className=" flex  justify-around  min-h-[400px] my-5  ">
        <div className=" relative group mx-2   hover:animate-pulse  cursor-pointer w-full" onClick={()=>{router.push("/saturday")}}>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full h-full flex items-center text-2xl bg-black">
            {" "}
            <p className="m-auto">Saturday</p>
          </div>
        </div>
        <div className=" relative group  hover:animate-pulse  cursor-pointer w-full" onClick={()=>{router.push("/sunday")}}>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full h-full flex items-center text-2xl bg-black">
            {" "}
            <p className="m-auto hover:text-gradient-to-r from-red-600 to-violet-600">Sunday</p>
          </div>
        </div>
      </div>
<div className="m-auto flex justify-center">
      <span className="type-sentences  text-2xl font-bold"></span>
      </div>
      <div></div>

    </div>
  );
}
