

import React from 'react'

const Footer = () => {

  return (

    <div>
        {/* footer section */}
        <section className='min-h-screen h-auto bg-black text-[white] p-6
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
                    <h4 className='text-[12px] font-thin font-mono tracking-[.2rem]
                    uppercase text-white/30 py-3 '>sections</h4>
                    <div className='flex items-start justify-center flex-col
                    gap-y-2 '>
                        {/* philosophy */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >philosophy</a>
                        {/* methods */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >methods</a>
                        {/* selected works */}
                        <a href="#"className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >selected works</a>
                        {/* consultation */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >consultation</a>
                    </div>
                </div>
                {/* channels div */}
                <div className='md:pt-16'>
                    {/* channels title */}
                    <h4 className='text-[12px] font-thin font-mono tracking-[.2rem]
                    uppercase text-white/30 py-3 '>channels</h4>
                    <div className='flex items-start justify-center flex-col
                    gap-y-2 '>
                        {/* instagram */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >instagram</a>
                        {/* youtube */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >youtube</a>
                        {/* whatsapp */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >whatsapp</a>
                        {/* tiktok */}
                        <a href="#" className='font-mono tracking-wide uppercase text-[wheat]/30 '
                        >tiktok</a>
                    </div>
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

