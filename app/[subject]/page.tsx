'use client'

import { useParams, notFound, usePathname } from "next/navigation";
import data from "@/app/lib/main-data";
import Sectx from "@/app/ui/Sectx";

const SubjectPage = () => {
  const params = useParams();
  const pathname = usePathname();
  const isDefined = data.filter(d => d.title === params.subject).length > 0;

  if(!isDefined)
    notFound();

  const currPath = pathname.split("/");
  currPath[0] = "home";

  return ( 
    <Sectx>
      <h1>{currPath.join(" / ").toUpperCase()}</h1>
    </Sectx>
   );
}
 
export default SubjectPage;