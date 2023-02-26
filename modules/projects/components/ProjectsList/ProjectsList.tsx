import projects from "../../constants/projects"
import Project from "./components/Project/Project"
const ProjectsList=() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-6 ">
      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </div>
  )
}

export default ProjectsList