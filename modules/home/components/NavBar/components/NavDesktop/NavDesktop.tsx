import { motion } from "framer-motion";
import DesktopNavigationList from "./components/DesktopNavigationList/DesktopNavigationList";

const variants={
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const NavDesktop=() => {
  return (
    <motion.ul variants={variants} className="hidden md:flex flex-col z-10 gap-y-8 justify-end 2xl:justify-center">
      <DesktopNavigationList />
    </motion.ul>
  );
};

export default NavDesktop;
