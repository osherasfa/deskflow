'use client'

import Image from "next/image";
import Link from 'next/link';
import React, { useContext } from "react";
import { DataContext } from "@/app/lib/ContextWrapper";


export default function Home() {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <div className="flex justify-between gap-8 flex-wrap py-32">
      {Object.keys(data).map((category, i) => (
        <div key={category} className="flex flex-col gap-5 p-8 bg-white drop-shadow-xl w-96 aspect-square">
          <Link href={category} className="flex items-center gap-4">
            <span className={`flex items-center justify-center w-14 aspect-square rounded-full p-4 ${data[category].properties.color}`}>
              <Image src={/*data[category].properties.icon*/"/static/icons/file.svg"} alt="icon" width={0} height={0} className="h-full w-auto"/>
            </span>
            <h1 className="text-lg font-bold">{category}</h1>
          </Link>
          <div className="flex flex-col gap-5 ">
            {Object.keys(data[category].articles).map((article, i) => (
              <Link href={`${category}/${article}`} key={i} className="flex items-center gap-2">
                <Image src="/static/icons/file.svg" alt="file" width={20} height={20}/>
                <p className="font-medium underline"><span className={`${data[category].properties.icon} pb-[0.1rem]`}>{article}</span></p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
