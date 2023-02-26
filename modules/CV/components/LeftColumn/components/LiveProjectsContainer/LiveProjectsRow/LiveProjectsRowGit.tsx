import { BsGithub } from "react-icons/bs";

const LiveProjectsRowGit: React.FC<{ url?: string }> = ({ url }) => {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="font-medium underline flex items-center gap-2 underline-offset-1 sm:text-lg hover:text-blue-600"
    >
      <BsGithub />
    </a>
  );
};

export default LiveProjectsRowGit;
