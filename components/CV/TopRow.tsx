import ToggleDarkMode from "./TopRow/ToggleDarkMode";
import ContactDataContainer from "./TopRow/ContactDataContainer";
import NameAndRole from "./TopRow/NameAndRole";

const TopRow = () => {
  return (
    <div className="flex justify-between items-center">
      <NameAndRole />
      <div className="flex flex-col gap-1 sm:gap-2 items-end">
        <ToggleDarkMode />
        <ContactDataContainer />
      </div>
    </div>
  );
};

export default TopRow;
