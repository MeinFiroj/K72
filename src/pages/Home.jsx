import HeroBottmText from "../components/Home/HeroBottmText";
import HeroTopText from "../components/Home/HeroTopText";
import Video from "../components/Home/Video";
import NavbarHome from "../components/Navbar/NavbarHome";

const Home = () => {
  return (
    <div className="h-screen w-full relative">
      <NavbarHome/>

      <div className="h-screen w-screen fixed">
        <Video />
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <HeroTopText />
        <HeroBottmText />
      </div>

      <p className="absolute top-[60%] right-[2%] w-[19vw] font-medium text-[.9rem] leading-5 text-white">
        <span className="block text-right pr-3">
          K72 est une agence qui pense
        </span>{" "}
        chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans.
        On cherche la friction qui crée l’étincelle pour générer de l’émotion.
        Pour assurer une relation honnête, on est sans filtre, on dit ce qui
        doit être dit, on fait ce qui doit être fait.
      </p>
    </div>
  );
};

export default Home;
