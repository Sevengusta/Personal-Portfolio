"use client"

import { Header } from "@/app/Components/header/Header";
import { Home } from "@/app/Components/home/Home";
import { About } from "./Components/about/About";
import { Projects } from "./Components/projects/Projects";
const Page = () => {
  
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>

    </>
    
  )}

export default Page;