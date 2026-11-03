

import React from 'react'

const Thrilled = () => {

  return (

    <div>
        {/* thrilled to help you section */}
        <section className='min-h-screen h-auto bg-[url("/morph-bg.webp")] bg-cover
        bg-center relative p-6 panel '>
            <div className='absolute inset-0  bg-gradient-to-b
            from-black via-black/30 to-black'></div>
            <div className='h-auto relative text-white text-center py-6 h-96'>
                <p className='font-mono tracking-[.3rem] uppercase text-[burlywood]
                py-6 child '
                >patron commitment</p>
                {/* display in smaller devices */}
                <h1 className='font-zen capitalize font-black tracking-widest child
                text-[2rem] py-6 text-[wheat] saturate-200 md:hidden inline-block '
                >" <br />always thrilled to create with you <br /> "
                </h1>
                {/* display in medium devices */}
                <h1 className='font-zen capitalize font-black tracking-widest child
                text-[3rem] py-6 text-[wheat] saturate-200 hidden md:inline-block '
                >" <br />always thrilled <br /> to create with <br /> you <br /> "
                </h1>
                <p className='text-white/40 font-mono md:px-[12rem] pb-6
                child '>
                    From initial conceptual drawings to finishing textiles,
                    your sanctuary is guarded with uncompromising precision.
                </p>
            </div>
        </section>
    </div>

  )

}

export default Thrilled

