import { Children, createContext, useState } from "react";

export const FullpageNavContext = createContext(null);

const NavbarContext = ({children}) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <FullpageNavContext.Provider value={[navbar, setNavbar]}>
        {children}
      </FullpageNavContext.Provider>
    </div>
  );
};

export default NavbarContext;
