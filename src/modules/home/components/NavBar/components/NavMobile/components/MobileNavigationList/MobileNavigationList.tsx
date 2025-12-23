"use client";

import { motion } from "framer-motion";

import links from "../../../../constants/links";
import NavButton from "../../../NavButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileNavigationList = () => {
  return (
    <motion.ul variants={variants} className="p-6 absolute top-24 w-56 left-0">
      {links.map((link) => (
        <NavButton key={link.to} to={link.to} className="text-black">
          {link.children}
        </NavButton>
      ))}
    </motion.ul>
  );
};

export default MobileNavigationList;
