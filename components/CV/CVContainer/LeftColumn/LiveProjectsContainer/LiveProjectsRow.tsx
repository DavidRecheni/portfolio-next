import LiveProjectsRowGit from "./LiveProjectsRow/LiveProjectsRowGit";
import LiveProjectsRowName from "./LiveProjectsRow/LiveProjectsRowName";
import ProjectType from "./types/ProjectType";

interface ILiveProjectsRow {
  project: ProjectType;
}
const LiveProjectsRow: React.FC<ILiveProjectsRow> = ({ project }) => {
  return (
    <div className="flex justify-between">
      <LiveProjectsRowName project={project} />
      <LiveProjectsRowGit url={project.gitUrl} />
    </div>
  );
};

export default LiveProjectsRow;
