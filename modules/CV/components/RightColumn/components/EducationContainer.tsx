import data from "../../../data/CVData";
import Header from "../../layout/Header";
import TwoColsData from "../../layout/TwoColsData";

const EducationContainer = () => (
  <div>
    <Header>Education</Header>
    <TwoColsData data={data.studies} />
  </div>
);

export default EducationContainer;
