import CertificatesContainer from "./LeftColumn/CertificatesContainer";
import LanguagesContainer from "./LeftColumn/LanguagesContainer";
import LiveProjectsContainer from "./LeftColumn/LiveProjectsContainer";
import ProfileImageContainer from "./LeftColumn/ProfileImageContainer";
import SkillsContainer from "./LeftColumn/SkillsContainer";
import ContactDataContainer from "./TopRow/ContactDataContainer";

const LeftColumn = () => {
  return (
    <div className="flex w-fit sm:w-4/12 flex-col gap-y-2">
      <div className="flex sm:flex-col w-full">
        <div className="flex flex-col print:flex-row">
          <ProfileImageContainer />
          <ContactDataContainer />
        </div>
        <LiveProjectsContainer />
      </div>
      <SkillsContainer />
      <div className="flex w-full sm:flex-col gap-4">
        <LanguagesContainer className="w-1/2 sm:w-full gap-y-2" />
        <CertificatesContainer className="w-1/2 sm:w-full gap-y-2" />
      </div>
    </div>
  );
};

export default LeftColumn;
