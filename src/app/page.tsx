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
      <header className="bg-gray-800" >
        <Header />
      </header>
      <section className="bg-slate-700" >
        <Home />
      </section >
      <section className="bg-gray-800"  >
        <About />
      </section>
      <section className="bg-slate-700"  >
        <Projects />
      </section>
      <section className="bg-gray-800"  >
        <Contact />
      </section>
      <section className="bg-slate-700" >
        <Footer />
      </section>
    </>
  );
};

export default Page;
