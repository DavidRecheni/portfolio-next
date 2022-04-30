import { BsGithub, BsLinkedin } from "react-icons/bs";
import data from "../../../data/CVData";

const socialMedia = [
  {
    icon: BsGithub,
    url: `https://github.com/${data.githubUsername}`,
  },
  {
    icon: BsLinkedin,
    url: `http://linkedin.com/in/${data.linkedinProfile}/`,
  },
];

const ContactDataContainer = () => (
  <div className="flex gap-2 flex-row mt-1 sm:mt-0">
    {socialMedia.map((s) => (
      <a
        className="hover:text-blue-600"
        href={s.url}
        target="_blank"
        rel="noreferrer"
        key={s.url}
      >
        <div className="font-medium flex items-center text-2xl sm:text-4xl">
          {s.icon({})}
        </div>
      </a>
    ))}
  </div>
);

export default ContactDataContainer;
