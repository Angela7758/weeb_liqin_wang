// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/web/Home";
import Contact from "./pages/web/Contact";
import Login from "./pages/app/Login";   //

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />  
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
