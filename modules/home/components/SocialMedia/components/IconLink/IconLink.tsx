import { IconType } from "react-icons/lib";

interface IProps {
  icon: IconType;
  to: string;
}

const IconLink=({ icon: Icon, to }: IProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="hover:text-black transition duration-300 ease-out"
    >
      <Icon size={30} />
    </a>
  );
};

export default IconLink;
