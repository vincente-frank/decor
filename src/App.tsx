import { useLayoutEffect, useState } from 'react'
import './App.css'
import SplashScreen from './components/splashscree'
import imagePreload from './components/imagePreload'
import { imagePathArray } from './utils/imageArray'
import Hero from './components/hero'
import Design from './components/design'
import Elevation from './components/elevation'
import About from './components/about'
import Furniture from './components/furniture'
import Projects from './components/projects'
import Thrilled from './components/thrilled'
import Contacts from './components/contacts'
import Footer from './components/footer'
import FAQ from './components/faq'
import Services from './components/services'


const App = () => {
  const [loading, setLoading] = useState(true)
    
  useLayoutEffect( ()=>{
    imagePreload(imagePathArray).then( ()=> {
      setTimeout( ()=> {setLoading(false)}, 2000)
    })
  }, [])

  if(loading) {
    return <SplashScreen/>
  }

  return (

    <div>
      <Hero/>
      <Design/>
      <Elevation/>
      <About/>
      <Services/>
      <Furniture/>
      <Projects/>
      <FAQ/>
      <Thrilled/>
      <Contacts/>
      <Footer/>
    </div>

  )

}

export default App

