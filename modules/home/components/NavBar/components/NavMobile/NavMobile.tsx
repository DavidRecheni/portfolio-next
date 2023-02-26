import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./components/MenuToggle/MenuToggle";
import NavigationList from "./components/MobileNavigationList/MobileNavigationList";

const sidebar={
  open: (height=1000) => ({
    clipPath: `circle(${height*2+200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 187px 43px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavMobile=() => {
  const [isOpen, toggleOpen]=useCycle(false, true);
  const containerRef=useRef<HTMLElement>(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen? "open":"closed"}
      custom={containerRef.current?.offsetHeight}
      ref={containerRef}
      className="md:hidden absolute top-0 right-0 bottom-0 w-60">

      <motion.div className="absolute top-0 right-0 bottom-0 w-60 bg-white opacity-50" variants={sidebar} />
      <NavigationList />
      <MenuToggle toggle={() => toggleOpen()} />

    </motion.nav>
  );
};

export default NavMobile;

