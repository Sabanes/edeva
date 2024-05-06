import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contactPage/contact";
import Home from "./App";
import Team from "./pages/Team/Team";
import Project from './sections/Project/Project'
import Feed from "./pages/News/feed";


ReactDOM.createRoot(document.getElementById("root")).render(

  
  <Router>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<Feed />} />

      <Route path="/project" element={<Project />} />
    
    </Routes>
  </Router>

);
