import ContactDataContainer from "../TopRow/components/ContactDataContainer";
import CertificatesContainer from "./components/CertificatesContainer";
import LanguagesContainer from "./components/LanguagesContainer";
import ProfileImageContainer from "./components/ProfileImageContainer";
import SkillsContainer from "./components/SkillsContainer";

const LeftColumn=() => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <div className="flex sm:flex-col w-full">
        <div className="flex flex-col print:flex-row">
          <ProfileImageContainer />
          <ContactDataContainer />
        </div>
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
