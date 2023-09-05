import React, { FormEvent } from "react";
import { Font } from "../comuns/Font";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef, RefObject } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../comuns/Button";
import MoneyImage from "./MoneyImage";
import emailjs from "@emailjs/browser";

const Suport = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form: RefObject<HTMLFormElement> | null = useRef(null);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };

    console.log(data);
    setSubmitted(true);

    if (form?.current) {
      emailjs.sendForm('service_3uhfznm', 'template_xt5px0d', form.current, 'lL7REh5lAfss-DyFc')
      .then((result) => {
          console.log('mensavem enviada com sucesso');
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
        onSubmit={sendEmail}
        className="flex flex-col gap-2 py-2"
      >
        <div
          className="
              flex 
              flex-col 
              gap-2
              
            "
        >
          <label htmlFor="">Nome</label>

          <input
            autoComplete="off"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="
              bg-gray-600 
              placeholder:text-white 
                outline-none
                focus:ring
                focus:ring-orange-500
                rounded
                w-full
              "
            required
            placeholder=""
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">E-mail</label>
          <input
            autoComplete="off"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="
                bg-gray-600 
                placeholder:text-white 
                  outline-none
                  focus:ring
                  focus:ring-orange-500
                  rounded
                  w-full
                  "
            placeholder=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Deixe sua mensagem</label>
          <textarea
            autoComplete="off"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="
                bg-gray-600 
                placeholder:text-white 
                  outline-none
                  focus:ring
                  focus:ring-orange-500
                  rounded
                  w-full
                  h-20
                  flex
                  resize-none
                  "
            placeholder=""
          ></textarea>
        </div>

        <Button value="Send">Enviar</Button>
      </form>
    </motion.div>
  );
};

export default Suport;
