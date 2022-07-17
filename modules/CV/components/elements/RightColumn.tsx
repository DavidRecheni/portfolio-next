import AboutContainer from "./RightColumn/AboutContainer";
import EducationContainer from "./RightColumn/EducationContainer";
import WorkExperience from "./RightColumn/WorkExperience";

const RightColumn = () => {
  return (
    <div className="flex flex-col flex-grow">
      <AboutContainer />
      <WorkExperience />
      <EducationContainer />
    </div>
  );
};

export default RightColumn;
