import FullScreenNavbar from "./components/Navbar/FullScreenNavbar";
import PageTransiton from "./Animations/PageTransiton";
import MainRoutes from "./routes/MainRoutes";
import NavAnimate from "./Animations/NavAnimate";
import NavbarHome from "./components/Navbar/NavbarHome";

const App = () => {
  return (
    <div  className="w-full">
      <PageTransiton>
        <NavbarHome/>
        <MainRoutes />
        <FullScreenNavbar/>
        <NavAnimate/>
      </PageTransiton>
    </div>
  );
};

export default App;
