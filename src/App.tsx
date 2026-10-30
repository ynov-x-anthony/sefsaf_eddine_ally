import './App.css'

// Mission : lance Lighthouse (onglet Accessibility) et/ou axe DevTools sur
// cette page, note les violations de contraste dans AUDIT.md, puis corrige
// les couleurs dans App.css pour atteindre le ratio AA.

function App() {
  return (
    <div className="page">
      <h1>Espace client</h1>
      <p className="subtitle">Gère ton abonnement et tes préférences.</p>

      <div className="card">
        <p className="label">Statut de l'abonnement</p>
        <p className="value">Actif jusqu'au 12 décembre 2026</p>
        <button className="btn-primary">Gérer mon abonnement</button>
      </div>

      <div className="card">
        <p className="label">Astuce</p>
        <p className="hint">
          Pense à vérifier tes informations de facturation avant le
          renouvellement automatique.
        </p>
      </div>
    </div>
  )
}

export default App
