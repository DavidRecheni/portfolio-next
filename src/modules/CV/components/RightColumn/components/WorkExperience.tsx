import data from "../../../data/CVData";
import Header from "../../layout/Header";
import TwoColsData from "../../layout/TwoColsData";

const WorkExperience = () => (
  <div>
    <Header> Work experience </Header>
    <TwoColsData data={data.experience} />
  </div>
);

export default WorkExperience;
