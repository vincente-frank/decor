


import React from 'react'

const Elevation = () => {

  return (

    <div>
        {/* elevation section */}
        <section className='min-h-screen h-auto p-6 panel '>
            {/* container div */}
            <div className='relative bg-[url("/deisa3.webp")] bg-cover h-[35rem]
            bg-center rounded-[1rem] md:h-screen '>
                {/* the overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black child
                to-transparent rounded-[1rem] border border-2 border-white/40'></div>
                {/* the content */}
                <div className='relative'>
                    {/* scatter suite */}
                    <h1 className='absolute font-zen font-black text-[black] bg-white/20
                    inline-block px-2 py-1 top-8 left-6 rounded-[.5rem] saturate-200
                    backdrop-blur-xl border border-2 border-white/60 uppercase
                    tracking-[.2rem] text-[12px] md:text-lg child
                    '>scatter suite</h1>
                    {/* natural light */}
                    <h1 className='absolute top-[22rem] right-0 text-left text-[burlywood]
                    font-zen px-6 text-[14px] leading-[2rem] py-3 md:text-lg/8
                    md:top-[26rem] md:uppercase md:tracking-[.2rem child  '
                    >organic harmony & natural light</h1>
                    <p className='absolute top-[26rem] text-white/60 text-left right-0
                    px-6 py-3 md:top-[29rem] md:text-2xl md:tracking-[.2rem] child
                    md:pl-[12rem] md:text-right md:leading-[2.5rem] md:py-4 '>
                        Crafted with brusged travertine and aged oak timber,
                        creating a contemplative shelter away from urban noise.
                    </p>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Elevation

