import { useGSAP } from "@gsap/react";
import Section1 from "../components/Agence/Section1";
import Footer from "../components/Footer/Footer";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollSmoother);

const Agence = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
  });
  return (
    <div id="smooth-wrapper" className="w-full">
      <div id="smooth-content" className="w-full ">
        <Section1 />
        <Footer />
      </div>
    </div>
  );
};

export default Agence;

{
  /* <section className="section1 pt-[56vh] font-[font2]">
        <div>
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

          <p className="text-xl font-medium col-span-2">Stratégie <br /> Publicité <br /> Branding <br /> Design <br /> Contenu</p>

          <p className="text-xl font-medium ">Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>

          <p className="text-xl font-medium ">Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>

          <p className="text-xl font-medium ">Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
        </div>
      </section> */
}
