# 🎮 Gaming Hub

Een moderne, interactieve gaming website met 50+ gratis online games!

## ✨ Features

- 🎮 **50+ Games** in 5 categorieën
  - ⚡ Action (10 games)
  - 🧩 Puzzle (10 games)
  - 🏎️ Racing (10 games)
  - ♟️ Strategy (10 games)
  - ⚽ Sports (10 games)

- 🔍 **Zoekfunctie** - Vind snel jouw favoriete game
- 🎯 **Categorieën Filter** - Sorteer op game type
- 📱 **Responsive Design** - Werkt op alle apparaten
- 🌈 **Modern UI** - Mooie gradient design met animaties
- ⚡ **Snelle Laadtijd** - Geoptimaliseerd voor performance

## 📁 Project Structuur

```
gaming-hub/
├── index.html      # Website structuur
├── style.css       # Moderne styling
├── script.js       # Game logica & functionaliteit
└── README.md       # Documentatie
```

## 🚀 Hoe te Gebruiken

### Online (via GitHub Pages)
1. Ga naar je repository instellingen
2. Enable GitHub Pages
3. Je site is nu online!

### Lokaal

1. Clone de repository
```bash
git clone https://github.com/28250-creator/gaming-hub.git
cd gaming-hub
```

2. Open `index.html` in je browser
3. Start met gamen! 🎮

## 🎮 Games Toevoegen

Om meer games toe te voegen, pas `script.js` aan:

```javascript
const games = [
    { 
        id: 51, 
        title: "Jouw Game", 
        category: "action", 
        emoji: "🎮", 
        description: "Beschrijving hier" 
    },
    // ... meer games
];
```

## 🎨 Categorieën

| Categorie | Beschrijving |
|-----------|------------|
| **⚡ Action** | Spannende actie-games |
| **🧩 Puzzle** | Brain-teasers en puzzels |
| **🏎️ Racing** | Snelle race-spellen |
| **♟️ Strategy** | Tactische spellen |
| **⚽ Sports** | Sportgames |

## 🎨 Design Aanpassen

### Kleuren Veranderen
Open `style.css` en zoek naar deze gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Font Veranderen
Zoek naar `font-family` in `style.css` en verander het naar je favoriete font.

### Layout Aanpassen
Bewerk de `grid-template-columns` in `.game-grid` voor meer/minder kolommen.

## 💡 Ideeën voor Expansie

- [ ] Game-API integratie
- [ ] User accounts & favorieten
- [ ] Leaderboards met scores
- [ ] Achievements systeem
- [ ] Multiplayer support
- [ ] Dark/Light mode toggle
- [ ] Internationalisatie (EN, DE, FR)
- [ ] Mobile app versie
- [ ] Offline support (PWA)
- [ ] Game ratings & reviews

## 🔗 Game Bronnen

Hieronder vind je bronnen om games toe te voegen:

- [Itch.io](https://itch.io) - Indie games
- [HTML5 Games](https://html5games.com) - Klassieke HTML5 games
- [Crazy Games](https://crazygames.com) - Populaire web games
- [GameDistribution](https://gamedistribution.com) - Game distribution platform

## 📝 Changelog

### v1.0 (2026-06-05)
- ✅ Initiële launch
- ✅ 50 games toegevoegd
- ✅ Zoekfunctie
- ✅ Categorie filters
- ✅ Responsive design
- ✅ Modern UI met gradients

## 📄 Licentie

Dit project is open source en vrij te gebruiken en aan te passen.

## 🤝 Bijdragen

Wil je games toevoegen of het design verbeteren? 
1. Fork de repository
2. Maak een new branch
3. Voeg je wijzigingen toe
4. Create een Pull Request

---

**Veel spelplezier!** 🎮✨

*Gemaakt met ❤️ door Gaming Hub*