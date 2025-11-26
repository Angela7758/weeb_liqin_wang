import React from "react";

function Contact() {
  return (
    <main className="contact-page">
      {/* Section d’introduction */}
      <section className="contact-hero">
        <h1 className="contact-title">Votre avis compte&nbsp;!</h1>
        <div className="contact-subtitle">
          Votre retour est essentiel pour nous améliorer ! Partagez votre
          expérience, dites-nous ce que vous aimez et ce que nous pourrions
          améliorer. Vos suggestions nous aident à faire de ce blog une
          ressource toujours plus utile et enrichissante.
        </div>
      </section>

      {/* Carte le formulaire */}
      <section className="contact-card-wrapper">
        <form className="contact-card">
          {/*  Nom + Prénom */}
          <div className="contact-row">
            <div className="contact-field">
              <label className="contact-label">Nom</label>
              <input
                type="text"
                className="contact-input"
                name="lastName"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label">Prénom</label>
              <input
                type="text"
                className="contact-input"
                name="firstName"
              />
            </div>
          </div>


          {/* Email */}
          <div className="contact-row">
            <div className="contact-field contact-field-full">
              <label className="contact-label">Email</label>
              <input
                type="email"
                className="contact-input"
                name="email"

              />
            </div>
          </div>

          {/* Message */}
          <div className="contact-row">
            <div className="contact-field contact-field-full">
              <label className="contact-label">Message</label>
              <textarea
                className="contact-textarea"
                name="message"
                rows="4"
              ></textarea>
            </div>
          </div>

          {/* Bouton de Contact */}
          <div className="contact-actions">
            <button type="submit" className="btn-primary contact-button">
              Contact
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
