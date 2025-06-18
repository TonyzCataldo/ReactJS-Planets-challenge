import { usePlanet } from "../context/PlanetContext";
const InfoCard = ({ text, info }) => {
  const { planeta } = usePlanet();

  return (
    <div className="flex px-6 pt-2 pb-3 items-center justify-between border border-white/30 md:flex-col md:flex-1 md:items-start md:px-[0.938rem] md:pt-4 md:pb-[1.188rem] lg:pl-[1.438rem] lg:pt-[1.375rem] lg:pb-[1.868rem] lg:gap-1">
      <h3 className="uppercase text-white/50 font-spartan text-[11px]/4 tracking-wider font-bold lg:text-sm/6 lg:tracking-[0.063rem]">
        {text}
      </h3>
      <p className="uppercase text-white font-antonio text-xl tracking-[-0.75px] md:text-2xl md:tracking-[-0.9px] lg:text-[2.5rem] lg:tracking-[-0.094rem] lg:h-[2.625rem]">
        {planeta[info]}
      </p>
    </div>
  );
};
export default InfoCard;
