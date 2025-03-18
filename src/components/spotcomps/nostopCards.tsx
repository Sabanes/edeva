"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
    <section className="h-[50rem] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px] w-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <h1 className=" text-3xl font-regular py-20  md:text-[3rem] text-[2.5rem] text-center leading-none uppercase">What Parents and <br /> Students Say About Us</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      
    </section>
    <section className="partners-section bg-white py-16 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px]" data-scroll-section>
      <div className="text-center mb-16">
        <h2 className="uppercase text-5xl md:text-7xl font-thin tracking-wider">We work with</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {/* Casino Estoril */}
        <div className="partner-card group">
          <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-lg rounded-lg">
            <div className="h-32 flex items-center justify-center mb-6 relative overflow-hidden">
              <img 
                loading="lazy" 
                className="w-[160px] transition-transform duration-500 " 
                src="https://cdn.freebiesupply.com/logos/large/2x/casino-estoril-logo-png-transparent.png" 
                alt="Casino Estoril" 
              />
            </div>
            <a 
              href="https://casino-estoril.pt/pt/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              CASINO ESTORIL
              <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Joana Vasconcelos */}
        <div className="partner-card group">
          <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-lg rounded-lg">
            <div className="h-32 flex items-center justify-center mb-6 relative overflow-hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#222222" 
                viewBox="0 0 62 59" 
                className="w-24 h-24 transition-transform duration-500 "
              >
                <g clipPath="url(#logo_symbol_a)">
                  <path fill="var(--color-brand-neutral)" d="M25.23 24.96c4.27-4.33-1.77-10.2-1.77-10.2a8.6 8.6 0 1 1 14.7-6.1c0 2.35-.96 4.54-2.5 6.1 0 0-6.16 5.82-1.77 10.2 4.33 4.49 10.47-1.66 10.47-1.66a8.6 8.6 0 1 1 6.1 14.7 8.65 8.65 0 0 1-6.1-2.51s-5.98-6.1-10.31-1.71C29.5 38.2 35.7 44.09 35.7 44.09A8.6 8.6 0 1 1 21 50.2c0-2.35.97-4.55 2.52-6.1 0 0 6.14-5.82 1.76-10.2-4.33-4.5-10.47 1.65-10.47 1.65a8.56 8.56 0 0 1-6.1 2.51 8.6 8.6 0 1 1 6.04-14.7s5.99 6.05 10.48 1.61Z"></path>
                  <path stroke="var(--color-brand-neutral)" stroke-miterlimit="3.86" stroke-width=".09" d="M25.23 24.96c4.27-4.33-1.77-10.2-1.77-10.2a8.6 8.6 0 1 1 14.7-6.1c0 2.35-.96 4.54-2.5 6.1 0 0-6.16 5.82-1.77 10.2 4.33 4.49 10.47-1.66 10.47-1.66a8.6 8.6 0 1 1 6.1 14.7 8.65 8.65 0 0 1-6.1-2.51s-5.98-6.1-10.31-1.71C29.5 38.2 35.7 44.09 35.7 44.09A8.6 8.6 0 1 1 21 50.2c0-2.35.97-4.55 2.52-6.1 0 0 6.14-5.82 1.76-10.2-4.33-4.5-10.47 1.65-10.47 1.65a8.56 8.56 0 0 1-6.1 2.51 8.6 8.6 0 1 1 6.04-14.7s5.99 6.05 10.48 1.61Z"></path>
                  <path fill="#D31216" d="M43.3 29.45c0-3.85 3.15-7 7-7s7 3.15 7 7-3.15 7-7 7-7-3.15-7-7Z"></path>
                  <path fill="#F8E300" d="M22.55 8.66c0-3.85 3.16-7 7-7 3.85 0 7 3.15 7 7s-3.15 7-7 7a7 7 0 0 1-7-7Z"></path>
                  <path fill="#2D2775" d="M1.77 29.45a7.03 7.03 0 0 1 14.06 0 7.03 7.03 0 0 1-14.06 0Z"></path>
                  <path fill="#008737" d="M22.55 50.19c0-3.85 3.16-7 7-7 3.85 0 7 3.15 7 7s-3.15 7-7 7a7 7 0 0 1-7-7Z"></path>
                </g>
                <defs>
                  <clipPath id="logo_symbol_a">
                    <path fill="#2D2775" d="M0 0h62v58.79H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <a 
              href="https://www.joanavasconcelos.com/pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              JOANA VASCONCELOS
              <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Terzihan */}
        <div className="partner-card group">
          <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-lg rounded-lg">
            <div className="h-32 flex items-center justify-center mb-6 relative overflow-hidden">
              <img 
                loading="lazy" 
                className="w-[160px] transition-transform duration-500" 
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/jhslft6l6wb8ieriukkb" 
                alt="Terzihan" 
              />
            </div>
            <a 
              href="https://terzihan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              TERZIHAN
              <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Axis Clinic */}
        <div className="partner-card group">
          <div className="flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-lg rounded-lg">
            <div className="h-32 flex items-center justify-center mb-6 relative overflow-hidden">
              <img 
                loading="lazy" 
                className="w-[160px] transition-transform duration-500" 
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/zrnfcv55g06akrc3lxpp" 
                alt="Axis Clinic" 
              />
            </div>
            <a 
              href="https://terzihan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
            >
              AXIS CLINIC
              <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>



    </section>
          </>
  );
}

const testimonials = [
  {
    quote:
      "The Eva Vieira de Almeida Dance School is a place of inspiration, growth, and artistic fulfillment for Mixiu. Here, a passion for dance transforms into discipline, friendship, and personal expression.",
    name: "Mixiu’s Mother",
    title: "Student’s Mother",
  },
  {
    quote:
      "For us, as parents, the Eva Vieira de Almeida School represents Discipline, Love, and Responsibility. The school instills values of friendship, respect, and teamwork, which we consider essential for our daughter's growth.",
    name: "Ana Sílvia Santos",
    title: "Student’s Mother",
  },
  {
    quote:
      "Nice atmosphere, strong discipline, and a great community for kids, where they can make friends, train their bodies, and develop their senses. Daniela 💗 one love 🙂",
    name: "No Name!",
    title: "Student’s Mother",
  },
  {
    quote:
      "For me and my daughter Sofia, the Eva Vieira School is an opportunity to grow and express creativity through dance.",
    name: "Adélcia Monteiro",
    title: "Student’s Mother",
  },
  {
    quote:
      "A school that feels like home. A place that nurtures, cares, and educates so our children grow into kind and good-hearted individuals.",
    name: "Aua Dias",
    title: "Student’s Mother",
  },

  {
    quote:
      "We truly appreciate the warmth and dedication of the teachers, and the overall atmosphere of the school is wonderful.",
    name: "Daria Ryndina",
    title: "Student’s Mother",
  },
  {
    quote:
      "For Valentina, the dance school means happiness, freedom, effort, and achievement. It is a place where music enters the heart and makes the body tell a story. 🩷",
    name: "Cláudia Gigante de Figueiredo",
    title: "Student’s Mother",
  },
  {
    quote:
      "The Edva Dance School is a place of self-improvement, where every step is an opportunity for transformation and growth.",
    name: "Andreia Leitão",
    title: "Student’s Mother",
  },
];





