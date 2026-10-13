import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SofaIcon } from 'lucide-react'


const SplashScreen = () => {

  useGSAP( ()=> {

    function splashAnimation ():gsap.core.Timeline {
      let deisa = document.querySelector(".deisa")
      let homes = document.querySelector(".homes")
      let sofa = document.querySelector(".sofa")

      const timeline = gsap.timeline()
      .from(sofa, {x:-100, duration:1, scale:0.4, ease:"power1.in"})
      .from(sofa, {y:100, duration:1,ease:"power1"},"<")
      .from(sofa, {opacity:0, duration:0.2},"<")

      .from(deisa, {x:-100, opacity:0, duration:1, ease:"back"},"+=0.2")
      .from(homes, {opacity:0, x:100, duration:1, ease:"back"},"<")

      return timeline
    }

    splashAnimation()

  }, [] )

  return (

    <div>
        <section className='flex items-center justify-center
        gap-y-1 flex-col h-screen bg-gradient-to-t from-black
        via-black/80 to-black/20'
        >
            <SofaIcon className='text-[burlywood] saturate-200
            size-12 sofa '
            />
            <h1 className='font-black font-zen tracking-widest
             capitalize text-lg/8 text-white '>
                <span className='deisa inline-block'>deisa</span>
                <span className='homes inline-block'>&nbsp;homes</span>
            </h1>
        </section>
    </div>

  )

}

export default SplashScreen

