import { useGSAP } from "@gsap/react";
import ProjetsBottom from "../components/projets/ProjetsBottom";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const imageArray = [
    {
      image1: "./projets/img1.png",
      image2: "./projets/img2.png",
    },
    {
      image1: "./projets/img3.png",
      image2: "./projets/img4.png",
    },
    {
      image1: "./projets/img5.png",
      image2: "./projets/img6.png",
    },
    {
      image1: "./projets/img7.png",
      image2: "./projets/img8.png",
    },
    {
      image1: "./projets/img9.png",
      image2: "./projets/img10.png",
    },
    {
      image1: "./projets/img11.png",
      image2: "./projets/img12.png",
    },
    {
      image1: "./projets/img13.png",
      image2: "./projets/img14.png",
    },
    {
      image1: "./projets/img15.png",
      image2: "./projets/img16.png",
    },
  ];

  useGSAP(() => {
    gsap.from(".imgCont", {
      height: "19vh",
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".imgContParent",
        // markers: true,
        start: "top 90%",
        end: "top -350%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-full p-3">
      <div className="pt-[50vh] flex font-[font2] items-start justify-start">
        <h1 className="text-[12.7vw] uppercase  leading-[9vw]">Projets</h1>
        <h3 className="text-[2.7vw] leading-[1vw]">16</h3>
      </div>
      <div className="imgContParent flex flex-col gap-2">
        {imageArray.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="imgCont h-[70vh] origin-bottom w-full flex items-start gap-2"
            >
              <ProjetsBottom image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
