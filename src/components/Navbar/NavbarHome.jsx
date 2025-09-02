import { useContext } from "react";
import SVGK72 from "../Home/SVGK72";
import { FullpageNavContext } from "../../context/NavbarContext";

const NavbarHome = () => {
  const [navbar, setNavbar] = useContext(FullpageNavContext);
  return (
    <div className="w-full fixed top-0 z-1 flex items-start justify-end">
      <div className="p-3 absolute left-0 top-0 z-2">
        <SVGK72 />
      </div>
      <div onClick={()=>{setNavbar(true)}} className="menu-btn h-[7vh] cursor-pointer w-[16vw] flex flex-col gap-1 justify-center items-end pr-8 bg-black relative">
        <div className="menu-line h-[1.5px] w-13 bg-white relative"></div>
        <div className="menu-line h-[1.5px] w-6 bg-white relative"></div>
      </div>
    </div>
  );
};

export default NavbarHome;
