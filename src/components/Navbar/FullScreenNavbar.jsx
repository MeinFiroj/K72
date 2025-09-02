import { Link, useNavigate } from "react-router-dom";
import SVGK72 from "../Home/SVGK72";
import { useContext, useRef } from "react";
import { FullpageNavContext } from "../../context/NavbarContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullScreenNavbar = () => {
  const [navbar, setNavbar] = useContext(FullpageNavContext);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (navbar) {
      tl.to(navbarRef.current, {
        top: "0",
        display: "flex",
      });
      tl.to(navbarRef.current, {
        scaleY: 1,
        duration: 0.1,
      });
      tl.from(".marquee-parent", {
        rotateX: 90,
        stagger: 0.1,
        duration: 0.4,
      });
      tl.from(".social-links", {
        opacity: 0,
        top: "-20%",
        duration: 0.5,
      });
    } else {
      tl.to(navbarRef.current, {
        display: "none",
        scaleY: 0,
        top: "-100%",
      });
    }
  }, [navbar]);

  return (
    <div
      ref={navbarRef}
      id="fullPageMenu"
      className="absolute origin-top top-[-100%] hidden left-0 h-screen w-screen bg-black z-40 text-white flex-col items-center"
    >
      <div className="p-1 flex justify-between w-full">
        <div className="p-2">
          <SVGK72 />
        </div>
        <div
          onClick={() => {
            setNavbar(false);
          }}
          className="close-btn h-[8vw] w-[9vw] relative cursor-pointer"
        >
          <span className="close-line inline-block bg-white h-[2px] w-[10vw] absolute rotate-[45deg] top-[50%]"></span>
          <span className="close-line inline-block bg-white h-[2px] w-[10vw] absolute rotate-[-45deg] top-[50%]"></span>
        </div>
      </div>

      <div className="links-cont pt-3 w-full ">
        <div
          onClick={() => {
            navigate("/projects");
          }}
          className="marquee-parent origin-top border-y border-[rgba(255,255,255,0.5)] pt-5 cursor-pointer relative overflow-hidden "
        >
          <h1 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-center">
            Projects
          </h1>
          <div className="marquee absolute top-[-100%] opacity-0 scale-y-0 origin-top flex items-center justify-start ">
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5 w-[auto] ">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout voir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/snowfall-img.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout voir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/bag-img.png"
              />
            </div>
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5 w-[auto] ">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout voir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/snowfall-img.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout voir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/bag-img.png"
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/agence");
          }}
          className="marquee-parent origin-top border-b border-[rgba(255,255,255,0.5)] pt-5 cursor-pointer relative overflow-hidden "
        >
          <h1 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-center">
            Agence
          </h1>
          <div className="marquee absolute top-[-100%] opacity-0 scale-y-0 origin-top flex items-center justify-start m-0 bg-[#D3FD50]">
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout savoir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover object-[0%_12%] rounded-full mx-5"
                src="./public/images/img7.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout savoir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover object-[0%_20%] rounded-full mx-5"
                src="./public/images/img10.png"
              />
            </div>
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout savoir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover object-[0%_12%] rounded-full mx-5"
                src="./public/images/img7.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour tout savoir
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover object-[0%_20%] rounded-full mx-5"
                src="./public/images/img10.png"
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/contact");
          }}
          className="marquee-parent origin-top border-b border-[rgba(255,255,255,0.5)] pt-5 cursor-pointer relative overflow-hidden "
        >
          <h1 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-center">
            Contact
          </h1>
          <div className="marquee absolute top-[-100%] opacity-0 scale-y-0 origin-top flex items-center justify-start ">
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5 w-[auto] ">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour envoyer un fax
              </h2>
              <img
                className="w-[11vw] h-[5.4vw] object-contain mx-5"
                src="./public/images/blackheartshape.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour envoyer un fax
              </h2>
              <img
                className="w-[11vw] h-[5.4vw] object-contain mx-5"
                src="./public/images/blackheartshape.png"
              />
            </div>
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5 w-[auto] ">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour envoyer un fax
              </h2>
              <img
                className="w-[11vw] h-[5.4vw] object-contain mx-5"
                src="./public/images/blackheartshape.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                pour envoyer un fax
              </h2>
              <img
                className="w-[11vw] h-[5.4vw] object-contain mx-5"
                src="./public/images/blackheartshape.png"
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/blogue");
          }}
          className="marquee-parent origin-top border-b border-[rgba(255,255,255,0.5)] pt-5 cursor-pointer relative overflow-hidden "
        >
          <h1 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-center">
            Blogue
          </h1>
          <div className="marquee absolute top-[-100%] opacity-0 scale-y-0 origin-top flex items-center justify-start ">
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5 w-[auto] ">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                lire les articles
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/blogue-img.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                lire les articles
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/handshake.gif"
              />
            </div>
            <div className="marquee-child flex items-start whitespace-nowrap shrink-0 bg-[#D3FD50] pt-5 w-[auto] ">
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                lire les articles
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/blogue-img.png"
              />
              <h2 className="text-[7.5vw] uppercase font-[font2] leading-[6.3vw] text-black">
                lire les articles
              </h2>
              <img
                className="w-[15vw] h-[5.4vw] object-cover rounded-full mx-5"
                src="./public/images/handshake.gif"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="social-links flex items-center justify-between w-full mt-auto p-3 pl-4">
        <div className="h-[5px] w-[6vw] border-b-20 border-dotted "></div>
        <div className="flex items-center justify-center gap-2">
          <Link
            className="text-[2.3vw] font-[font2] border-2 rounded-full pt-2 px-3 leading-[1.7vw] hover:text-[#D3FD50]  "
            to="https://sheryians.com"
            target="_blank"
          >
            FB
          </Link>
          <Link
            className="text-[2.3vw] font-[font2] border-2 rounded-full pt-2 px-3 leading-[1.7vw] hover:text-[#D3FD50]  "
            to="https://sheryians.com"
            target="_blank"
          >
            IG
          </Link>
          <Link
            className="text-[2.3vw] font-[font2] border-2 rounded-full pt-2 px-3 leading-[1.7vw] hover:text-[#D3FD50]  "
            to="https://sheryians.com"
            target="_blank"
          >
            IN
          </Link>
          <Link
            className="text-[2.3vw] font-[font2] border-2 rounded-full pt-2 px-3 leading-[1.7vw] hover:text-[#D3FD50]  "
            to="https://sheryians.com"
            target="_blank"
          >
            BE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNavbar;
