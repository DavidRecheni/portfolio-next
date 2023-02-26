import DesktopNavigationList from "./components/DesktopNavigationList/DesktopNavigationList";

const NavDesktop=() => {
  return (
    <div className="hidden md:flex flex-col z-10 gap-y-8 justify-end 2xl:justify-center">
      <DesktopNavigationList />
    </div>
  );
};

export default NavDesktop;
