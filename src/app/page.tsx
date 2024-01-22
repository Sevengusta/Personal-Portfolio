"use client";
import { Header } from "@/app/Components/header/Header";
import { Home } from "@/app/Components/home/Home";
import { About } from "./Components/about/About";
import { Projects } from "./Components/projects/Projects";
import { Footer } from "./Components/footer/Footer";
import Contact from "./Components/contact/Contact";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./contexts/LanguageContexts";

const Page = () => {
  return (
    <ThemeProvider>
      <header className="bg-gray-800">
        <Header />
      </header>
      <section className="bg-gray-600 pt-16 xl:pt-0">
        <Home />
      </section>
      <section className="bg-gray-800">
        <About />
      </section>
      <section className="bg-gray-600">
        <Projects />
      </section>
      <section className="bg-gray-800">
        <Contact />
      </section>
      <section className="bg-gray-600">
        <Footer />
        <Toaster position="bottom-right" />
      </section>
    </ThemeProvider>
  );
};

export default Page;
