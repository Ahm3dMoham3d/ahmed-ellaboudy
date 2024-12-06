import { Button } from "@/components/ui/button";
import Bars from "@/public/Bars.svg";
import Hero from "@/public/hero.jpg";
import Texture from "@/public/texture.jpg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="h-[calc(100svh-80px)]">
      <div className="grid grid-rows-6 lg:grid-rows-1 lg:grid-cols-8 h-full">
        <div className="relative row-span-4">
          <div className="container mx-auto p-4 text-center">
            <h1 className="text-5xl xs:text-6xl font-bold">
              شريــــــــــــــــــــكك
            </h1>
            <h1 className="text-5xl xs:text-6xl font-bold text-primary my-4">
              الموثـــــــــــــــــوق
            </h1>
            <h1 className="text-5xl xs:text-6xl font-bold mb-4">
              للنجـــــــــــــــــــــــــاح
            </h1>
            <h1 className="text-5xl xs:text-6xl font-bold">
              المالــــــــــــــــــــــي
            </h1>

            <p className="text-lg hidden [@media(min-height:768px)]:block text-foreground/70 mt-10 mb-4">
              خدمات محاسبية، ضريبية واستشارية شاملة تناسب احتياجاتك
            </p>
          </div>

          <Image
            className="-z-10"
            priority
            fill
            style={{
              objectFit: "cover",
            }}
            src={Bars}
            alt="bars"
          />
        </div>
        <div className="relative row-span-2 bg-primary/90">
          <Image
            className="absolute h-full w-full  -z-10"
            priority
            style={{
              objectFit: "fill",
            }}
            src={Texture}
            alt="bars"
          />
          <div className="container mx-auto p-4 h-full flex flex-col justify-center items-center">
            <div className="w-full h-[25vh] -mt-[15vh]">
              <Image
                className="h-[25vh] w-full"
                priority
                style={{
                  objectFit: "cover",
                }}
                src={Hero}
                alt="bars"
              />
            </div>
            <Button className="mt-4 w-full">أطلب خدمتك الأن !</Button>
            <div className="mt-4 border-white border rounded-full p-1">
              <ArrowDown className="text-white w-5 h-5 xs:w-6 xs:h-6" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
