import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./App";
import Contact from "./pages/contactPage/contact";
import Team from "./pages/Team/Team";
import Feed from "./pages/News/feed";

import Tdc from "./sections/Project/TDC/Tdc";
import Contemporaneo from "./sections/Project/CONT/cont";
import Jazz from "./sections/Project/JAZZ/jazz";
import Hiphop from "./sections/Project/Hiphop/Hiphop";
import Dt from "./sections/Project/DT/Dt";
import Pf from "./sections/Project/PF/pf";
import Tm from "./sections/Project/TM/Tm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<Feed />} />

      <Route path="/Tecnica-de-dança-classica" element={<Tdc />} />
      <Route path="/Contemporâneo" element={<Contemporaneo />} />
      <Route path="/Jazz" element={<Jazz />} />
      <Route path="/Hip-hop" element={<Hiphop />} />
      <Route path="/Danças-tradicionais" element={<Dt />} />
      <Route path="/Preparação-física" element={<Pf />} />
      <Route path="/Teatro-musical" element={<Tm />} />
    </Routes>
  </Router>
);
