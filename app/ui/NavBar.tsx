import Logo from "@/public/static/images/logo.svg";

const NavBar = ({ className: attrs }: { className: string }) => {
  return ( 
    <nav className={attrs}>
      <a href="#" className="flex items-center gap-4 mr-auto font-bold">
        <Logo width={40} height={49} className="dark:text-white" />
        Deskflow
      </a>
      <a href="#" className="font-bold">
        Home
      </a>
      <a href="#">Support</a>
      <a href="#">Contact us</a>
      <a href="#">About us</a>
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