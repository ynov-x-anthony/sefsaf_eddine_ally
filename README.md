# Quête 1 : Enjeux, cadre légal et WCAG

**Mission : auditer, pas coder.** `App.tsx` contient une mini page "NewsHub" qui
fonctionne très bien à la souris, mais qui cache **6 vrais problèmes
d'accessibilité**, un par grande famille vue dans la quête `a11y-01`.

## Ce que tu dois rendre

Ouvre [`AUDIT.md`](./AUDIT.md) et remplis le tableau : pour chacun des 6 problèmes,
indique où il est, quel principe WCAG (POUR) il viole, et pourquoi c'est bloquant.

## Démarrer

```bash
npm install
npm run dev
```

Lance l'app, utilise-la à la souris (tout semble marcher), puis ouvre le code.

<details>
<summary>💡 Indice 1 : par où chercher</summary>

Regarde dans l'ordre : la balise `<img>`, la hiérarchie des titres (`h1`, puis
quel niveau juste après ?), le bloc `.see-more`, le bloc `.carousel`, les 3 liens
en bas de page, et les petits ronds de couleur à côté de chaque article.

</details>

<details>
<summary>💡 Indice 2 : une question par problème</summary>

- L'image a-t-elle un texte alternatif ?
- Le titre `h3` arrive juste après le `h1` : qu'est-ce qui manque entre les deux ?
- Le bloc "Voir plus" est un `<div onClick>` : est-il utilisable au clavier ? a-t-il un rôle annoncé à un lecteur d'écran ?
- Le bandeau newsletter ne propose aucun moyen de le fermer ou de le mettre en pause : lis le critère WCAG sur les contenus en mouvement.
- Les 3 liens disent tous "cliquez ici" : si un lecteur d'écran liste tous les liens d'une page hors contexte, que comprend-on ?
- Le statut "annulé" n'est porté que par la couleur du rond : et en noir & blanc, ou pour un daltonien ?

</details>

<details>
<summary>✅ Solution : les 6 problèmes et leur principe WCAG</summary>

| # | Problème | Principe | Pourquoi |
|---|----------|----------|----------|
| 1 | `<img src="/hero.jpg" />` sans `alt` | Perceptible | Un lecteur d'écran ne peut pas décrire l'image ; elle est invisible pour un utilisateur aveugle |
| 2 | `h1` suivi directement d'un `h3` (saut de niveau, pas de `h2`) | Robuste | La hiérarchie de titres sert à naviguer rapidement une page ; un saut casse cette navigation |
| 3 | `<div className="see-more" onClick>` au lieu d'un `<button>` | Opérable | Inatteignable au clavier (pas de `tabIndex`, pas de gestion `Entrée`/`Espace`), et annoncé comme texte brut par un lecteur d'écran, pas comme un contrôle |
| 4 | Bandeau `.carousel` qui s'affiche sans aucun moyen de le fermer/mettre en pause | Opérable | WCAG 2.2.2 : tout contenu qui apparaît doit pouvoir être maîtrisé par l'utilisateur |
| 5 | Trois liens avec le même texte "cliquez ici" | Compréhensible | Le texte d'un lien doit avoir un sens hors contexte (beaucoup d'utilisateurs de lecteur d'écran naviguent par liste de liens) |
| 6 | Statut "annulé"/"publié" porté uniquement par la couleur du point (`dot-red`/`dot-green`) | Perceptible | L'information ne doit jamais reposer uniquement sur la couleur (daltonisme, écran N&B) |

</details>
