import data from "../../../../data/CVData";
import Header from "../../../shared/Header";
import LiveProjectsRow from "./LiveProjectsContainer/LiveProjectsRow";

const LiveProjectsContainer = () => (
  <div className="flex flex-col w-full ml-4 sm:ml-0 gap-y-2 print:hidden">
    <Header>Live projects</Header>
    {data.projects.map((proj) => (
      <LiveProjectsRow project={proj} key={proj.name} />
    ))}
  </div>
);

export default LiveProjectsContainer;
