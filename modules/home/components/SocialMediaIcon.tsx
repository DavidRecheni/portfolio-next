import React from "react";
import { IconType } from "react-icons/lib";

interface IProps {
  icon: IconType;
  href: string;
}

const SocialMediaIcon = ({ icon: Icon, href }: IProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-black transition duration-300 ease-out"
    >
      <Icon size={30} />
    </a>
  );
};

export default SocialMediaIcon;
