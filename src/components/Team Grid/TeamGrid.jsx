"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function ExpandableCardDemo() {
  return (
    <div className="py-16 bg-[#1b211e]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-8xl font-thin uppercase text-center mb-12 text-white">
          Our Teachers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <FlipCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FlipCard = ({ teacher }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="h-[25.5rem] w-full perspective-1000 cursor-pointer" 
      onClick={handleFlip}
      onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="h-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b211e]/70 to-transparent z-10"></div>
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 p-4 z-20 transition-opacity duration-500 ${isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                <p className="text-white text-sm opacity-90">{teacher.role}</p>
              </div>
              
              <div className={`absolute top-3 right-3 z-20 transition-opacity duration-500 ${isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="font-bold text-[#1b211e]">{teacher.name}</h3>
                <p className="text-sm text-[#1b211e]">{teacher.role}</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 text-sm text-[#1b211e] custom-scrollbar">
              <p>{teacher.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Teacher data
const teachers = [
  {
    id: 1,
    name: "Eva Vieira de Almeida",
    role: "Founder & Teacher",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/kdomo1dx5r58ycqak5up",
    bio: "Born in Lisbon in 1980, she trained in classical ballet at the Royal Academy of Dancing before joining The Urdang Academy in Covent Garden. She appeared in major Portuguese TV shows and has been a choreographer and judge for Angola’s Bounce since 2009. Her work spans theater, advertising, and international productions, including Carmen in Moldova and Football for Friendship at the 2016 Champions League final. As a teacher, she has trained award-winning students and is now the director of the Eva Vieira de Almeida Dance School.",
  },
  {
    id: 2,
    name: "Daniela Silva",
    role: "Teacher",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_south,h_0.70,w_1.00/q_auto:eco/Eva/f2viv2ylwrqjp3n2bmlc",
    bio: "In Brazil, she spent 30 years as Artistic and Pedagogical Coordinator at the Alice Arja Dance School and restager for Cia de Ballet do RJ, with many students joining top companies in the U.S. and Europe. She also assisted in Miami City Ballet School’s South American program auditions. Now in Portugal, she teaches classical dance at the Eva Vieira de Almeida Dance School, with students excelling in national and international competitions.",
  },
  {
    id: 3,
    name: "Filipe Narciso",
    role: "Ballet Instructor",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/tr5xsmdd2rq6ccwi1cib",
    bio: "Com uma carreira consolidada na dança, Filipe Narciso formou-se na Escola de Dança do Conservatório Nacional e integrou companhias prestigiadas, como a Companhia Nacional de Bailado e o Quorum Ballet. Ao longo dos anos, trabalhou com coreógrafos de renome e participou em produções de destaque, incluindo O Lago dos Cisnes e Giselle. Atualmente, dedica-se ao ensino e à coreografia, tendo orientado alunos em instituições de referência e conquistado prémios em competições internacionais.",
  },
  {
    id: 4,
    name: "Henrique Oliveira",
    role: "Modern Dance Instructor",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_center,h_1500,w_1500/q_auto:eco/Eva/qoe3dhntu5jlydp5otbc",
    bio: "Henrique started Hip Hop at age 3 and, with over 18 years of experience, became a top dancer, choreographer, and judge. He has represented Brazil at the World Hip Hop Dance Championship and won multiple titles, including World Champion in 2019. A judge for Hip Hop International in Brazil and Portugal, he is also completing a degree in Physical Education. His teaching blends technique, artistry, and personal growth, shaped by training with top choreographers like Parris Goebel and Matt Steffanina.",
  },
  {
    id: 5,
    name: "Anton Polyubov",
    role: "Jazz & Hip Hop Instructor",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/wu5bordc3aaoh8f1ydul",
    bio: "Born in Lisbon in 1980, she trained in classical ballet at the Royal Academy of Dancing before joining The Urdang Academy in Covent Garden. She appeared in major Portuguese TV shows and has been a choreographer and judge for Angola’s Bounce since 2009. Her work spans theater, advertising, and international productions, including Carmen in Moldova and Football for Friendship at the 2016 Champions League final. As a teacher, she has trained award-winning students and is now the director of the Eva Vieira de Almeida Dance School.",
  },
  {
    id: 6,
    name: "Laura Petitjean",
    role: "Classical Ballet Instructor",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/tj4s6bakcugfkntglugx",
    bio: "Laura Petitjean began her classical dance training through the methods of the Royal Academy of Dance and Vaganova, supplementing it with studies in Contemporary Dance. Throughout her career, she has participated in various international festivals and courses, including at the Pôle National Supérieur de Danse – Rosella Hightower in France. She graduated in Dance from the Escola Superior de Dança in 2020, where she worked with renowned choreographers and teachers such as Cristina Graça, Victor Hugo Pontes, Barbara Griggi, and Sylvia Rijmer.",
  },
  {
    id: 7,
    name: "Hugo Marmelada",
    role: "Teacher",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/pjv0c9mmxwa0ciltlayi",
    bio: "Born in Lisbon in 1987, Hugo Marmelada studied at the Academia de Dança Contemporânea de Setúbal. He has performed with Batsheva Dance Company and Carte Blanche, collaborating with choreographers like Ohad Naharin, Jirí Kylián, Sidi Larbi Cherkaoui, and Crystal Pite. After returning to Portugal in 2019, he worked with various artists and developed his own internationally presented choreographic projects. In addition to extensive teaching experience worldwide, he is an official Gaga teacher. Currently, he is completing a Master’s in Choreographic Creation at Escola Superior de Dança.",
  }
];


/* Hugo Marmelada
Nasceu em Lisboa, em 1987. Formou-se na Academia de Dança Contemporânea de Setúbal. Trabalhou com a Compagnie Alias, Amanda Miller, André Mesquita, projecto Kamuyot de Ohad Naharin, Itamar Serussi, Jo Stromgren, Christopher Arouni, Companhia It Dansa dançando peças de Ohad Naharin, Jirí Kylián, Rafael Bonachela, Sidi Larbi Cherkaoui, Alexander Ekman e Catherine Allard, integrou a Companhia Carte Blanche dançando peças de Hooman Sharifi, Sharon Eyal, Crystal Pite, Sang Jijia, Ina Christel Johannessen, Marcos Morau, Siri Jontvedt, Snelle Hall, Lina Majdalanie, Mia Habib e Marcelo Evelin.
Em 2017 juntou-se à Batsheva Dance Company, dançando as peças “Venezuela”, “Last Work”, “Hora”, “Mamootot” e “The Hole” de Ohad Naharin e participou na criação de Marlene Monteiro Freitas, “Canine Jaunâtre 3”.
Desde o regresso a Portugal, em 2019, tem trabalhado com diferentes criadores como Ina Christel Johannessen, da Noruega, Pedro Ramos, Sofia Dias, Vítor Roriz, João Garcia Miguel, Francisco Camacho e Catarina Miranda. Paralelamente tem vindo a coreografar desde 2010, para o projecto “Kamuyot Creates” o dueto “I I” apresentado no Riksteatern, em Estocolmo, Suécia, “Stepping Over Stones” solo apresentado no 16th International Solo-Dance-Theatre Festival Stuttgart, Alemanha, vencendo os prémios de 2a Melhor Performance, Prémio do Público e convidado a uma digressão pela Alemanha e pelo Brasil, “Connect” e “Still, you can’t smile with me” apresentados no evento Batsheva Dancers Create e co- coreografou com Jens Trinidad “Flux” apresentado na Dansens Hus de Oslo e “As it is/ As it turns out” apresentado na Baerum Kulturhus, Noruega.
Desde o regresso a Portugal criou, em 2021, “Now I know, I really don’t know” apresentado na Mono Lisboa, “Podium” criado para a CAMADA - Centro Coreográfico, tendo estreia no Teatro Das Figuras, em 2023 em colaboração com o artista audiovisual Rudolfo Quintas "A Sombra das Ondas" e em 2024, criou a peça "Contido" a convite da Companhia de Dança de Almada.
Desde os 16 anos que leciona aulas de dança tendo já ensinado em muitos países, escolas de dança, universidades e companhias de dança tais como Carte Blanche (Noruega), It Dansa (Espanha), Academia de Dança de Jerusalém (Israel), Oslo National Academy of the Arts (Noruega), Proda-Professional Dance Trainning da Noruega, Scottish Dance Theater, Companhia Nacional de Bailado de Portugal, entre outros.  */
/* Atualmente encontra-se a finalizar o 2ºano de Mestrado em Criação Coreográfica e Práticas Profissionais da Escola Superior de Dança e é um dos professores oficiais de Gaga.  */