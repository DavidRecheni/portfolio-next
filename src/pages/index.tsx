import type { NextPage } from "next";

import PageHead from "../modules/core/components/PageHead";
import HomeContainer from "../modules/home/HomeContainer";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center relative">
      <PageHead />
      <main>
        <HomeContainer />
      </main>
    </div>
  );
};

export default Home;
