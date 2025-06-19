
const SkillSection = ({name, tools}) => {
  return (
    <div className="bg-gray-100 rounded-2xl border border-gray-300 p-5">
        <p className="font-medium text-xl">{name}</p>
        <div className="flex gap-3 flex-wrap mt-5">
            {
            tools.map(tool => 
                <div className="bg-black rounded-xl px-5 py-2 text-white text-sm" key={tool}>{tool}</div>
            )
        }
        </div>
    </div>
  )
}

export default SkillSection