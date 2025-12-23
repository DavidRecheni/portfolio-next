import type { NextPage } from "next";
import { ThemeProvider } from "next-themes";

import PageHead from "../../modules/core/components/PageHead";
import CVContainer from "../../modules/CV/CVContainer";

const CV: NextPage = () => {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      <div className="h-full bg-white text-black">
        <div className="w-full h-full flex justify-center relative">
          <PageHead />
          <main>
            <CVContainer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CV;
