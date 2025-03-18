"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const teachers = [
  {
    id: 1,
    name: "Eva Vieira de Almeida",
    role: "Founder & Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/kdomo1dx5r58ycqak5up",
    bio: "Born in Lisbon in 1980, she trained in classical ballet at the Royal Academy of Dancing before joining The Urdang Academy in Covent Garden. She appeared in major Portuguese TV shows and has been a choreographer and judge for Angola’s Bounce since 2009. Her work spans theater, advertising, and international productions, including Carmen in Moldova and Football for Friendship at the 2016 Champions League final. As a teacher, she has trained award-winning students and is now the director of the Eva Vieira de Almeida Dance School.",
    socialLinks: [
      { platform: "instagram", url: "#" },
      { platform: "linkedin", url: "#" }
    ]
  },
  {
    id: 2,
    name: "Daniela Silva",
    role: "Classical Ballet Technique	Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_south,h_0.70,w_1.00/q_auto:eco/Eva/f2viv2ylwrqjp3n2bmlc",
    bio: "In Brazil, she spent 30 years as Artistic and Pedagogical Coordinator at the Alice Arja Dance School and restager for Cia de Ballet do RJ, with many students joining top companies in the U.S. and Europe. She also assisted in Miami City Ballet School’s South American program auditions. Now in Portugal, she teaches classical dance at the Eva Vieira de Almeida Dance School, with students excelling in national and international competitions.",

  
  },
  {
    id: 3,
    name: "Filipe Narciso",
    role: "Contemporary Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/tr5xsmdd2rq6ccwi1cib",
    bio: "Com uma carreira consolidada na dança, Filipe Narciso formou-se na Escola de Dança do Conservatório Nacional e integrou companhias prestigiadas, como a Companhia Nacional de Bailado e o Quorum Ballet. Ao longo dos anos, trabalhou com coreógrafos de renome e participou em produções de destaque, incluindo O Lago dos Cisnes e Giselle. Atualmente, dedica-se ao ensino e à coreografia, tendo orientado alunos em instituições de referência e conquistado prémios em competições internacionais.",
    socialLinks: [
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  },
  {
    id: 4,
    name: "Henrique Oliveira",
    role: "Comercial Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_center,h_1500,w_1500/q_auto:eco/Eva/qoe3dhntu5jlydp5otbc",
    bio: "Henrique started Hip Hop at age 3 and, with over 18 years of experience, became a top dancer, choreographer, and judge. He has represented Brazil at the World Hip Hop Dance Championship and won multiple titles, including World Champion in 2019. A judge for Hip Hop International in Brazil and Portugal, he is also completing a degree in Physical Education. His teaching blends technique, artistry, and personal growth, shaped by training with top choreographers like Parris Goebel and Matt Steffanina."
  },
  {
    id: 5,
    name: "Anton Polyubov",
    role: "Traditional Dance and Hip Hop Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/wu5bordc3aaoh8f1ydul",
    bio: "Born in Lisbon in 1980, she trained in classical ballet at the Royal Academy of Dancing before joining The Urdang Academy in Covent Garden. She appeared in major Portuguese TV shows and has been a choreographer and judge for Angola’s Bounce since 2009. Her work spans theater, advertising, and international productions, including Carmen in Moldova and Football for Friendship at the 2016 Champions League final. As a teacher, she has trained award-winning students and is now the director of the Eva Vieira de Almeida Dance School."
  },
  {
    id: 6,
    name: "Laura Petitjean",
    role: "Contemporary Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/tj4s6bakcugfkntglugx",
    bio: "Laura Petitjean began her classical dance training through the methods of the Royal Academy of Dance and Vaganova, supplementing it with studies in Contemporary Dance. Throughout her career, she has participated in various international festivals and courses, including at the Pôle National Supérieur de Danse – Rosella Hightower in France. She graduated in Dance from the Escola Superior de Dança in 2020, where she worked with renowned choreographers and teachers such as Cristina Graça, Victor Hugo Pontes, Barbara Griggi, and Sylvia Rijmer."
  },
  {
    id: 7,
    name: "Hugo Marmelada",
    role: "Hip Hop Teacher",
    image:
      "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/pjv0c9mmxwa0ciltlayi",
    bio: "Laura Petitjean began her classical dance training through the methods of the Royal Academy of Dance and Vaganova, supplementing it with studies in Contemporary Dance. Throughout her career, she has participated in various international festivals and courses, including at the Pôle National Supérieur de Danse – Rosella Hightower in France. She graduated in Dance from the Escola Superior de Dança in 2020, where she worked with renowned choreographers and teachers such as Cristina Graça, Victor Hugo Pontes, Barbara Griggi, and Sylvia Rijmer."
  }
];

export function AnimatedTooltipPreview() {
  // Map teacher data to the format expected by AnimatedTooltip:
  // Here we alias 'role' to 'designation'
  const items = teachers.map((teacher) => ({
    ...teacher,
    designation: teacher.role,
  }));

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
}