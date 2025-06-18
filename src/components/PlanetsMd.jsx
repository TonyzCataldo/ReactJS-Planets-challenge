import MdLinks from "./MdLinks";

const PlanetsMd = () => {
  return (
    <nav className="hidden md:flex md:gap-[33px] md:justify-center md:pb-7 md:border-b md:border-white/20 lg:h-[5.313rem] lg:border-none lg:pt-[2.063rem] lg:pb-0 lg:mr-10  ">
      <MdLinks planeta={"mercury"} />
      <MdLinks planeta={"venus"} />
      <MdLinks planeta={"earth"} />
      <MdLinks planeta={"mars"} />
      <MdLinks planeta={"jupiter"} />
      <MdLinks planeta={"saturn"} />
      <MdLinks planeta={"uranus"} />
      <MdLinks planeta={"neptune"} />
    </nav>
  );
};
export default PlanetsMd;
