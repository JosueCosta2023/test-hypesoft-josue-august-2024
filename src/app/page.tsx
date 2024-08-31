import About from "@/_components/about";
import Button from "@/_components/buttons";
import Header from "@/_components/header";
import Image from "next/image";
import Service from "@/_components/service";
import ServiceWork from "@/_components/service-work";
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
                className="text-brand-primary bg-brand-white text-sm hover:text-brand-white hover:bg-brand-sec"
              />
              <Button
                children="View Works"
                className="text-brand-primary bg-brand-white text-sm hover:text-brand-white hover:bg-brand-sec"
              />
            </div>
          </div>
          <div className="bottom-12 absolute">
            <h3 className="text-sm">Follow me on</h3>
            <div className="flex gap-3 mt-3">
              <Button className="bg-brand-white text-brand-primary px-2 hover:text-brand-white hover:bg-brand-sec ">
                <BiBasketball size={20} />
              </Button>
              <Button className="bg-brand-white text-brand-primary px-2 hover:text-brand-white hover:bg-brand-sec">
                <BiLogoInstagram size={20} />
              </Button>
              <Button className="bg-brand-white text-brand-primary px-2 hover:text-brand-white hover:bg-brand-sec">
                <BiLogoFacebook size={20} />
              </Button>
              <Button className="bg-brand-white text-brand-primary px-2 hover:text-brand-white hover:bg-brand-sec">
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

      <About />

      <section
        id="service"
        className="mx-auto flex flex-col  items-center w-[1320px] max-w-[90%] h-[615px]  "
      >
        <div className="flex flex-col items-center mb-[50px]">
          <h2 className="text-[40px]">My Service</h2>
          <span className="w-[80px] h-[3px] bg-brand-secondary"></span>
        </div>
        <div className="h-[350px] w-full flex gap-6 justify-center">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </section>

      <section
        id="project"
        className="mx-auto flex flex-col  items-center w-[1320px] max-w-[90%] h-[615px]  "
      >
        <div className="flex flex-col items-center mb-[50px]">
          <h2 className="text-[40px]">My Selected Work</h2>
          <span className="w-[80px] h-[3px] bg-brand-secondary"></span>
        </div>
        <div className="h-[350px]  w-full justify-center grid grid-cols-1 
        sm:grid-cols-2  lg:grid-cols-3 gap-6">
            <ServiceWork />
            <ServiceWork />
            <ServiceWork />
            <ServiceWork />
            <ServiceWork />
            <ServiceWork />         
        </div>
      </section>
    </div>
  );
}
