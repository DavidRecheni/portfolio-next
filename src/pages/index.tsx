import type { NextPage } from "next";

import PageHead from "../modules/core/components/PageHead";
import HomeContainer from "../modules/home/HomeContainer";
import { Toaster } from "sonner";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center relative">
      <PageHead />
      <main>
        <HomeContainer />
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Home;
