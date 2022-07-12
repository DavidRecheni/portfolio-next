import Image from "next/image";

const statsUrlDark = `https://github-readme-stats.vercel.app/api?username=DavidRecheni&count_private=true&hide_border=true&show_icons=true&hide_title=true&hide=contribs&theme=github_dark`;
const statsUrlLight = `https://github-readme-stats.vercel.app/api?username=DavidRecheni&count_private=true&hide_border=true&show_icons=true&hide_title=true&hide=contribs`;

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
