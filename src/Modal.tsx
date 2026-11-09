import { useEffect, useRef } from 'react'

export default function Modal({ onClose }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // 1. Sauvegarde le bouton qui a ouvert la modale
    previouslyFocused.current = document.activeElement as HTMLElement
    
    // 2. Trouve tous les éléments qu'on peut focus dans la modale
    const focusables = ref.current!.querySelectorAll<HTMLElement>(
      'button, [href], input, select, [tabindex]:not([tabindex="-1"])'
    )
    // 3. Met le focus direct sur le premier élément (le select)
    focusables[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      
      // Si on fait MAJ + Tab sur le 1er élément -> on va au dernier
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } 
      // Si on fait Tab sur le dernier élément -> on revient au premier
      else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }
    
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      // 4. Rend le focus au bouton d'origine quand on ferme
      previouslyFocused.current?.focus()
    }
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