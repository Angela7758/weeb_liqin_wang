// src/pages/web/Home.jsx
import React from "react";

// Images
import desktopImg from "../../images/Desktop.png";
import smartfinder from "../../images/smartfinder.png";
import zoomerr from "../../images/zoomerr.png";
import shells from "../../images/shells.png";
import waves from "../../images/waves.png";
import artvenue from "../../images/artvenue.png";
import shapesImg from "../../images/Shapes.png";

function Home() {
  return (
    <main className="home-page">
      
      {/* Section principale */}
      <section className="hero">
        <h1 className="hero-title">
          Explorez le Web sous toutes ses facettes
        </h1>

        <p className="hero-subtitle">
          Le monde du web évolue constamment. Sur ce blog, vous trouverez des
          articles et des ressources pour mieux comprendre les technologies
          actuelles et progresser pas à pas.
        </p>

        <div className="hero-actions">
          <a href="/articles">
            <button className="btn-primary">
              Voir les articles
            </button>
          </a>

          <button className="btn-outline">
            S&apos;abonner à la newsletter
          </button>
        </div>

        {/* Image principale */}
        <div className="hero-illustration">
          <img
            src={desktopImg}
            alt="Illustration web"
            className="hero-image"
          />
        </div>
      </section>

      {/* Section partenaires */}
      <section className="trusted-section">
        <h2 className="trusted-title">Ils nous font confiance</h2>

        <div className="trusted-logos">
          <div className="logo-item">
            <img src={smartfinder} alt="SmartFinder" />
            <span>SmartFinder</span>
          </div>

          <div className="logo-item">
            <img src={zoomerr} alt="Zoomerr" />
            <span>Zoomerr</span>
          </div>

          <div className="logo-item">
            <img src={shells} alt="Shells" />
            <span>Shells</span>
          </div>

          <div className="logo-item">
            <img src={waves} alt="Waves" />
            <span>Waves</span>
          </div>

          <div className="logo-item">
            <img src={artvenue} alt="ArtVenue" />
            <span>ArtVenue</span>
          </div>
        </div>
      </section>

      {/* Section apprendre */}
      <section className="feature-section">
        <div>
          <h2>
            Apprenez et progressez
          </h2>

          <p className="feature-description">
            Que vous soyez débutant ou déjà expérimenté, nous proposons des
            contenus simples pour apprendre le développement web et découvrir
            de nouvelles pratiques.
          </p>

          <button className="btn-outline">
            Explorer les ressources
          </button>
        </div>

        <div>
          <img
            src={desktopImg}
            alt="Formation web"
            className="feature-image"
          />
        </div>
      </section>

      {/* Section tendances */}
      <section className="tendance-section">
        <div>
          <img
            src={shapesImg}
            alt="Illustration tendances"
            className="tendance-image"
          />
        </div>

        <div>
          <h2>
            Restez informé des tendances
          </h2>

          <p className="feature-description">
            Chaque semaine, nous partageons des articles sur les nouveautés du
            web, les frameworks populaires et les bonnes pratiques à connaître.
          </p>

          <button className="btn-outline">
            Lire les derniers articles
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
