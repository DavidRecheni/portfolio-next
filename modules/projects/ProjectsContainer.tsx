import SocialMedia from '../home/components/SocialMedia/SocialMedia'
import Link from 'next/link'
import SmallBlob from '../home/components/ui-elements/SmallBlob/SmallBlob'
import ProjectsList from './components/ProjectsList/ProjectsList'
const ProjectsContainer=() => {
  return (
    <div className="flex flex-col relative h-full overflow-x-hidden text-white items-center gap-y-16 pt-32 px-2 sm:px-16 xl:px-28">
      <SocialMedia />
      <div className="absolute top-0 left-0">
        <Link href={'/'}>
          <div className="relative w-50 h-50">
            <SmallBlob />
          </div>
        </Link>
      </div>
      <h1 className='text-5xl'>Projects</h1>
      <ProjectsList />
    </div>
  )
}

export default ProjectsContainer