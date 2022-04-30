import Image from "next/image";
import statsUrlDark from "../../../../data/github_stats_dark.svg";
import statsUrlLight from "../../../../data/github_stats.svg";

const GithubStats = () => {
  return (
    <div className="my-2 w-full flex justify-center">
      <div className="dark:hidden">
        <Image
          height={200}
          width={550}
          src={statsUrlLight}
          alt="Github stats"
        />
      </div>
      <div className="hidden dark:block">
        <Image height={200} width={550} src={statsUrlDark} alt="Github stats" />
      </div>
    </div>
  );
};

export default GithubStats;
