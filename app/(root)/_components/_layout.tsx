import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Logo from "@/public/static/images/logo.svg";
import NavBar from "@/app/(root)/_components/NavBar";
import SearchBar from "@/app/(root)/_components/SearchBar";
import Sectx from "@/app/ui/Sectx";
import FooterBar from "@/app/(root)/_components/FooterBar";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Sectx
        className="py-16"
        container={{ className: "bg-gradient-to-b from-[#0F0F33] to-[#050517] text-white" }}
      >
        <NavBar className={`flex ${dmSans.className} gap-12 items-center`} />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold mt-20">Support Center</h1>
          <p className="max-w-lg">
            Browse through our frequently asked questions, tutorials, and other
            self-help resources to find the answers you need.
          </p>
          <SearchBar />
        </div>
      </Sectx>
      {children}
      <FooterBar className="[&>*]:py-14 [&>*]:border-b [&>*]:border-white/5 [&>*:last-child]:border-none" fontFamily={dmSans.className} />
    </main>
  );
};

export default MainLayout;
