import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"


const NavigationComponent = () => {

    const [menu, setMenu] = useState<boolean>()

  return (

    <div>
        {/* navigation on smaller screens */}
        <section className="flex items-center justify-between p-3
        rounded-full bg-black/60 border border-white/70 text-white
        md:hidden backdrop-blur-md fixed top-4 left-3 right-3 z-10 " >
            {/* logo */}
            <div>
                <h1 className="font-zen font-black capitalize
                tracking-wide text-[white] saturate-200 ">
                    deisa homes
                </h1>
            </div>
            {/* icons */}
            <div>
                { menu ? (
                    <XIcon onClick={ ()=> setMenu(!menu) }
                    className="cursor-pointer text-[white] saturate-200"/>
                ):(
                    <MenuIcon onClick={ ()=> setMenu(!menu) }
                    className="cursor-pointer text-[white] saturate-200"/>
                ) }
            </div>
        </section>

        {/* once the menu is open */}
        { menu && (
            <div className="p-3 bg-black/60 h-auto rounded-[.3rem]
            text-[wheat] backdrop-blur-md fixed top-[4.1rem] left-3 right-3 z-10 ">
                <nav className="flex items-start justify-start
                flex-col capitalize gap-y-3 ">
                    <a href="#home" onClick={ ()=> setMenu(!menu) }
                    className="w-full ">home</a>
                    <a href="#about" onClick={ ()=> setMenu(!menu) }
                    className="w-full ">about</a>
                    <a href="#services" onClick={ ()=> setMenu(!menu) }
                    className="w-full ">services</a>
                    <a href="#faq" onClick={ ()=> setMenu(!menu) }
                    className="w-full ">FAQ</a>
                    <a href="#footer" onClick={ ()=> setMenu(!menu) }
                    className="w-full ">our Socials</a>
                    <a href="#contacts" onClick={ ()=> setMenu(!menu) }
                    className="bg-[burlywood] px-2 py-1 rounded-[.3rem]
                    text-black ">schedule a consultation</a>
                </nav>
            </div>
        ) }

        {/* navigation on medium to larger screens */}
        <section className="md:flex items-center justify-between p-3
        rounded-full bg-black/60 border border-white/70 text-white
        hidden backdrop-blur-md fixed top-4 left-3 right-3 z-10
        mx-[12rem] " >
            {/* logo */}
            <div>
                <h1 className="font-zen font-black capitalize
                tracking-wide text-white saturate-200 ">
                    deisa homes
                </h1>
            </div>
            {/* navigation */}
            <div>
                <nav className="text-white saturate-200 flex items-center
                justify-between gap-4 capitalize ">
                    <a href="#home">home</a>
                    <a href="#about">about us</a>
                    <a href="#services">services</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contacts"
                    className="px-2 py-1 rounded-full shadow shadow-md
                    mr-6 ml-12 shadow-[burlywood] ">schedule a consultation</a>
                </nav>
            </div>
        </section>
    </div>

  )

}

export default NavigationComponent

