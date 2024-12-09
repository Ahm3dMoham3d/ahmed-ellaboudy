import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <nav className='p-4 h-[80px] '>
      <div className='max-w-[1366px] mx-auto flex items-center justify-between'>
        <h4>أتصل بنا</h4>
        <Link href={"/"}>
          <Image src={Logo} width={148} height={148} alt='ahmed_ellaboudy' />
        </Link>
        <Button size={"icon"} className='rounded-full'>
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
