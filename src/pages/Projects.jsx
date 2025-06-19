
import ProjectCard from '../components/ProjectCard'
import { projectData } from '../data'

const Projects = () => {
  return (
    <div className='my-10' id='project'>
        <h2 className='text-4xl font-bold mb-5'>Selected Projects</h2>
        {
          projectData.map(({id, name, description, techStack, liveLink, gitHubLink,thumbNail}) => 
            <ProjectCard 
              key={id} 
              name={name} 
              description={description} 
              techStack={techStack} 
              liveLink={liveLink} 
              gitHubLink={gitHubLink} 
              thumbNail={thumbNail}
            />
          )
        }
    </div>
  )
}

export default Projects