

import { BuildingComplexPlus, Component, House, Sofa, Sparkle } from 'lucide-react'
import React from 'react'

const Services = () => {

  return (

    <div>
        {/* services section */}
        <section id='services'
        className=' p-6 min-h-screen h-auto bg-white text-black '>
            {/* the heading div */}
            <div className='grid grid-cols-1 items-start md:grid-cols-12
             '>
                {/* left heading */}
                <div className='md:col-span-5'>
                <p className="font-zen tracking-widest font-black
                py-3 md:text-xl/8 capitalize "
                > [03 / services] </p>
                <h1 className='font-zen uppercase md:text-[2rem] py-2 md:leading-[3rem]
                tracking-[.2rem] bg-clip-text saturate-200 text-transparent
                bg-gradient-to-t from-[burlywood] to-black text-[24px]
                leading-[2.5rem] '
                > what we offer </h1>
                </div>
                {/* right heading with a button */}
                <div className='md:col-span-7 md:text-right md:pt-[4rem] '>
                <p className='font-kalam text-[2rem] leading-[3rem] lowercase
                tracking-[.1rem] text-[black] font-[200] py-2 md:text-[4rem]
                md:font-thin md:pb-8 md:leading-[4.8rem] '
                > let your home feel the style </p>
                <a href="#"
                className='bg-[burlywood] px-2 py-1 rounded-[.3rem]
                md:text-[20px] '>reach us out</a>
                </div>
            </div>
            {/* flexed services container div */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4
            py-6 md:py-12 '>
                {/* right div */}
                <div className=' '>
                    <img src="/deisa21.webp" alt=""
                    className='rounded-[1rem] w-full object-cover
                    object-center aspect-square md:h-[22rem] ' />
                </div>
                {/* left div */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>
                    {/* interior design */}
                    <div className='border border-black rounded-[1rem]
                    p-3 h-auto md:h-[10rem] '>
                        <div className='flex items-center justify-between py-1
                        md:py-3 md:items-end '>
                            <h2 className='font-zen capitalize
                            '>interior design</h2>
                            <Component className=''/>
                        </div>
                        <p className='font-mono tracking-wide
                        md:py-3 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    {/* house renovation */}
                    <div className='border border-black rounded-[1rem]
                    p-3 h-auto md:h-[10rem] '>
                        <div className='flex items-center justify-between py-1
                        md:py-3 md:items-end '>
                            <h2 className='font-zen capitalize
                            '>house renovation</h2>
                            <BuildingComplexPlus className=''/>
                        </div>
                        <p className='font-mono tracking-wide
                        md:py-3 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    {/* house finishing */}
                    <div className='border border-black rounded-[1rem]
                    p-3 h-auto md:h-[10rem] '>
                        <div className='flex items-center justify-between py-1
                        md:py-3 md:items-end '>
                            <h2 className='font-zen capitalize
                            '>house finishing</h2>
                            <House className=''/>
                        </div>
                        <p className='font-mono tracking-wide
                        md:py-3 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    {/* decorated furniture */}
                    <div className='border border-black rounded-[1rem]
                    p-3 h-auto md:h-[10rem] '>
                        <div className='flex items-center justify-between py-1
                        md:py-3 md:items-end '>
                            <h2 className='font-zen capitalize
                            '>decorated furniture</h2>
                            <Sofa className=''/>
                        </div>
                        <p className='font-mono tracking-wide
                        md:py-3 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Services

