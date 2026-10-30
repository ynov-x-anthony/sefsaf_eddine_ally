import './App.css'

// Mission : ce blog fonctionne, mais tout est construit en <div>. Rends-le
// sémantique : landmarks, hiérarchie de titres, vrai bouton, vrai label.

function App() {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">DevBlog</div>
        <div className="nav">
          <div className="nav-link">Accueil</div>
          <div className="nav-link">Articles</div>
          <div className="nav-link">Contact</div>
        </div>
      </div>

      <div className="main">
        <div className="article">
          <div className="title">Pourquoi apprendre TypeScript en 2026</div>
          <div className="meta">Publié le 3 mars 2026</div>
          <div className="small-title">Un typage qui rassure</div>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          <div className="small-title">Un écosystème mature</div>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </div>

        <div className="like-btn" onClick={() => alert("Merci pour le like !")}>
          👍 J'aime cet article
        </div>

        <div className="newsletter">
          <div className="small-title">Reste informé</div>
          <input type="email" placeholder="ton@email.fr" />
          <div className="submit-btn" onClick={() => alert('Inscription envoyée')}>
            S'inscrire
          </div>
        </div>
      </div>

      <div className="footer">© 2026 DevBlog</div>
    </div>
  )
}

export default App
