import { useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Animation from "./Animation"
import Background from './Background'
import Section from './Section'
import Container from './Container'
import logo from "../assets/logo.png"
import { useRef } from 'react' 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Parts from './Parts'
import { motion, useScroll} from "framer-motion";
const parts=["قسم البرمجيات","قسم التصميم والغرافيكس","قسم المونتاج والموشن غرافيك","قسم التسوقي الرقمي","قسم الدعم التقني"]
const navigation = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'أقسامنا', href: '#parts' },
  { name: 'من نحن' , href: '#us' },
  { name: 'اتصل بنا', href: '#' },
  { name: 'انضم الينا', href: '#feature' },
]

export default function AppLayout() {
   const { scrollYProgress } = useScroll()


 const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const [clicked, setClicked]=useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
function handleClick(index){
  setClicked(index)
  setMobileMenuOpen(false)
}
  return (
    <>
return <motion.div style={{ scaleX: scrollYProgress }} />
    <div className='bg-stone-100'>

      
      <header className="fixed w-full  top-0  flex-non z-50 backdrop-blur-md   bg-[#ffffff]">
      <div className='max-w-[90rem] mx-auto'>

        <nav className="flex items-center justify-between md:p-4 px-6 py-3 md:px-32 lg:px-38" aria-label="Global">
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              >
              
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item,index) => (
                <a onClick={()=>handleClick(index)} key={item.name} href={item.href} >
                    <button className={`text-sm sm:p-3 p-2 rounded-md font-semibold leading-6 ${clicked===index? "text-yellow-500 bg-black":""} hover:text-yellow-500 text-black`}>

                {item.name}
                    </button>
              </a>
            ))}
          </div>
             <div className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
             

              <img  src={logo} className='w-12 lg:w-16' alt="logo" />
                          
            </a>
          </div> 
        </nav>
        
      </div>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
             
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
             <a href="#" className="-m-1.5 p-1.5">
               <p  className="font-bold text-2xl space-x-0.5">

              <span className='text-yellow-500'>i</span><span className='text-black'>Can</span>
             </p>
              
              </a>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item,index) => (
                      <a
                      onClick={()=>handleClick(index)}
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block  rounded-lg px-3 py-2 text-base ${clicked===index? "text-yellow-500 ":""} font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                      >
                      {item.name}
                    </a>
                  ))}
                </div>
              
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main className='max-w-[90rem] mx-auto'>



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
     <Section id='parts' >
      
       
        <Container type="col">
          <h1 className='text-3xl text-yellow-500 font-bold'>أقسامنا</h1>
          <div dir='ltr' className=" w-full md:px-0 px-14">

              <Carousel
                plugins={[plugin.current]}
                className="w-full  "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                
                >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className=" w-full">
                        <Card>
                          <CardContent className="flex  w-full h-[300px]  md:h-[calc(100vh-10rem)] items-center justify-center ">
                          <Parts index={index} />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
              </Carousel>
        </div>
         
        </Container>
  
      </Section>
     <Section id='us' >
      
       
        <Container type="col">
        
          <h1 className='text-3xl text-yellow-500 font-bold'>من نحن</h1>
          <h2 className='text-2xl px-6'>iCAN |Technical Solutions</h2>
          <h2 className='text-2xl  text-center leading-relaxed px-6'>
<span className='py-6 block'> للاستشارات والحلول البرمجية والتقنية وكل ما يتعلق بتكنولوجيا المعلومات والاتصالات</span>
<span className='block font-bold text-yellow-500 text-right'>للشركة 5 اقسام رئيسية وهي :</span>
</h2>

<ul className='shadow-xl bg-yellow-50   shadow-yellow-200'>
{parts.map((part,index)=> 
  <motion.div  key={index} animate={{ y: 0,opacity: 1  }}  initial={{ y: 100,opacity: 0 }} transition={{ ease: "easeOut", duration: 1}}>
<li className='text-center my-2 w-full text-yellow-500 bg-white px-6 py-4 rounded-md ' >{part}</li>
</motion.div>)
}

</ul>
<p className='py-10 text-center font-semibold leading-loose  px-16'> إلى كافة الفعاليات المختلفة مثل أصحاب (البنوك والمصارف - المطاعم والكافيهات - الفنادق- المشافي -  نقاط البيع والمولات والسوبر ماركت- محلات التجارية من البسة واحذية وهدايا وعطور وزهور  وحلويات والكترونيات ومفروشات - صالونات ومراكز التجميل و المكياج - محلات المجوهرات والذهب - النوادي الرياضية - المكاتب السياحية والسفر والشحن - العقارات والمقاولات  - مكاتب السيارات - المعاهد والمدارس والجامعات - العيادات و الصيدليات والمخابر والمراكز الطبية والتجميلية - خدمات البيع - خدمات التوصيل الدلفري - المعامل والمصانع - المكتبات ودار النشر - برامج المحاسبة - شركات الاستيراد والتصدير - تسيير واتمتة المعاملات - المحامين والقضاة والاطباء والمهندسين - الدفع الالكتروني - محطات البانزين- وكافة المهن العامة و الخاصة والنقابات المهنية وجميع المديريات و المؤسسات والشركات الحكومية والخاصة وكافة الفعاليات مهما كان اختصاصها) .

جاهزون لتصميم وبرمجة برامج ويندز وتطبيقات الاندرويد و الايفون بالاضافة لمواقع الويب لإدارة عملكم بشكل سلس ومريح و كامل وبما يغطي كافة تفاصيل العمل وتسهيل التواصل مع العملاء بشكل احترافي وفق تصماميم مميزة وسهلة الاستخدام.
وجاهزون ايضا لكافة تصاميم الغرافيك وعمل المونتاج من اجل نجاح شركاتكم وعرض منتجاتكم كافة بكل دقة واحترافية من اجل ارضائكم بالاضافة للتسويق لها رقميا بكافة طرق التسويق الرقمي .</p>
         
        </Container>
  
      </Section>
    
    
            
      </main>
    </div>
    </>
  )
}


