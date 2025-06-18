import MobileLinks from "./MobileLinks";

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
        <MobileLinks planeta={"mercury"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"venus"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"earth"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"mars"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"jupiter"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"saturn"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"uranus"} setMenuVisible={setMenuVisible} />
        <MobileLinks planeta={"neptune"} setMenuVisible={setMenuVisible} />
      </div>
    </div>
  );
};

export default Header;
