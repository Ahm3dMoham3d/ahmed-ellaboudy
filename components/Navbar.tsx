import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
export default function Navbar({ lang }: { lang: string }) {
  return (
    <nav className="p-4 h-[80px] ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} width={148} height={148} alt="ahmed_ellaboudy" />
        </Link>
        <Button size={"icon"} className="rounded-full">
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
