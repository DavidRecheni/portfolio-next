import type { NextPage } from "next";
import CVContainer from "../components/CV/CVContainer";
import PageHead from "../components/shared/PageHead";
const Home: NextPage = () => {
  return (
    <div className="h-full dark:bg-github-dark">
      <div className="w-full h-full flex justify-center relative">
        <div>
          <PageHead />
          <main>
            <CVContainer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
