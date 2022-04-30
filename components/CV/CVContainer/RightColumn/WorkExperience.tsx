import data from "../../../../data/CVData";
import Header from "../../../shared/Header";
import TwoColsData from "../../../shared/TwoColsData";

const WorkExperience = () => (
  <div>
    <Header> Work experience </Header>
    <TwoColsData data={data.experience} />
  </div>
);

export default WorkExperience;
