import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import TopRow from "./components/TopRow/TopRow";

const CVContainer=() => {
  return (
    <div className="max-w-4xl my-2 sm:my-8 px-4 dark:text-github-gray">
      <TopRow />

      <div className="border-b-4 border-black dark:border-white my-4" />

      <div className="flex gap-6 flex-col sm:flex-row w-full">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default CVContainer;
