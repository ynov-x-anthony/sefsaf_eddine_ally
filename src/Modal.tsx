import { useEffect, useRef } from 'react'

type Props = { onClose: () => void }

// Mission : en Tab, le focus doit rester PIÉGÉ dans cette modale (focus
// trap), et revenir sur le bouton qui l'a ouverte à la fermeture.
// Pour l'instant, Tab s'échappe vers la page derrière. Rien n'est fait.

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" ref={ref}>
        <h2 id="m-title">Préférences avancées</h2>
        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
