function Home() {
  return (
    <div className="page home-page">
      {/* Hero 区域 */}
      <section className="hero">
        <p className="hero-kicker">Weeb, un blog sur le web</p>
        <h1>
          Explorez le <span className="accent">Web</span> sous toutes
          ses facettes
        </h1>
        <p className="hero-text">
          Le monde du web évolue constamment, et nous sommes là pour vous guider
          à travers ses tendances, technologies et meilleures pratiques...
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Découvrir les articles</button>
          <button className="btn-outline">S'abonner à la newsletter</button>
        </div>

        {/* 这里可以放一张示意图片（用 div 占位也行） */}
        <div className="hero-illustration">[ Illustration ]</div>
      </section>

      {/* 信任品牌 */}
      <section className="trusted">
        <h2>Ils nous font confiance</h2>
        <div className="logos-row">
          <span>SmartFinder</span>
          <span>Zoomerr</span>
          <span>SHELLS</span>
          <span>WAVES</span>
          <span>ArtVenue</span>
        </div>
      </section>

      {/* 资源 Section */}
      <section className="section-two">
        <div className="text-block">
          <p className="section-kicker">DES RESSOURCES POUR TOUS LES NIVEAUX</p>
          <h2>Apprenez et progressez</h2>
          <p>
            Que vous débutiez en développement web ou que vous soyez un expert...
          </p>
          <button className="link-button">Explorer les ressources →</button>
        </div>
        <div className="image-block">[ Illustration ]</div>
      </section>

      {/* 最新趋势 Section */}
      <section className="section-three">
        <div className="image-block">[ Shape Illustration ]</div>
        <div className="text-block">
          <p className="section-kicker">
            LE WEB, UN ÉCOSYSTÈME EN CONSTANTE ÉVOLUTION
          </p>
          <h2>
            Restez informé des dernières <span className="accent">tendances</span>
          </h2>
          <p>
            Chaque semaine, nous analysons les nouveautés du web...
          </p>
          <button className="link-button">Lire les articles récents →</button>
        </div>
      </section>
    </div>
  )
}

export default Home
