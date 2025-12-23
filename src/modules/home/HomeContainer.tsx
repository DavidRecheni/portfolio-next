"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

import Project from "../projects/components/ProjectsList/components/Project/Project";
import projects from "../projects/constants/projects";
import ContactForm from "./components/ContactForm/ContactForm";
import IconLink from "./components/IconLink/IconLink";
import Badge from "./components/Prices/Badge";
import ScrollingText from "./components/ScrollingText";

const links = [
  {
    to: "https://github.com/DavidRecheni",
    icon: BsGithub,
    alt: "Github",
  },
  {
    to: "https://www.linkedin.com/in/david-recheni/",
    icon: BsLinkedin,
    alt: "Linkedin",
  },
  {
    to: "https://twitter.com/deiv_re",
    icon: BsTwitter,
    alt: "Twitter",
  },
];

const HomeContainer = () => {
  const showModal = () => {
    (
      document.getElementById("contact_modal") as HTMLDialogElement | null
    )?.showModal();
  };

  return (
    <>
      <section
        className="grid grid-cols-12 relative w-full h-screen grid-rows-12 gap-4 bg-white text-gray-900"
        id="main"
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          className="col-start-2 sm:col-start-5 lg:col-start-6 row-start-1 col-span-4 lg:col-span-2 z-10 mt-4 sm:mt-0"
        >
          <div className="flex items-center justify-center gap-5 pl-4 py-2 rounded-b-xl bg-white">
            {links.map((link) => (
              <IconLink link={link} key={link.to} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: -200 }}
          className="row-start-1 col-start-1 col-span-7 row-span-12 p-6 grid grid-rows-10 grid-cols-4 sm:grid-cols-6 gap-4"
        >
          <h2 className="row-start-2 col-span-3 sm:col-span-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl antialiased sm:-mt-5">
            Developer
          </h2>
          <h2 className="row-start-3 col-span-3 sm:col-span-6 xl:col-span-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl antialiased -mt-5 whitespace-nowrap">
            & Designer
          </h2>

          <div className="row-start-4 col-span-4 sm:col-span-4 md:col-span-5 lg:col-span-3 row-span-2">
            <h1 className="text-lg sm:text-xl 2xl:text-2xl lg:mt-10">
              I help startups build and optimize their product, team and
              processes.
            </h1>
          </div>

          <div className="row-start-6 col-start-1 col-span-4 lg:col-span-3 2xl:col-span-2 flex items-end">
            <motion.button
              onClick={showModal}
              className="text-lg sm:text-xl bg-black text-white font-normal px-3 pt-1 pb-2 rounded-sm border w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get in touch"
            >
              Get in touch
            </motion.button>
          </div>
          <Badge
            title="Winner"
            description="Urbit challenge"
            event={{
              name: "NFT Berlin'22",
              url: "https://2022.nftberlin.org/",
            }}
            className="row-start-7 col-start-1 col-span-2 lg:col-span-1 lg:ml-6 xl:ml-0 row-span-2"
          />
          <Badge
            title="Winner"
            description="1st Place"
            event={{ name: "ETH Zurich'23", url: "https://ethereumzuri.ch/" }}
            className="row-start-7 col-start-2 col-span-3 lg:col-span-1 ml-12 lg:mr-6 xl:mr-0 xl:col-start-2 row-span-2"
          />
        </motion.div>
        <div className="col-span-6 row-span-12 row-start-1 sm:col-start-7 p-4 bg-white">
          <Image
            src="/images/profile.jpg"
            alt="Me"
            width={1700}
            height={800}
            style={{ objectFit: "cover", height: "100%" }}
            quality={100}
          />
        </div>
        <div className="absolute bottom-10 w-full">
          <ScrollingText />
        </div>
      </section>
      <section
        className="grid relative w-full min-h-screen text-white p-4 bg-black"
        id="main"
      >
        <h2 className="text-[3.5rem] sm:text-[7rem]">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-12 pt-6 pb-24">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
        <dialog id="contact_modal" className="modal text-black">
          <div className="modal-box rounded-sm">
            <h3 className="text-center mb-4 text-lg font-medium">
              Contact form
            </h3>
            <ContactForm />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </section>
    </>
  );
};

export default HomeContainer;
