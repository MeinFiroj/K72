import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { FullpageNavContext } from "../context/NavbarContext";

const NavAnimate = () => {
  const [navbar, setNavbar] = useContext(FullpageNavContext);
  const stairParentRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    function openStair() {
      tl.to(stairParentRef.current, {
        display: "flex",
        duration: 0,
      });
      tl.to(".stairr", {
        height: "100%",
        stagger: {
          amount: -0.2,
        },
      });
    }

    function closeStair() {
      tl.to(".stairr", {
        height: "0",
        stagger: {
          amount: -0.2,
        },
        duration : 0.3,
        onComplete: () => {
          tl.to(stairParentRef.current, {
            display: "none",
          });
        },
      });
    }

    if (navbar) {
      openStair()
    } else {
      closeStair()
    }
  }, [navbar]);

  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-screen hidden items-start z-10 fixed top-0"
      >
        <div className="stairr h-full w-1/5 bg-black"></div>
        <div className="stairr h-full w-1/5 bg-black"></div>
        <div className="stairr h-full w-1/5 bg-black"></div>
        <div className="stairr h-full w-1/5 bg-black"></div>
        <div className="stairr h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
};

export default NavAnimate;