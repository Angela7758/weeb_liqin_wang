import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Register() {
  // Champs du formulaire
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Message affiché à l'utilisateur
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Envoi du formulaire
  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    fetch(`${API_URL}/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id || data.username) {
          setMessage("Compte créé avec succès. Redirection vers la connexion...");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          setMessage("Erreur lors de la création du compte.");
        }
      })
      .catch(() => {
        setMessage("Erreur serveur.");
      });
  }

  return (
    <main className="login-page">
      <section className="login-wrapper">
        <h1 className="login-title">Créer un compte</h1>

        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Nom d'utilisateur</label>
            <input
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label>Mot de passe</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && <p>{message}</p>}

          <button type="submit" className="btn-primary login-button">
            Créer un compte
          </button>
        </form>
      </section>
    </main>
  );
}

export default Register;
