import Header from '../Pages/Header'
import Home from '../Pages/Home'
import OurParts from '../Pages/OurParts'
import Us from '../Pages/Us'; 


export default function AppLayout() {

 return (
    
  <div className='bg-stone-100'>
    <Header />
    <main className='max-w-[90rem] mx-auto'>
      <Home />
      <OurParts />
      <Us />
    </main>
    </div>

  )
}


