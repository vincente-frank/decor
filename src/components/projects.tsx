


import React from 'react'

const Projects = () => {

  return (

    <div>
        {/* selected works section */}
        <section className='min-h-screen h-auto px-6 bg-black text-white
        pt-6 pb-12 panel '>
            {/* headings */}
            <p className="font-zen tracking-widest font-black
            py-3 md:text-xl/8 capitalize child "
            > [03 / portfolio ] </p>
            <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
            tracking-[.2rem] bg-clip-text saturate-200 text-transparent
            bg-gradient-to-t from-[burlywood] to-white/90 text-[24px]
            leading-[2.5rem] child '
            >selected works</h1>
            <p className='font-mono text-[16px] leading-[2rem] uppercase
            tracking-[.1rem] child '
            > explore the physical editions </p>
            {/* container div */}
            <div className='pt-12 grid grid-cols-1 items-center
            justify-center md:grid-cols-3 gap-6 child '>
                {/* living */}
                <div className='h-[30rem] bg-[url("/living.webp")] rounded-[1rem]
                bg-cover bg-center relative md:col-span-2 cursor-pointer child'>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80
                    child '></div>
                    {/* the content */}
                    <div className='relative child'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px]
                        child '>01 / suite</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                        child '>salon de lumiere</p>
                    </div>
                </div>
                {/* bedroom */}
                <div className='h-[30rem] bg-[url("/bedroom.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer child '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80
                    child'></div>
                    {/* the content */}
                    <div className='relative child'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px]
                        child '>02 / bedroom</h3>
                        <p className='absolute top-[26rem] left-6 uppercase font-zen tracking-[.2rem]
                        py-3 child '>the obsidian master</p>
                    </div>
                </div>
                {/* kitchen */}
                <div className='h-[30rem] bg-[url("/kitchen.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer child '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80
                    child'></div>
                    {/* the content */}
                    <div className='relative child'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px]
                        child '>03 / cuisine</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                        child '>travertine cuisine</p>
                    </div>
                </div>
                {/* hero */}
                <div className='h-[30rem] bg-[url("/hero.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer child '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80
                    child'></div>
                    {/* the content */}
                    <div className='relative child'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px]
                        child '>04 / villa</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                        child '>the monochrome</p>
                    </div>
                </div>
                {/* driven */}
                <div className='h-[30rem] bg-[url("/driven.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer child '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80
                    child'></div>
                    {/* the content */}
                    <div className='relative child'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px]
                        child '>05 / residence</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                        child '>terracotta atelier</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Projects

