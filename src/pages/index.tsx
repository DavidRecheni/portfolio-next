import type { NextPage } from "next";

import PageHead from "../modules/core/components/PageHead";
import HomeContainer from "../modules/home/HomeContainer";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-github-dark w-full min-h-screen flex justify-center relative bg-gradient-to-br from-[#343337] to-[#0a0a0c]">
      <PageHead />
      <main>
        <HomeContainer />
      </main>
    </div>
  );
};

export default Home;
