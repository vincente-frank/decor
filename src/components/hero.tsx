


import React from 'react'

const Hero = () => {

  return (

    <div>
    {/* the hero section */}
    <section className='bg-[url("/deisa-hero.webp")] bg-cover bg-center
    bg-fixed min-h-screen h-auto hero relative p-6 ' >
        {/* the overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent
        via-black/70 to-white hero'></div>
            {/* the content */}
            <div className='hero-div relative pt-12 text-left md:pt-32'>
                {/* the heading */}
                <h1 className='font-lavish text-[5rem] lowercase tracking-widest
                leading-[4.5rem] text-[burlywood] saturate-200 pb-4 font-bold '>
                    <span className='inline-block deisa'>deisa</span> <br />
                    <span className='inline-block pl-8 homes'>homes</span>
                </h1>
                {/* the description or sub headlines */}
                <p className='text-xl font-mono leading-[2rem] text-white md:pt-4
                saturate-200 tracking-[.18rem] pb-10 description md:pr-[36rem]
                md:pb-12 '>
                    Augmented spatial design and bespoke architectural curation
                    for patrons who refude the generic. Where French precision
                    meets handcrafted warmth.
                </p>
                {/* call to action buttons div container */}
                <div className='flex items-center justify-start gap-x-12'>
                    <a href="#contacts" className='bg-[burlywood] text-white px-2 py-1 saturate-200
                     capitalize font-zen tracking-widest rounded explore'
                    >explore</a>
                    <a href="#contacts" className='bg-[white] text-[burlywood] px-2 py-1 saturate-200
                    capitalize font-zen tracking-widest rounded explore'> reach out</a>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Hero

