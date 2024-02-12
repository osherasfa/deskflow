import Image from "next/image";
import Link from 'next/link'
import cardsData from "@/app/lib/placeholder-data-card";
import Sectx from "@/app/ui/Sectx";

export default function Home() {
  return (
    <Sectx className="flex justify-between gap-8 flex-wrap py-32">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 p-8 bg-white drop-shadow-xl w-96 aspect-square"
        >
          <Link href={card.title} className="flex items-center gap-4 w-fit">
            <span
              className={`flex items-center justify-center w-14 aspect-square rounded-full p-4 ${card.color}`}
            >
              <Image
                src={card.iconPath}
                alt="icon"
                width={0}
                height={0}
                className="h-full w-auto"
              />
            </span>
            <h1 className="text-lg font-bold">{card.title}</h1>
          </Link>
          <div className="flex flex-col gap-5 ">
            {card.files.map((file, i) => (
              <a href="#" key={i} className="flex items-center gap-2">
                <Image
                  src="/static/icons/file.svg"
                  alt="file"
                  width={20}
                  height={20}
                />
                <p className={`font-medium underline ${card.color}`}>
                  {file}
                </p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </Sectx>
  );
}
