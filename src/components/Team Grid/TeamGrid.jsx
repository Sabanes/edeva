"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/out";

export function ExpandableCardDemo() {
  const [   active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-lg w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0 grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="rounded-[20px] w-[95vw] max-w-[500px] h-[95vh] md:h-fit md:max-h-[90%]  flex flex-col bg-[var(--main)]  sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <img
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-base">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-400 text-xs md:text-sm lg:text-base max-h-80 overflow-y-auto pb-10 flex flex-col items-start gap-4 
                              scrollbar-thin 
                              scrollbar-thumb-rounded-full
                              scrollbar-transparent
                              scrollbar-thumb-transparent
                              hover:scrollbar-thumb-neutral-500"
                    
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="max-w-3xl py-10 mx-auto w-[95%] grid grid-cols-1 md:grid-cols-2 items-start gap-10">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col  w-full">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-72 w-full rounded-lg object-cover object-center" />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                {card.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "Eva Vieira de Almeida",
    title: "Founder & Teacher",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br />Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture. 
                    With a career
                  </p>)
      );
    },
  },
  {
    description: "Daniela Silva",
    title: "Teacher",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad. Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },

  {
    description: "Filipe Narciso",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br />Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },
  {
    description: "Henrique Oliveira",
    title: "Aap Kasdfefe Suroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Himesh Reshammiya, a renowned Indian music composer, singer, and
                    actor, is celebrated for his distinctive voice and innovative
                    compositions. Born in Mumbai, India, he has become a prominent figure
                    in the Bollywood music industry. <br /> <br />His songs often feature
                    a blend of contemporary and traditional Indian music, capturing the
                    essence of modern Bollywood soundtracks. With a career spanning over
                    two decades, Himesh Reshammiya has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },
  {
    description: "Gustavo Rodrigues",
    title: "Aap Ka Suroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Instagram",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Himesh Reshammiya, a renowned Indian music composer, singer, and
                    actor, is celebrated for his distinctive voice and innovative
                    compositions. Born in Mumbai, India, he has become a prominent figure
                    in the Bollywood music industry. <br /> <br />His songs often feature
                    a blend of contemporary and traditional Indian music, capturing the
                    essence of modern Bollywood soundtracks. With a career spanning over
                    two decades, Himesh Reshammiya has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },
  {
    description: "Anton Polyubov",
    title: "Aap Ka Safeeuroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Himesh Reshammiya, a renowned Indian music composer, singer, and
                    actor, is celebrated for his distinctive voice and innovative
                    compositions. Born in Mumbai, India, he has become a prominent figure
                    in the Bollywood music industry. <br /> <br />His songs often feature
                    a blend of contemporary and traditional Indian music, capturing the
                    essence of modern Bollywood soundtracks. With a career spanning over
                    two decades, Himesh Reshammiya has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },
  {
    description: "Hugo Marmelada",
    title: "Aap  Safeeuroor",
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/pjv0c9mmxwa0ciltlayi",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Nasceu em Lisboa, em 1987. Formou-se na Academia de Dança Contemporânea de Setúbal. Trabalhou com a Compagnie Alias, Amanda Miller, André Mesquita, projecto Kamuyot de Ohad Naharin, Itamar Serussi, Jo Stromgren, Christopher Arouni, Companhia It Dansa dançando peças de Ohad Naharin, Jirí Kylián, Rafael Bonachela, Sidi Larbi Cherkaoui, Alexander Ekman e Catherine Allard, integrou a Companhia Carte Blanche dançando peças de Hooman Sharifi, Sharon Eyal, Crystal Pite, Sang Jijia, Ina Christel Johannessen, Marcos Morau, Siri Jontvedt, Snelle Hall, Lina Majdalanie, Mia Habib e Marcelo Evelin.
          Em 2017 juntou-se à Batsheva Dance Company, dançando as peças “Venezuela”, “Last Work”, “Hora”, “Mamootot” e “The Hole” de Ohad Naharin e participou na criação de Marlene Monteiro Freitas, “Canine Jaunâtre 3”.
          Desde o regresso a Portugal, em 2019, tem trabalhado com diferentes criadores como Ina Christel Johannessen, da Noruega, Pedro Ramos, Sofia Dias, Vítor Roriz, João Garcia Miguel, Francisco Camacho e Catarina Miranda. Paralelamente tem vindo a coreografar desde 2010, para o projecto “Kamuyot Creates” o dueto “I I” apresentado no Riksteatern, em Estocolmo, Suécia, “Stepping Over Stones” solo apresentado no 16th International Solo-Dance-Theatre Festival Stuttgart, Alemanha, vencendo os prémios de 2a Melhor Performance, Prémio do Público e convidado a uma digressão pela Alemanha e pelo Brasil, “Connect” e “Still, you can’t smile with me” apresentados no evento Batsheva Dancers Create e co- coreografou com Jens Trinidad “Flux” apresentado na Dansens Hus de Oslo e “As it is/ As it turns out” apresentado na Baerum Kulturhus, Noruega.
          Desde o regresso a Portugal criou, em 2021, “Now I know, I really don’t know” apresentado na Mono Lisboa, “Podium” criado para a CAMADA - Centro Coreográfico, tendo estreia no Teatro Das Figuras, em 2023 em colaboração com o artista audiovisual Rudolfo Quintas "A Sombra das Ondas" e em 2024, criou a peça "Contido" a convite da Companhia de Dança de Almada.
          Desde os 16 anos que leciona aulas de dança tendo já ensinado em muitos países, escolas de dança, universidades e companhias de dança tais como Carte Blanche (Noruega), It Dansa (Espanha), Academia de Dança de Jerusalém (Israel), Oslo National Academy of the Arts (Noruega), Proda-Professional Dance Trainning da Noruega, Scottish Dance Theater, Companhia Nacional de Bailado de Portugal, entre outros. 
          Atualmente encontra-se a finalizar o 2ºano de Mestrado em Criação Coreográfica e Práticas Profissionais da Escola Superior de Dança e é um dos professores oficiais de Gaga. 
                  </p>)
      );
    },
  },
  {
    description: "Laura Petitjean",
    title: "Aap Ksda Suroor",
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/tj4s6bakcugfkntglugx",
    ctaText: "Visit",
    ctaLink: "#",
    content: () => {
      return (
        (<p>Laura Petitjean began her classical dance training through the methods of the Royal Academy of Dance and Vaganova, supplementing it with studies in Contemporary Dance. Throughout her career, she has participated in various international festivals and courses, including at the Pôle National Supérieur de Danse – Rosella Hightower in France.

She graduated in Dance from the Escola Superior de Dança in 2020, where she worked with renowned choreographers and teachers such as Cristina Graça, Victor Hugo Pontes, Barbara Griggi, and Sylvia Rijmer. Between 2020 and 2022, she joined the Quorum Project, where she danced pieces by acclaimed choreographers such as Daniel Cardoso, Inês Pedruco, and Miguel Esteves.

In 2023, she completed a Master’s degree in Creative Industries Management at the Universidade Católica Portuguesa and currently teaches dance at several schools, combining teaching with artistic projects.
                  </p>)
      );
    },
  },
];
