"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
    <div className="h-[30rem] w-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      
    </div>
            <section className="more-clients !bg-[white] py-10" data-scroll-section>
            <div className="more-clients-h1 bg-white">
              <h1 className=" uppercase md:text-[3rem] text-[2.5rem]">We work with</h1>
            </div>
  
            <div className="flex md:flex-row flex-col w-[60%] m-auto bg-white">
              <div className="w-full flex flex-col items-center justify-center">
               <a target="_blank" href="https://casino-estoril.pt/pt/home"><p className=" underline relative top-10">CASINO ESCTORIL &#8599;</p></a>  
               <a target="_blank" href="https://casino-estoril.pt/pt/home"><img loading="lazy" className="w-[200px]" src="https://cdn.freebiesupply.com/logos/large/2x/casino-estoril-logo-png-transparent.png" alt="Casino Estoril Escola de Dança Eva Vieira De Aleida" /></a>
              </div>
              
              <div className="w-full flex flex-col items-center justify-center">
               <a target="_blank" href="https://www.joanavasconcelos.com/pt"><p className="underline relative uppercase pb-5">Joana Vasconcelos &#8599;</p></a>  
                <a target="_blank" href="https://www.joanavasconcelos.com/pt"><svg xmlns="http://www.w3.org/2000/svg" fill="#22222" viewBox="0 0 62 59" width="100px" height="100px"><g clip-path="url(#logo_symbol_a)"><path fill="var(--color-brand-neutral)" d="M25.23 24.96c4.27-4.33-1.77-10.2-1.77-10.2a8.6 8.6 0 1 1 14.7-6.1c0 2.35-.96 4.54-2.5 6.1 0 0-6.16 5.82-1.77 10.2 4.33 4.49 10.47-1.66 10.47-1.66a8.6 8.6 0 1 1 6.1 14.7 8.65 8.65 0 0 1-6.1-2.51s-5.98-6.1-10.31-1.71C29.5 38.2 35.7 44.09 35.7 44.09A8.6 8.6 0 1 1 21 50.2c0-2.35.97-4.55 2.52-6.1 0 0 6.14-5.82 1.76-10.2-4.33-4.5-10.47 1.65-10.47 1.65a8.56 8.56 0 0 1-6.1 2.51 8.6 8.6 0 1 1 6.04-14.7s5.99 6.05 10.48 1.61Z"></path><path stroke="var(--color-brand-neutral)" stroke-miterlimit="3.86" stroke-width=".09" d="M25.23 24.96c4.27-4.33-1.77-10.2-1.77-10.2a8.6 8.6 0 1 1 14.7-6.1c0 2.35-.96 4.54-2.5 6.1 0 0-6.16 5.82-1.77 10.2 4.33 4.49 10.47-1.66 10.47-1.66a8.6 8.6 0 1 1 6.1 14.7 8.65 8.65 0 0 1-6.1-2.51s-5.98-6.1-10.31-1.71C29.5 38.2 35.7 44.09 35.7 44.09A8.6 8.6 0 1 1 21 50.2c0-2.35.97-4.55 2.52-6.1 0 0 6.14-5.82 1.76-10.2-4.33-4.5-10.47 1.65-10.47 1.65a8.56 8.56 0 0 1-6.1 2.51 8.6 8.6 0 1 1 6.04-14.7s5.99 6.05 10.48 1.61Z"></path><path fill="#D31216" d="M43.3 29.45c0-3.85 3.15-7 7-7s7 3.15 7 7-3.15 7-7 7-7-3.15-7-7Z"></path><path fill="#F8E300" d="M22.55 8.66c0-3.85 3.16-7 7-7 3.85 0 7 3.15 7 7s-3.15 7-7 7a7 7 0 0 1-7-7Z"></path><path fill="#2D2775" d="M1.77 29.45a7.03 7.03 0 0 1 14.06 0 7.03 7.03 0 0 1-14.06 0Z"></path><path fill="#008737" d="M22.55 50.19c0-3.85 3.16-7 7-7 3.85 0 7 3.15 7 7s-3.15 7-7 7a7 7 0 0 1-7-7Z"></path></g><defs><clipPath id="logo_symbol_a"><path fill="#2D2775" d="M0 0h62v58.79H0z"></path></clipPath></defs></svg></a>
              </div>
              
        
            </div>
          </section>
          </>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
