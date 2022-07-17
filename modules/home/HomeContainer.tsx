import Link from "next/link";
import SculptureScene from "./components/SculptureScene";

const HomeContainer = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center text-white ">
      <div className="absolute left-48 h-screen flex items-center">
        <div className="flex flex-col">
          <h1 className="font-['Abhaya\\Libre']  text-8xl">Hola.</h1>
          <h2 className="text-2xl mt-2">David Recheni</h2>
          <div className="mt-2 text-lg text-slate-300">
            <h2>Multimedia designer</h2>
            <h2>Full-stack web3 dev</h2>
          </div>
        </div>
      </div>

      <div className="flex w-full h-screen relative">
        <div className="absolute w-full h-screen -top-20">
          <SculptureScene />
        </div>

        <div className="absolute h-screen right-48 flex flex-col justify-center">
          <Link href="/cv">
            <h2 className="mt-20 mr-20 hover:cursor-pointer border-b-2 px-1 pb-1 border-slate-400 hover:border-white border- text-3xl text-white">
              CV
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
