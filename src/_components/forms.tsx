"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./buttons";
import { SendIcon } from "lucide-react";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string
}

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="min-w-[564px] space-y-4">
        <h2 className="text-[32px] text-brand-primary mb-6">Let me Know here.</h2>

        <div className="flex gap-3 w-full text-lg">
          <div className="relative w-full">
            <input
            className="border-[1px] border-brand-gray100 rounded-sm px-2 w-full h-[40px]"
            placeholder="Full Name"
              id="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span className="absolute bottom-1 right-4 text-[12px] text-red-500">Este campo é obrigatório</span>}
          </div>

          <div className="relative w-full">
            <input
              className="border-[1px] border-brand-gray100 rounded-sm px-2 w-full h-[40px]"
              placeholder="E-Mail Address"
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors?.email && <span className="absolute text-red-500 bottom-1 right-4 text-[12px]">Este campo é obrigatório</span>}
          </div>
        </div>

        <div className="relative text-lg">
          <input
            id="subject"
            className="border-[1px] border-brand-gray100 rounded-sm px-2 w-full h-[40px]"
            placeholder="Subjects"
            {...register("subject", { required: true })}
          />
          {errors.subject && <span className="absolute text-red-500 bottom-1 right-4 text-[12px]">Este campo é obrigatório</span>}
        </div>

        <div className="relative text-lg">
          <textarea
            id="message"
            className="border-[1px] border-brand-gray100 rounded-sm px-2 py-2 w-full h-[152px] resize-none"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          {errors.message && <span className="absolute text-red-500 bottom-4 right-4 text-[12px]">Este campo é obrigatório</span>}
        </div>

        <Button type="submit" className="bg-brand-sec flex items-center gap-3 px-8 py-4 text-brand-white uppercase font-bold hover:bg-opacity-35 hover:text-brand-sec">
            send message
            <SendIcon size={20}/>
        </Button>
      </form>
    </>
  );
};

export default Formulario;
