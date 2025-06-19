import React from 'react'

const ExperienceCard = ({role, name, duration, description, logo}) => {
  return (
    <div className=''>
        <div className='flex gap-5 relative before:hidden md:before:block before:absolute before:h-3 before:w-3 before:-left-[48px] before:animate-ping before:rounded-full before:top-1/2 before:-translate-y-1/2 before:bg-pink-500 after:hidden md:after:block after:absolute after:h-3 after:w-3 after:-left-[48px] after:rounded-full after:top-1/2 after:-translate-y-1/2 after:bg-pink-500'>
            <div className='company-logo h-[70px] w-[70px] p-2 rounded-full border-purple-700 border'>
                <img src={logo} alt='company logo' className='w-full h-full object-contain' />
            </div>
            <div className='job-details'>
                <h3 className='text-2xl font-bold'>{role}</h3>
                <div className='flex gap-2 items-center flex-wrap'>
                    <p className='text-lg font-medium'>{name}</p>
                    <p className=''>({duration})</p>
                </div>
            </div>
        </div>
        <div className='job-role mt-5'>
            <ul className='list-disc list-inside'>
                {
                    description.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default ExperienceCard