import Section from '../components/Section'
import Container from '../components/Container'
import Parts from '../components/Parts'
import Autoplay from "embla-carousel-autoplay"
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
export default function OurParts() {
     const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

    return (
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
    )
}
