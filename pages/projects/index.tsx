import type { NextPage } from "next";
import PageHead from "../../modules/core/components/PageHead";
import ProjectsContainer from "../../modules/projects/ProjectsContainer";
const Projects: NextPage=() => {
  return (
    <div className="h-screen dark:bg-github-dark">
      <div className="w-screen h-screen flex justify-center relative bg-gradient-to-br from-[#343337] to-[#0a0a0c]">
        <PageHead />
        <main>
          <ProjectsContainer />
        </main>
      </div>
    </div>
  );
};

export default Projects;
