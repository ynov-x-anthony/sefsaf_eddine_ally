# Quête 5 : Contrastes de couleurs et audit d'accessibilité

**Mission** : en 2 temps.

**1. Audit.** Lance Lighthouse, axe DevTools et WAVE sur la page, et remplis
[`AUDIT.md`](./AUDIT.md).

**2. Correction.** Corrige `src/App.css` pour que les 4 éléments repérés
passent le seuil WCAG AA (texte normal : **4.5:1**, grand texte/UI : **3:1**),
sans tout repeindre en noir sur blanc, garde un style cohérent.

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : où sont les 4 problèmes</summary>

`.subtitle`, `.label`, `.hint` sont des textes gris clair sur fond blanc, un
classique de design "épuré" qui casse le contraste. `.btn-primary` est un
texte blanc sur un bleu trop clair.

</details>

<details>
<summary>💡 Indice 2 : comment mesurer vite</summary>

Dans Chrome DevTools, sélectionne l'élément, ouvre le panneau Styles, clique
sur le petit carré de couleur à côté de `color` : DevTools affiche directement
le ratio de contraste et s'il passe AA/AAA, avec une suggestion de couleur la
plus proche qui passe.

</details>

<details>
<summary>✅ Solution : une palette qui passe AA</summary>

```css
.subtitle { color: #5c5c5c; }      /* ratio ≈ 7.1:1 */
.label { color: #595959; }          /* ratio ≈ 7.5:1 */
.hint { color: #595959; }           /* ratio ≈ 7.5:1 */

.btn-primary {
  background: #1a5fa8;              /* bleu plus soutenu */
  color: #ffffff;                   /* ratio ≈ 6.3:1 */
}
```

Ces valeurs gardent la même intention visuelle (gris doux, bleu "primaire")
tout en passant largement le seuil AA.

</details>
