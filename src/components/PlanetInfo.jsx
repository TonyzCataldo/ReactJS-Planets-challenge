import InfoCard from "./InfoCard";

const PlanetInfo = () => {
  return (
    <section className="px-6 mt-7 pb-12 flex flex-col gap-2 md:flex-row md:justify-center md:gap-[0.688rem] md:px-10 md:pb-9 lg:mt-[5.438rem] lg:pb-14 lg:px-[11.46%] lg:gap-[1.875rem]">
      <InfoCard text={"rotation time"} info={"rotation"} />
      <InfoCard text={"revolution time"} info={"revolution"} />
      <InfoCard text={"radius"} info={"radius"} />
      <InfoCard text={"average temp."} info={"temperature"} />
    </section>
  );
};

export default PlanetInfo;
