import { useId, useState } from 'react'

export default function Accordion({ title, children }: any) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className="accordion">
      <button
        className="accordion-trigger"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        {title} {expanded ? '▲' : '▼'}
      </button>
      {expanded && (
        <div id={panelId} className="accordion-panel">
          {children}
        </div>
      )}
    </div>
  )
}