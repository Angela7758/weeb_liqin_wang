// src/pages/web/Home.jsx
import React from "react";

// images
import desktopImg from "../../images/Desktop.png";
import smartfinder from "../../images/smartfinder.png";
import zoomerr from "../../images/zoomerr.png";
import shells from "../../images/shells.png";
import waves from "../../images/waves.png";
import artvenue from "../../images/artvenue.png";
import Shapes from "../../images/Shapes.png";


function Home() {
  return (
    <main className="home-page">
      {/* ======================== Hero================================ */}

      <section className="hero">

        <h1 className="hero-title">
          Explorez le{" "}
          <span className="text-purple-light thin">Web</span> sous toutes ses
          <br />
          <span className="underline-purple">facettes</span>
        </h1>

        <p className="hero-subtitle">
          Le monde du web évolue constamment, et nous sommes là pour vous guider
          à travers ses tendances, technologies et meilleures pratiques. Que
          vous soyez développeur, designer ou passionné du digital, notre blog
          vous offre du contenu de qualité pour rester à la pointe.
        </p>

        <div className="hero-actions">
          <button className="btn-primary nav-cta">Découvrir les articles</button>
          <button className="btn-outline">S&apos;abonner à la newsletter</button>
        </div>

        {/* Image-desktop */}
        <div className="hero-illustration">
          <img src={desktopImg} alt="Interface web" className="hero-image" />
        </div>
      </section>

      {/* ==================== Ils nous font confiance ===================== */}

      <section className="trusted-section">

        <h2 className="trusted-title">Ils nous font confiance</h2>

        <div className="trusted-logos">
          <div className="logo-item">
            <img src={smartfinder} alt="SmartFinder logo" />
            <span>SmartFinder</span>
          </div>
          <div className="logo-item">
            <img src={zoomerr} alt="Zoomerr logo" />
            <span>Zoomerr</span>
          </div>
          <div className="logo-item">
            <img src={shells} alt="Shells logo" />
            <span>SHELLS</span>
          </div>
          <div className="logo-item">
            <img src={waves} alt="Waves logo" />
            <span>WAVES</span>
          </div>
          <div className="logo-item">
            <img src={artvenue} alt="ArtVenue logo" />
            <span>ArtVenue</span>
          </div>
        </div>
      </section>

      {/* ==================== Apprenez et progressez  ========================= */}

      <section className="feature-section">

        {/* Texte à gauche */}

        <div className="feature-text">
          <div className="feature-label">
            DES RESSOURCES POUR TOUS LES NIVEAUX
          </div>

          <h2 className="feature-title">
            <span className="feature-title-purple">Apprenez</span>{" "}
            <span className="feature-title-white">et</span>
            <br />
            <span className="feature-title-purple">progressez</span>
          </h2>

          <div className="feature-description">
            Que vous débutiez en développement web ou que vous soyez un expert
            cherchant à approfondir vos connaissances, nous vous proposons des
            tutoriels, guides et bonnes pratiques pour apprendre efficacement.
          </div>

          <button className="btn-outline feature-link">
            Explorer les ressources →
          </button>
        </div>

        {/* Image à droite */}
        <div className="feature-illustration">
          <img
            src={desktopImg}
            alt="Ressources de formation"
            className="feature-image"
          />
        </div>
      </section>


      {/* ====================  Restez informé des tendances  ========================= */}

      <section className="tendance-section">

        {/* Image-tendance violet à gauche */}

        <div className="feature-art">
          <img src={Shapes} alt="Shapes Artwork" className="tendance-image" />
        </div>


        {/* Texte à droite */}
        <div className="tendance-text">
          <p className="feature-label">
            LE WEB, UN ÉCOSYSTÈME EN CONSTANTE ÉVOLUTION
          </p>

          <h2 className="feature-title">
            Restez informé des <br />
            <span className="feature-title-purple">dernières tendances</span>
          </h2>

          <div className="feature-description">
            Chaque semaine, nous analysons les nouveautés du web : frameworks
            émergents, bonnes pratiques SEO, accessibilité, et bien plus encore.
            Ne manquez aucune actualité du digital !
          </div>

          <button className="btn-outline feature-link">
            Lire les articles récents →
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
