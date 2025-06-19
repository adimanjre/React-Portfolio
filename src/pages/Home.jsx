import React from 'react'

const Home = () => {
  return (
    <div className='text-center mt-10 max-w-[844px] mx-auto pt-[150px]'>
        
        <h1 className='text-4xl md:text-6xl font-bold my-5  md:leading-18 text-gray-500'>I'm <span className='text-blue-500'>Aditya Manjrekar</span> <br></br> a <span className='text-black'>Front-End Developer</span></h1>
        <p className='md:text-xl mt-5'>4+ years of experience building scalable, maintainable, and responsive websites with a passion for elegant code and user-centered design.</p>
        <div className='flex md:gap-5 items-center justify-center flex-wrap mt-5'>
          <a href='mailto:adimanjre@gmail.com' class="relative overflow-hidden border bg-linear-65 from-purple-500 to-pink-500 text-white shadow-2xl transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-0 before:w-0 before:rounded-full before:bg-white h-15 w-40 before:duration-300 before:ease-out hover:text-indigo-800 hover:shadow-indigo-600 hover:before:h-60 hover:before:left-[-10px] hover:before:top-0 hover:before:w-60 rounded-full cursor-pointer my-5 md:my-10 font-medium text-lg flex justify-center items-center">
      <span class="relative z-10">Hire Me</span>
    </a>
    <button class="relative  overflow-hidden border  text-purple-500 shadow-2xl transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-0 before:w-0 before:rounded-full before:bg-white h-15 w-40 before:duration-300 before:ease-out hover:text-indigo-800 hover:shadow-indigo-600 hover:before:h-60 hover:before:left-[-10px] hover:before:top-0 hover:before:w-60 rounded-full cursor-pointer my-3 md:my-10 font-medium text-lg">
      <span class="relative z-10">Resume</span>
    </button>
        </div>
    </div>
  )
}

export default Home