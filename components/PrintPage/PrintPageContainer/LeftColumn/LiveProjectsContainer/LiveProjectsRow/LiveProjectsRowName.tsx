import ProjectType from "../types/ProjectType";

const LiveProjectsRowName: React.FC<{ project: ProjectType }> = ({
  project,
}) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="font-medium underline flex items-center gap-2 underline-offset-1  hover:text-blue-600"
    >
      <p className="sm:text-2xl">{project.icon({})}</p>
      <p className="text-sm sm:text-">{project.name}</p>
    </a>
  );
};

export default LiveProjectsRowName;
