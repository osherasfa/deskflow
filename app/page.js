import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Logo from "../public/static/images/logo.svg";
import cardsData from "./lib/placeholder-data-card";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <main className="[&>section>div]:div-center">
      <section className="bg-gradient-to-b from-[#0F0F33] to-[#050517] text-white">
        <div className="py-16">
          <nav className={`flex ${dmSans.className} gap-12 items-center`}>
            <a href="#" className="flex items-center gap-4 mr-auto font-bold">
              <Logo width={40} height={49} className='dark:text-white'/>
              Deskflow
            </a>
            <a href="#" className="font-bold">Home</a>
            <a href="#">Support</a>
            <a href="#">Contact us</a>
            <a href="#">About us</a>
            <a href="#" className="ml-auto bg-white text-[#060619] py-4 px-8 font-bold rounded-full">Admin Panel</a>
          </nav>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold mt-20">Support Center</h1>
            <p className="max-w-lg">Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.</p>
            <div className="flex w-[41rem] mt-6">
              <label className="flex flex-1 items-center gap-2 py-5 px-4 bg-white text-black">
                <Image src="/static/icons/search.svg" alt="search" width={24} height={24} />
                <input className="outline-none bg-transparent " type="text" placeholder="Search..." />
              </label>
              <button className="bg-[#3A3AF4] py-3 px-8 font-semibold text-lg">Search</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center gap-8 flex-wrap py-32">
          {cardsData.map((card, index) => (
            <div key={index} className="flex flex-col gap-5 p-8 bg-white drop-shadow-xl w-96 aspect-square">
              <div className="flex items-center gap-4">
                <span className={`flex items-center justify-center w-14 aspect-square rounded-full p-4 ${card.color}`}><Image src={card.iconPath} alt="icon" width={0} height={0} className="h-full w-auto" /></span>
                <h1 className="text-lg font-bold">{card.title}</h1>
              </div>
              <div className="flex flex-col gap-5 ">
                {card.files.map((file, i) => (
                  <a href="#" key={i} className="flex items-center gap-2">
                    <Image src="/static/icons/file.svg" alt="file" width={20} height={20} />
                    <p className={`font-medium underline ${card.color}`}>{file}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={`${dmSans.className} text-white [&_p]:text-neutral-400 bg-[#06061A] rounded-tr-[3.5rem]`}>
        <div className="[&>*]:py-14 [&>*]:border-b [&>*]:border-white/5 [&>*:last-child]:border-none">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-3 max-w-xl">
              <h1 className="font-semibold text-2xl">Still have questions? We&apos;re here to help!</h1>
              <p className="font-medium text-lg">Chat with our support team by clicking the chat button in the right. We&apos;re here to assist you!</p>
            </div>
            <a href="mailto:" className="flex items-center gap-4 bg-[#3A3AF4] rounded-xl h-fit py-6 px-11"><Image src="/static/icons/msg.svg" alt="message" width={24} height={24} />  Email Admin</a>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between">
                <a href="#" className="flex items-center gap-4 mr-auto font-bold">
                  <Logo width={40} height={49} className='dark:text-white'/>
                  Deskflow
                </a>
                <Image src="/static/images/moa.png" alt="moa" width={195} height={49} />
              </div>
              <p className="leading-7">Welcome to DeskFlow, the comprehensive self-help documentation center dedicated to empowering IT professionals within the Ministry of Aliah and Integration. Within this resourceful hub, you’ll discover guides, procedures, tutorials, and more, meticulously curated to facilitate the seamless navigation of the intricacies associated with the realm of information technology. </p>
            </div>
            <ul className="flex justify-end w-full gap-4 [&>li]:flex [&>li]:flex-col [&>li]:gap-4 [&>li>h4]:font-semibold">
              <li>
                <h4>PRODUCTS</h4>
                <p>Shared Hosting</p>
                <p>Virtual Private Server</p>
                <p>Domain</p>
                <p>Email Hosting</p>
              </li>
              <li>
                <h4>COMPANY</h4>
                <p>About Us</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Help</p>
              </li>
              <li>
                <h4>GET IN TOUCH</h4>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>Dribble</p>
              </li>
            </ul>
          </div>
          <p className="text-center">COPYRIGHT © 2024 — Osher Asefa Jr.Fullstack</p>
        </div>
      </section>
    </main>
  );
}
