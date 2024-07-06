import React, { useState } from "react";
import { useEffect } from "react";

export const Show = (()=>{
    const [val1 , setval1]= useState("this is first data");
    const [val2 , setval2]= useState("this is Second data");

    useEffect(()=>{
        console.log("Something is created");
        return()=>{
            console.log("something is deleted")
        }

    },[val2])

    return (
        <div className="bg-zinc-300 w-full h-screen ml-10 flex flex-col ">
            <h1 className="text-lg font-semibold">{val1}</h1>
            <button
            onClick={()=>setval1("this is updated form of first data")}
            className="px-6 py-4 bg-orange-500 w-fit rounded-md text-white font-medium" >change data</button>
            <br />
            <h1 className="text-lg font-semibold">{val2}</h1>
            <button
            onClick={()=>setval2("this is updated form of Second data")}
            className="px-6 py-4 bg-orange-500 w-fit rounded-md text-white font-medium" >change data 2</button>


            
            </div>
          
    )


})

