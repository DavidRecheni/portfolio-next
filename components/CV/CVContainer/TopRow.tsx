import ToggleDarkMode from "./TopRow/ToggleDarkMode";
import NameAndRole from "./TopRow/NameAndRole";
import { BsPrinterFill } from "react-icons/bs";
import Link from "next/link";

const TopRow = () => {
  return (
    <div className="flex justify-between items-center">
      <NameAndRole />
      <div className="flex gap-2">
        <Link href="/print">
          <a>
            <BsPrinterFill size={32} />
          </a>
        </Link>
        <ToggleDarkMode />
      </div>
    </div>
  );
};

export default TopRow;
