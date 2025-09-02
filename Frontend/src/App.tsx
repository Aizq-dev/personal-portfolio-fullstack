import './App.css'
import { Navbar } from './components/navbar/navbar'
import { About } from './components/profile/about/about'
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
               <div id="experience"className='workExperience'></div>
        <div id='projects' className='projects'></div>
      </div>
    </main>
      
    </>
  )
}

export default App
