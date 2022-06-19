import type { NextPage } from "next";
import CVContainer from "../../modules/CV/CVContainer";
import PageHead from "../../modules/CV/components/layout/PageHead";
const CV: NextPage = () => {
  return (
    <div className="h-full dark:bg-github-dark">
      <div className="w-full h-full flex justify-center relative">
        <PageHead />
        <main>
          <CVContainer />
        </main>
      </div>
    </div>
  );
};

export default CV;
