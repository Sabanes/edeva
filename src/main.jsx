import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./App";
import Contact from "./pages/contactPage/contact";
import Team from "./pages/Team/Team";
import Feed from "./pages/News/feed";


import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<Feed />} />

    </Routes>
  </Router>
);
