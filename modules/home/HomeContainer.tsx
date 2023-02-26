import Blob from "./components/ui-elements/Blob/Blob";
import Nav from "./components/NavBar/Nav";
import SocialMedia from "./components/SocialMedia/SocialMedia";

const HomeContainer=() => {
  return (
    <div className="flex flex-col relative h-screen text-white">
      <Blob />
      <SocialMedia />
      <div className="h-full w-screen flex items-center justify-between px-2 sm:px-16 xl:px-36">
        <div className="flex items-end md:items-center">
          <div className="flex flex-col">
            <div className="flex flex-col text-[100px] md:text-[150px] xl:text-[200px] antialiased">
              <h1 className="font-['Abhaya\\Libre'] md:-mb-10 xl:-mb-20 ">
                David
              </h1>
              <h1 className="font-['Abhaya\\Libre'] -mt-16">Recheni</h1>
            </div>
            <div className="text-4xl xl:text-5xl text-slate-300 font-light">
              <h2>Interaction designer</h2>
              <h2>Developer</h2>
            </div>
          </div>
        </div>

        <Nav />
      </div>

    </div>
  );
};

export default HomeContainer;
