import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const PageTransiton = ({ children }) => {
  const stairContRef = useRef(null);
  const appRef = useRef(null)

  const location = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairContRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairContRef.current, {
      display: "none",
      duration : 0
    });
    tl.to(".stair", {
      y: "0%",
      duration : 0
    });

    gsap.from(appRef.current, {
        opacity : 0,
        delay : 1.5,
    })

  }, [location]);
  return (
    <div className="h-full w-full">
      <div ref={stairContRef} className="h-[120vh] w-full fixed z-20">
        <div className="h-full w-full flex items-start">
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
        </div>
      </div>

      <div ref={appRef}>
        {children}
      </div>
    </div>
  );
};

export default PageTransiton;
