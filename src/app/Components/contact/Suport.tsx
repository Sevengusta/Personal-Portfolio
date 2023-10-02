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
import { SendMailFormSchema } from "@/app/schemas/formSchema";
import toast from "react-hot-toast";
import { useToaster } from 'react-hot-toast/headless'


const Suport = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(SendMailFormSchema)
  })
  const form: RefObject<HTMLFormElement> | null = useRef(null);
  const handleButtonClick = () => {
    toast.success('Button clicked!'); // You can customize the notification message and style here
  };

  

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
  }, [mainControls, inView]);
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
          <Font>Sua mensagem foi enviada com sucesso</Font>
        </div>
        <MoneyImage />
        <Button backForm={() => setSubmitted(false)}>
          Clique para enviar outra mensagem
        </Button>
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
        <Font>Fale comigo, responderei o mais rápido possível</Font>
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
                Nome
            </label>
            {errors.name && <p>  {errors.name.message as string }</p>}
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
            {errors.email && <p> {errors.email.message as string}</p>}

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
            ></textarea>
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
            ">Deixe sua mensagem</label>
            {errors.message && <p> {errors.message.message as string}</p>}
          </div>
        </div>

        <Button value="Send">Enviar</Button>
      </form>
    </motion.div>
  );
};

export default Suport;
