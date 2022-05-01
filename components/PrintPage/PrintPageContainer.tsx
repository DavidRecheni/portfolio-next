import LeftColumn from "./PrintPageContainer/LeftColumn";
import RightColumn from "./PrintPageContainer/RightColumn";
import TopRow from "./PrintPageContainer/TopRow";

const PrintPageContainer = () => {
  return (
    <div className="max-w-4xl my-2 sm:my-8 px-4 dark:text-github-gray">
      <TopRow />

      <div className="border-b-4 border-black dark:border-white my-4" />

      <div className="flex gap-6 flex-col sm:flex-row">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default PrintPageContainer;
