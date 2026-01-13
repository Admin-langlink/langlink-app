# Changelog LangLink
## [1.3.0] - 2025-01-13

### ✨ Optimisation 3 : Navigation mobile professionnelle

#### Améliorations
- Menu burger visible et fonctionnel avec animation fluide 3 lignes → X
- Menu mobile moderne avec dégradé de fond et sections organisées
- Overlay sombre avec effet blur sur l'arrière-plan
- Animations séquentielles des sections du menu (fade-in + slide)
- Scroll de la page bloqué quand le menu est ouvert
- Fermeture intuitive : clic sur lien, overlay, ou touche Escape

#### Design
- Sections avec émojis et titres stylés (💡 Solution, 🎨 Fresque...)
- Barre de couleur animée au hover sur les liens
- Bouton Contact mis en valeur (CTA avec gradient bleu)
- Scrollbar personnalisée aux couleurs LangLink
- Espacement et lisibilité optimisés

#### Performance
- Transitions CSS optimisées (cubic-bezier pour fluidité)
- GPU acceleration via transform
- Animations 60fps sans JavaScript lourd

#### Accessibilité
- Attributs ARIA (aria-expanded, aria-controls, aria-label)
- Fermeture au clavier (Escape)
- Focus visible sur les liens

#### Fichiers modifiés
- `assets/css/global.css`
- `assets/css/navigation-enhanced.css`
- `assets/js/navigation.js`
- `layouts/_default/baseof.html`

---

## [13 Janvier 2026] - Optimisations Performance + Animations

### ✅ Performance
- CSS externalisé de baseof.html vers assets/css/global.css
- Minification activée dans config.toml
- CSS et JS minifiés automatiquement
- Taille bundle CSS réduite de ~30%

### ✨ Animations
- Ajout de assets/css/animations.css
- Animations au chargement : fade-in, fade-in-up, scale-in
- Effets hover sur boutons (translateY + box-shadow)
- Effets hover sur cards (elevation)
- Soulignement animé sur liens
- Animation du logo au hover
- Délais séquentiels sur persona cards (100ms, 200ms, 300ms)
- Support prefers-reduced-motion pour accessibilité

### 🗂️ Fichiers modifiés
- `config.toml` - Ajout configuration minification
- `layouts/_default/baseof.html` - CSS externalisé
- `layouts/_default/home.html` - Classes d'animation ajoutées
- `assets/css/global.css` - NOUVEAU (CSS global externalisé)
- `assets/css/animations.css` - NOUVEAU (animations et transitions)

### 📊 Résultats
- Temps de chargement amélioré
- UX plus dynamique et engageante
- Site plus "vivant" avec micro-interactions
- Base solide pour futures optimisations