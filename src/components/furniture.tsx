

import React from 'react'

const Furniture = () => {

  return (

    <div>
        {/* furniture section */}
        <section id='furniture'
        className='bg-[url("/deisa5.webp")] min-h-screen h-auto
        bg-cover bg-center bg-fixed relative panel '>
            {/* the overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-white
            via-black/60 to-black '></div>
            {/* the content */}
            <div className='relative pt-42 flex flex-col items-center justify-center
            gap-y-12 md:pt-56 '>
                <p className='font-kalam text-[2.4rem] leading-[3.6rem] md:text-[5rem]
                tracking-widest text-center text-[burlywood] saturate-200
                font-black md:leading-[5.7rem] '>
                    <span>Need</span>
                    <span>&nbsp;help</span> <br />
                    <span>finding</span>
                    <span>&nbsp;the</span>
                    <span>&nbsp;best</span> <br />
                    <span>furniture</span>
                </p>
                <a href="#contacts" className='bg-[white] text-[burlywood] px-2 py-1 saturate-200
                    capitalize font-zen tracking-widest rounded saturate-200
                    '> reach out</a>
            </div>
        </section>
    </div>

  )

}

export default Furniture

