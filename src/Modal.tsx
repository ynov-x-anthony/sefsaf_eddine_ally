import { useEffect } from 'react'

interface Props {
  onClose: () => void;
}

export default function Modal({ onClose }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <h2 id="modal-title">Informations</h2>
        <p>Ce module couvre l'accessibilité et le SEO.</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}