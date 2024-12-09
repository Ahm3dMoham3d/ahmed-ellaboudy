import { Button } from "@/components/ui/button";
import Bars from "@/public/Bars.svg";
import Hero from "@/public/hero.jpg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className='h-[calc(100svh-80px)]'>
      <Image
        className='-z-10'
        priority
        fill
        style={{
          objectFit: "cover",
        }}
        src={Bars}
        alt='bars'
      />
      <div className='h-full max-w-[1366px] mx-auto'>
        {/* Text and Button Section */}
        <div className='h-full lg:flex lg:items-center p-4 grid grid-cols-1 grid-rows-[auto_1fr] gap-6 lg:grid-cols-2 lg:items-center lg:grid-rows-1'>
          <div className='h-auto'>
            <h1 className='text-4xl md:text-7xl lg:leading-snug md:mb-8 md:leading-snug leading-relaxed font-bold'>
              شريكك{" "}
              <span className='text-primary'>الموثـــــــــــــــــوق</span>{" "}
              للنجاح المالي
            </h1>

            <p className='text-lg md:text-2xl text-foreground/70 mt-2'>
              خدمات محاسبية، ضريبية واستشارية شاملة تناسب احتياجاتك
            </p>

            <Button size={"lg"} className='mt-4 w-full lg:max-w-[350px]'>
              أطلب خدمتك الأن !
            </Button>
          </div>

          {/* Image Section */}
          <div className='relative h-full'>
            {/* Image */}
            <Image
              className='h-full w-full object-cover rounded-lg'
              priority
              src={Hero}
              alt='bars'
            />
            {/* Overlay Layer */}
            <div className='absolute inset-0 rounded-lg bg-black/20 flex justify-center items-end pb-8'>
              <div className='mt-4 border-white border rounded-full p-1 animate-bounce'>
                <ArrowDown className='text-white w-5 h-5 xs:w-6 xs:h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='grid grid-rows-6 md:grid-rows-1 md:grid-cols-12 h-full'>
        <div className='relative row-span-4 md:col-span-6'>
          <div className='container mx-auto p-4 text-center'>
            <h1 className='text-5xl xs:text-6xl font-bold lg:text-8xl'>
              شريــــــــــــــــــــكك
            </h1>
            <h1 className='text-5xl xs:text-6xl font-bold text-primary my-4 lg:text-8xl'>
              الموثـــــــــــــــــوق
            </h1>
            <h1 className='text-5xl xs:text-6xl font-bold mb-4 lg:text-8xl'>
              للنجـــــــــــــــــــــــــاح
            </h1>
            <h1 className='text-5xl xs:text-6xl font-bold lg:text-8xl'>
              المالــــــــــــــــــــــي
            </h1>

            <p className='text-lg hidden [@media(min-height:768px)]:block text-foreground/70 mt-10 mb-4'>
              خدمات محاسبية، ضريبية واستشارية شاملة تناسب احتياجاتك
            </p>
          </div>

          <Image
            className='-z-10'
            priority
            fill
            style={{
              objectFit: "cover",
            }}
            src={Bars}
            alt='bars'
          />
        </div>
        <div className='relative row-span-2 md:col-span-6 bg-primary/90'>
          <Image
            className='absolute h-full w-full -z-10'
            priority
            style={{
              objectFit: "fill",
            }}
            src={Texture}
            alt='bars'
          />
          <div className='container mx-auto p-4 h-full flex flex-col justify-center items-center'>
            <div className='w-full h-[25vh] -mt-[15vh]'>
              <Image
                className='h-[25vh] w-full'
                priority
                style={{
                  objectFit: "cover",
                }}
                src={Hero}
                alt='bars'
              />
            </div>
          
          
          </div>
        </div>
      </div> */}
    </main>
  );
}
