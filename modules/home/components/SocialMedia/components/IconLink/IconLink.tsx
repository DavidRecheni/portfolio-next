import { IconType } from "react-icons/lib";
import ILink from "../../../NavBar/types/ILink";

interface IProps {
  link: {
    to: string;
    icon: IconType;
    alt: string;
  }
}

const IconLink=({ link: { to, icon: Icon, alt } }: IProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="hover:text-black transition duration-300 ease-out"
    >
      <Icon size={30} title={alt} />
    </a>
  );
};

export default IconLink;
