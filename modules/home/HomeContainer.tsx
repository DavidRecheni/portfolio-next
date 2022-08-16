import Link from "next/link";
import SculptureScene from "./components/SculptureScene";
import { Button } from "react-daisyui";

const HomeContainer = () => {
  return (
    <div className="relative h-screen w-screen flex items-center text-white px-36">
      <div className="h-screen flex items-end md:items-center">
        <div className="flex flex-col">
          <h1 className="font-['Abhaya\\Libre'] text-8xl">Hola.</h1>
          <h2 className="text-2xl mt-2">David Recheni</h2>
          <div className="mt-2 text-lg text-slate-300">
            <h2>Multimedia designer</h2>
            <h2>Full-stack web3 dev</h2>
          </div>
        </div>
      </div>

      <div className="flex w-full h-screen relative">
        <div className="absolute w-full h-full -top-44 lg:-top-20">
          <SculptureScene />
        </div>
      </div>
      <div className="flex flex-col justify-end 2xl:justify-center">
        <Link href="/cv">
          <Button color="ghost" className="text-3xl">
            CV
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContainer;
