import React, { useState } from "react";
import "../../styles/AddArticles.css";

const API_URL = import.meta.env.VITE_API_URL;

function AddArticles() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("access_token");

    fetch(`${API_URL}/api/articles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Article ajouté avec succès !");
          setTitle("");
          setContent("");
        } else {
          setMessage("Erreur lors de l'ajout de l'article.");
        }
      })
      .catch(() => setMessage("Erreur de connexion au serveur."));
  };

  return (
    <main className="add-article-page">
      <div className="add-article-form-container">
        <h1>Ajouter un article</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-article-form-group">
            <label htmlFor="title" className="add-article-form-label">
              Titre
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="add-article-form-input"
            />
          </div>
          <div className="add-article-form-group">
            <label htmlFor="content" className="add-article-form-label">
              Contenu
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={8}
              className="add-article-form-textarea"
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%" }}>
            Publier
          </button>
          {message && (
            <p
              className={`add-article-form-message ${
                message.includes("succès") ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

export default AddArticles;