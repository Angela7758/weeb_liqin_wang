import { useEffect, useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

  // Récupération des articles
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Articles</h1>

      {articles.length === 0 && (
        <p>Aucun article disponible.</p>
      )}

      {articles.map((article) => (
        <div
          key={article.id}
          style={{ marginBottom: "32px", borderBottom: "1px solid #444" }}
        >
          <h2>{article.title}</h2>

          <p style={{ fontSize: "14px", color: "#aaa" }}>
            Par {article.author} —{" "}
            {new Date(article.created_at).toLocaleDateString()}
          </p>

          <p>
            {article.content.length > 150
              ? article.content.slice(0, 150) + "..."
              : article.content}
          </p>
        </div>
      ))}
    </main>
  );
}

export default Articles;
