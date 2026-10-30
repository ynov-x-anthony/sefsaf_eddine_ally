import { useState } from 'react'

type Props = { title: string; children: React.ReactNode }

// Mission : ce composant marche visuellement, mais un lecteur d'écran
// n'a aucune idée que c'est un volet qui s'ouvre/se ferme. Ajoute les
// attributs ARIA qui manquent (vocabulaire vu dans la quête a11y-03).

export default function Accordion({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="accordion">
      <button className="accordion-trigger" onClick={() => setExpanded(!expanded)}>
        {title} {expanded ? '▲' : '▼'}
      </button>
      {expanded && <div className="accordion-panel">{children}</div>}
    </div>
  )
}
