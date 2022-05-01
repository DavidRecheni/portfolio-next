import ContactDataIcon from "./ContactDataIcon";
import data from "../../../../../data/CVData";
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

const socialMedia = [
  {
    icon: BsGithub,
    url: `https://github.com/${data.githubUsername}`,
  },
  {
    icon: BsLinkedin,
    url: `http://linkedin.com/in/${data.linkedinProfile}/`,
  },
  {
    icon: BsEnvelopeFill,
    url: `mailto:${data.email}?subject=Hello`,
  },
];
const ContactDataIconRow = ({ className }: { className?: string }) => {
  return (
    <div className={`flex gap-2 flex-row mt-1 sm:mt-0 p-2 ${className}`}>
      {socialMedia.map((s) => (
        <ContactDataIcon icon={s} key={s.url} />
      ))}
    </div>
  );
};

export default ContactDataIconRow;
