import { Link } from "react-router-dom";

const Header = ({ menuVisible, setMenuVisible }) => {
  return (
    <div className="">
      <header className="border-b border-white/20 md:border-none">
        <div className="flex items-center mx-[1.5rem] py-[1rem] md:justify-center md:pt-8 md:pb-9 lg:pt-[1.375rem] lg:pb-[1.688rem] lg:ml-8">
          <h2 className="font-antonio text-white text-3xl tracking-tight">
            THE PLANETS
          </h2>
          <svg
            onClick={() => setMenuVisible(!menuVisible)}
            className={`ml-auto md:hidden ${
              menuVisible ? "text-white opacity-[24.8%]" : " text-white"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </div>
      </header>
      <div
        className={`flex w-full pt-10 px-6 text-white flex-col md:hidden ${
          menuVisible
            ? "h-[100vh] bg-darkBlue"
            : "transform translate-x-full hidden"
        }`}
      >
        <Link to={"/mercury"} onClick={() => setMenuVisible(false)}>
          <div className="flex pb-[20px] w-full border-b border-white/20 items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#DEF4FC]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                MERCURY
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
        <Link to={"/venus"} onClick={() => setMenuVisible(false)}>
          <div className="flex py-[20px] border-b border-white/20 w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#F7CC7F]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                VENUS
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
        <Link to={"/earth"} onClick={() => setMenuVisible(false)}>
          <div className="flex py-[20px] border-b border-white/20 w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#545BFE]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                EARTH
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
        <Link to={"/mars"} onClick={() => setMenuVisible(false)}>
          <div className="flex py-[20px] border-b border-white/20 w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FF6A45]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                MARS
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
        <Link to={"/jupiter"} onClick={() => setMenuVisible(false)}>
          <div className="flex py-[20px] border-b border-white/20 w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#ECAD7A]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                JUPITER
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
        <Link to={"/saturn"} onClick={() => setMenuVisible(false)}>
          <div className="flex py-[20px] border-b border-white/20 w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCCB6B]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                SATURN
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
        <Link to={"/uranus"} onClick={() => setMenuVisible(false)}>
          <div className="flex py-[20px] border-b border-white/20 w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#65F0D5]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                URANUS
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
        <Link to={"/neptune"} onClick={() => setMenuVisible(false)}>
          <div className="flex pt-[20px]  w-full items-center">
            <div className="flex items-center gap-[1.375rem]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#497EFA]"></div>
              <h3 className="text-white  tracking-[1.36px] font-bold font-spartan">
                NEPTUNE
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
      </div>
    </div>
  );
};

export default Header;
