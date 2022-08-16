import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import LeftColumn from "./components/elements/LeftColumn";
import RightColumn from "./components/elements/RightColumn";
import TopRow from "./components/elements/TopRow";

const CVContainer = () => {
  return (
    <div className="max-w-4xl my-2 sm:my-8 px-4 dark:text-github-gray">
      <div className="absolute top-10 left-10 print:hidden">
        <Link href="/">
          <BsFillArrowLeftSquareFill className="text-5xl hover:text-slate-600 active:text-slate-500 hover:cursor-pointer" />
        </Link>
      </div>
      <TopRow />

      <div className="border-b-4 border-black dark:border-white my-4" />

      <div className="flex gap-6 flex-col sm:flex-row">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default CVContainer;
