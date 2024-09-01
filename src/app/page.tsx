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
import CompanyLogo from "@/_components/company-logo";
import { BsArrowRight } from "react-icons/bs";
import { MailIcon, MapIcon, MapPin, Phone, StarIcon } from "lucide-react";
import CommentUser from "@/_components/comment-user";
import Formulario from "@/_components/forms";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative ">
      <div className="absolute bg-brand-sec w-[40%] h-[1080px] right-0 top-0 z-[-1]"></div>
      <Header />

      <div className="mx-auto flex justify-between w-[1320px] max-w-[100%] h-[974px]  mt-3">
        <div className="relative">
          <div className="absolute mt-60 w-[758px]">
            <h2 className="text-7xl mb-3 text-brand-white">
              Hello, I'm John, a
            </h2>
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
          <h2 className="text-[40px] text-brand-white">My Service</h2>
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
        className="mx-auto flex flex-col  items-center w-[1320px] max-w-[90%] mb-20"
      >
        <div className="flex flex-col items-center mb-[50px]">
          <h2 className="text-[40px] text-brand-white">My Selected Work</h2>
          <span className="w-[80px] h-[3px] bg-brand-secondary"></span>
        </div>
        <div
          className="w-full justify-center grid grid-cols-1 
        sm:grid-cols-2  lg:grid-cols-3 gap-6"
        >
          <ServiceWork />
          <ServiceWork />
          <ServiceWork />
          <ServiceWork />
          <ServiceWork />
          <ServiceWork />
        </div>
      </section>

      <section className="mx-auto flex  items-center justify-center w-[1320px] max-w-[90%] h-[320px]">
        <CompanyLogo />
      </section>

      <section className="mx-auto flex flex-col  items-center w-[1320px] max-w-[90%] h-[312px] mb-[180px] bg-[url('/images/shapes.svg')] justify-center">
        <h3 className="text-brand-white text-[32px] text-center">
          Got a project in mind? Let's make <br /> something awesome{" "}
          <span className="text-brand-secondary">together</span>.
        </h3>
        <Button className="bg-brand-white text-brand-sec mt-8 hover:text-brand-white hover:bg-brand-sec">
          Hire me
          <BsArrowRight size={18} />
        </Button>
      </section>

      <section className="mx-auto flex flex-col  items-center w-[1320px] max-w-[90%] h-[528px] mb-32 ">
        <div className="flex flex-col items-center mb-[30px]">
          <h2 className="text-[40px] text-brand-white">Testimonial</h2>
          <span className="w-[80px] h-[3px] bg-brand-secondary"></span>
        </div>

        <div className="w-full flex justify-between h-[411px]">
          <div className="flex flex-col h-[100%] justify-between w-[312px]">
            <div className="w-full h-[100px] bg-brand-white p-6 rounded-sm">
              <CommentUser />
            </div>
            <div className="w-full h-[100px] bg-brand-white p-6 rounded-sm">
              <CommentUser />
            </div>
            <div className="w-full h-[100px] bg-brand-white p-6 rounded-sm">
              <CommentUser />
            </div>
            <div className="w-full h-[100px] bg-brand-white p-6 rounded-sm">
              <CommentUser />
            </div>
          </div>
          <div className="h-[100%] max-w-[100%] w-[983px] relative">
            <div className="absolute z-30 right-6 top-6 flex gap-3">
              <Image src="/images/vector.svg" alt="" width={40} height={75} />
              <Image src="/images/vector.svg" alt="" width={40} height={75} />
            </div>

            <div className="w-[100%] h-[100%] bg-brand-white border-l-[30px] border-l-brand-primary py-[50px] px-16">
              <div className="flex gap-2 items-center mb-6">
                <StarIcon size={20} className="text-amber-300" fill="yellow" />
                <h3 className="text-[18px] text-brand-primary">
                  5.0 Star Rating
                </h3>
              </div>
              <p className="text-[32px]">
                “If you're looking for someone who will challenge your UX/UI
                thinking and really cut to the core of what's important for
                users, then Jesse is your man. On top of that, he brings a level
                of enthusiasm to the craft that's energizing for everyone who
                works with him.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto flex  items-center w-[1320px] max-w-[90%] h-[744px] mt-32 justify-between flex-wrap"
      >
        <div className="p-[48px] w-[760px] h-[536px] bg-brand-white rounded-md">
          <Formulario />
        </div>
        <div className="w-[536px] min-w-[536px] h-[536px] bg-brand-white rounded-md p-[48px]">
          <div className="flex flex-col space-y-6">
            <h3 className="text-[32px] font-bold">Get In Touch</h3>
            <div className="flex gap-5 items-center">
              <div className="w-[80px] h-[80px] flex justify-center items-center rounded-[50%] bg-brand-sec bg-opacity-10">
                <MapPin size={32} className="text-brand-secondary" />
              </div>
              <div className="w-[340px]">
                <p className="text-lg">
                  House #5, Street Number #98, brasilia- 70000-000, Brazil.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-[80px] h-[80px] flex justify-center items-center rounded-[50%] bg-brand-sec bg-opacity-10">
                <MailIcon size={32} className="text-brand-secondary" />
              </div>
              <div className="w-[340px]">
                <p className="text-lg">albert.design@gmail.com</p>
                <p className="text-lg">albert.flores@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-[80px] h-[80px] flex justify-center items-center rounded-[50%] bg-brand-sec bg-opacity-10">
                <Phone size={32} className="text-brand-secondary" />
              </div>
              <div className="w-[340px]">
                <p className="text-lg">+55 955 258 2699</p>
                <p className="text-lg">+55 955 100 9449</p>
              </div>
            </div>
            <ul className="flex gap-5 items-center">
              <li className="w-[60px] h-[60px] rounded-full border-brand-gray100 border-[1px] flex items-center justify-center hover:bg-brand-sec hover:text-brand-white cursor-pointer">
                <FaFacebook size={20} />
              </li>
              <li className="w-[60px] h-[60px] rounded-full border-brand-gray100 border-[1px] flex items-center justify-center hover:bg-brand-sec hover:text-brand-white cursor-pointer">
                <FaInstagram size={20} />
              </li>
              <li className="w-[60px] h-[60px] rounded-full border-brand-gray100 border-[1px] flex items-center justify-center hover:bg-brand-sec hover:text-brand-white cursor-pointer">
                <FaTelegram size={20} />
              </li>
              <li className="w-[60px] h-[60px] rounded-full border-brand-gray100 border-[1px] flex items-center justify-center hover:bg-brand-sec hover:text-brand-white cursor-pointer">
                <FaWhatsapp size={20} />
              </li>
              <li className="w-[60px] h-[60px] rounded-full border-brand-gray100 border-[1px] flex items-center justify-center hover:bg-brand-sec hover:text-brand-white cursor-pointer">
                <FaBluesky size={20} />
              </li>
              <li className="w-[60px] h-[60px] rounded-full border-brand-gray100 border-[1px] flex items-center justify-center hover:bg-brand-sec hover:text-brand-white cursor-pointer">
                <FaLinkedin size={20} />
              </li>
            </ul>
          </div>
        </div>

        <div className=" absolute z-40 right-[-65px] top-[75px] w-[152px] h-[68px] bg-[url('/images/Dot.svg')] bg-cover bg-center"></div>
      </section>

      <footer className="flex justify-center items-center mt-[53px] mb-[216px]">
        <Image src="/images/logo.png" width={263} height={59} alt="logo"/>
      </footer>
    </div>
  );
}
