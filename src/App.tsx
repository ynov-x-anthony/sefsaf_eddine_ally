import './App.css'

// NewsHub : une mini page d'actus. Elle marche très bien à la souris.
// Mission : ne touche à RIEN ici pour l'instant. Lis le code, repère les
// problèmes, et remplis AUDIT.md. (Tu peux corriger en bonus si tu veux,
// mais ce n'est pas demandé pour cette quête.)

const articles = [
  { id: 1, title: 'La ville lance un plan vélo', status: 'publié' },
  { id: 2, title: 'Nouveau budget voté au conseil', status: 'annulé' },
  { id: 3, title: 'Festival de musique ce week-end', status: 'publié' },
]

function App() {
  return (
    <div className="page">
      <h1>NewsHub</h1>

      <img src="/hero.jpg" />

      <h3>Derniers articles</h3>

      <ul className="articles">
        {articles.map((a) => (
          <li key={a.id} className="article">
            <span className={'dot ' + (a.status === 'annulé' ? 'dot-red' : 'dot-green')} />
            <span>{a.title}</span>
          </li>
        ))}
      </ul>

      <div className="carousel">
        <p>📢 Abonnez-vous à notre newsletter pour ne rien rater !</p>
      </div>

      <div className="see-more" onClick={() => alert('Chargement de la suite...')}>
        Voir plus
      </div>

      <p>
        Pour en savoir plus sur le plan vélo, <a href="/plan-velo">cliquez ici</a>.
        Pour en savoir plus sur le budget, <a href="/budget">cliquez ici</a>.
        Pour en savoir plus sur le festival, <a href="/festival">cliquez ici</a>.
      </p>
    </div>
  )
}

export default App
