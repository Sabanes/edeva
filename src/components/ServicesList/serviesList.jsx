"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DanceCategories = () => {
  // Separate state for each category to ensure complete isolation
  const [expandedCategories, setExpandedCategories] = useState({
    vocational: false,
    open: false
  });
  
  // Separate state for each category's subcategories
  const [expandedSubcategories, setExpandedSubcategories] = useState({
    vocational: null,
    open: null
  });
  
  const mainColor = "#1b211e";

  // Category data
  const categories = [
    {
      id: 'vocational',
      name: 'Vocational Classes',
      image: 'https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/mtzolmfshprlzihgyspd',
      subcategories: [
        {
          id: 'a',
          name: 'Vocational A',
          description: 'Vocational Class A enrolls 7, 8, and 9 year olds who demonstrate a sufficient level of interest, focus, and technical progress. In this program, students learn the technical and artistic side of dance, developing self-control, patience, persistence, and respect. Progression from A to B is not automatic; dancers must show a sufficient level of technical and artistic knowledge to advance.',
          image: 'https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/bracl8vtavpgedenltpe'
        },
        {
          id: 'b',
          name: 'Vocational B',
          description: 'Vocational Class B enrolls dancers from Class A who demonstrate the required technical progress and interest, as well as new students selected by audition. This level focuses on increasing control, precision, and musicality, teaching students to learn combinations quickly and apply corrections effectively.',
          image: 'https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/liy2uqyk6i6pixfijjvf'
        },
        {
          id: 'c',
          name: 'Vocational C',
          description: 'Vocational Class C is for students progressing from Class B who are committed to pursuing a professional career. Classes focus on instilling the versatility, artistry, and refined technique needed to achieve a dance career.',
          image: 'https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/r74yupjvfzt8gdzaqlf9'
        }
      ]
    },
    {
      id: 'open',
      name: 'Open Classes',
      image: 'https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/atx0heyjfvnvxgk4uwjy',
      subcategories: [
        {
          id: 'ballet',
          name: 'Ballet',
          description: 'Ballet is considered one of the most graceful dance forms, reaching its peak in the 19th century in France and Russia. With a long history of experimentation and artistic inspiration, modern ballet still evokes powerful emotions and provides stunning performances.',
          image: '/api/placeholder/600/400'
        },
        {
          id: 'contemporary',
          name: 'Contemporary',
          description: 'Contemporary dance blends elements of multiple styles, allowing dancers to express emotionality through movement and breath. Emerging in the mid-twentieth century, it has become a dominant genre for formally trained dancers, combining strong but controlled legwork with unpredictable changes in rhythm, speed, and direction.',
          image: '/api/placeholder/600/400'
        },
        {
          id: 'hiphop',
          name: 'Hip Hop',
          description: 'Hip hop dance is included in our stage dance repertoire, offering a dynamic, high-energy style that emphasizes rhythm, coordination, and individual expression. It is suitable for all levels, fostering creativity and confidence through urban movement and musicality.',
          image: '/api/placeholder/600/400'
        }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const subcategoryVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Toggle main category expansion - completely isolated
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
    
    // Reset subcategory when toggling category
    setExpandedSubcategories(prev => ({
      ...prev,
      [categoryId]: null
    }));
  };

  // Toggle subcategory expansion - completely isolated
  const toggleSubcategory = (categoryId, subcategoryId) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === subcategoryId ? null : subcategoryId
    }));
  };

  return (
    <div className="w-full bg-white py-16 px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-[1920px] mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl lg:text-7xl font-medium uppercase tracking-wide text-center py-20"
        style={{ color: mainColor }}
      >
        Our Dance Programs
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 md:gap-12"
      >
        {categories.map((category) => (
          <motion.div 
            key={category.id}
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Main Category Card */}
            <motion.div 
              className="relative cursor-pointer group"
              onClick={() => toggleCategory(category.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-[70vh] md:h-[60vh] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
                ></div>
                <motion.div 
                  className="absolute bottom-0 left-0 w-full p-8 text-white"
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <h3 className="text-3xl md:text-4xl font-light uppercase tracking-wide mb-2">
                    {category.name}
                  </h3>
                  <div className="w-16 h-1 bg-white mt-2 mb-4"></div>
                  <p className="text-sm md:text-base font-light">
                    Click to explore {category.name.toLowerCase()}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Subcategories - only shown for this specific category */}
            <AnimatePresence>
              {expandedCategories[category.id] && (
                <motion.div 
                  className="bg-white overflow-hidden"
                  variants={subcategoryVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="p-6 divide-y divide-gray-100">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id} className="py-4">
                        <motion.div
                          onClick={() => toggleSubcategory(category.id, subcategory.id)}
                          className="flex justify-between items-center cursor-pointer py-2"
                          whileHover={{ x: 5 }}
                          style={{ color: mainColor }}
                        >
                          <h4 className="text-xl font-medium">{subcategory.name}</h4>
                          <motion.span
                            animate={{ 
                              rotate: expandedSubcategories[category.id] === subcategory.id ? 45 : 0 
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl"
                          >
                            +
                          </motion.span>
                        </motion.div>

                        <AnimatePresence>
                          {expandedSubcategories[category.id] === subcategory.id && (
                            <motion.div
                              variants={detailsVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-4"
                            >
                              <div className="flex flex-col lg:flex-row gap-6">
                                <div className="lg:w-1/2 overflow-hidden rounded">
                                  <motion.img
                                    src={subcategory.image}
                                    alt={subcategory.name}
                                    className="w-full h-64 object-cover"
                                    initial={{ scale: 1.1, opacity: 0.8 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                  />
                                </div>
                                <div className="lg:w-1/2">
                                  <p className="text-gray-700 leading-relaxed">{subcategory.description}</p>
                                  <motion.button
                                    className="mt-4 px-6 py-2 rounded text-white text-sm uppercase tracking-wider"
                                    style={{ backgroundColor: mainColor }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    Learn More
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DanceCategories;