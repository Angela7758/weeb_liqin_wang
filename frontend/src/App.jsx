import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";  // ← ajouté

import Home from "./pages/web/Home";
import Contact from "./pages/web/Contact";
import Articles from "./pages/web/Articles";
import ArticleDetail from "./pages/web/ArticleDetail";
import AddArticles from "./pages/web/AddArticles";
import Login from "./pages/app/Login";
import Register from "./pages/app/Register";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />

        {/* Page protégée — membres seulement */}
        <Route path="/add-article" element={
          <PrivateRoute>
            <AddArticles />
          </PrivateRoute>
        } />

        {/* Authentification */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;