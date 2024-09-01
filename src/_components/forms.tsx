"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./buttons";
import { SendIcon } from "lucide-react";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    reset();
    // Atualizar o estado para exibir a mensagem de confirmação
    setIsSubmitted(true);

    // Reiniciar o estado após alguns segundos
    setTimeout(() => setIsSubmitted(false), 3000); // A mensagem será exibida por 3 segundos
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 relative"
      >
        <h2 className="text-[32px] text-brand-primary mb-6">
          Let me Know here.
        </h2>

        <div className="flex gap-3 w-full text-lg flex-col lg:flex-row">
          <div className="relative w-full">
            <input
              className="border-[1px] border-brand-gray100 rounded-sm px-2 w-full h-[40px]"
              placeholder="Full Name"
              id="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="absolute bottom-1 right-4 text-[12px] text-red-500">
                Este campo é obrigatório
              </span>
            )}
          </div>

          <div className="relative w-full">
            <input
              className="border-[1px] border-brand-gray100 rounded-sm px-2 w-full h-[40px]"
              placeholder="E-Mail Address"
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors?.email && (
              <span className="absolute text-red-500 bottom-1 right-4 text-[12px]">
                Este campo é obrigatório
              </span>
            )}
          </div>
        </div>

        <div className="relative text-lg">
          <input
            id="subject"
            className="border-[1px] border-brand-gray100 rounded-sm px-2 w-full h-[40px]"
            placeholder="Subjects"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <span className="absolute text-red-500 bottom-1 right-4 text-[12px]">
              Este campo é obrigatório
            </span>
          )}
        </div>

        <div className="relative text-lg">
          <textarea
            id="message"
            className="border-[1px] border-brand-gray100 rounded-sm px-2 py-2 w-full h-[152px] resize-none"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="absolute text-red-500 bottom-4 right-4 text-[12px]">
              Este campo é obrigatório
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="bg-brand-sec flex items-center gap-3 px-8 py-4 text-brand-white uppercase font-bold hover:bg-opacity-35 hover:text-brand-sec"
        >
          send message
          <SendIcon size={20} />
        </Button>
        {isSubmitted && (
          <div className="absolute top-[-100px] left-[300px] p-4 w-full bg-green-100 text-green-800 border border-green-300 rounded-md">
            Your message has been sent successfully!
          </div>
        )}
      </form>
    </>
  );
};

export default Formulario;
