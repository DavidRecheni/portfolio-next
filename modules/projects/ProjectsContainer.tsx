import SocialMedia from '../home/components/SocialMedia/SocialMedia'
import Link from 'next/link'
import SmallBlob from '../home/components/ui-elements/SmallBlob/SmallBlob'
const ProjectsContainer=() => {
  return (
    <div className="flex flex-col relative h-screen text-white">
      <Link href={'/'}>
        <div className="relative w-50 h-50">
          <SmallBlob />
        </div>
      </Link>
      <div className="h-full w-screen flex items-center justify-between px-2 sm:px-16 xl:px-36">
        <div className="flex items-end md:items-center">
          <div className="flex flex-col">

          </div>
        </div>

      </div>

      <SocialMedia />
    </div>
  )
}

export default ProjectsContainer