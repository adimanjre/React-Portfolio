
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Experiance from './pages/Experiance'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {

  return (
    <main>
      <div className='relative  flex-col flex mx-auto sm:px-[50px] xl:px-[180px] lg:px-[100px] px-5'>
        <Navbar />
        <Home/>
        <Projects/>
        <Experiance/>
        <About/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
