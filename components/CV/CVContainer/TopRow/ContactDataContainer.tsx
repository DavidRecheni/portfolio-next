import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import data from "../../../../data/CVData";
import Header from "../../../shared/Header";

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

const ContactDataContainer = () => (
  <div className="flex flex-col ">
    <Header>Contact me</Header>
    <div className="flex gap-2 flex-row mt-1 sm:mt-0 p-2">
      {socialMedia.map((s) => (
        <a
          className="hover:text-blue-600"
          href={s.url}
          target="_blank"
          key={s.url}
          rel="noreferrer"
        >
          <div className="font-medium flex items-center text-2xl sm:text-4xl">
            {s.icon({})}
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default ContactDataContainer;
