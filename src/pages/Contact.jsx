function Contact() {
  return (
    <div className="page contact-page">
      <section className="contact-hero">
        <h1>Votre avis compte !</h1>
        <p>
          Votre retour est essentiel pour nous améliorer ! Partagez votre
          expérience, dites-nous ce que vous aimez et ce que nous pourrions
          améliorer...
        </p>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nom</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Prénom</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Téléphone</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" />
          </div>

          <button type="submit" className="btn-primary form-submit">
            Contact
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
