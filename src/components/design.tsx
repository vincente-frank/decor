

import React from 'react'

const Design = () => {

  return (

    <div>
        {/* good design section */}
        <section className="min-h-screen h-auto p-6 bg-white flex panel 
        flex-col items-start justify-center gap-y-8 md:flex-row md:justify-between ">
            {/* the philosophy */}
            <div className='w-full md:w-[40%] pt-16 child '>
                <p className="font-zen tracking-widest font-black
                py-3 md:text-xl/8 capitalize child " >
                [ 01 / our philosophy ]
            </p>
            <p className='font-mono capitalize py-3 text-xl/8 text-black/60
            child '>
                every detail is decided, not decorated. <br/>
                fewer elements, each one deliberate.
            </p>
            </div>
            {/* good design div */}
            <div className='w-full md:w-[60%] md:pt-24 '>
                <p className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
                tracking-[.2rem] bg-clip-text saturate-200 text-transparent
                bg-gradient-to-t from-[burlywood] to-black md:pl-[12rem] text-[24px]
                leading-[2.5rem] child '>
                    good design <br/> communicates. <br/>
                    great spaces <br/> surprise.
                </p>
                <p className='font-mono text-[16px] leading-[2rem] md:pl-[12rem]
                child '
                >
                    A luxury residence works when every interaction is 
                    choreographed with silence. The home is not a 
                    showroom catalogue; It is an intimate perspective 
                    held in motion. Form. texture, and lighgting must be 
                    unified as a single work of art.
                </p>
            </div>
        </section>
    </div>

  )

}

export default Design

