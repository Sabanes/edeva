import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const classesData = [
  {
    id: "vocational",
    title: "Vocational Classes",
    image: "/path-to-vocational-image.jpg",
    details: [
      {
        id: "voc-a",
        title: "Vocational Class A",
        content:
          "Vocational Class A enrolls 7, 8, and 9-year-old students who demonstrate a sufficient level of interest, focus, and technical progress in classes. In this program, students will learn the technical and artistic side of dance...",
        image: "/path-to-voc-a-image.jpg"
      },
      {
        id: "voc-b",
        title: "Vocational Class B",
        content:
          "Vocational Class B enrolls students from Class A that demonstrate a level of technical progress and interest to advance. New students may also enter through auditions...",
        image: "/path-to-voc-b-image.jpg"
      },
      {
        id: "voc-c",
        title: "Vocational Class C",
        content:
          "Vocational Class C enrolls students from Class B who are committed to working towards a professional career. Classes focus on versatility, artistry, and refining technique...",
        image: "/path-to-voc-c-image.jpg"
      },
    ],
  },
  {
    id: "open",
    title: "Open Classes",
    image: "/path-to-open-classes-image.jpg",
    details: [
      {
        id: "open-classes",
        title: "Open Dance Classes",
        content:
          "Our Open Classes are designed for all levels and allow students to explore different styles without a commitment to a structured program. These classes focus on enjoyment, fitness, and skill development...",
        image: "/path-to-open-classes-image.jpg"
      },
    ],
  },
];

export default function DanceClasses() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="flex flex-col py-40 items-center gap-6 p-6">
      <h2 className="text-3xl uppercase font-regular">This Section is under construction or wasnt deployed</h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {classesData.map((category) => (
          <div key={category.id} className="w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => setOpenDropdown(openDropdown === category.id ? null : category.id)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-60 object-cover rounded-2xl shadow-lg"
              />
              <h3 className="text-xl font-semibold text-center mt-2">{category.title}</h3>
            </motion.div>
            <AnimatePresence>
              {openDropdown === category.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-4 bg-white p-4 rounded-lg shadow-md"
                >
                  {category.details.map((detail) => (
                    <div key={detail.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="cursor-pointer p-2 border-b border-gray-300"
                        onClick={() => setExpandedCategory(expandedCategory === detail.id ? null : detail.id)}
                      >
                        <h4 className="font-bold">{detail.title}</h4>
                      </motion.div>
                      <AnimatePresence>
                        {expandedCategory === detail.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="p-4"
                          >
                            <img src={detail.image} alt={detail.title} className="w-full h-40 object-cover rounded-lg" />
                            <p className="text-gray-600 mt-2">{detail.content}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
