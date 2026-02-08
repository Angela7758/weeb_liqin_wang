import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/web/Home";
import Contact from "./pages/web/Contact";
import Articles from "./pages/web/Articles";
import AddArticles from "./pages/web/AddArticles";

import Login from "./pages/app/Login";
import Register from "./pages/app/Register"; // 




function App() {
  return (
    <div className="app">
      {/* Barre */}
      <Navbar />

      {/* Des routes */}
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/add-article" element={<AddArticles />} />

        {/* Authentifications */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
