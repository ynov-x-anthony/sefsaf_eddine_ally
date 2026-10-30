# Quête 4 : Navigation clavier, focus

**Mission** : débranche ta souris. 4 problèmes volontaires empêchent
aujourd'hui une utilisation 100% clavier.

## Checklist à cocher

- [ ] Retirer le `tabIndex={1}` piégeux (jamais de `tabIndex` positif)
- [ ] Rendre le focus visible (ne pas juste supprimer `outline`, proposer un style de focus clair)
- [ ] Ajouter un vrai **skip link** utilisable (visible au focus) qui saute au formulaire
- [ ] Implémenter le **focus trap** dans `Modal.tsx` : Tab/Shift+Tab tournent en boucle à l'intérieur de la modale, et le focus revient sur le bouton d'ouverture à la fermeture

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : focus visible</summary>

Ne te contente pas de supprimer la règle `*:focus { outline: none; }` : vérifie
aussi qu'avec le style par défaut du navigateur, l'anneau de focus reste visible
sur fond blanc. Tu peux personnaliser avec `:focus-visible` plutôt que `:focus`
pour ne l'afficher qu'à la navigation clavier.

</details>

<details>
<summary>💡 Indice 2 : l'algorithme du focus trap</summary>

Au montage de la modale :
1. Récupère tous les éléments focusables à l'intérieur (`button, [href], input, select, [tabindex]:not([tabindex="-1"])`).
2. Mets le focus sur le premier.
3. Sur `Tab` depuis le dernier élément → renvoie le focus sur le premier (et l'inverse avec `Shift+Tab` depuis le premier).
4. À la fermeture, restaure le focus sur l'élément qui avait le focus avant l'ouverture (sauvegarde-le avec `document.activeElement` avant d'ouvrir).

</details>

<details>
<summary>✅ Solution : Modal.tsx avec focus trap</summary>

```tsx
import { useEffect, useRef } from 'react'

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement
    const focusables = ref.current!.querySelectorAll<HTMLElement>(
      'button, [href], input, select, [tabindex]:not([tabindex="-1"])'
    )
    focusables[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
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
```

Et dans `App.tsx`, un skip link visible au focus :
```tsx
<a href="#form" className="skip-link">Aller au formulaire</a>
```
```css
.skip-link {
  position: absolute; left: -9999px;
}
.skip-link:focus {
  position: static; display: inline-block; padding: .4rem .8rem;
  background: #111; color: white;
}
```

</details>
