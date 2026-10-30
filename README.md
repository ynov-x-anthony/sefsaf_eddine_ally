# ♿ Accessibilité : Challenges

5 challenges pratiques, un par quête du module Accessibilité. **Une branche = un challenge en mode starter** : une petite app Vite + React + TypeScript qui contient déjà des problèmes d'accessibilité bien réels, à toi de les corriger.

Chaque branche est **indépendante** : pas besoin d'avoir fini le challenge précédent pour attaquer le suivant.

## Sommaire

| # | Challenge | Branche | Ce que tu corriges |
|---|-----------|---------|---------------------|
| 1 | Enjeux, cadre légal et WCAG | [`a11y-01-enjeux-wcag`](../../tree/a11y-01-enjeux-wcag) | Auditer une page et classer 6 problèmes réels par principe WCAG (POUR) |
| 2 | HTML sémantique en React | [`a11y-02-html-semantique`](../../tree/a11y-02-html-semantique) | Remplacer des `<div>` par de vrais landmarks, boutons, labels |
| 3 | ARIA, composants interactifs | [`a11y-03-aria-composants`](../../tree/a11y-03-aria-composants) | Rendre un accordéon et une modale lisibles par un lecteur d'écran |
| 4 | Navigation clavier, focus | [`a11y-04-clavier-focus`](../../tree/a11y-04-clavier-focus) | Réparer l'ordre de tabulation, le focus visible et le focus trap |
| 5 | Contrastes & audit | [`a11y-05-contrastes-audit`](../../tree/a11y-05-contrastes-audit) | Auditer avec Lighthouse/axe/WAVE puis corriger une palette de couleurs |

## Comment démarrer un challenge

```bash
git clone git@github.com:Antho-Instructor/a11y-challenges.git
cd a11y-challenges
git checkout a11y-02-html-semantique   # par exemple
npm install
npm run dev
```

Le `README.md` de chaque branche contient la mission et des indices progressifs repliés (`<details>`) : essaie d'abord sans les ouvrir, ils sont là pour débloquer, pas pour spoiler direct la solution.

## Ressources du module

- Les quêtes complètes (théorie + quiz) : `a11y-01` à `a11y-05` du dossier `quests-a11y-seo/`
- 2 cours complémentaires : *Handicap & technologies d'assistance*, *Accessibilité du contenu*
- Outils d'audit : [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (DevTools Chrome, onglet Accessibility), [axe DevTools](https://www.deque.com/axe/devtools/), [WAVE](https://wave.webaim.org/)
