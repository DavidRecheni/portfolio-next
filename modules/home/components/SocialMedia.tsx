import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMedia = () => {
  return (
    <div className="absolute top-0 left-0 right-0 ml-auto mr-auto w-48">
      <div className="flex items-center justify-center gap-4 py-2 rounded-b-xl bg-cyan-600">
        <SocialMediaIcon
          href="https://github.com/DavidRecheni"
          icon={BsGithub}
        />

        <SocialMediaIcon
          href="https://www.linkedin.com/in/david-recheni/"
          icon={BsLinkedin}
        />

        <SocialMediaIcon href="https://twitter.com/deiv_re" icon={BsTwitter} />
      </div>
    </div>
  );
};

export default SocialMedia;
