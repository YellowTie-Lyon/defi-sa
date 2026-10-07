# DEFI — Cartographie des sections (guide de reconstruction Elementor)

Ce document décrit chaque page et chaque section du site, afin de le reconstruire fidèlement dans Elementor.

## Repères généraux

- **Design tokens** : `design-tokens.json` (racine) + variables CSS dans `frontend/src/index.css` (`:root`) + `frontend/tailwind.config.js`.
- **Identification des sections** : chaque section porte un attribut `data-section="nom"`. Dans Elementor, nommer chaque *Section/Container* avec ce même nom (CSS ID ou classe).
- **Breakpoints Elementor** : Mobile ≤ 767 px · Tablette 768–1024 px · Desktop > 1024 px.
- **Conteneur** : largeur max `1280px`, padding horizontal `24px` (mobile `16px`).
- **Rythme vertical** : sections standard `96px` haut/bas (desktop), `64px` (mobile).
- **Typos** : titres = *Space Grotesk*, textes = *Inter* (Google Fonts).
- **Couleurs clés** : fond sombre `#0B1120`, encre `#0F172A`, rouge accent `#E4002B`, surfaces claires `#F8FAFC`, barre CMJN cyan/magenta/jaune/noir.

### Effets & animations réutilisés
- `reveal` : apparition en fondu + montée (28px) au scroll → **Elementor : Motion Effects « Entrance Animation : Fade In Up »**.
- `hover-lift` : carte qui se soulève (-6px) + ombre au survol → **Elementor : Hover Animation + box-shadow**.
- Zoom image au survol (scale 1.05–1.10, 700ms) → **Elementor : Hover « Zoom »** sur l'image.
- Barre CMJN 4px (dégradé 4 couleurs) → élément décoratif (voir « Éléments délicats »).
- Navbar : transparente au sommet (logo/liens blancs) puis **blanche opaque au scroll** → voir « Éléments délicats ».

---

## Composants globaux

### `navbar` (header fixe) — `components/Navbar.jsx`
- **Structure** : barre CMJN 4px en haut ▸ logo (gauche) ▸ menu (Accueil, Équipements ⌄, Actualités, À propos, Contact) ▸ bouton « Demander un devis » (droite).
- **Équipements** : menu déroulant au survol listant les 5 catégories.
- **Comportement scroll** : en haut de page = fond transparent, logo **blanc** (inversé), liens blancs ; après défilement = fond blanc 92% + flou + ombre `nav`, logo couleur, liens sombres.
- **Tablette/Mobile (≤1024)** : menu masqué, remplacé par un **burger** ouvrant un panneau déroulant (fond blanc) avec les liens + sous-liste Équipements + bouton brochure.
- **Elementor** : Header sticky « on scroll » avec changement de style (Elementor Pro gère le *Scroll Effect* du header ; voir délicats pour le logo inversé).

### `site-footer` — `components/Footer.jsx`
- **Structure** : 4 colonnes → (1) logo + baseline + icônes réseaux ; (2) Navigation ; (3) Équipements (5 catégories) ; (4) Contact (adresse, tél, e-mail) + mini-formulaire newsletter.
- **Bas** : ligne copyright + liens Mentions légales / Confidentialité.
- **Fond** : `#0B1120` avec motif de grille discret.
- **Tablette** : 2 colonnes · **Mobile** : 1 colonne empilée.

---

## Page : Accueil (`/`) — `pages/Home.jsx`

1. **`hero`** — Bannière. Fond `#0B1120` + photo presse (opacité 25%) + grille. Gauche : badge « depuis 1990 », titre H1 avec « Flexo, Hélio & Offset » en **dégradé CMJN (texte)**, paragraphe, 2 boutons (rouge « Découvrir », outline « Télécharger la brochure »). Droite (desktop) : carte image flottante (`floaty`) + encart « 1990 » + barre CMJN.
   - *Tablette* : image de droite conservée, textes réduits. *Mobile* : image de droite **masquée**, CTA pleine largeur.
2. **`stats`** — 4 chiffres (35+, 500+, 20+, 24/7) sur fond blanc, séparateurs verticaux. *Mobile* : grille 2×2.
3. **`mission`** — Fond `#F8FAFC`. Titre « mission » + 3 cartes (icône carrée sombre, titre, texte) avec `hover-lift`. *Mobile* : cartes empilées.
4. **`equipment`** — Grille « bento » des 5 catégories sur photos sombres, titre en bas, description révélée au survol, lien « Découvrir ». 1ʳᵉ carte sur 2 colonnes (desktop). *Tablette* : 2 colonnes · *Mobile* : 1 colonne.
5. **`precision`** — Fond `#0B1120`. 2 colonnes : image (gauche) + bloc « Pourquoi DEFI » avec 4 valeurs (icône rouge). *Mobile* : empilé.
6. **`news`** — Fond blanc. En-tête + lien « Toutes les actualités » ; 3 cartes articles (image, badge catégorie, date, titre, extrait, « Lire la suite »). *Mobile* : 1 colonne.
7. **`partners`** — Bandeau `marquee` horizontal infini des noms de partenaires. *(voir délicats)*
8. **`cta`** — Bloc sombre arrondi `#0F172A` avec halo rouge flou, titre, texte, bouton rouge.

