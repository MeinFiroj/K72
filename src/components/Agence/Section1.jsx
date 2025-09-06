import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

const Section1 = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const imageContRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img9.png",
    "/images/img10.png",
    "/images/img11.png",
    "/images/img12.png",
    "/images/img13.png",
    "/images/img14.png",
  ];

  useGSAP(() => {
    gsap.to(imageContRef.current, {
      scrollTrigger: {
        trigger: imageContRef.current,
        start: "top 24%",
        end: "top -140%",
        pin: true,
        onUpdate: (elem) => {
          const imageNumb = Math.round(elem.progress * imageArray.length);

          if (imageNumb < 14) {
            imageRef.current.src = imageArray[imageNumb];
          }
        },
      },
    });

    
  });

  return (
      <section className="section1 pt-[56vh] font-[font2] relative">
        <div
          ref={imageContRef}
          className="image absolute top-[7.4%] left-[31%] w-[14.8vw] h-[20vw] rounded-2xl overflow-hidden "
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="/images/img1.png"
            alt=""
          />
        </div>

        <div className="relative">
          <h1 className="text-center text-[19.5vw] leading-[17vw] uppercase ">
            Soixan7e <br />
            Douze
          </h1>

          <p className="w-[59%] pr-5 ml-auto text-[3.6vw] leading-[3.6vw]">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-y-[10rem] gap-x-[2rem] px-[11vw] py-[13vw]">
          <p className="text-xl font-medium ">Expertise</p>

          <p className="text-xl font-medium col-span-2">
            Stratégie <br /> Publicité <br /> Branding <br /> Design <br />{" "}
            Contenu
          </p>

          <p className="text-xl font-medium ">
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>

          <p className="text-xl font-medium ">
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d’exploser. Où on se sent libre d’être la meilleure version de
            soi-même.
          </p>

          <p className="text-xl font-medium ">
            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
            participe à bâtir une agence dont on est fiers.
          </p>
        </div>
      </section>
  );
};

export default Section1;
