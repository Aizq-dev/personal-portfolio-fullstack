//import './App.css'
import { Navbar } from './components/header/navbar/navbar'
import { About } from './components/main/about/about'
import { Profile } from './components/header/profile/profile'
import { Rrss } from './components/header/profile/rrss/rrss'
import CursorHighlight from './components/cursorHightlight/CursorHightlight'
import {  AllProjects } from './components/main/projects/AllProjects'
import { Loader } from './components/loader/loadingOverlay'
import { LangSwitch } from './components/header/LangSwitch/LangSwitch'
import { ButtonCV } from './components/header/cvButton/cvButton'



function App() {

   

  return (
    <>
    <Loader/>
  {/*cordatorio futuro, cuando quiera tocar las selecciones cambiar los colores del class del body*/}
  <section className= 'bg-background-dark min-h-screen leading-relaxed text-text-light antialiased selection:bg-teal-300 selection:text-teal-900'>
    <CursorHighlight  />
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
    <div className='lg:flex lg:justify-between lg:gap-4'>
    <header className='lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <Profile></Profile>
        <div >
        <LangSwitch/>
        <ButtonCV/>
        </div>
        <Navbar></Navbar>
        
        </div>
        <Rrss></Rrss>
    </header>
    <main id="content"className='pt-24 lg:w-[52%] lg:py-24'>
        <About ></About>
        <AllProjects/>      
    </main>
    </div>
    </div></section></>
  )
}

export default App
