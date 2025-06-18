import { usePlanet } from "../context/PlanetContext";

const PlanetImage = ({ selectedInfo }) => {
  const { planeta } = usePlanet();

  const getPath = (src) =>
    `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

  const imgSource =
    selectedInfo === "structure"
      ? getPath(planeta.images.internal)
      : getPath(planeta.images.planet);
  const geologySource = getPath(planeta.images.geology);

  return (
    <div className="flex justify-center relative h-[301px] md:h-[460px] items-center lg:flex-[2.643]">
      <img
        className="absolute scale-[0.3844] md:scale-[0.6335] md:mt-[0.55rem] lg:scale-100 max-w-none transition-opacity duration-500 opacity-0 animate-fade-in"
        src={imgSource}
        key={imgSource}
        alt="Planet"
      />
      <img
        className="scale-[0.2] mt-32 md:mt-56 md:scale-[0.33] lg:scale-50 lg:mt-96"
        style={selectedInfo === "geology" ? {} : { display: "none" }}
        src={geologySource}
        alt="Geology layer"
      />
    </div>
  );
};

export default PlanetImage;
