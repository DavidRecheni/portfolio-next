import NameAndRole from "./TopRow/NameAndRole";
import ToggleDarkMode from "./TopRow/ToggleDarkMode";

const TopRow = () => {
  return (
    <div className="flex justify-between items-center">
      <NameAndRole />
      <div className="flex">
        <ToggleDarkMode />
      </div>
    </div>
  );
};

export default TopRow;
