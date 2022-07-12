import SculptureScene from "./components/SculptureScene";

const HomeContainer = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center dark:text-github-gray ">
      <h1 className="absolute  text-white font-['Abhaya\\Libre'] mt-14 text-[200px] ">
        Deiv.re
      </h1>
      <div className="flex w-full h-screen relative">
        <SculptureScene />
        <div className="absolute flex flex-col z-10 justify-center right-10 top-20">
          <h2 className="text-white font-['Abhaya\\Libre'] mt-20 mr-20 text-6xl">
            CV
          </h2>
          <h2 className=" text-white font-['Abhaya\\Libre'] mt-20 mr-20 text-6xl">
            Projects
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
