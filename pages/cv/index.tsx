import type { NextPage } from "next";

import PageHead from "../../modules/core/components/PageHead";
import CVContainer from "../../modules/CV/CVContainer";

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
