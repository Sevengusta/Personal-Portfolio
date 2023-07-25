"use client";
import { Header } from "@/app/Components/header/Header";
import { Home } from "@/app/Components/home/Home";
import { About } from "./Components/about/About";
import { Projects } from "./Components/projects/Projects";
import { Footer } from "./Components/footer/Footer";
import Contact from "./Components/contact/Contact";
const Page = () => {
  return (
    <>
      <header >
          <Header />
      </header>
      <section >
        <Home />
      </section>
      <section >
        <About />
      </section>
      <section >
        <Projects />
      </section>
      <section >
        <Contact />
      </section>
      <section >
        <Footer />
      </section>
    </>
  );
};

export default Page;
