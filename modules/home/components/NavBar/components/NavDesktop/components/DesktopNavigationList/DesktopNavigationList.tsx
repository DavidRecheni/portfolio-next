import NavButton from "../../../NavButton";
import links from "../../../../constants/links";

const DesktopNavigationList = () => {
  return (
    <div className="p-6 top-24 w-56 left-0">
      {links.map((link) => (
        <NavButton key={link.to} to={link.to} className="border border-white ">
          {link.children}
        </NavButton>
      ))}
    </div>
  );
};

export default DesktopNavigationList;
