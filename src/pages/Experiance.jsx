import ExperienceCard from "../components/ExperienceCard"
import { experienceData } from "../data"

const Experiance = () => {
  return (
    <>
      <div className="experience">
        <h3 className="text-4xl font-semibold mb-5">Experience</h3>
    <div className='flex gap-10 my-5'>
        
        <div className='w-1 h-auto bg-purple-200 md:block hidden'></div>
        <div className="flex flex-col gap-10">
          {
          experienceData.map(({id, role, duration, description, name, logo})=>
            <ExperienceCard
              id={id}
              role={role}
              duration={duration}
              description={description}
              logo={logo}
              name={name}
            />
          )
        }
        </div>
    </div>
      </div>
    </>
  )
}

export default Experiance