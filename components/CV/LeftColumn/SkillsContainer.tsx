import { BsDot } from "react-icons/bs";
import data from "../../../data/CVData";
import Header from "../../shared/Header";

const SkillsContainer = () => (
  <div className="flex flex-col w-full ">
    <Header>Skillset</Header>
    <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 my-2">
      {data.skills.sort().map((skill) => (
        <div
          key={skill}
          className="cursor-default text-sm sm:text-base flex items-center"
        >
          <BsDot />
          <p className="text-xs sm:text-base">{skill}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsContainer;
