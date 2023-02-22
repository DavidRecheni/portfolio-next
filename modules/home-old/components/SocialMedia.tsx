import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMedia = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4 pb-24 z-10">
      <SocialMediaIcon href="https://github.com/DavidRecheni" icon={BsGithub} />

      <SocialMediaIcon
        href="https://www.linkedin.com/in/david-recheni/"
        icon={BsLinkedin}
      />

      <SocialMediaIcon href="https://twitter.com/deiv_re" icon={BsTwitter} />
    </div>
  );
};

export default SocialMedia;
