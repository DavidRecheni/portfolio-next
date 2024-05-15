import SocialMedia from "./components/SocialMedia/SocialMedia";
import Prices from "./components/Prices";
import ProjectsList from "../projects/components/ProjectsList/ProjectsList";
import useDetectScroll from "../core/hooks/useDetectScroll";
import Link from "next/link";

const HomeContainer = () => {
  const { scrollPosition } = useDetectScroll();

  const hasScrolled = scrollPosition.top > 50;

  return (
    <section
      className="flex flex-col relative w-full min-h-screen text-white"
      id="main"
    >
      <SocialMedia />
      <div className="relative w-full flex flex-col sm:flex-row pt-16 sm:pt-0 items-center h-screen justify-between px-4 gap-y-4 sm:px-16 xl:px-36">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-7xl antialiased font-['Abhaya\\Libre']">
            David Recheni
          </h1>
          <div className="flex flex-col mt-6 max-w-md font-light">
            <p className="text-xl sm:text-2xl mb-4">
              I help startups build and optimize their product, team and
              processes.
            </p>
            <p className="text-lg sm:text-xl font-light">
              10+ years of experience.
            </p>
            <p className="text-lg sm:text-xl font-light">Based in Berlin.</p>
            <div className="pt-4 flex items-center gap-4">
              <a
                href="mailto:davidrecheni@gmail.com"
                className="text-lg sm:text-xl font-light border border-white px-3 pt-1 pb-2 rounded-sm hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
              >
                Get in touch
              </a>
              <Link href={"/cv"} className="">
                <p className="cursor-pointer text-lg sm:text-xl font-light border border-white px-3 pt-1 pb-2 rounded-sm hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                  CV
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xl gap-y-2">
          <p className="text-lg sm:text-xl font-light">
            Current stack: <br />
            Nextjs, Typescript, Tailwind, TRPC, Prisma
          </p>
          <div className="pt-10">
            <Prices />
          </div>
        </div>
        <div className="hidden sm:block absolute mx-auto left-0 right-0 bottom-6">
          <a href="#projects">
            <p className="mx-auto text-center text-xl"> Projects </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white mx-auto animate-bounce mt-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
        {hasScrolled && (
          <div className="fixed flex justify-center sm:mx-auto sm:left-0 right-4 pb-1 sm:right-0 bottom-6 z-10">
            <div className="bg-gray-800 rounded-full w-12">
              <a href="#main">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white mx-auto animate-bounce mt-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>

      <div
        className="flex flex-col relative h-full overflow-x-hidden text-white items-center md:gap-y-16 pt-20 md:pt-32 px-2 sm:px-16 xl:px-28"
        id="projects"
      >
        <h1 className="text-2xl sm:text-3xl">Projects</h1>
        <ProjectsList />
      </div>
    </section>
  );
};

export default HomeContainer;
