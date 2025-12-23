"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";

interface IProps {
  link: {
    to: string;
    icon: IconType;
    alt: string;
  };
}

const IconLink = ({ link: { to, icon: Icon, alt } }: IProps) => {
  return (
    <motion.a
      href={to}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={30} title={alt} />
    </motion.a>
  );
};

export default IconLink;
