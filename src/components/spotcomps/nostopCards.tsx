"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
    <section className="h-[50rem] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px] w-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <h1 className=" text-3xl font-regular py-20  md:text-[3rem] text-[2.5rem] text-center leading-none uppercase">Whats People <br /> think about us</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      
    </section>
            <section className="more-clients !bg-[white] py-10 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px]" data-scroll-section>
            <div className="more-clients-h1 bg-white">
              <h1 className=" uppercase md:text-[3rem] text-[2.5rem] font-regular">We work with</h1>
            </div>
  
            <div className="flex xl:flex-row flex-col w-[70%] max-w-[80%] m-auto bg-white">
              <div className="w-full flex flex-col items-center justify-center">
               <a target="_blank" href="https://casino-estoril.pt/pt/home"><p className=" underline relative top-10">CASINO ESCTORIL &#8599;</p></a>  
               <a target="_blank" href="https://casino-estoril.pt/pt/home"><img loading="lazy" className="w-[200px]" src="https://cdn.freebiesupply.com/logos/large/2x/casino-estoril-logo-png-transparent.png" alt="Casino Estoril Escola de Dança Eva Vieira De Aleida" /></a>
            </div>
              
            <div className="w-full flex flex-col items-center justify-center">
              <a target="_blank" href="https://www.joanavasconcelos.com/pt"><p className="underline relative uppercase pb-5">Joana Vasconcelos &#8599;</p></a>  
              <a target="_blank" href="https://www.joanavasconcelos.com/pt"><svg xmlns="http://www.w3.org/2000/svg" fill="#22222" viewBox="0 0 62 59" width="100px" height="100px"><g clipPath="url(#logo_symbol_a)"><path fill="var(--color-brand-neutral)" d="M25.23 24.96c4.27-4.33-1.77-10.2-1.77-10.2a8.6 8.6 0 1 1 14.7-6.1c0 2.35-.96 4.54-2.5 6.1 0 0-6.16 5.82-1.77 10.2 4.33 4.49 10.47-1.66 10.47-1.66a8.6 8.6 0 1 1 6.1 14.7 8.65 8.65 0 0 1-6.1-2.51s-5.98-6.1-10.31-1.71C29.5 38.2 35.7 44.09 35.7 44.09A8.6 8.6 0 1 1 21 50.2c0-2.35.97-4.55 2.52-6.1 0 0 6.14-5.82 1.76-10.2-4.33-4.5-10.47 1.65-10.47 1.65a8.56 8.56 0 0 1-6.1 2.51 8.6 8.6 0 1 1 6.04-14.7s5.99 6.05 10.48 1.61Z"></path><path stroke="var(--color-brand-neutral)" stroke-miterlimit="3.86" stroke-width=".09" d="M25.23 24.96c4.27-4.33-1.77-10.2-1.77-10.2a8.6 8.6 0 1 1 14.7-6.1c0 2.35-.96 4.54-2.5 6.1 0 0-6.16 5.82-1.77 10.2 4.33 4.49 10.47-1.66 10.47-1.66a8.6 8.6 0 1 1 6.1 14.7 8.65 8.65 0 0 1-6.1-2.51s-5.98-6.1-10.31-1.71C29.5 38.2 35.7 44.09 35.7 44.09A8.6 8.6 0 1 1 21 50.2c0-2.35.97-4.55 2.52-6.1 0 0 6.14-5.82 1.76-10.2-4.33-4.5-10.47 1.65-10.47 1.65a8.56 8.56 0 0 1-6.1 2.51 8.6 8.6 0 1 1 6.04-14.7s5.99 6.05 10.48 1.61Z"></path><path fill="#D31216" d="M43.3 29.45c0-3.85 3.15-7 7-7s7 3.15 7 7-3.15 7-7 7-7-3.15-7-7Z"></path><path fill="#F8E300" d="M22.55 8.66c0-3.85 3.16-7 7-7 3.85 0 7 3.15 7 7s-3.15 7-7 7a7 7 0 0 1-7-7Z"></path><path fill="#2D2775" d="M1.77 29.45a7.03 7.03 0 0 1 14.06 0 7.03 7.03 0 0 1-14.06 0Z"></path><path fill="#008737" d="M22.55 50.19c0-3.85 3.16-7 7-7 3.85 0 7 3.15 7 7s-3.15 7-7 7a7 7 0 0 1-7-7Z"></path></g><defs><clipPath id="logo_symbol_a"><path fill="#2D2775" d="M0 0h62v58.79H0z"></path></clipPath></defs></svg></a>
            </div>
            
            <div className="w-full flex flex-col items-center justify-center">
               <a target="_blank" href="https://terzihan.com/"><p className=" underline uppercase relative top-10"> Terzihan &#8599;</p></a>  
               <a target="_blank" href="https://terzihan.com/"><img loading="lazy" className="w-[200px] py-10"  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/jhslft6l6wb8ieriukkb" alt="Casino Estoril Escola de Dança Eva Vieira De Aleida" /></a>
            </div>
        
            <div className="w-full flex flex-col items-center justify-center">
               <a target="_blank" href="https://terzihan.com/"><p className=" underline relative top-10">Axis Clinic &#8599;</p></a>  
               <a target="_blank" href="https://terzihan.com/"><img loading="lazy" className="w-[200px] py-10"  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/zrnfcv55g06akrc3lxpp" alt="Casino Estoril Escola de Dança Eva Vieira De Aleida" /></a>
            </div>
            </div>
          </section>
          </>
  );
}

