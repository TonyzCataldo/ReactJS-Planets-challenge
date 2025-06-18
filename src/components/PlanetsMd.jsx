import { Link } from "react-router-dom";

const PlanetsMd = ({ cor }) => {
  return (
    <nav className="hidden md:flex md:gap-[33px] md:justify-center md:pb-7 md:border-b md:border-white/20 lg:h-[5.313rem] lg:border-none lg:pt-[2.063rem] lg:pb-0 lg:mr-10  ">
      <Link
        to={"/mercury"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Mercury
      </Link>
      <Link
        to={"/venus"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Venus
      </Link>
      <Link
        to={"/earth"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Earth
      </Link>
      <Link
        to={"/mars"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Mars
      </Link>
      <Link
        to={"/jupiter"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Jupiter
      </Link>
      <Link
        to={"/saturn"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Saturn
      </Link>
      <Link
        to={"/uranus"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Uranus
      </Link>
      <Link
        to={"/neptune"}
        className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1  hovereffect"
        style={{ "--cor-before": cor }}
      >
        Neptune
      </Link>
    </nav>
  );
};
export default PlanetsMd;
