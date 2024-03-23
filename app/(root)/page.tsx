import Image from "next/image";
import Link from 'next/link'
import { categoriesInfo } from "@/app/lib/data";

export default function Home() {
  return (
    <div className="flex justify-between gap-8 flex-wrap py-32">
      {categoriesInfo.map(category => (
          <div key={category.title} className="flex flex-col gap-5 p-8 bg-white drop-shadow-xl w-96 aspect-square">
            <Link href={category.title} className="flex items-center gap-4">
              <span className={`flex items-center justify-center w-14 aspect-square rounded-full p-4 ${category.color}`}>
                <Image src={category.icon} alt="icon" width={0} height={0} className="h-full w-auto"/>
              </span>
              <h1 className="text-lg font-bold">{category.title}</h1>
            </Link>
            <div className="flex flex-col gap-5 ">
              {category.files.map((file, i) => (
                <Link href={`${category.title}/${file}`} key={i} className="flex items-center gap-2">
                  <Image src="/static/icons/file.svg" alt="file" width={20} height={20}/>
                  <p className="font-medium underline"><span className={`${category.color} pb-[0.1rem]`}>{file}</span></p>
                </Link>
              ))}
            </div>
          </div>
      ))}
    </div>
  );
}
