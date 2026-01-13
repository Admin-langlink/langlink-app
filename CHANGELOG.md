# Changelog LangLink

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