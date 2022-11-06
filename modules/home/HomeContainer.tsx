import NavBar from "./components/NavBar";
import SculptureScene from "./components/SculptureScene";
import SocialMedia from "./components/SocialMedia";

const HomeContainer = () => {
  return (
    <div className="flex flex-col relative h-screen text-white">
      <div className=" h-full w-screen flex items-center justify-between  px-36">
        <div className="flex items-end md:items-center">
          <div className="flex flex-col">
            <h1 className="font-['Abhaya\\Libre'] text-8xl">David</h1>
            <h1 className="font-['Abhaya\\Libre'] text-8xl">Recheni</h1>
            <div className="mt-2 text-lg text-slate-300">
              <h2>Multimedia designer</h2>
              <h2>Full-stack web3 dev</h2>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full left-0 -top-44 lg:-top-20 ">
          <SculptureScene />
        </div>

        <NavBar />
      </div>

      <SocialMedia />
    </div>
  );
};

export default HomeContainer;
