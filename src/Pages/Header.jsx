import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/logo.png"
const navigation = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'أقسامنا', href: '#parts' },
  { name: 'من نحن' , href: '#us' },
  { name: 'اتصل بنا', href: '#' },
  { name: 'انضم الينا', href: '#feature' },
]

export default function Header() {
    const [clicked, setClicked]=useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  function handleClick(index){
  setClicked(index)
  setMobileMenuOpen(false)
}
  return (
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
    )
}
