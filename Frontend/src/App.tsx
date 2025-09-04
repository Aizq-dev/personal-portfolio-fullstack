//import './App.css'
import { ExperienceWork } from './components/sideRight/experience/experience'
import { Navbar } from './components/sideLeft/navbar/navbar'
import { About } from './components/sideRight/about/about'
import { Profile } from './components/sideLeft/profile/profile'
import { Rrss } from './components/sideLeft/profile/rrss/rrss'
import CursorHighlight from './utils/CursorHigjlight'


function App() {


  return (
  //Recordatorio futuro, cuando quiera tocar las selecciones cambiar los colores del class del body
  <body className='bg-background-dark leading-relaxed text-text-light antialiased selection:bg-teal-300 selection:text-teal-900'>
    <CursorHighlight  />
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
    <div className='lg:flex lg:justify-between lg:gap-4'>
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <Profile></Profile>
        <Navbar></Navbar>
        </div>
        <Rrss></Rrss>
      
    </header>
    <main className='flex max-w-content  '>
      
     
        <About></About>
        <ExperienceWork></ExperienceWork>
        <div id='projects' className='projects'></div>
      
    </main>
    </div>
    </div></body>
  )
}

export default App
