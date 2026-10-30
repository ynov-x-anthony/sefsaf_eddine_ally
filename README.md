# Quête 3 : ARIA, composants interactifs

**Mission** : `Accordion.tsx` et `Modal.tsx` fonctionnent à la souris, mais sont
muets pour un lecteur d'écran. Applique les patterns ARIA vus dans la quête.

## Checklist à cocher

**Accordion** :
- [ ] `aria-expanded` sur le bouton déclencheur, synchronisé avec l'état
- [ ] `aria-controls` reliant le bouton au panneau qu'il contrôle
- [ ] Un `id` unique sur le panneau pour que `aria-controls` pointe dessus

**Modal** :
- [ ] `role="dialog"` et `aria-modal="true"` sur le conteneur de la modale
- [ ] `aria-labelledby` pointant vers le `<h2>` du titre
- [ ] La touche `Échap` ferme la modale (`onKeyDown` sur le document ou la modale)

(Le focus trap complet est la quête suivante, concentre-toi sur les rôles/états ARIA et Échap.)

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : rappel de la règle n°1</summary>

« No ARIA is better than Bad ARIA » : les boutons sont déjà de vrais `<button>`,
donc pas besoin de `role="button"`. Il ne manque que les **attributs d'état**
qui décrivent ce qui se passe (ouvert/fermé, quel panneau est concerné).

</details>

<details>
<summary>💡 Indice 2 : le lien bouton ↔ panneau</summary>

```tsx
<button aria-expanded={expanded} aria-controls="panel-1">...</button>
{expanded && <div id="panel-1">...</div>}
```

Pour la modale, `aria-labelledby` fonctionne pareil : il prend l'`id` d'un
élément déjà présent dans le DOM (ton `<h2>Informations</h2>`).

</details>

<details>
<summary>✅ Solution : Accordion.tsx</summary>

```tsx
import { useId, useState } from 'react'

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
```

</details>

<details>
<summary>✅ Solution : Modal.tsx</summary>

```tsx
import { useEffect } from 'react'

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
```

</details>
