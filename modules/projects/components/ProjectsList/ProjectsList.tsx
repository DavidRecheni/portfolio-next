import projects from "../../constants/projects"
import Project from "./components/Project/Project"
const ProjectsList=() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 py-6 ">
      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </div>
  )
}

export default ProjectsList