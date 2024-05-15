import Image, { StaticImageData } from "next/image";
import IconLink from "../../../../../home/components/SocialMedia/components/IconLink/IconLink";
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
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
      className="flex flex-col gap-y-2 rounded-sm border border-white p-4"
    >
      <Image src={project.image} alt={`${project.title} Screenshot`} />

      <div className="flex flex-col gap-y-2 border-t mt-2 pt-2 border-white">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 text-gray-300">
            <IconLink
              link={{ to: project.link, icon: BiWorld, alt: "Website" }}
            />
            {project.repo && (
              <IconLink
                link={{ to: project.repo, icon: BsGithub, alt: "Repository" }}
              />
            )}
          </div>
          <p>{project.creationDate}</p>
        </div>

        <h2 className="text-lg">{project.title}</h2>

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
