import About from "@/_components/about";
import Button from "@/_components/buttons";
import Header from "@/_components/header";
import Image from "next/image";
import {
  BiBasketball,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

export default function Home() {
  return (
    <div className="relative ">
      <div className="absolute bg-brand-sec w-[40%] h-[1080px] right-0 top-0 z-[-1]"></div>
      <Header />
      <div className="mx-auto flex justify-between w-[1320px] max-w-[100%] h-[974px]  mt-3">
        <div className="relative">
          <div className="absolute mt-60 w-[758px]">
            <h2 className="text-7xl mb-3">Hello, I'm John, a</h2>
            <span className="text-7xl text-brand-sec">Software Enginer</span>
            <p className="text-xl mb-8 mt-8 w-[653px] text-brand-gray500">
              Product Designer, UI/UX Designer, and developer based in Brazil.
              Over the past 17 years, as an art director and designer, I’ve
              worked with big companies and up-and-coming startups.
            </p>

            <div className="flex gap-4 font-bold">
              <Button
                children="Hire Me"
                className="text-brand-primary bg-brand-white text-sm text-sm"
              />
              <Button
                children="View Works"
                className="text-brand-primary bg-brand-white text-sm"
              />
            </div>
          </div>
          <div className="bottom-12 absolute">
            <h3 className="text-sm">Follow me on</h3>
            <div className="flex gap-3 mt-3">
              <Button className="bg-brand-white text-brand-primary px-2 ">
                <BiBasketball size={20} />
              </Button>
              <Button className="bg-brand-white text-brand-primary px-2">
                <BiLogoInstagram size={20} />
              </Button>
              <Button className="bg-brand-white text-brand-primary px-2">
                <BiLogoFacebook size={20} />
              </Button>
              <Button className="bg-brand-white text-brand-primary px-2">
                <BiLogoWhatsapp size={20} />
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={"/images/perfil.png"}
          alt="Foto de perfil"
          width={870}
          height={974}
        />
      </div>
      <About/>
    </div>
  );
}
