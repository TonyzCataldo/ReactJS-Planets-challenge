import { usePlanet } from "../context/PlanetContext";

const DesktopOptions = ({ selectedInfo, setSelectedInfo }) => {
  const { planeta } = usePlanet();
  const cor = planeta.cor;

  return (
    <section className="hidden md:flex md:flex-col md:flex-[0.829] md:mr-10 md:justify-center md:gap-4 font-spartan font-bold text-[0.656rem] lg:mr-0 lg:text-sm">
      <button
        onClick={() => setSelectedInfo("overview")}
        className="h-10 text-white border-white/20 border uppercase pl-5 text-left leading-6 tracking-[0.121rem] lg:h-12 lg:tracking-[0.161rem] hover:bg-[#D8D8D833]"
        style={
          selectedInfo === "overview"
            ? { border: "none", backgroundColor: cor }
            : {}
        }
      >
        <span className="mr-[1.063rem] text-white/50">01</span>
        Overview
      </button>
      <button
        onClick={() => setSelectedInfo("structure")}
        className="h-10 text-white border-white/20 border uppercase pl-5 text-left leading-6 tracking-[0.121rem] lg:h-12 hover:bg-[#D8D8D833]"
        style={
          selectedInfo === "structure"
            ? { border: "none", backgroundColor: cor }
            : {}
        }
      >
        <span className="mr-[1.063rem] text-white/50">02</span>
        internal Structure
      </button>
      <button
        onClick={() => setSelectedInfo("geology")}
        className="h-10 text-white border-white/20 border uppercase pl-5 text-left leading-6 tracking-[0.121rem] lg:h-12 hover:bg-[#D8D8D833]"
        style={
          selectedInfo === "geology"
            ? { border: "none", backgroundColor: cor }
            : {}
        }
      >
        <span className="mr-[1.063rem] text-white/50">03</span>
        Surface Geology
      </button>
    </section>
  );
};
export default DesktopOptions;
