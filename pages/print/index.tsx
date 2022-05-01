import { NextPage } from "next";
import PrintPageContainer from "../../components/PrintPage/PrintPageContainer";
import PageHead from "../../components/shared/PageHead";

const PrintPage: NextPage = () => {
  return (
    <div className="h-full dark:bg-github-dark">
      <div className="w-full h-full flex justify-center relative">
        <PageHead />
        <main>
          <PrintPageContainer />
        </main>
      </div>
    </div>
  );
};

export default PrintPage;
