# Mon parcours pour me former – France Travail Guadeloupe

Site web statique et interactif qui guide un demandeur d'emploi dans son parcours de formation, en 5 étapes. Chaque étape se débloque avec un **mot clé** donné par le/la conseiller(ère).

1. S'inscrire à France Travail
2. Avoir un entretien avec son/sa conseiller(ère)
3. Valider son projet professionnel (enquête métier, immersion, atelier Activ'Projet, Métierscope)
4. Identifier la bonne formation (organismes par île)
5. Définir qui finance (France Travail, Région, CPF)

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | La page du parcours (HTML, CSS et JS réunis) |
| `questionnaire.html`, `thankyou.html` | Questionnaire de satisfaction et page de remerciement |
| `style.css`, `common.js`, `data.js` | Fichiers utilisés par le questionnaire (adresse de réception dans `data.js` → `CONTACT_EMAIL`) |
| `media/` | Photos HD de la Guadeloupe (facultatif) |

## Ce qui se modifie

Tout se trouve dans la balise `<script>` de `index.html` :

- **`KEYWORDS`** : les 5 mots clés et leurs indices (accents et majuscules ignorés).
- **`ORGS`** : les organismes de formation par île. Pour en ajouter, copier une ligne `{ n: "Nom", a: "Adresse", w: "https://site" }` (`w` est facultatif).

Dans `data.js`, renseigner `CONTACT_EMAIL` pour recevoir les réponses au questionnaire.

## Ajouter de vraies photos

Déposer dans `media/` (elles recouvrent automatiquement les illustrations) :

- `accueil.jpg` : en-tête
- `img-1.jpg` à `img-12.jpg` : cartes des étapes, dans l'ordre d'apparition
- `fin.jpg` : écran de fin

Conseil : photos en JPG, 1600 px de large maximum, moins de 400 Ko chacune.

## Tester en local

Ouvrir `index.html` dans le navigateur, ou lancer `python3 -m http.server` puis aller sur http://localhost:8000.

## Publier avec GitHub Pages

1. Pousser le dépôt sur GitHub (branche `main`).
2. Dépôt → **Settings** → **Pages**.
3. *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)` → **Save**.
4. Le site est en ligne après une minute à `https://<utilisateur>.github.io/<nom-du-depot>/`.

## À vérifier avant diffusion

- Tester les liens externes (formations France Travail, Métierscope, Région, Mon Compte Formation).
- Remplacer les mots clés d'exemple.
- Compléter les organismes de Basse-Terre, Marie-Galante, Les Saintes et La Désirade.
