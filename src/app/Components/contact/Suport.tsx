import React, { FormEvent } from "react";
import { Font } from "../comuns/Font";
import { zodResolver} from '@hookform/resolvers/zod';
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef, RefObject } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../comuns/Button";
import MoneyImage from "./MoneyImage";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ThemeContext, useTheme } from "@/app/contexts/LanguageContexts";
import {z} from 'zod'

const Suport = () => {
  const themeCtx = useTheme()
  const SendMailFormSchema = z.object({
      name: z
        .string()
        .trim()
        .min(2, themeCtx?.theme === 'Portuguese' ? 'O nome precisa conter pelo menos 2 caracteres' : 'JAPA')
        .max(20, 'O máximo de caracteres suportado pelo nome são 20')
        ,
      email: z
        .string()
        .email('Utilize um formato de email válido: exemplo@gmail.com')
        ,
      message: z
        .string()
        .trim()
        .min(3, 'A mensagem precisa conter pelo menos 3 caracteres')
        ,
    })




  
  const [isSubmitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(SendMailFormSchema)
  })
  const form: RefObject<HTMLFormElement> | null = useRef(null);
  
  function showToast(message : string) {
    toast((t) => (
      <span className="flex items-center">
        {message}
        <button onClick={() => toast.dismiss(t.id)}>❌</button>
      </span>
    ));
  }

  const tostar = () => {
    
    if (errors.name) {
      showToast(errors.name?.message as string);
    }
  
    if (errors.email) {
      showToast(errors.email?.message as string);
    }
  
    if (errors.message) {
      showToast(errors.message?.message as string );
    }
  }

  function handleSendMailForm() {
    setSubmitted(true);

    if (form?.current) {
      emailjs.sendForm('service_3uhfznm', 'template_xt5px0d', form.current, 'lL7REh5lAfss-DyFc')
      .then((result) => {
          console.log('mensagem enviada com sucesso');
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  const { ref, inView } = useInView({ threshold: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    inView ? mainControls.start("visible") : mainControls.start("hidden");
    
  }, [mainControls, inView, tostar ]);

  return isSubmitted ? (
    <div ref={ref}>
      <motion.div
        animate={mainControls}
        className="col-span-2 flex flex-col"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 75, y: 0 },
        }}
        
        initial="hidden"
      >
        <div
          className="
            text-lg 
            sm:text-xl
            text-center 
            md:text-2xl
          "
        >
          {themeCtx?.theme === "Portuguese" && <Font>Sua mensagem foi enviada com sucesso</Font>}
          {themeCtx?.theme === "English" && <Font>Your message was sent succefully</Font>}
        </div>
        <MoneyImage />
        {themeCtx?.theme === "Portuguese" &&
        <Button backForm={() => setSubmitted(false)}>
          Clique para enviar outra mensagem
        </Button>}

        {themeCtx?.theme === "English" &&
        <Button backForm={() => setSubmitted(false)}>
          Click to send other message
        </Button>}
      </motion.div>
    </div>
  ) : (
    <motion.div className="col-span-2">
      <div
        className="
            text-lg 
            sm:text-xl
            text-center 
            md:text-2xl
          "
      >
        {themeCtx?.theme === "Portuguese" && <Font>Fale comigo; responderei o mais rápido possível</Font>}
        {themeCtx?.theme === "English" && <Font>Talk to me; I'll answer as soon as possible</Font>}
        
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit(handleSendMailForm)}
        className="flex flex-col gap-2 py-2"
      >
        <div
          className="
              mt-5
              w-full
              items-center
            "
        >
          <div className="relative ">
            <input
              autoComplete="off"
              {...register('name')}
              type="text"
              className="
                peer
                w-full
                bg-gray-600 
                placeholder:text-white 
                text-orange-500
                border-b-2
                focus:outline-none
                focus:border-b-2 
                focus:border-orange-500
                transition-colors
                duration-500
                placeholder-transparent
                "
                placeholder=""
            />
            <label 
              className="
                pl-1
                absolute 
                left-0 
                -top-6
                text-sm 
                transition-all
                text-white
                peer-placeholder-shown:text-white
                peer-placeholder-shown:top-0
                peer-placeholder-shown:text-base
                peer-focus:text-top 
                peer-focus:-top-6
                peer-focus:text-orange-500
                peer-focus:text-sm
              ">
                {themeCtx?.theme === "Portuguese" && 'Nome'}
                {themeCtx?.theme === "English" && 'Name'}
            </label>
          </div>
        </div>


        <div className="
         mt-5
         w-full
         items-center
        ">
          <div className="relative">
          <input
            autoComplete="off"
            {...register('email')}
            type="text"
            className="
              peer
              w-full
              bg-gray-600 
              placeholder:text-white 
              text-orange-500
              border-b-2
              focus:outline-none
              focus:border-b-2 
              focus:border-orange-500
              transition-colors
              duration-500
              placeholder-transparent
            "
            placeholder=""
          />

          <label 
            className="
              pl-1
              absolute 
              left-0 
              -top-6
              text-sm 
              transition-all
              text-white
              peer-placeholder-shown:text-white
              peer-placeholder-shown:top-0
              peer-placeholder-shown:text-base
              peer-focus:text-top 
              peer-focus:-top-6
              peer-focus:text-orange-500
              peer-focus:text-sm
            "
            >
            E-mail
            </label>

          </div>
          
        </div>
        <div className="
          mt-5
          w-full
          items-center
        ">
          <div className="relative ">
            <textarea
              autoComplete="off"
              {...register('message')}
              className="
                peer
                w-full
                bg-gray-600 
                placeholder:text-white 
                text-orange-500
                border-b-2
                focus:outline-none
                focus:border-b-2 
                focus:border-orange-500
                transition-colors
                duration-500
                placeholder-transparent
                resize-none
              "
              placeholder=""
            >

            </textarea>

            <label className="
              pl-1
              absolute 
              left-0 
              -top-6
              text-sm 
              transition-all
              text-white
              peer-placeholder-shown:text-white
              peer-placeholder-shown:top-0
              peer-placeholder-shown:text-base
              peer-focus:text-top 
              peer-focus:-top-6
              peer-focus:text-orange-500
              peer-focus:text-sm
            ">
              {themeCtx?.theme === "Portuguese" && 'Deixe uma mensagem'}
              {themeCtx?.theme === "English" && 'Send a message'}
              
            </label>
          </div>
        </div>
        {themeCtx?.theme === "Portuguese" && <Button backForm={() => tostar()} value="Send">Enviar</Button>}
        {themeCtx?.theme === "English" && <Button backForm={() => tostar()} value="Send">Send</Button>}
        
      </form>
    </motion.div>
  );
};

export default Suport
