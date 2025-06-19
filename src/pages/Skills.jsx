import SkillSection from "../components/SkillSection"
import { skills } from "../data"

const Skills = () => {
  return (
     <>
      <div className="mt-5">
        <div className='grid md:grid-cols-3 gap-5'>
        {skills.map(({id, name, tools}) => 
            <SkillSection key={id} name={name} tools={tools} />
        )}
        </div>
      </div>
    </>
  )
}

export default Skills