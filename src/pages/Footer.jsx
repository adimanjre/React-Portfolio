import Email from "../components/icons/Email"
import Call from "../components/icons/Call"
import Instagram from '../components/icons/Instagram'
import GitHub from '../components/icons/GitHub'
import LinkedIn from '../components/icons/LinkedIn'

const Footer = () => {
  return (
    <footer className='mt-20 bg-gray-800 text-white px-10 lg:px-50 p-10'>
        <div className='grid md:grid-cols-3 gap-16'>
            <div className="col-span-2">
                <p className='text-2xl font-medium'>Aditya Manjrkear</p>
                <p>
                    Experienced Sr. Web Designer with 4+ years in building responsive, modern web interfaces using HTML, CSS, JavaScript (ES6+), React, and Next.js. Specialized in the insurance domain, with a strong focus on clean design and performance.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <span> <Email fill={'fill-white'}/> </span>
                    <a href="mailto:adimanjre@gmail.com"><span>adimanjre@gmail.com</span></a>
                </div>
                <div className="flex gap-2 items-center">
                    <span> <Call fill={'fill-white'}/> </span>
                    <span>+91 8600391721</span>
                </div>
                <div className="flex gap-3 items-center border-t-1 pt-3 border-t-gray-400">
                    <a href="https://github.com/adimanjre"><GitHub fill={'fill-white hover:fill-blue-300'}/></a>
                    <a href="http://www.linkedin.com/in/adimanjre"><LinkedIn fill={'fill-white hover:fill-blue-300'}/></a>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <p className="text-center border-t-1 pt-5 border-t-gray-500">
                © 2025 Aditya Manjrekar. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer