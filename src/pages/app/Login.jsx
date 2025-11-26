import React from "react";

function Login() {
  return (
    
    <main className="login-page">

      {/* Section le formulaire de connexion */}

      <section className="login-wrapper">

        {/* Titre de la page */}
        <h1 className="login-title">Se connecter</h1>

        {/* login-card */}
        <form className="login-card">
          {/*  Email */}
          <div className="login-field">
            <label className="login-label">Email</label>
            <input
              type="email"
              name="email"
              className="login-input"
            />
          </div>

          {/* Password */}
          <div className="login-field">
            <label className="login-label">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
            />
          </div>

          {/* Bouton Connecter */}
          <div className="login-actions">
            <button type="submit" className="btn-primary login-button">
              Se connecter
            </button>
          </div>

          {/* mot de passe oublié + création de compte */}
          <div className="login-links">
            <p className="login-link">Mot de passe oublié&nbsp;?</p>

            <p className="login-link">
              Vous n’avez pas de compte ? Vous pouvez en{" "}
              <span className="login-link-underline">créer un</span>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
