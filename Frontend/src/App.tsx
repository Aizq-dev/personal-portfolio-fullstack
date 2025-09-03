import './App.css'
import { ExperienceWork } from './components/sideRight/experience/experience'
import { Navbar } from './components/sideLeft/navbar/navbar'
import { About } from './components/sideRight/about/about'
import { Profile } from './components/profile/profile'
import { Rrss } from './components/profile/rrss/rrss'

function App() {


  return (
    <><main>
      <div className='side_left'>
        <Profile></Profile>
        <Navbar></Navbar>
        <Rrss></Rrss>
      </div>
      
      <div className='side_rigth'>
        <About></About>
        <ExperienceWork></ExperienceWork>
        <div id='projects' className='projects'></div>
      </div>
    </main>
      
    </>
  )
}

export default App
