import { MailIcon, PhoneCall } from 'lucide-react'


import React from 'react'

const Contacts = () => {

  return (

    <div>
        {/* contact form section */}
        <section id = "contacts"
        className='bg-[url("/driven.webp")] bg-cover bg-center panel
        min-h-screen h-auto px-6 pt-6 pb-32 relative' >
            <div className='absolute inset-0 bg-gradient-to-b from-black
            via-transparent to-black/80 backdrop-blur-3xl '></div>
            <div className='relative text-white text-left pt-24 grid
            grid-cols-1 md:grid-cols-2 items-center justify-centert'>
                {/* start from scratch div */}
                <div>
                    <p className="font-zen tracking-widest font-black
                    py-3 md:text-xl/8 capitalize child "
                    > [04 / contact] </p>
                    <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
                    tracking-[.2rem] bg-clip-text saturate-200 text-transparent
                    bg-gradient-to-t from-[burlywood] to-white/90 text-[24px]
                    leading-[2.5rem] child '
                    >
                        <span>let's start</span>
                        <span>from scratch</span>
                    </h1>
                    <p className='font-mono text-[16px] leading-[2rem] lowercase
                    tracking-[.1rem] pb-4 '>
                        Whether you are acquiring a new estate or renovating
                        a historical apartment, reach out to start the
                        architectural dialogue.
                    </p>
                    {/* email */}
                    <div className='flex items-center justify-start gap-x-2 py-2
                    px-2 py-1 child '>
                        <MailIcon className='size-4'/>
                        <p>hello@deisahomes.com</p>
                    </div>
                    {/* phone number */}
                    <div className='flex items-center justify-start gap-x-2 py-2
                    child'>
                        <PhoneCall className='size-4'/>
                        <p>+255 766 355 608</p>
                    </div>
                </div>
                {/* send message form */}
                <div className='mt-12 pt-6 bg-black/70 px-3 rounded-[1rem]
                border border-white/30'>
                    <form action="#">
                        {/* name */}
                        <label htmlFor="name"
                        className='font-mono uppercase flex flex-col gap-y-3 py-3 border-b
                        border-white/70'
                        >your name / jina lako
                            <input type="text" placeholder='Frank Vincent' required
                            className='outline-none border-none placeholder:text-white/70
                            px-2 py-1 '
                            />
                        </label>
                        {/* email */}
                        <label htmlFor="email"
                        className='font-mono uppercase flex flex-col gap-y-3 pt-8 border-b
                        border-white/70'
                        >email address / barua pepe
                            <input type="email" placeholder='franknjolowelo@gmail.com' required
                            className='outline-none border-none placeholder:text-white/70
                            px-2 py-1 '
                            />
                        </label>
                        {/* message */}
                        <div>
                            <p className='font-mono uppercase pt-8'> project specifications / jumbe</p>
                            <textarea name="message" id="message" cols={8} rows={5} required
                            placeholder='Tell us about the property, square meters, location, and aesthetic expectations...'
                            className='border-b border-white/70 w-full px-2 py-1 '
                            />
                        </div>
                        {/* send button */}
                        <button className='mt-4 bg-white text-black px-2 py-1 mb-6
                        rounded-[.5rem] font-black font-mono capitalize cursor-pointer '
                        >send message / tuma jumbe</button>
                    </form>
                </div>
            </div>
        </section>
    </div>

  )

}

export default Contacts