const testimonials = [
  {
    quote:
      "A escola de dança Eva Vieira de Almeida representa para a Mixiu um lugar de inspiração, crescimento e realização artística, onde a paixão pela dança se transforma em disciplina, amizade e expressão pessoa.",
    name: "Mãe da Mixiu",
    title: "Mãe da aluna",
  },
  {
    quote:
      "Para nós, pais, a Escola Eva Vieira de Almeida representa Disciplina, Amor e Responsabilidade. A Escola transmite valores de amizade, respeito e trabalho em equipa que para nós são muito importantes no crescimento da nossa filha.",
    name: "Ana Sílvia Santos",
    title: "Mãe da aluna",
  },
  {
    quote: "Nice atmosphere, strong discipline,  good community for kids, where they can find friends, train their bodies and sensation. Daniela 💗 one love 🙂",
    name: "No Name!",
    title: "Mãe da aluna",
  },
  {
    quote:
      "A Escola Eva Vieira representa para mim e para a minha filha Sofia um oportunidade para crescer e expressar através da dança a criatividade. ",
    name: "Adélcia Monteiro",
    title: "Mãe da aluna",
  },
  {
    quote:
      "Uma escola, que é Casa. Uma escola que dá amor, cuida e educa para que os nossos filhos sejam boas pessoas.",
    name: "Aua Dias",
    title: "Mãe da aluna",
  },

  {
    quote:
      "Uma escola, que é Casa. Uma escola que dá amor, cuida e educa para que os nossos filhos sejam boas pessoas.",
    name: "Patricia Pacheco",
    title: "Mãe da aluna",
  },
  {
    quote:
      "We really appreciate the warmth and dedicated approach of the teachers, and the overall atmosphere of the school is wonderful.",
    name: "Daria Ryndina",
    title: "Mãe da aluna",
  },
  {
    quote:
      "Para a Valentina, a escola de dança significa felicidade, liberdade, esforço e conquista. É um lugar onde a música entra no coração e faz o corpo contar uma história. 🩷",
    name: "Cláudia Gigante de Figueiredo",
    title: "Mãe da aluna",
  },
  {
    quote:
      "A Escola de Dança Edva é superação, onde cada passo é uma oportunidade de transformação e crescimento.",
    name: "Andreia Leitão",
    title: "Mãe da aluna",
  },
];





