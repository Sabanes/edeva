import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Transition from "../../components/transition/Transition";
import projectsData from "../../data/home.json"; // Import your JSON data
import "./Home.css"; // Import your CSS file

const NotDance = () => {
  return (
    <motion.div className="Home flex flex-col py-10">
      <h1 className="md:text-7xl text-5xl relative top-20 text-center">{projectsData.title}</h1>
      <div className="projects-nav bg-[var(--main)] rounded-2xl px-7">
        <div className="projects-nav-container py-10">
          {projectsData.projects.map((project) => (
            <div className="project-item" key={project.id}>
              <Link to={project.link}>
                <div className="project-link">
                  <div className="project-l">
                    <div className="project-link-img">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-name">
                      <h2 className="text-white">{project.name}</h2>
                    </div>
                  </div>
                  <div className="project-date">
                    <p className="text-white">{project.category}</p>
                    <p className="text-white">/{project.year}</p>
                  </div>
                  <div className="project-dir">
                    <p className="text-white">&#8599;</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Transition(NotDance);