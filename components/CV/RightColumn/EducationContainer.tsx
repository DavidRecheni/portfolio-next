import data from "../../../data/CVData";
import Header from "../../shared/Header";
import TwoColsData from "../../shared/TwoColsData";

const EducationContainer = () => (
  <div>
    <Header>Education</Header>
    <TwoColsData data={data.studies} />
  </div>
);

export default EducationContainer;
