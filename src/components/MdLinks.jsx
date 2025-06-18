import { Link } from "react-router-dom";
import planetas from "../data/planetas.json";

const MdLinks = ({ planeta }) => {
  const planetaInfo = planetas.find(
    (p) => p.name.toLowerCase() === planeta.toLowerCase()
  );
  const cor = planetaInfo?.cor;

  return (
    <Link
      to={`/${planeta}`}
      className="text-white/95 uppercase font-spartan font-bold text-xs/6 tracking-widest lg:relative before:content-[''] before:absolute before:top-[-33px] before:w-full before:h-1 hovereffect"
      style={{ "--before-color": cor }}
    >
      {planeta}
    </Link>
  );
};
export default MdLinks;
