import type { NextPage } from "next";
import PageHead from "../modules/CV/components/layout/PageHead";
import HomeContainer from "../modules/home/HomeContainer";
const Home: NextPage = () => {
  return (
    <div className="h-screen dark:bg-github-dark">
      <div className="w-screen h-screen flex justify-center relative bg-gray-800">
        <PageHead />
        <main>
          <HomeContainer />
        </main>
      </div>
    </div>
  );
};

export default Home;
