import { motion } from "framer-motion";
import Link from "next/link";

import type ILink from "../types/ILink";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface IProps extends ILink {
  className?: string;
}

const NavButton = ({ to, children, className }: IProps) => {
  return (
    <Link href={to}>
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`mb-5 flex item-center cursor-pointer rounded-md px-5 py-2 font-medium text-3xl ${className}`}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default NavButton;
