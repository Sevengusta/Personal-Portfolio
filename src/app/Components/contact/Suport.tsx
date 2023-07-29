"use client"
import React, { FormEvent } from "react";
import { Font } from "../comuns/Font";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Target, motion, useAnimation } from "framer-motion";
import Button from "../comuns/Button";
import { useForm } from "react-hook-form";
import MoneyImage from "./MoneyImage";

const Suport = () => {
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    }

    try {
      const res = await fetch("/api/contact", {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("HTTP error! status:" + res.status );
      }
      setSubmitted(true)
      const responseData = await res.json();

    } catch (error: any ) {
      console.log("ocorreu um erro na requisição" + error.message);
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animationRight = useAnimation();
  useEffect(() => {
    if (inView) {
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animationRight.start({ x: "100vw" });
    }
  }, [inView, animationRight]);




  return isSubmitted ? (
    <div className="col-span-2 flex flex-col">
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
        <Button backForm={() => setSubmitted(false)}>Clique para enviar outra mensagem</Button>
    </div>

  ) : (

    <div className="col-span-2">
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
      <form onSubmit={onSubmit} action="" className="flex flex-col gap-2 py-2">
        <div
          className="
            flex 
            flex-col 
            gap-2
            
          "
        >
          <label htmlFor="">Nome</label>

          <input
            value={name}
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
            value={email}
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
            value={message}
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

        <Button>Enviar</Button>
      </form>
    </div>
  )
}

export default Suport;
