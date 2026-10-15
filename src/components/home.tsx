import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import TextPlugin from 'gsap/TextPlugin'
import { MailIcon, PhoneCall, PlusCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import { Pillars } from '../utils/pillars'


const Home = () => {

    gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger)

    const [activePillar, setActivePillar] = useState<number | null>(null)

    useGSAP( ()=> {

        function scrollTitleAnimation () {
            let panels = gsap.utils.toArray<HTMLElement>(".panel")
            panels.forEach ( (panel) => {
                let child = panel.querySelectorAll(".child")
                const scrollTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "top 80%",
                        end: "+=500",
                        markers: true,
                        scrub:1,
                        toggleActions: "play complete restart reverse"
                    }
                })
                .from(child, {y:100, opacity:0, duration:3, ease:"back", })
            })
        }
        

        scrollTitleAnimation()

    }, [] );


  return (

    <div className='overflow-x-hidden'>

        {/* the hero section */}
        <section className='bg-[url("/hero.webp")] bg-cover bg-center
        bg-fixed min-h-screen h-auto hero relative p-6 hero ' >
            {/* the overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-white
            via-black/40 to-white hero'></div>
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

        {/* elevation section */}
        <section className='min-h-screen h-auto p-6 panel '>
            {/* container div */}
            <div className='relative bg-[url("/scatter.webp")] bg-cover h-[35rem]
            bg-center rounded-[1rem] md:h-screen child'>
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

        {/* about us section */}
        <section className=' p-6 min-h-screen h-auto bg-white about-us
        panel '>
            {/* the heading */}
            <p className="font-zen tracking-widest font-black
            py-3 md:text-xl/8 capitalize child "
            > [02 / method] </p>
            <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
            tracking-[.2rem] bg-clip-text saturate-200 text-transparent
            bg-gradient-to-t from-[burlywood] to-black text-[24px]
            leading-[2.5rem] child '
            > why our builds </h1>
            <p className='font-mono text-[16px] leading-[2rem] uppercase
            tracking-[.1rem] child '
            > three pillars of architectural excellence </p>
            {/* flexed container */}
            <div className='pt-12 grid items-start grid-cols-1 md:grid-cols-2
            gap-x-40'>
                {/* image container */}
                <div className='bg-[url("/bedroom.webp")] bg-cover md:bg-fixed
                h-[30rem] rounded py-6 bg-left md:bg-center relative child '>
                    {/* the white overlay ie top */}
                    <div className='absolute inset-0 bg-gradient-to-b from-white
                    via-transparent to-transparent'></div>
                    {/* the white overlay ie bottom */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent
                    via-transparent to-white'></div>
                    {/* the white overlay ie left */}
                    <div className='absolute inset-0 bg-gradient-to-l from-white
                    via-transparent to-transparent'></div>
                    {/* the white overlay ie right */}
                    <div className='absolute inset-0 bg-gradient-to-r from-white
                    via-transparent to-transparent'></div>
                </div>
                {/* text container */}
                <div className='pt-12 our'>
                    {/* let map throught the three pillars */}
                    { Pillars.map( (pillar, index) => (
                        <div key={pillar.id}>
                            {/* head title */}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-3 font-zen py-3
                                md:py-6 '>
                                    <span className=' font-black text-[burlywood] saturate-200 '
                                    >0{index+1}.</span>
                                    <h2 className='md:uppercase md:text-xl text-black/70'
                                    >{pillar.head}</h2>
                                </div>
                                {/* icon changing logic */}
                                <div>
                                    {activePillar === index ? (
                                        <XCircle onClick={ ()=> {setActivePillar(null);}}
                                        className='cursor-pointer'
                                        />
                                    ) : (
                                        <PlusCircle onClick={ ()=> {setActivePillar(index);}}
                                        className='cursor-pointer'
                                        />
                                    ) }
                                </div>
                            </div>
                            {/* the content */}
                            <div>
                                {activePillar === index && (
                                    <p className='font-mono text-[16px] leading-[2rem] py-4 '
                                    > {pillar.content} </p>
                                )}
                            </div>
                        </div>
                    )) }
                    <a href="#contacts" className='bg-[burlywood] text-[white] px-2 py-1 saturate-200
                    capitalize font-zen tracking-widest rounded reach hidden md:inline-block
                     '> reach out</a>
                </div>
            </div>
        </section>

        {/* furniture section */}
        <section className='bg-[url("/driven.webp")] min-h-screen h-auto
        bg-cover bg-center bg-fixed relative panel '>
            {/* the overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-white
            via-white/30 to-black '></div>
            {/* the content */}
            <div className='relative pt-42 flex flex-col items-center justify-center
            gap-y-12 md:pt-56 '>
                <p className='font-lavish text-[3rem] leading-[4.4rem] md:text-[4rem]
                tracking-widest text-center text-[burlywood] saturate-200
                font-black child '>
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

export default Home

