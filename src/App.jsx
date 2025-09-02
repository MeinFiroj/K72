import FullScreenNavbar from "./components/Navbar/FullScreenNavbar";
import PageTransiton from "./components/PageTransiton";
import MainRoutes from "./routes/MainRoutes";
import NavAnimate from "./Animations/NavAnimate";

const App = () => {
  return (
    <div className="w-full">
      <PageTransiton>
        <MainRoutes />
        <FullScreenNavbar/>
        <NavAnimate/>
      </PageTransiton>
    </div>
  );
};

export default App;
