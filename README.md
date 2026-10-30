# Quête 2 : HTML sémantique en React

**Mission** : ce blog fonctionne visuellement, mais tout est en `<div>`. Avant
de penser à ARIA (prochaine quête), répare la base : la sémantique.

## Checklist à cocher

- [ ] En-tête structuré avec `<header>`/`<nav>`, liens de nav en vrais `<a>`
- [ ] `<main>` autour du contenu principal, `<footer>` en bas de page
- [ ] Un seul `<h1>` par page, puis une hiérarchie propre (`h2` pour les sous-titres de section, pas de saut de niveau)
- [ ] Le bouton "J'aime" et "S'inscrire" sont de vrais `<button>` (pas des `<div onClick>`)
- [ ] Le champ email a un vrai `<label>` associé (pas juste un `placeholder`)

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : quelles balises pour quoi</summary>

`<header>` (bannière du haut), `<nav>` (les liens de navigation, en `<a href="...">`),
`<main>` (le contenu principal, un seul par page), `<article>` (un article de blog
autonome), `<footer>` (pied de page). Chacune de ces balises est annoncée par un
lecteur d'écran comme un "repère" (landmark) qu'on peut atteindre directement.

</details>

<details>
<summary>💡 Indice 2 : button vs a, et le label</summary>

Règle simple : ça **navigue** vers une autre page/URL → `<a href>`. Ça **déclenche
une action** sur la page courante (like, soumettre, ouvrir une modale) → `<button>`.

Pour le label, deux façons valables :
```html
<label htmlFor="email">Ton adresse e-mail</label>
<input id="email" type="email" placeholder="ton@email.fr" />
```

</details>

<details>
<summary>✅ Solution</summary>

```tsx
function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">DevBlog</div>
        <nav className="nav">
          <a className="nav-link" href="/">Accueil</a>
          <a className="nav-link" href="/articles">Articles</a>
          <a className="nav-link" href="/contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <article className="article">
          <h1 className="title">Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">Publié le 3 mars 2026</p>
          <h2 className="small-title">Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          <h2 className="small-title">Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        <button className="like-btn" onClick={() => alert("Merci pour le like !")}>
          👍 J'aime cet article
        </button>

        <section className="newsletter">
          <h2 className="small-title">Reste informé</h2>
          <label htmlFor="newsletter-email">Ton adresse e-mail</label>
          <input id="newsletter-email" type="email" placeholder="ton@email.fr" />
          <button className="submit-btn" onClick={() => alert('Inscription envoyée')}>
            S'inscrire
          </button>
        </section>
      </main>

      <footer className="footer">© 2026 DevBlog</footer>
    </div>
  )
}
```

</details>
