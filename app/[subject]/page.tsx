'use client'

import { useParams, notFound, usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "@/app/lib/ContextWrapper";

const SubjectPage = () => {
  const { data } = useContext(DataContext);
  const params = useParams();
  const pathname = usePathname();

  const category = params.subject.toString();
  const categories = Object.keys(data);

  if(!categories.includes(category))
    notFound();

  
  const currPath = pathname.split("/");
  currPath[0] = "home";

  return ( 
    <div>
      <h1 className="font-bold pt-4 pb-8">{currPath.join(" / ").toUpperCase()}</h1>
      <div className="flex flex-wrap gap-4">
        {Object.keys(data[category].articles).map(uuid => {
          const article = data[category].articles[uuid];
          return (
            <Link href={`${pathname}/${uuid}`} key={article.title} className="flex items-center gap-2 font-bold w-[21.375rem] p-5 bg-white">
              <Image
                src="/static/icons/file.svg"
                alt="file"
                width={20}
                height={20}
              />
              {article.title}
            </Link>
          );
        })}
      </div>
    </div>
   );
}
 
export default SubjectPage;