---

## Page : Catégorie équipement (`/equipements/:slug`) — `pages/Category.jsx`

1. **`category-hero`** — Bannière sombre + photo catégorie, fil d'Ariane, titre, description.
2. **`category-nav`** — Barre **sticky** (sous la navbar) de « puces » des 5 catégories ; la catégorie active en sombre. *Mobile* : scroll horizontal.
3. **`category-products`** — Fond `#F8FAFC`. Compteur de produits + grille de cartes produit (image, titre, description, lien « Découvrir ») menant à la fiche produit ; `hover-lift` + zoom image. Bas : retour accueil + bouton « Contactez nos experts ». *Tablette* : 2 colonnes · *Mobile* : 1 colonne.

---

## Page : Fiche produit (`/equipements/:slug/:produit`) — `pages/ProductDetail.jsx`

1. **`product-hero`** — Bannière sombre : fil d'Ariane, 2 colonnes (grande image cliquable à gauche / badge catégorie + titre + description + barre CMJN + boutons « Demander un devis » et « Voir le catalogue » à droite). *Mobile* : empilé.
2. **`product-tabs`** — **Sous-menu à onglets sticky** (sous la navbar) : **Description · Points forts · Options & services · Photos & vidéos**. Onglet actif souligné en rouge. *Mobile* : scroll horizontal.
3. **`product-content`** — Disposition 2/3 + 1/3 :
   - Colonne gauche = contenu de l'onglet actif :
     - *Description* : paragraphes.
     - *Points forts* : grille de puces (pastille rouge ✓).
     - *Options & services* : liste numérotée.
     - *Photos & vidéos* : vignettes vidéo (overlay ▶ ouvrant une **visionneuse YouTube modale**) + galerie photos (clic = **lightbox** image).
   - Colonne droite = encart **« Caractéristiques techniques »** sombre, **sticky**, toujours visible, + bouton devis.
   - *Mobile/Tablette* : l'encart specs passe sous le contenu.
4. **`product-quote`** (`#devis`) — Fond `#F8FAFC`. 2 colonnes : accroche + rappel produit (vignette) / **formulaire de devis** (nom, e-mail, téléphone, société, sujet pré-rempli avec le nom du produit, message) + message de succès.
5. **`product-related`** — 3 produits similaires de la même catégorie.
- **Modale média** (hors flux) : overlay plein écran noir 80% avec iframe YouTube 16:9 (+ lien « Ouvrir sur YouTube ») ou image agrandie ; bouton de fermeture.

---

## Page : Actualités (`/actualites`) — `pages/News.jsx`

1. **`news-hero`** — Bannière sombre : overline cyan, titre « Technique & innovation », sous-titre.
2. **`news-list`** — Fond blanc. Filtres par catégorie (boutons « puces »), **article à la une** (2 colonnes image + texte), puis grille de cartes articles. *Mobile* : 1 colonne, à la une empilée.

## Page : Article (`/actualites/:slug`) — `pages/NewsDetail.jsx`

1. **`article-hero`** — Bannière sombre + photo : lien retour, badge catégorie + date, titre.
2. **`article-body`** — Contenu centré (max 3xl) : barre CMJN, chapô, paragraphes, encart CTA devis.
3. **`article-related`** — Fond `#F8FAFC` : 3 articles « À lire aussi ».

## Page : À propos (`/a-propos`) — `pages/About.jsx`

1. **`about-hero`** — Bannière sombre + photo.
2. **`about-story`** — 2 colonnes texte/image + encart statistique « 35+ ». *Mobile* : empilé.
3. **`about-stats`** — Bandeau sombre 4 chiffres.
4. **`about-values`** — 4 cartes valeurs (icône rouge). *Tablette* 2 col · *Mobile* 1 col.
5. **`about-why`** — 2 colonnes : liste « pourquoi choisir » (✓) + bouton / image.

## Page : Contact (`/contact`) — `pages/Contact.jsx`

1. **`contact-hero`** — Bannière sombre : titre + sous-titre.
2. **`contact-body`** — Fond `#F8FAFC`, 2 colonnes : (gauche) cartes infos (adresse 117 Rue des Saules 38110 Saint-Jean-de-Soudain, tél 04 74 92 26 70, e-mail contact@defi-sa.com, horaires) + **carte OpenStreetMap** ; (droite) **formulaire de contact**. *Mobile* : empilé (infos puis formulaire).

---

## Note sur les données
Le site est actuellement en **frontend seul avec données simulées (MOCK)** : produits, actualités, options/médias et soumissions de formulaires ne sont pas connectés à un backend. Dans Elementor, ces contenus deviendront des pages/CPT réels (ex. produits, articles) et les formulaires des *Form Widgets* reliés à l'e-mail.
