import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Mettre à jour les champs du formulaire
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Envoyer le message au backend Django
  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${API_URL}/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        message: formData.message,
      }),
    }).then(function (response) {
      if (response.ok) {
        alert("Message envoyé avec succès !");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Erreur lors de l’envoi du message.");
      }
    });
  }

  return (
    <main className="contact-page">
      {/* Section d’introduction */}
      <section className="contact-hero">
        <h1 className="contact-title">Votre avis compte&nbsp;!</h1>
        <div className="contact-subtitle">
          Votre retour est essentiel pour nous améliorer.
        </div>
      </section>

      {/* Carte le formulaire */}
      <section className="contact-card-wrapper">
        <form className="contact-card" onSubmit={handleSubmit}>
          {/* Nom + Prénom */}
          <div className="contact-row">
            <div className="contact-field">
              <label className="contact-label">Nom</label>
              <input
                type="text"
                className="contact-input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label className="contact-label">Prénom</label>
              <input
                type="text"
                className="contact-input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
