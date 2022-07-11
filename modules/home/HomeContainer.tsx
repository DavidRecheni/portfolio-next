import SculptureScene from "./components/SculptureScene";

const HomeContainer = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center dark:text-github-gray ">
      <h1 className="absolute text-white font-['Abhaya\\Libre'] mt-20 text-6xl ">
        Deiv.re
      </h1>
      <SculptureScene />
    </div>
  );
};

export default HomeContainer;
