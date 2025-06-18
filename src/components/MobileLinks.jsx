import { Link } from "react-router-dom";
import planetas from "../data/planetas.json";

const MobileLinks = ({ planeta, setMenuVisible }) => {
  const planetaInfo = planetas.find(
    (p) => p.name.toLowerCase() === planeta.toLowerCase()
  );
  const cor = planetaInfo?.cor2;

  return (
    <Link to={`/${planeta}`} onClick={() => setMenuVisible(false)}>
      <div
        className={`flex py-[20px] w-full border-b border-white/20 items-center ${
          planeta === "mercury" ? "pt-0" : ""
        } ${planeta === "neptune" ? "pb-0 border-none" : ""} `}
      >
        <div className="flex items-center gap-[1.375rem]">
          <div
            className="w-[20px] h-[20px] rounded-full"
            style={{ backgroundColor: cor }}
          ></div>
          <h3 className="text-white  tracking-[1.36px] font-bold font-spartan uppercase">
            {planeta}
          </h3>
        </div>
        <svg
          className="ml-auto mr-[8px]"
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
        >
          <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
        </svg>
      </div>
    </Link>
  );
};
export default MobileLinks;
