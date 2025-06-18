import { usePlanet } from "../context/PlanetContext";

const MobileOptions = ({ selectedInfo, setSelectedInfo }) => {
  const { planeta } = usePlanet();

  return (
    <section className="flex justify-between mt-6 px-9  border-b border-white/20 md:hidden">
      <button
        onClick={() => setSelectedInfo("overview")}
        className={`font-spartan text-xs tracking-[1.93px] font-bold  pb-5 ${
          selectedInfo === "overview"
            ? "text-white/100 border-b-4"
            : "text-white/50"
        }`}
        style={{ borderColor: planeta.cor, width: "72.4px" }}
      >
        OVERVIEW
      </button>
      <button
        onClick={() => setSelectedInfo("structure")}
        className={`font-spartan text-xs tracking-[1.93px] font-bold  pb-5 ${
          selectedInfo === "structure"
            ? "text-white/100 border-b-4"
            : "text-white/50"
        }`}
        style={{ borderColor: planeta.cor, width: "77.8px" }}
      >
        STRUCTURE
      </button>
      <button
        onClick={() => setSelectedInfo("geology")}
        className={`font-spartan text-xs tracking-[1.93px] font-bold  pb-5 ${
          selectedInfo === "geology"
            ? "text-white/100 border-b-4"
            : "text-white/50"
        }`}
        style={{ borderColor: planeta.cor, width: "65px" }}
      >
        SURFACE
      </button>
    </section>
  );
};
export default MobileOptions;
