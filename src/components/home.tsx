import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import TextPlugin from 'gsap/TextPlugin'
import { MailIcon, PhoneCall } from 'lucide-react'


const Home = () => {

    gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger)

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

        {/* after hero section */}
        <section className='p-6 min-h-screen text-black bg-gradient-to-b from-white
        to-transparent h-auto parent1'>
            {/* the after hero heading section */}
            <p className='font-zen tracking-widest text-[2rem] uppercase
            leading-[3rem] pt-16 pb-4 '>
                Lorem ipsum dolor sit amet consectet adipisicing elit.
            </p>
            {/* the image content div container */}
            <div className='relative bg-[url("/scatter.webp")] bg-cover bg-center
            h-[40rem] my-4 rounded '>
                {/* the top gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-b from-white
                to-black/40 rounded  '></div>
                {/* the conten */}
                <div className='relative '>
                    <p className='font-black tracking-wide font-mono
                    uppercase text-xl/8 p-6 absolute top-6 left-0
                    '>Lorem, ipsum dolor.</p>
                    <p className='absolute top-[29rem] right-0 px-6 font-lavish
                    text-4xl font-black tracking-widest capitalize
                    text-[burlywood] saturate-200'>Lorem, ipsum.</p>
                    <p className='absolute top-[32rem] right-0 px-6 pt-3
                    text-right text-lg/8 text-white font-zen'>
                        Lorem ipsum dolor sit <br /> amet consectetur elit <br /> adipisicing elit.
                    </p>
                </div>
            </div>
        </section>

        {/* about us section */}
        <section className=' p-6 min-h-screen h-auto bg-white about-us'>
            {/* the heading */}
            <p className='uppercase font-zen tracking-widest text-[2rem]
            leading-[2.2rem] py-3'> the heading</p>
            <p className='text-lg/8 font-mono pb-8 md:pr-[12rem]
            about-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum natus consequatur a voluptates cumque, mollitia soluta!
            </p>
            {/* flexed container */}
            <div className='pt-12 grid items-start grid-cols-1 md:grid-cols-2
            gap-x-40'>
                {/* image container */}
                <div className='bg-[url("/bedroom.webp")] bg-cover bg-fixed
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
                    <p className='text-[burlywood] saturate-200 font-black tracking-widest
                     font-lavish text-[4rem] leading-[4.3rem] py-4 '>why our builds</p>
                    <p className='font-mono text-lg/8 py-2 builds'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates voluptatem incidunt repellendus numquam tempore? Optio, ipsa.
                    </p>
                    <p className='font-mono text-lg/8 py-2 builds'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates voluptatem incidunt repellendus numquam tempore? Optio, ipsa.
                    </p>
                    <p className='font-mono text-lg/8 py-2 builds'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates voluptatem incidunt repellendus numquam.
                    </p>
                    <a href="#" className='bg-[burlywood] text-[white] px-2 py-1 saturate-200
                    capitalize font-zen tracking-widest rounded reach'> reach out</a>
                </div>
            </div>
        </section>

        {/* furniture section */}
        <section className='bg-[url("/driven.webp")] min-h-screen h-auto
        bg-cover bg-center bg-fixed relative furniture'>
            {/* the overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-white
            via-white/30 to-black'></div>
            {/* the content */}
            <div className='relative pt-40 flex flex-col items-center justify-center
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

        {/* gallery section */}
        <section className='min-h-screen h-auto bg-black text-white p-6
        grid grid-cols-1 md:grid-cols-12 gap-y-18 md:gap-x-16'>
            {/* left contnet div */}
            <div className=' pt-6 md:col-span-4 md:pt-[13rem]'>
                <p className='font-italiano text-[transparent] text-[4rem]
                font-bold bg-clip-text bg-gradient-to-r from-[burlywood] tracking-widest
                bg-cover bg-center to-[white] '>Minister of enjoyment</p>
                <p className='font-mono pt-3 pb-8 text-lg/8'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam repellendus non pariatur, tenetur laudantium aliquam natus.
                </p>
                <a href="#contacts" className='bg-[burlywood] text-[white] px-2 py-1 saturate-200
                capitalize font-zen tracking-widest rounded
                '> reach out</a>
            </div>
            {/* right images div */}
            <div className='md:col-span-8 grid grid-cols-1 md:grid-cols-3'>
                {/* bedroom */}
                <img src="/bedroom.webp" alt=""
                className='w-[40rem] h-[20rem] object-cover md:col-span-2
                cursor-pointer '
                />
                {/* driven */}
                <img src="/driven.webp" alt=""
                className='w-[40rem] h-[20rem] object-cover cursor-pointer'
                />
                {/* living */}
                <img src="/living.webp" alt=""
                className='w-[40rem] h-[20rem] object-cover cursor-pointer '
                />
                
                {/* scatter */}
                <img src="/scatter.webp" alt=""
                className='w-[40rem] h-[20rem] object-cover cursor-pointer'
                />
                {/* kitchen */}
                <img src="/kitchen.webp" alt=""
                className='w-[40rem] h-[20rem] object-cover cursor-pointer '
                />
            </div>
        </section>

        {/* thrilled to help you section */}
        <section className='h-auto bg-[url("morph-bg.webp")] bg-cover
        bg-center md:bg-fixed relative p-6'>
            <div className='absolute inset-0  bg-gradient-to-b
            from-black via-transparent to-black'></div>
            <div className='relative text-white text-center py-6 h-96'>
                "<h1 className='font-zen capitalize font-black tracking-widest
                text-[3rem] py-6 text-[wheat] saturate-200 '
                >always thrilled to help you</h1>"
            </div>
        </section>

        {/* contact form section */}
        <section id = "contacts"
        className='bg-[url("driven.webp")] bg-cover bg-center
        h-screen p-6 relative' >
            <div className='absolute inset-0 bg-gradient-to-b from-black
            via-transparent to-transparent backdrop-blur-3xl'></div>
            <div className='relative text-white text-center pt-24'>
                <p className='font-lavish text-[3rem] leading-[3rem]
                tracking-widest py-3 '>Lorem, ipsum dolor.</p>
                <p className='text-lg/8 font-mono pt-2 pb-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta maxime nobis nihil?
                </p>
                {/* the form */}
                <form action="#">
                    {/* name */}
                    <input type="text" placeholder='andika jina lako hapa'
                    className='bg-transparent w-full my-3 px-2 py-1 placeholder:text-[wheat]
                    font-mono placeholder:capitalize text-lg/8 tracking-widest
                    outline-none border-b border-[wheat] rounded md:w-[60%]
                    inline-block '
                    />
                    {/* email */}
                    <input type="text" placeholder='andika barua pepe hapa'
                    className='bg-transparent w-full my-3 px-2 py-1 placeholder:text-[wheat]
                    font-mono placeholder:capitalize text-lg/8 tracking-widest
                    outline-none border-b border-[wheat] rounded md:w-[60%]
                    inline-block '
                    />
                    {/* message text area */}
                    <textarea  placeholder='andika jumbe yako hapa'
                    cols={8} rows={4}
                    className='bg-transparent w-full my-3 px-2 py-1 placeholder:text-[wheat]
                    font-mono placeholder:capitalize text-lg/8 tracking-widest
                    outline-none border-b border-[wheat] rounded md:w-[60%]
                    inline-block '
                    />
                    <button className='capitalize font-zen  bg-[transparent] px-2 py-1
                    mt-4 rounded tracking-widest outline outline-[wheat] cursor-pointer
                    block md:ml-[44%] md:mr-[43%] '
                    >tuma ujumbe</button>
                </form>
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

