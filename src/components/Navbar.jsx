import { useEffect } from "react"
import { Link } from "react-scroll"

const Navbar = () => {

  useEffect(()=>{

  },[])

  return (
    <nav className='flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border items-center justify-center space-x-4 bg-linear-to-t from-sky-500 to-indigo-500 text-white'>
        <ul className='flex gap-5'>
            <li><a className='cursor-pointer' href=''>Home</a> </li>
            <li>
              <Link to="project" smooth duration={500} className="cursor-pointer">Projects</Link>
            </li>
            <li>
              <Link to="experience" smooth duration={500} className="cursor-pointer">Experience</Link>
            </li>
            <li>
              <Link to="about" smooth duration={500} className="cursor-pointer">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar