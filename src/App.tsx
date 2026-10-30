import { useState } from 'react'
import Accordion from './Accordion'
import Modal from './Modal'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      <h1>Composants interactifs</h1>

      <Accordion title="Qu'est-ce qu'une quête ?">
        Une quête, c'est un module de cours autonome avec un peu de théorie,
        un quiz, et parfois un challenge de code.
      </Accordion>
      <Accordion title="Combien de temps ça prend ?">
        En général entre 1h et 2h, selon la quête.
      </Accordion>

      <button onClick={() => setOpen(true)}>Ouvrir les infos</button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  )
}

export default App
