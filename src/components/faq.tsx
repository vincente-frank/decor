import { ChevronDownCircle, ChevronUpCircle, Grip } from "lucide-react"
import { useState } from "react"
import { Questions } from "../utils/questions"



const FAQ = () => {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  return (

    <div>
        {/* faq section */}
        <section id="faq"
        className="min-h-screen h-auto px-6 py-12 font-mono bg-black
        text-white ">
            {/* headings */}
            <p className="font-zen tracking-widest font-black
            py-3 md:text-xl/8 capitalize uppercase "
            > [05 / faq ] </p>
            <h1 className='font-zen uppercase md:text-[2rem] py-4 md:leading-[3rem]
            tracking-[.2rem] bg-clip-text saturate-200 text-transparent
            bg-gradient-to-t from-[burlywood] to-white/90 text-[24px]
            leading-[2.5rem] child '
            >frequently asked questions</h1>
            <p className="py-3 leading-[2rem] text-[17px] tracking-wide md:pr-[8rem]
            text-dark-khaki/70 md:text-[24px] md:leading-[2.8rem] faq-description
             ">Find answers to common questionss about our services, design process,
                sustainability, project timelines, and architectural expertise.
            </p>

            {/* faq questions container div */}
            <div className="py-12 md:pr-[6rem] the-faq ">
                { Questions.map ( (question, index) => (
                    <div key={question.id}>
                        {/* question heading div */}
                        <div className="flex items-center justify-between py-3
                        md:pl-8 ">
                            {/* question with number */}
                            <div className="flex items-start gap-x-3 py-4">
                                <span className="font-momo font-black md:text-[24px]
                                "> 0{index + 1}. </span>
                                <p className="font-momo md:text-[24px] "> {question.question} </p>
                            </div>
                            {/* changing icon */}
                            <div>
                                { activeQuestion === index ? (
                                    <ChevronUpCircle onClick={ ()=> setActiveQuestion(null) }
                                    className="cursor-pointer md:size-9 "/>
                                ):(
                                    <ChevronDownCircle onClick={ ()=> setActiveQuestion(index) }
                                    className="cursor-pointer md:size-9 "/>
                                ) }
                            </div>
                        </div>
                        {/* answer div */}
                        <div>
                            {activeQuestion === index && (
                                <p className="text-white/60 py-3 md:text-[24px]
                                border-b border-black/70 rounded-[.3rem] md:px-8
                                 "> {question.answer} </p>
                            )}
                        </div>
                    </div>
                ) ) }
            </div>

        </section>
    </div>

  )

}

export default FAQ

