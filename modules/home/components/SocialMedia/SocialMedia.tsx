import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import IconLink from "./components/IconLink/IconLink";

const links=[
  {
    to: "https://github.com/DavidRecheni",
    icon: BsGithub,
  },
  {
    to: "https://www.linkedin.com/in/david-recheni/",
    icon: BsLinkedin,
  },
  {
    to: "https://twitter.com/deiv_re",
    icon: BsTwitter,
  },
];

const SocialMedia=() => {
  return (
    <div className="absolute top-0 left-0 right-0 ml-auto mr-auto w-44">
      <div className="flex items-center justify-center gap-5 py-2 rounded-b-xl bg-cyan-600">
        {links.map((link) => (
          <IconLink to={link.to} icon={link.icon} key={link.to} />
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
