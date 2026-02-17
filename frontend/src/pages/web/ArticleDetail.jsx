import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/articles/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Article not found");
        }
        return res.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <p>Loading...</p>
      </main>
    );
  }

  if (!article) {
    return (
      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <p>Article not found.</p>
        <button onClick={() => navigate("/articles")} style={{ marginTop: "20px" }}>
          Back to Articles
        </button>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <button 
        onClick={() => navigate("/articles")} 
        style={{ 
          marginBottom: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          background: "#444",
          color: "#fff",
          border: "none",
          borderRadius: "4px"
        }}
      >
        ← Back to Articles
      </button>

      <article>
        <h1>{article.title}</h1>
        
        <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "20px" }}>
          Par {article.author} —{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </p>

        <div style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
          {article.content}
        </div>
      </article>
    </main>
  );
}

export default ArticleDetail;
