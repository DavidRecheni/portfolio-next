import type { NextPage } from "next";
import LeftColumn from "../components/CV/LeftColumn";
import RightColumn from "../components/CV/RightColumn";
import TopRow from "../components/CV/TopRow";
import PageHead from "../components/shared/PageHead";
const Home: NextPage = () => {
  return (
    <div className="h-full dark:bg-github-dark">
      <div className="w-full h-full flex justify-center relative">
        <div>
          <PageHead />
          <main>
            <div className="max-w-4xl my-2 sm:my-8 px-4 dark:text-github-gray">
              <TopRow />

              <div className="border-b-4 border-black dark:border-white my-4" />

              <div className="flex gap-6 flex-col sm:flex-row">
                <LeftColumn />
                <RightColumn />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
