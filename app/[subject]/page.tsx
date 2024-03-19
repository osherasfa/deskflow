'use client'

import { useParams, notFound, usePathname } from "next/navigation";
import { categories, default as data } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const SubjectPage = () => {
  const params = useParams();
  const pathname = usePathname();

  const category = params.subject.toString();
  const isDefined = Object.keys(categories).includes(category);

  if(!isDefined)
    notFound();

  
  const currPath = pathname.split("/");
  currPath[0] = "home";

  return ( 
    <div>
      <h1 className="font-bold pt-4 pb-8">{currPath.join(" / ").toUpperCase()}</h1>
      <div className="flex flex-wrap gap-4">
        {data.filter(file => file.category === category).map(file => {
          return (
            <Link href={`${pathname}/${file.id}`} key={file.title} className="flex items-center gap-2 font-bold w-[21.375rem] p-5 bg-white">
              <Image
                src="/static/icons/file.svg"
                alt="file"
                width={20}
                height={20}
              />
              {file.title}
            </Link>
          );
        })}
      </div>
    </div>
   );
}
 
export default SubjectPage;