import Animation from "../components/Animation"
import Background from '../components/Background'
import Section from '../components/Section'
import Container from '../components/Container'
import { motion} from "framer-motion";
export default function Home() {
    return (
     <Section id='home' >
      
        <div
          className="absolute  flex flex-col    lg:rotate-0 lg:scale-150 -rotate-90 md:scale-200 scale-[3] inset-x-0  brightness-150 hue-rotate-[4deg] -z-10 transform-gpu sm:overflow-y-hidden blur-[2px] opacity-70  saturate-[0]"
          aria-hidden="true"
          >
            <Background />
            
              </div>
         
        <Container type="row">
           <motion.div  animate={{ x: 0,opacity: 1  }}  initial={{ x: 100,opacity: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
          <div className=" lg:scale-[1.4] flex flex-col justify-center lg:gap-1  md:scale-[1]  ">
            <h1 className="text-2xl sm:text-right text-center font-bold  sm:leading-tight tracking-tight text-neutral-400  ">
              <span className='text-[5rem] sm:text-[4rem] lg:text-[2.5rem]'> 
               <span className='text-yellow-500'>i</span>
               <span className='text-black'>CAN </span> 
              </span>
              <span className='hidden lg:inline'>Technical Solutions</span>
              <br /> <span className='lg:hidden'>Technical Solutions</span>
            </h1>
 
            <p className="  mt-6  lg:pl-28 sm:text-sm text-lg px-10 sm:px-0   sm:text-right text-center  leading-relaxed text-black">
              للاستشارات والحلول البرمجية والتقنية <br />  وكل ما يتعلق بتكنولوجيا المعلومات والاتصالات <br />  بإدارة المهندس باسل تنبكجي
            </p>
            <div className="mt-10 flex items-center sm:justify-normal justify-center sm gap-x-2 ">
              <a
                href="#"
                className="rounded-md bg-black px-3.5  text-yellow-500 py-2.5 text-sm font-semibold  shadow-sm hover:bg-yellow-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
             
           Download  
              </a>
              <a href="#" className=" rounded-md border-2 border-stone-900 px-3.5 py-1.5 text-sm  shadow-sm hover:bg-yellow-500 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  font-semibold leading-6 text-black">
                Learn more 
              </a>
            </div>
          </div>
          </motion.div>

             <motion.div animate={{ x: 0,opacity: 1  }}  initial={{ x: -100,opacity: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
         <div className="hidden  mt-20  md:-ml-16 sm:-ml-16 -ml-44 sm:max-w-[25rem] max-w-[50rem] sm:scale-[1] lg:scale-[1.6]  overflow-hidden  scale-90 brightness-110 hue-rotate-[-125deg] sm:flex sm:justify-end">
            <Animation />
          </div>
                      </motion.div>

        </Container>
  
      </Section>
    )
}
