import type { StaticImageData } from "next/image";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

import IconLink from "../../../../../home/components/SocialMedia/components/IconLink/IconLink";
import Tag from "./components/Tag";

interface IProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    repo: string;
    image: StaticImageData;
    creationDate: string;
  };
}
const Project = ({ project }: IProps) => {
  return (
    <div
      key={project.title}
      className="flex flex-col gap-y-2 rounded-sm border bg-white text-slate-900 p-4"
    >
      <a href={project.link} target="_blank" rel="noreferrer">
        <Image src={project.image} alt={`${project.title} Screenshot`} />
      </a>
      <div className="flex flex-col gap-y-2 mt-2 pt-2 ">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 text-gray-900">
            {project.repo && (
              <IconLink
                link={{ to: project.repo, icon: BsGithub, alt: "Repository" }}
              />
            )}
          </div>
        </div>

        <h2 className="text-lg font-medium">{project.title}</h2>

        <p className="">{project.description}</p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
