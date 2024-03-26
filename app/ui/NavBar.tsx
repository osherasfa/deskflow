'use client'

import Logo from "@/public/static/images/logo.svg";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavBar = ({ className: attrs }: { className: string }) => {
  const path = usePathname();
  console.log(path);

  return ( 
    <nav className={attrs}>
      <Link href="/" className="flex items-center gap-4 mr-auto font-bold">
        <Logo width={40} height={49} className="dark:text-white" />
        Deskflow
      </Link>
      <Link href="/" className={path == "/" ? "font-bold" : ""}>Home</Link>
      <Link href="/support" className={path == "/support" ? "font-bold" : ""}>Support</Link>
      <Link href="/contact" className={path == "/contact" ? "font-bold" : ""}>Contact us</Link>
      <Link href="/about" className={path == "/about" ? "font-bold" : ""}>About us</Link>

      <a
        href="#"
        className="ml-auto bg-white text-[#060619] py-4 px-8 font-bold rounded-full"
      >
        Admin Panel
      </a>
    </nav>
   );
}
 
export default NavBar;