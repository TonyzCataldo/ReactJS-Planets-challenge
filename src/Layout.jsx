import { useState } from "react";
import { usePlanet } from "./context/PlanetContext";
import bgImg from "./assets/background-stars.svg";
import Header from "./components/Header";
import MobileOptions from "./components/MobileOptions";
import PlanetImage from "./components/PlanetImage";
import TextResponse from "./components/TextResponse";
import PlanetInfo from "./components/PlanetInfo";
import PlanetsMd from "./components/PlanetsMd";
import DesktopOptions from "./components/DesktopOptions";

const Layout = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { planeta } = usePlanet(); // ← recebe o planeta do contexto
  const [selectedInfo, setSelectedInfo] = useState("overview");

  return (
    <div
      className={` min-h-screen bg-cover bg-darkBlue backimage ${
        menuVisible ? "h-[100vh] overflow-hidden" : ""
      }`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "-98% -103px",
      }}
    >
      <div className="lg:flex lg:items-center lg:justify-between lg:border-b border-white/20">
        {" "}
        <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <MobileOptions
          cor={planeta.cor}
          selectedInfo={selectedInfo}
          setSelectedInfo={setSelectedInfo}
        />
        <PlanetsMd />
      </div>
      <div className="lg:flex lg:mt-[8.125rem] lg:pr-[11.46%]">
        <PlanetImage images={planeta.images} selectedInfo={selectedInfo} />
        <div className="md:flex lg:flex-1 lg:flex-col">
          <TextResponse planeta={planeta} selectedInfo={selectedInfo} />
          <DesktopOptions
            cor={planeta.cor}
            selectedInfo={selectedInfo}
            setSelectedInfo={setSelectedInfo}
          />
        </div>
      </div>
      <PlanetInfo planeta={planeta} />
    </div>
  );
};

export default Layout;
