import CertificatesContainer from "./LeftColumn/CertificatesContainer";
import LanguagesContainer from "./LeftColumn/LanguagesContainer";
import LiveProjectsContainer from "./LeftColumn/LiveProjectsContainer";
import ProfileImageContainer from "./LeftColumn/ProfileImageContainer";
import SkillsContainer from "./LeftColumn/SkillsContainer";

const LeftColumn = () => {
  return (
    <div className="flex w-fit sm:w-4/12 flex-col gap-y-2">
      <div className="flex sm:flex-col w-full">
        <ProfileImageContainer />
        <LiveProjectsContainer />
      </div>
      <SkillsContainer />
      <LanguagesContainer />
      <CertificatesContainer />
    </div>
  );
};

export default LeftColumn;