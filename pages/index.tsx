import type { NextPage } from "next";
import PageHead from "../modules/CV/components/layout/PageHead";
const Home: NextPage = () => {
  return (
    <div className="h-full dark:bg-github-dark">
      <div className="w-full h-full flex justify-center relative">
        <PageHead />
        <main></main>
      </div>
    </div>
  );
};

export default Home;
