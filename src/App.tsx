import { useState } from 'react'
import Modal from './Modal'
import './App.css'

// Mission : débranche ta souris. Tab/Shift+Tab/Entrée/Échap doivent suffire
// à tout utiliser. Il y a 4 problèmes volontaires dans ce starter.

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      <h1>Paramètres du compte</h1>

      {/* Problème 1 : un faux lien invisible, placé avant le vrai contenu,
          capture le focus en premier à cause de son tabIndex positif. */}
      <span tabIndex={1} className="decoy">·</span>

      <a href="#form">Aller au formulaire</a>

      <form id="form" className="form">
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <button type="button" onClick={() => setOpen(true)}>
          Ouvrir les préférences avancées
        </button>
      </form>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  )
}

export default App
