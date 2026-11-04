

import React from 'react'

const Footer = () => {

  return (

    <div>
        {/* footer section */}
        <section id='footer'
        className='min-h-screen h-auto bg-black text-[white] p-6
        grid grid-cols-1 items-center justify-center
        gap-y-6 '>
            {/* footer intro div */}
            <div className='grid grid-cols-1 gap-y-8 items-start
            justify-center md:grid-cols-4 gap-x-6'>
                {/* perspective div */}
                <div className='md:col-span-2'>
                    <p className='font-lavish font-thin tracking-[.18rem] py-3
                    text-[38px] text-[burlywood] '
                    >perspective in motion</p>
                    <h4 className='font-zen py-3 text-[19px] tracking-widest
                    md:pr-[10rem] '>
                        Refusing the generic in architectural spaces.
                    </h4>
                </div>
                {/* sections div */}
                <div className='md:pt-16'>
                    {/* section title */}
                    <h4 className='text-[16px] font-thin font-mono tracking-[.05rem]
                    uppercase text-white py-3 '>sections</h4>
                        <nav className='flex items-start justify-start flex-col
                        gap-y-2 capitalize text-white/60 '>
                            <a href="#">home</a>
                            <a href="#">our philosophy</a>
                            <a href="#">our pillars</a>
                            <a href="#">our services</a>
                            <a href="#">portfolio</a>
                            <a href="#">faq</a>
                            <a href="#">contacts</a>
                        </nav>
                </div>
                {/* channels div */}
                <div className='md:pt-16'>
                    {/* channels title */}
                    <h4 className='text-[16px] font-thin font-mono tracking-[.05rem]
                    uppercase text-white py-3 '>channels</h4>
                        <nav className='flex items-start justify-start flex-col
                        gap-y-2 capitalize text-white/60 '>
                            <a href="#">instagram</a>
                            <a href="#">whatsApp</a>
                            <a href="#">TikTok</a>
                        </nav>
                </div>
            </div>
            {/* huge deisa div */}
            <div className='h-[20rem] w-full border-b border-white/30'>
                {/* in smaller screens */}
                <p className='text-[burlywood] font-zen tracking-[.3rem]
                md:hidden pt-20 text-center text-[3.5rem] font-black '
                >
                    <span>deisa</span> <br />
                    <span className='bg-clip-text bg-gradient-to-t from-transparent
                    to-white/40 text-transparent saturate-200 '
                    >&nbsp;homes</span>
                </p>
                {/* in medium to larger screens */}
                <p className='text-center font-zen font-black text-[9rem]
                pt-20 tracking-[.6rem] cursor-pointer hidden md:block '>deisa homes</p>
            </div>
            {/*copyright div  */}
            <div>
                <p className='text-white/30  text-center py-3 font-mono'
                > &copy;2026 - deisa homes. All rights reserved </p>
            </div>
            
        </section>
    </div>

  )

}

export default Footer

