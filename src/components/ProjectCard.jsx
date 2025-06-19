
import GitHub from './icons/GitHub'
import Redirection from './icons/Redirection'

const ProjectCard = ({techStack, name, description, thumbNail, gitHubLink, liveLink}) => {
  return (
    <div className='bg-gray-100 rounded-xl p-5 md:p-10 mt-10'>
        
        <div className='grid md:grid-cols-2 gap-10'>
            
            <div className='project-info'>
                <div className='project-stack'>
            <ul className='flex gap-2 flex-wrap'>
                {
                    techStack.map(stack => 
                        <li key={stack} className='rounded-full py-1 px-3 bg-white border border-indigo-300'>{stack}</li>
                    )
                }
            </ul>
        </div>
                <h2 className='text-xl md:text-3xl font-semibold mt-5'>{name}</h2>
                <p className='md:text-lg mt-2'>{description}</p>
                <div className='project-action flex gap-3 flex-wrap mt-10'>
                    <a href={gitHubLink} target='_blank' className='relative  overflow-hidden border bg-purple-200 text-purple-800 font-medium shadow-2xl transition-all duration-300  h-15 w-40 flex justify-center rounded-full cursor-pointer'>
                        <span className='flex gap-3 justify-center items-center' >
                            <span>View Code</span>
                            <GitHub fill={'fill-purple-800'}/>
                        </span>
                        </a>
                    <a href={liveLink} target='_blank' className='relative  overflow-hidden border bg-purple-200 text-purple-800 font-medium shadow-2xl transition-all duration-300  h-15 w-40 flex justify-center rounded-full cursor-pointer'>
                        <span className='flex gap-3 justify-center items-center' >
                            <span>View Live</span>
                            <Redirection stroke={'stroke-purple-800'}/>
                        </span>
                        </a>
                </div>
            </div>
            <div className='project-image h-[400px]'>
                <img src={thumbNail} className='h-full w-full object-cover rounded-2xl shadow-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard