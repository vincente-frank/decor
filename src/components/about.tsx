import { useState } from "react";
import { Pillars } from '../utils/pillars'
import { PlusCircle, XCircle } from "lucide-react";




const About = () => {

    const [activePillar, setActivePillar] = useState<number | null>(null)

  return (

    <div>
        {/* about us section */}
        <section className=' p-6 min-h-screen h-auto bg-white about-us
        panel '>
            {/* the heading */}
            <p className="font-zen tracking-widest font-black
            py-3 md:text-xl/8 capitalize child "
            > [02 / method] </p>
            <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
            tracking-[.2rem] bg-clip-text saturate-200 text-transparent
            bg-gradient-to-t from-[burlywood] to-black text-[24px]
            leading-[2.5rem] child '
            > why our builds </h1>
            <p className='font-mono text-[16px] leading-[2rem] uppercase
            tracking-[.1rem] child '
            > three pillars of architectural excellence </p>
            {/* flexed container */}
            <div className='pt-12 grid items-start grid-cols-1 md:grid-cols-2
            gap-x-40'>
                {/* image container */}
                <div className='bg-[url("/deisa4.webp")] bg-cover md:bg-fixed
                h-[30rem] rounded py-6 bg-left md:bg-center relative
                md:bg-[url("/bedroom.webp")] '>
                    {/* the white overlay ie top */}
                    <div className='absolute inset-0 bg-gradient-to-b from-white
                    via-transparent to-transparent'></div>
                    {/* the white overlay ie bottom */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent
                    via-transparent to-white'></div>
                    {/* the white overlay ie left */}
                    <div className='absolute inset-0 bg-gradient-to-l from-white
                    via-transparent to-transparent'></div>
                    {/* the white overlay ie right */}
                    <div className='absolute inset-0 bg-gradient-to-r from-white
                    via-transparent to-transparent'></div>
                </div>
                {/* text container */}
                <div className='pt-12 our'>
                    {/* let map throught the three pillars */}
                    { Pillars.map( (pillar, index) => (
                        <div key={pillar.id}>
                            {/* head title */}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-3 font-zen py-3
                                md:py-6 '>
                                    <span className=' font-black text-[burlywood] saturate-200 '
                                    >0{index+1}.</span>
                                    <h2 className='md:uppercase md:text-xl text-black/70'
                                    >{pillar.head}</h2>
                                </div>
                                {/* icon changing logic */}
                                <div>
                                    {activePillar === index ? (
                                        <XCircle onClick={ ()=> {setActivePillar(null);}}
                                        className='cursor-pointer'
                                        />
                                    ) : (
                                        <PlusCircle onClick={ ()=> {setActivePillar(index);}}
                                        className='cursor-pointer'
                                        />
                                    ) }
                                </div>
                            </div>
                            {/* the content */}
                            <div>
                                {activePillar === index && (
                                    <p className='font-mono text-[16px] leading-[2rem] py-4 '
                                    > {pillar.content} </p>
                                )}
                            </div>
                        </div>
                    )) }
                    <a href="#contacts" className='bg-[burlywood] text-[white] px-2 py-1 saturate-200
                    capitalize font-zen tracking-widest rounded reach hidden md:inline-block
                     '> reach out</a>
                </div>
            </div>
        </section>
    </div>

  )

}

export default About

