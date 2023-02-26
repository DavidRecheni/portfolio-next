import NameAndRole from "./components/NameAndRole";
import ToggleDarkMode from "./components/ToggleDarkMode";

const TopRow=() => {
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
