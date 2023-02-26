import AboutContainer from "./components/AboutContainer";
import EducationContainer from "./components/EducationContainer";
import WorkExperience from "./components/WorkExperience";

const RightColumn=() => {
  return (
    <div className="flex flex-col flex-grow">
      <AboutContainer />
      <WorkExperience />
      <EducationContainer />
    </div>
  );
};

export default RightColumn;
