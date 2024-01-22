import { useTheme } from '@/app/contexts/LanguageContexts';
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TextAnimation = () => {
    const themeCtx = useTheme();

    const [text] = useTypewriter({

        words: themeCtx?.theme === "Portuguese" ? 
        ['Programador', 'Contador', 'Analista de Dados'] : 
        ['Programmer', 'accountant', 'Data analyst'],

        loop: true,
        typeSpeed: 120,
        deleteSpeed: 40,
      })

  return (

        <h3 className="text-2xl py-2 md:text-3xl md:py-4 ">
            {themeCtx?.theme === "Portuguese" ? "Eu sou " : "I' am "}
            <span 
                className='
                    font-extrabold  
                    bg-clip-text 
                    text-transparent
                    bg-gradient-to-t
                    to-orange-500 
                    from-red-500 
                    inline
                '
             >
                {text}
            </span>
            <span 
                className='
                    font-extrabold  
                    bg-clip-text 
                    text-orange-600
                ' 
            >
                <Cursor cursorStyle="<" />
            </span>
        </h3>

  )
}

export default TextAnimation