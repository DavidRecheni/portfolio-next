import React from "react";
import { IconType } from "react-icons";

const ContactDataIcon: React.FC<{ icon: { url: string; icon: IconType } }> = ({
  icon,
}) => {
  return (
    <div className="font-medium flex items-center gap-2">
      <p className="text-xl sm:text-xl">{icon.icon({})}</p>
      <p className="text-xs sm:text-sm">{icon.url}</p>
    </div>
  );
};

export default ContactDataIcon;
