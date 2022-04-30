import AboutContainer from "./RightColumn/AboutContainer";
import EducationContainer from "./RightColumn/EducationContainer";
import GithubStats from "./RightColumn/GithubStats";
import WorkExperience from "./RightColumn/WorkExperience";

const RightColumn = () => {
  return (
    <div className="flex flex-col flex-grow">
      <AboutContainer />
      <GithubStats />
      <WorkExperience />
      <EducationContainer />
    </div>
  );
};

export default RightColumn;
