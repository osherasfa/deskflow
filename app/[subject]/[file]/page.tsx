'use client'
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/lib/Editor"), { ssr: false });

const FilePage = () => {
  return (
    <div className="py-5 h-full">
      <Editor />
    </div>
  );
}
 
export default FilePage;


 
