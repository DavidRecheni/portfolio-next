import React from "react";
import { IconType } from "react-icons";

const ContactDataIcon: React.FC<{ icon: { url: string; icon: IconType } }> = ({
  icon,
}) => {
  return (
    <a
      className="hover:text-blue-600"
      href={icon.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="font-medium flex items-center text-2xl sm:text-4xl">
        {icon.icon({})}
      </div>
    </a>
  );
};

export default ContactDataIcon;
