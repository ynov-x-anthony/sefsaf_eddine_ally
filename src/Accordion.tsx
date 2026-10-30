import { useId, useState, ReactNode } from 'react'

interface Props {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: Props) {
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