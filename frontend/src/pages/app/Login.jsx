import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    fetch(`${API_URL}/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access) {
          localStorage.setItem("access_token", data.access);
          navigate("/");
        } else {
          setError("Nom d'utilisateur ou mot de passe incorrect");
        }
      })
      .catch(() => {
        setError("Erreur de connexion au serveur");
      });
  }

  return (
    <main className="login-page">
      <section className="login-wrapper">
        <h1 className="login-title">Se connecter</h1>

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
            <label>Mot de passe</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="btn-primary login-button">
            Se connecter
          </button>

          <p
            className="login-link-underline"
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer" }}
          >
            Créer un compte
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
