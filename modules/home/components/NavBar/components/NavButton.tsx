import Link from "next/link";
import ILink from "../types/ILink";
import { motion } from "framer-motion";

const variants={
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface IProps extends ILink {
  className?: string;
}

const NavButton=({ to, children, className }: IProps) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`mb-5 flex item-center cursor-pointer text-black rounded-md px-5 py-2 font-medium text-3xl ${className}`}
    >
      <Link href={to}>
        {children}
      </Link>
    </motion.li>
  );
};

export default NavButton;
