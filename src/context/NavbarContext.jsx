import { Children, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const FullpageNavContext = createContext(null);
export const NavLogoColorContext = createContext(null);

const NavbarContext = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [logoColor, setLogoColor] = useState("white");

  const locate = useLocation().pathname;
  // console.log(locate)

  useEffect(() => {
    if (locate == "/projects" || locate == "/agence") {
      if (navbar) setLogoColor("white");
      else setLogoColor("black");
    } else {
      setLogoColor("white");
    }
  }, [locate, navbar]);

  return (
    <div>
      <FullpageNavContext.Provider value={[navbar, setNavbar]}>
        <NavLogoColorContext.Provider value={[logoColor, setLogoColor]}>
          {children}
        </NavLogoColorContext.Provider>
      </FullpageNavContext.Provider>
    </div>
  );
};

export default NavbarContext;
