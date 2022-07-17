import { IconType } from "react-icons/lib";

type ProjectType = {
  name: string;
  url: string;
  icon: IconType;
  gitUrl?: string;
};

export default ProjectType;
