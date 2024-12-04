"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Aos from "aos"
import"aos/dist/aos.css";
import {useEffect} from "react"
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(()=>{
    Aos.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror:true,
      anchorPlacement: "bottom-bottom",
      offset:160,
        });
        Aos.refresh();

  },[]);
  return (
    <main>
      <Hero />
      <Contact/>
      <About/>
      <Projects/>
      <Footer/>
      
    </main>
  );
}
       
        