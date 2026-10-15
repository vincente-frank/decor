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

    useGSAP ( ()=> {

        function heroAnimation ():gsap.core.Timeline {
            let hero = document.querySelectorAll(".hero")
            let heroDiv = document.querySelector(".hero-div")
            let deisa = document.querySelector(".deisa")
            let homes = document.querySelector(".homes")
            let description = document.querySelector(".description")
            let explore = document.querySelectorAll(".explore")
            const heroTimeline = gsap.timeline()
            .to(hero, {autoAlpha:1, ease:"linear"},)            
            .from(deisa, {x:200,opacity:0, duration:2, ease:"back" })
            .from(homes, {x:-200, opacity:0, duration:2, ease:"back(2)"},"<")
            .from(description, {y:150, opacity:0, duration:0.8, ease:"back"})
            .from(explore, {scale:0.3, opacity:0, duration:0.8, ease:"slow(0.7, 0.7)"},"<")
            return heroTimeline;
        }
        function scrollAnimation ():gsap.core.Timeline {
            let parent1 = document.querySelector(".parent1")
            let parentHeading = document.querySelector(".parent1 p")
            const parentTimeline = gsap.timeline({
                scrollTrigger:{
                    trigger:parent1,
                    start:"top 75%",
                    end:"bottom 20%",
                    toggleActions:"play complete restart reverse"
                }
            })
            .from(parentHeading, {opacity:0, duration:3, y:120, ease:"back"})
            return parentTimeline;
        }
        function aboutAnimation ():gsap.core.Timeline {
            let aboutUs = document.querySelector(".about-us")
            let our = document.querySelector(".our p")
            let builds = document.querySelectorAll(".builds")
            let heading = document.querySelector(".about-us p")
            let description = document.querySelector(".about-description")
            let reach = document.querySelector(".reach")
            let splittedHeading = SplitText.create(heading, {type:"chars"})
            const aboutTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger:aboutUs,
                    start:"top 75%",
                    end:"bottom 20%",
                    toggleActions:"play none none reverse"
                }
            })
            .from(splittedHeading.chars, {
                opacity:0, duration:0.7, rotation:gsap.utils.wrap([100, -100]),
                y:gsap.utils.wrap([100, -100]), ease:"back",
                stagger: {
                    each:0.05, from:"start"
                }
            })
            .from(description, {opacity:0, y:150, duration:1, ease:"back(2) "},"<")
            .from(our, {opacity:0, xPercent:600, duration:3, ease:"back"})
            .from(builds, {opacity:0, stagger:0.05, duration:2, y:80},"+=0.2")
            .from(reach, {opacity:0, scale:0.4, duration:2, ease:"back"})
            return aboutTimeline;
        }

        heroAnimation()
        scrollAnimation()
        aboutAnimation()

        
    }, []);

  return (

    <div className='overflow-x-hidden'>

        {/* the hero section */}
        <section className='bg-[url("/hero.webp")] bg-cover bg-center
        bg-fixed min-h-screen h-auto hero relative p-6 hero ' >
            {/* the overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/30
            via-black/30 to-white hero'></div>
            {/* the content */}
            <div className='hero-div relative pt-24 text-left'>
                {/* the heading */}
                <h1 className='font-lavish text-[5rem] lowercase tracking-widest
                leading-[4.5rem] text-[wheat] saturate-200 pb-4 font-bold '>
                    <span className='inline-block deisa'>deisa</span> <br />
                    <span className='inline-block pl-8 homes'>homes</span>
                </h1>
                {/* the description or sub headlines */}
                <p className='text-xl/8 font-zen leading-[2.5rem] text-white
                saturate-200 tracking-[.2rem] pb-18 description '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima deleniti sequi nostrum laborum animi voluptates quod!
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
        <section className="min-h-screen h-auto p-6 bg-white flex
        flex-col items-start justify-center gap-y-8 md:flex-row md:justify-between ">
            {/* the philosophy */}
            <div className='w-full md:w-[40%]'>
                <p className="font-zen tracking-widest font-black
                py-3 md:text-xl/8 capitalize " >
                [ 01 / our philosophy ]
            </p>
            <p className='font-mono capitalize py-3 text-xl/8 text-black/60'>
                every detail is decided, not decorated. <br/>
                fewer elements, each one deliberate.
            </p>
            </div>
            {/* good design div */}
            <div className='w-full md:w-[60%]'>
                <p className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
                tracking-[.2rem] bg-clip-text saturate-200 text-transparent
                bg-gradient-to-t from-[burlywood] to-black md:pl-[12rem] text-[24px]
                leading-[2.5rem] '>
                    good design <br/> communicates. <br/>
                    great spaces <br/> surprise.
                </p>
                <p className='font-mono text-[16px] leading-[2rem] '
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
        <section className='min-h-screen h-auto p-6'>
            {/* container div */}
            <div className='relative bg-[url("/scatter.webp")] bg-cover h-[35rem]
            bg-center rounded-[1rem] md:h-screen'>
                {/* the overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black
                to-transparent rounded-[1rem] border border-2 border-white/40'></div>
                {/* the content */}
                <div className='relative'>
                    {/* scatter suite */}
                    <h1 className='absolute font-zen font-black text-[black] bg-white/20
                    inline-block px-2 py-1 top-8 left-6 rounded-[.5rem] saturate-200
                    backdrop-blur-xl border border-2 border-white/60 uppercase
                    tracking-[.2rem] text-[12px] md:text-lg
                    '>scatter suite</h1>
                    {/* natural light */}
                    <h1 className='absolute top-[22rem] right-0 text-left text-[burlywood]
                    font-zen px-6 text-[14px] leading-[2rem] py-3 md:text-lg/8
                    md:top-[26rem] md:uppercase md:tracking-[.2rem  '
                    >organic harmony & natural light</h1>
                    <p className='absolute top-[26rem] text-white/60 text-left right-0
                    px-6 py-3 md:top-[29rem] md:text-2xl md:tracking-[.2rem]
                    md:pl-[12rem] md:text-right md:leading-[2.5rem] md:py-4 '>
                        Crafted with brusged travertine and aged oak timber,
                        creating a contemplative shelter away from urban noise.
                    </p>
                </div>
            </div>
        </section>

        {/* about us section */}
        <section className=' p-6 min-h-screen h-auto bg-white about-us'>
            {/* the heading */}
            <p className="font-zen tracking-widest font-black
            py-3 md:text-xl/8 capitalize"
            > [02 / method] </p>
            <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
            tracking-[.2rem] bg-clip-text saturate-200 text-transparent
            bg-gradient-to-t from-[burlywood] to-black text-[24px]
            leading-[2.5rem] '
            > why our builds </h1>
            <p className='font-mono text-[16px] leading-[2rem] uppercase
            tracking-[.1rem] '
            > three pillars of architectural excellence </p>
            {/* flexed container */}
            <div className='pt-12 grid items-start grid-cols-1 md:grid-cols-2
            gap-x-40'>
                {/* image container */}
                <div className='bg-[url("/bedroom.webp")] bg-cover md:bg-fixed
                h-[30rem] rounded py-6 bg-left md:bg-center relative'>
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
        bg-cover bg-center bg-fixed relative furniture saturate-200'>
            {/* the overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-white
            via-white/30 to-black'></div>
            {/* the content */}
            <div className='relative pt-42 flex flex-col items-center justify-center
            gap-y-12 md:pt-56 '>
                <p className='font-lavish text-[3rem] leading-[4.4rem] md:text-[4rem]
                tracking-widest text-center text-[burlywood] saturate-200
                font-black '>
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
        pt-6 pb-12 '>
            {/* headings */}
            <p className="font-zen tracking-widest font-black
            py-3 md:text-xl/8 capitalize "
            > [03 / portfolio ] </p>
            <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
            tracking-[.2rem] bg-clip-text saturate-200 text-transparent
            bg-gradient-to-t from-[burlywood] to-white/90 text-[24px]
            leading-[2.5rem] '
            >selected works</h1>
            <p className='font-mono text-[16px] leading-[2rem] uppercase
            tracking-[.1rem] '
            > explore the physical editions </p>
            {/* container div */}
            <div className='pt-12 grid grid-cols-1 items-center
            justify-center md:grid-cols-3 gap-6'>
                {/* living */}
                <div className='h-[30rem] bg-[url("/living.webp")] rounded-[1rem]
                bg-cover bg-center relative md:col-span-2 cursor-pointer'>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80'></div>
                    {/* the content */}
                    <div className='relative'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px] '>01 / suite</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                         '>salon de lumiere</p>
                    </div>
                </div>
                {/* bedroom */}
                <div className='h-[30rem] bg-[url("/bedroom.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80'></div>
                    {/* the content */}
                    <div className='relative'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px] '>02 / bedroom</h3>
                        <p className='absolute top-[26rem] left-6 uppercase font-zen tracking-[.2rem]
                        py-3 '>the obsidian master</p>
                    </div>
                </div>
                {/* kitchen */}
                <div className='h-[30rem] bg-[url("/kitchen.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80'></div>
                    {/* the content */}
                    <div className='relative'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px] '>03 / cuisine</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                         '>travertine cuisine</p>
                    </div>
                </div>
                {/* hero */}
                <div className='h-[30rem] bg-[url("/hero.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80'></div>
                    {/* the content */}
                    <div className='relative'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px] '>04 / villa</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                         '>the monochrome</p>
                    </div>
                </div>
                {/* driven */}
                <div className='h-[30rem] bg-[url("/driven.webp")] rounded-[1rem]
                bg-cover bg-center relative cursor-pointer '>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80'></div>
                    {/* the content */}
                    <div className='relative'>
                        <h3 className='absolute top-[22rem] left-6 font-lavish tracking-[.1rem]
                        font-black text-[burlywood] capitalize saturate-200 py-3 text-[40px] '>05 / residence</h3>
                        <p className='absolute top-[27rem] left-6 uppercase font-zen tracking-[.2rem]
                         '>terracotta atelier</p>
                    </div>
                </div>
            </div>
        </section>

        {/* thrilled to help you section */}
        <section className='min-h-screen h-auto bg-[url("/morph-bg.webp")] bg-cover
        bg-center relative p-6 '>
            <div className='absolute inset-0  bg-gradient-to-b
            from-black via-black/30 to-black'></div>
            <div className='h-auto relative text-white text-center py-6 h-96'>
                <p className='font-mono tracking-[.3rem] uppercase text-[burlywood]
                py-6 '
                >patron commitment</p>
                {/* display in smaller devices */}
                <h1 className='font-zen capitalize font-black tracking-widest
                text-[2rem] py-6 text-[wheat] saturate-200 md:hidden inline-block '
                >" <br />always thrilled to create with you <br /> "
                </h1>
                {/* display in medium devices */}
                <h1 className='font-zen capitalize font-black tracking-widest
                text-[3rem] py-6 text-[wheat] saturate-200 hidden md:inline-block '
                >" <br />always thrilled <br /> to create with <br /> you <br /> "
                </h1>
                <p className='text-white/40 font-mono md:px-[12rem] pb-6 '>
                    From initial conceptual drawings to finishing textiles,
                    your sanctuary is guarded with uncompromising precision.
                </p>
            </div>
        </section>

        {/* contact form section */}
        <section id = "contacts"
        className='bg-[url("/driven.webp")] bg-cover bg-center
        min-h-screen h-auto p-6 relative' >
            <div className='absolute inset-0 bg-gradient-to-b from-black
            via-transparent to-transparent backdrop-blur-3xl'></div>
            <div className='relative text-white text-left pt-24 grid
            grid-cols-1 md:grid-cols-2 items-center justify-centert'>
                {/* start from scratch div */}
                <div>
                    <p className="font-zen tracking-widest font-black
                    py-3 md:text-xl/8 capitalize "
                    > [04 / contact] </p>
                    <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
                    tracking-[.2rem] bg-clip-text saturate-200 text-transparent
                    bg-gradient-to-t from-[burlywood] to-white/90 text-[24px]
                    leading-[2.5rem] '
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
                    px-2 py-1 '>
                        <MailIcon className='size-4'/>
                        <p>hello@deisahomes.com</p>
                    </div>
                    {/* phone number */}
                    <div className='flex items-center justify-start gap-x-2 py-2'>
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
                            <input type="text" placeholder='Frank Vincent'
                            className='outline-none border-none placeholder:text-white/70
                            px-2 py-1 '
                            />
                        </label>
                        {/* email */}
                        <label htmlFor="email"
                        className='font-mono uppercase flex flex-col gap-y-3 pt-8 border-b
                        border-white/70'
                        >email address / barua pepe
                            <input type="email" placeholder='franknjolowelo@gmail.com' 
                            className='outline-none border-none placeholder:text-white/70
                            px-2 py-1 '
                            />
                        </label>
                        {/* message */}
                        <div>
                            <p className='font-mono uppercase pt-8'> project specifications / jumbe</p>
                            <textarea name="message" id="message" cols={8} rows={5}
                            placeholder='Tell us about the property, square meters, location, and aesthetic expectations...'
                            className='border-b border-white/70 w-full px-2 py-1 '
                            />
                        </div>
                        {/* send button */}
                        <button className='mt-4 bg-white text-black px-2 py-1 mb-3
                        rounded-[.7rem] font-black font-mono capitalize '
                        >send message / tuma jumbe</button>
                    </form>
                </div>
            </div>
        </section>

        {/* footer section */}
        <section className='h-auto bg-black text-[white] p-6'>
            {/*the container */}
            <div className='flex flex-col justify-between items-start gap-y-6
            md:flex-row pt-16'>
                <h1 className='text-[3rem] tracking-widest font-zen leading-[3.8rem]
                capitalize py-8 md:w-[40%] md:text-[5rem] md:leading-[5.2rem] '
                >
                    <span className='inline-block'>let's decorate</span>
                    <span className='inline-block text-[2.6rem] bg-clip-text
                    text-transparent bg-gradient-to-t from-[burlywood] md:text-[4rem]
                     '>&nbsp;together!</span>
                </h1>
                {/* contacts */}
                <div className='grid grid-cols-1 gap-y-2 md:pt-8 md:w-[40%]
                md:pl-[16rem] pb-3 '>
                    <a href="#" className='capitalize font-mono text-lg/8 md:text-[1.1rem]
                    md:py-2 '
                    >instagram</a>
                    <a href="#" className='capitalize font-mono text-lg/8 md:text-[1.1rem]
                    md:py-0 '
                    >YouTube</a>
                    <a href="#" className='capitalize font-mono text-lg/8 md:text-[1.1rem]
                    md:py-0 '
                    >whatsApp</a>
                    {/* email */}
                    <div className='flex items-center gap-x-2 py-2 cursor-pointer '>
                       <MailIcon className='size-5'/>
                        <p>deisahomes@gmail.com</p>
                    </div>
                    {/* phone */}
                    <div className='flex items-center gap-x-2 py-2 cursor-pointer '>
                        <PhoneCall className='size-5'/>
                        <p>+255 766 355 608</p>
                    </div>
                </div>
            </div>
            {/* the deisa homes div */}
            <div className='h-56 pt-24'>
                <h1 className='text-center text-[4rem] font-zen tracking-widest
                leading-[4.5rem] text-white md:text-[8rem] md:leading-[6rem] embossed-text '>
                    <span className='inline-block'>deisa</span>
                    <span className='inline-block'>&nbsp;homes</span>
                </h1>
            </div>
        </section>

    </div>

  )

}

export default Home

