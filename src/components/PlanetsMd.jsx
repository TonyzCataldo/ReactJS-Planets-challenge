import { Link } from "react-router-dom";

const PlanetsMd = () => {
  return (
    <nav className="hidden md:flex md:gap-[33px] md:justify-center md:pb-7 md:border-b md:border-white/20 lg:h-[5.313rem] lg:border-none lg:pt-[2.063rem] lg:pb-0 lg:mr-10  ">
      <Link
        to={"/mercury"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#419EBB]  hovereffect"
      >
        Mercury
      </Link>
      <Link
        to={"/venus"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#EDA249] hovereffect"
      >
        Venus
      </Link>
      <Link
        to={"/earth"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#6D2ED5]  hovereffect"
      >
        Earth
      </Link>
      <Link
        to={"/mars"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#D14C32] hovereffect"
      >
        Mars
      </Link>
      <Link
        to={"/jupiter"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#D83A34] hovereffect"
      >
        Jupiter
      </Link>
      <Link
        to={"/saturn"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#CD5120] hovereffect"
      >
        Saturn
      </Link>
      <Link
        to={"/uranus"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#1EC1A2] hovereffect"
      >
        Uranus
      </Link>
      <Link
        to={"/neptune"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 before:bg-[#2D68F0] hovereffect"
      >
        Neptune
      </Link>
    </nav>
  );
};
export default PlanetsMd;
