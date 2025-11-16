function Login() {
  return (
    <div className="page login-page">
      <section className="login-card">
        <h1>Se connecter</h1>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <button className="btn-primary form-submit">Se connecter</button>

        <p className="login-help">
          Mot de passe oublié ?
        </p>
        <p className="login-help">
          Vous n’avez pas de compte ?{' '}
          <span className="accent-link">créer un</span>
        </p>
      </section>
    </div>
  )
}

export default Login
