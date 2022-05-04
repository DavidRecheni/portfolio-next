import CertificatesContainer from "./LeftColumn/CertificatesContainer";
import LanguagesContainer from "./LeftColumn/LanguagesContainer";
import LiveProjectsContainer from "./LeftColumn/LiveProjectsContainer";
import ProfileImageContainer from "./LeftColumn/ProfileImageContainer";
import SkillsContainer from "./LeftColumn/SkillsContainer";
import ContactDataContainer from "./LeftColumn/ContactDataContainer";

const LeftColumn = () => {
  return (
    <div className="flex w-fit sm:w-4/12 flex-col gap-y-2">
      <div className="flex sm:flex-col w-full justify-around gap-2 ">
        <div className="max-w-[45%] sm:max-w-none flex flex-col">
          <ProfileImageContainer />
        </div>
        <div className="w-full flex flex-col ml-4 sm:ml-0">
          <ContactDataContainer />
        </div>
      </div>
      <SkillsContainer />
      <LanguagesContainer />
      <CertificatesContainer />
    </div>
  );
};

export default LeftColumn;
