import type { NextPage } from "next";
import PageHead from "../modules/CV/components/layout/PageHead";
import HomeContainer from "../modules/home/HomeContainer";
const Home: NextPage = () => {
  return (
    <div className="h-screen dark:bg-github-dark">
      <div className="w-screen h-screen flex justify-center relative bg-gradient-to-br from-[#272629] to-[#0a0a0c]">
        <PageHead />
        <main>
          <HomeContainer />
        </main>
      </div>
    </div>
  );
};

export default Home;
