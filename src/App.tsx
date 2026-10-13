import { useLayoutEffect, useState } from 'react'
import './App.css'
import Home from './components/home'
import SplashScreen from './components/splashscree'
import imagePreload from './components/imagePreload'
import { imagePathArray } from './utils/imageArray'


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
      <Home/>
    </div>

  )

}

export default App

