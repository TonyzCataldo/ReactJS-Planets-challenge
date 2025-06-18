const PlanetInfo = ({ planeta }) => {
  return (
    <section className="px-6 mt-7 pb-12 flex flex-col gap-2 md:flex-row md:justify-center md:gap-[0.688rem] md:px-10 md:pb-9 lg:mt-[5.438rem] lg:pb-14 lg:px-[11.46%] lg:gap-[1.875rem]">
      <div className="flex px-6 pt-2 pb-3 items-center justify-between border border-white/30 md:flex-col md:flex-1 md:items-start md:px-[0.938rem] md:pt-4 md:pb-[1.188rem] lg:pl-[1.438rem] lg:pt-[1.375rem] lg:pb-[1.868rem]">
        <h3 className="uppercase text-white/50 font-spartan text-[11px]/4 tracking-wider font-bold lg:text-sm/6 lg:tracking-[0.063rem]">
          Rotation Time
        </h3>
        <p className="uppercase text-white font-antonio text-xl tracking-[-0.75px] md:text-2xl md:tracking-[-0.9px] lg:text-[2.5rem] lg:tracking-[-0.094rem] lg:h-[2.625rem]">
          {planeta.rotation}
        </p>
      </div>
      <div className="flex px-6 pt-2 pb-3 items-center justify-between border border-white/30 md:flex-col md:flex-1 md:items-start md:px-[0.938rem]  md:pt-4 md:pb-[1.188rem] lg:pl-[1.438rem] lg:pt-[1.375rem] lg:pb-[1.868rem]">
        <h3 className="uppercase text-white/50 font-spartan text-[11px]/4 tracking-wider font-bold lg:text-sm/6 lg:tracking-[0.063rem]">
          Revolution Time
        </h3>
        <p className="uppercase text-white font-antonio text-xl tracking-[-0.75px] md:text-2xl md:tracking-[-0.9px] lg:text-[2.5rem] lg:tracking-[-0.094rem] lg:h-[2.625rem]">
          {planeta.revolution}
        </p>
      </div>
      <div className="flex px-6 pt-2 pb-3 items-center justify-between border border-white/30 md:flex-col md:flex-1 md:items-start md:px-[0.938rem]  md:pt-4 md:pb-[1.188rem] lg:pl-[1.438rem] lg:pt-[1.375rem] lg:pb-[1.868rem]">
        <h3 className="uppercase text-white/50 font-spartan text-[11px]/4 tracking-wider font-bold lg:text-sm/6 lg:tracking-[0.063rem]">
          Radius
        </h3>
        <p className="uppercase text-white font-antonio text-xl tracking-[-0.75px] md:text-2xl md:tracking-[-0.9px] lg:text-[2.5rem] lg:tracking-[-0.094rem] lg:h-[2.625rem]">
          {planeta.radius}
        </p>
      </div>
      <div className="flex px-6 pt-2 pb-3 items-center justify-between border border-white/30 md:flex-col md:flex-1 md:items-start md:px-[0.938rem]  md:pt-4 md:pb-[1.188rem] lg:pl-[1.438rem] lg:pt-[1.375rem] lg:pb-[1.868rem]">
        <h3 className="uppercase text-white/50 font-spartan text-[11px]/4 tracking-wider font-bold lg:text-sm/6 lg:tracking-[0.063rem]">
          Average Temp.
        </h3>
        <p className="uppercase text-white font-antonio text-xl tracking-[-0.75px] md:text-2xl md:tracking-[-0.9px] lg:text-[2.5rem] lg:tracking-[-0.094rem] lg:h-[2.625rem]">
          {planeta.temperature}
        </p>
      </div>
    </section>
  );
};

export default PlanetInfo;
