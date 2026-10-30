type Props = { onClose: () => void }

// Mission : cette modale s'ouvre/se ferme, mais rien n'indique à un lecteur
// d'écran qu'il s'agit d'une boîte de dialogue, et Échap ne fait rien.

export default function Modal({ onClose }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Informations</h2>
        <p>Ce module couvre l'accessibilité et le SEO.</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
