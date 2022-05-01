import data from "../../../../data/CVData";
import Header from "../../../shared/Header";
import LiveProjectsRow from "./LiveProjectsContainer/LiveProjectsRow";

const LiveProjectsContainer: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div className={`flex flex-col w-full  gap-y-2 ${className}`}>
    <Header>Live projects</Header>
    {data.projects.map((proj) => (
      <LiveProjectsRow project={proj} key={proj.name} />
    ))}
  </div>
);

export default LiveProjectsContainer;
