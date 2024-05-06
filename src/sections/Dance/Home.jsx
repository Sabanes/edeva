import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "../../components/transition/Transition";

import Project1Img from "../Images/project-1.png";
import Project2Img from "../Images/project-2.png";
import Project3Img from "../Images/project-3.png";
import Project4Img from "../Images/project-4.png";
import Project5Img from "../Images/project-5.png";

const NotDance = () => {
  return (
    <motion.div className="Home flex flex-col py-10">

        <h1 className="text-[3rem] text-center">Dance with us</h1>


      <div className="projects-nav bg-[#1b211e] rounded-2xl px-7">
        <div className="projects-nav-container py-10">
          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project1Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2 className="text-white">Hip-Hop</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p className="text-white">experience</p>
                  <p className="text-white">/2022</p>
                </div>
                <div className="project-dir">
                  <p className="text-white">&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project2Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2 className="text-white">Jazz</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p className="text-white">development</p>
                  <p className="text-white">/2023</p>
                </div>
                <div className="project-dir">
                  <p className="text-white">&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project3Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2 className="text-white">Impressions</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p className="text-white">portfolio</p>
                  <p className="text-white">/2019</p>
                </div>
                <div className="project-dir">
                  <p className="text-white">&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project4Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2 className="text-white">Stellar</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p className="text-white" >experience</p>
                  <p className="text-white">/2021</p>
                </div>
                <div className="project-dir">
                  <p className="text-white">&#8599;</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project4Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2 className="text-white">Stellar</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p className="text-white" >experience</p>
                  <p className="text-white">/2021</p>
                </div>
                <div className="project-dir">
                  <p className="text-white">&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project5Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2 className="text-white">Byte</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p className="text-white">development</p>
                  <p className="text-white">/2018</p>
                </div>
                <div className="project-dir">
                  <p className="text-white">&#8599;</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>




    </motion.div>
  );
};

export default Transition(NotDance);
