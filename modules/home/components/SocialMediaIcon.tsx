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
      className="hover:text-slate-300"
    >
      <Icon size={34} />
    </a>
  );
};

export default SocialMediaIcon;
