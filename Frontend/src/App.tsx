import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Profile } from './components/profile/profile'

function App() {


  return (
    <><main>
      <div className='side_left'>
        <Profile></Profile>
        <Navbar></Navbar>
        <div className='rrss'></div>
      </div>
      <div className='side_rigth'>
        <div id="experience"className='workExperience'></div>
        <div id='projects' className='projects'></div>
      </div>
    </main>
      
    </>
  )
}

export default App
