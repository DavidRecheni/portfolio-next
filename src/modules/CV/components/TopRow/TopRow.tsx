import DownloadButton from "./components/DownloadButton";
import NameAndRole from "./components/NameAndRole";
import ToggleDarkMode from "./components/ToggleDarkMode";

const TopRow = () => {
  return (
    <div className="flex justify-between items-center">
      <NameAndRole />
      <div className="flex gap-2 items-center">
        <DownloadButton />
        <ToggleDarkMode />
      </div>
    </div>
  );
};

export default TopRow;
