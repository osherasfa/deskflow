import Sectx from "@/app/ui/Sectx";
import Image from "next/image";
import Logo from "@/public/static/images/logo.svg"; 

const FooterBar = ({ className: clsName, fontFamily } : { className?: string, fontFamily?: string }) => {
  const links = {
    "products": ["Shared Hosting", "Virtual Private Server", "Domain", "Email Hosting"],
    "company": ["About Us", "Contact", "Privacy Policy", "Help"],
    "get in touch": ["Twitter", "Facebook", "Dribble"],
  };

  return ( 
    <Sectx 
      className={clsName}
      container={{ className: `${fontFamily} text-white [&_p]:text-neutral-400 bg-[#06061A] rounded-tr-[3.5rem]`}} 
    >
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className="font-semibold text-2xl">
            Still have questions? We&apos;re here to help!
          </h1>
          <p className="font-medium text-lg">
            Chat with our support team by clicking the chat button in the
            right. We&apos;re here to assist you!
          </p>
        </div>
        <a
          href="mailto:"
          className="flex items-center gap-4 bg-[#3A3AF4] rounded-xl h-fit py-6 px-11"
        >
          <Image
            src="/static/icons/msg.svg"
            alt="message"
            width={24}
            height={24}
          />{" "}
          Email Admin
        </a>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between">
            <a
              href="#"
              className="flex items-center gap-4 mr-auto font-bold"
            >
              <Logo width={40} height={49} className="dark:text-white" />
              Deskflow
            </a>
            <Image
              src="/static/images/moa.png"
              alt="moa"
              width={195}
              height={49}
            />
          </div>
          <p className="leading-7">
            Welcome to DeskFlow, the comprehensive self-help documentation
            center dedicated to empowering IT professionals within the
            Ministry of Aliah and Integration. Within this resourceful hub,
            you’ll discover guides, procedures, tutorials, and more,
            meticulously curated to facilitate the seamless navigation of
            the intricacies associated with the realm of information
            technology.{" "}
          </p>
        </div>
        <ul className="flex justify-end w-full gap-4 [&>li]:flex [&>li]:flex-col [&>li]:gap-4 [&>li>h4]:font-semibold">
          {Object.keys(links).map(key => {
            return (
              <li key={key}>
                <h4>{key.toUpperCase()}</h4>
                {links[key].map(link => {
                  return <p key={link}>{link}</p>;
                })}
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-center">
        COPYRIGHT © 2024 — Osher Asefa Jr.Fullstack
      </p>
    </Sectx>
  );
}
 
export default FooterBar;