import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutContainer from "../components/CV/AboutContainer";
import CertificatesContainer from "../components/CV/CertificatesContainer";
import ContactDataContainer from "../components/CV/ContactDataContainer";
import EducationContainer from "../components/CV/EducationContainer";
import GithubStats from "../components/CV/GithubStats";
import LanguagesContainer from "../components/CV/LanguagesContainer";
import LiveProjectsContainer from "../components/CV/LiveProjectsContainer";
import SkillsContainer from "../components/CV/SkillsContainer";
import WorkExperience from "../components/CV/WorkExperience";
import ToggleDarkMode from "../components/shared/ToggleDarkMode";
import data from "../data/CVData";
import picture from "../data/profile-pic.jpg";

const Home: NextPage = () => {
  return (
    <div className="w-[99vw] h-full dark:bg-github-dark">
      <div className="w-full h-full flex justify-center relative">
        <div>
          <Head>
            <title>David Recheni CV</title>
            <meta
              name="description"
              content="My personal portfolio website built on Nextjs"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <div className="max-w-4xl my-2 sm:my-8 px-4 dark:text-github-gray">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl sm:text-5xl font-bold dark:text-white">
                    {data.name}
                  </div>
                  <div className="text-sm sm:text-xl mt-2">
                    <div className="flex items-center gap-1 sm:gap-2 h-10">
                      {data.role}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:gap-2 items-end">
                  <ToggleDarkMode />
                  <ContactDataContainer />
                </div>
              </div>

              <div className="border-b-4 border-black dark:border-white my-4" />

              {/* Body */}
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="flex w-fit sm:w-4/12 flex-col gap-y-2">
                  <div className="flex sm:flex-col w-full">
                    <div className="max-w-[30%] h-auto sm:max-w-none flex items-center rounded-full">
                      <Image src={picture} alt="Me" className="rounded-full " />
                    </div>
                    <LiveProjectsContainer />
                  </div>
                  <SkillsContainer />
                  <LanguagesContainer />
                  <CertificatesContainer />
                </div>

                <div className="flex flex-col flex-grow">
                  <AboutContainer />
                  <GithubStats />
                  <WorkExperience />
                  <EducationContainer />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
