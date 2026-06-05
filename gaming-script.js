// Database mit games
const games = [
    // Action Games
    { id: 1, title: "Soldier Rush", category: "action", emoji: "🔫", description: "Intense action shooter game" },
    { id: 2, title: "Zombie Killer", category: "action", emoji: "🧟", description: "Fight off zombie hordes" },
    { id: 3, title: "Space Invaders", category: "action", emoji: "👽", description: "Classic space shooter" },
    { id: 4, title: "Car Crash", category: "action", emoji: "💥", description: "Epic vehicle destruction" },
    { id: 5, title: "Ninja Battle", category: "action", emoji: "🥷", description: "Master the art of combat" },
    { id: 6, title: "Dragon Slayer", category: "action", emoji: "🐉", description: "Defeat the dragon boss" },
    { id: 7, title: "Pirate Raid", category: "action", emoji: "🏴‍☠️", description: "Raid enemy ships" },
    { id: 8, title: "Meteor Dodge", category: "action", emoji: "☄️", description: "Avoid falling meteors" },
    { id: 9, title: "Sword Master", category: "action", emoji: "⚔️", description: "Intense sword battles" },
    { id: 10, title: "Bomb Defuser", category: "action", emoji: "💣", description: "Defuse explosives in time" },

    // Puzzle Games
    { id: 11, title: "Block Blast", category: "puzzle", emoji: "🧱", description: "Match and clear blocks" },
    { id: 12, title: "Sudoku Challenge", category: "puzzle", emoji: "🔢", description: "Solve Sudoku puzzles" },
    { id: 13, title: "Memory Match", category: "puzzle", emoji: "🧠", description: "Test your memory skills" },
    { id: 14, title: "Shape Sorter", category: "puzzle", emoji: "🔺", description: "Sort shapes correctly" },
    { id: 15, title: "Pipe Connect", category: "puzzle", emoji: "🔧", description: "Connect pipes without leaks" },
    { id: 16, title: "Word Search", category: "puzzle", emoji: "📝", description: "Find hidden words" },
    { id: 17, title: "Jigsaw Master", category: "puzzle", emoji: "🧩", description: "Complete the jigsaw puzzle" },
    { id: 18, title: "Maze Runner", category: "puzzle", emoji: "🌀", description: "Navigate through mazes" },
    { id: 19, title: "Logic Grid", category: "puzzle", emoji: "📊", description: "Solve logic puzzles" },
    { id: 20, title: "Number Crush", category: "puzzle", emoji: "💯", description: "Match number combinations" },

    // Racing Games
    { id: 21, title: "F1 Speed", category: "racing", emoji: "🏎️", description: "Formula 1 racing action" },
    { id: 22, title: "Street Racer", category: "racing", emoji: "🏍️", description: "Street racing championships" },
    { id: 23, title: "Truck Driver", category: "racing", emoji: "🚚", description: "Deliver cargo at high speed" },
    { id: 24, title: "Monster Truck", category: "racing", emoji: "🦖", description: "Crush cars with monster trucks" },
    { id: 25, title: "Drift Master", category: "racing", emoji: "💨", description: "Master drifting techniques" },
    { id: 26, title: "Bike Race", category: "racing", emoji: "🚴", description: "Extreme bike racing" },
    { id: 27, title: "Off-Road King", category: "racing", emoji: "🛞", description: "Conquer rough terrains" },
    { id: 28, title: "Lap Champion", category: "racing", emoji: "🏁", description: "Win multiple lap races" },
    { id: 29, title: "Speed Runner", category: "racing", emoji: "⚡", description: "Race against time" },
    { id: 30, title: "Stunt Driver", category: "racing", emoji: "🎬", description: "Perform crazy stunts" },

    // Strategy Games
    { id: 31, title: "Chess Master", category: "strategy", emoji: "♟️", description: "Classical chess gameplay" },
    { id: 32, title: "Tower Defense", category: "strategy", emoji: "🏰", description: "Defend your tower" },
    { id: 33, title: "Army Tactics", category: "strategy", emoji: "🎖️", description: "Plan military strategies" },
    { id: 34, title: "Empire Builder", category: "strategy", emoji: "👑", description: "Build and manage your empire" },
    { id: 35, title: "Resource Manager", category: "strategy", emoji: "💰", description: "Manage limited resources" },
    { id: 36, title: "Checkers Pro", category: "strategy", emoji: "⚫", description: "Play checkers online" },
    { id: 37, title: "Domino Chain", category: "strategy", emoji: "🎲", description: "Strategic domino placement" },
    { id: 38, title: "Card Strategist", category: "strategy", emoji: "🃏", description: "Win with card tactics" },
    { id: 39, title: "Hex Battle", category: "strategy", emoji: "⬡", description: "Battle on hex grid" },
    { id: 40, title: "Civilization", category: "strategy", emoji: "🌍", description: "Build your civilization" },

    // Sports Games
    { id: 41, title: "Football Pro", category: "sports", emoji: "⚽", description: "Play competitive football" },
    { id: 42, title: "Basketball King", category: "sports", emoji: "🏀", description: "Shoot hoops and score" },
    { id: 43, title: "Tennis Master", category: "sports", emoji: "🎾", description: "Win tennis matches" },
    { id: 44, title: "Volleyball Champ", category: "sports", emoji: "🏐", description: "Competitive volleyball" },
    { id: 45, title: "Ice Hockey", category: "sports", emoji: "🏒", description: "Fast-paced hockey action" },
    { id: 46, title: "Golf Course", category: "sports", emoji: "⛳", description: "Perfect your golf swing" },
    { id: 47, title: "Boxing Ring", category: "sports", emoji: "🥊", description: "Fight in the boxing ring" },
    { id: 48, title: "Bowling Strike", category: "sports", emoji: "🎳", description: "Bowl for strikes" },
    { id: 49, title: "Skateboard Pro", category: "sports", emoji: "🛹", description: "Perform skateboard tricks" },
    { id: 50, title: "Badminton", category: "sports", emoji: "🏸", description: "Play competitive badminton" },
];

// Render games on page load
window.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
    setupEventListeners();
});

// Render games to the DOM
function renderGames(gamesToRender) {
    const container = document.getElementById('gameContainer');
    container.innerHTML = '';

    if (gamesToRender.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Geen games gevonden 😢</p>';
        return;
    }

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game';
        gameCard.dataset.category = game.category;
        gameCard.dataset.title = game.title.toLowerCase();

        gameCard.innerHTML = `
            <div class="game-image">
                ${game.emoji}
            </div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="game-category">${getCategoryLabel(game.category)}</div>
                <a href="#" class="play-btn" onclick="playGame('${game.title}'); return false;">▶️ SPEEL NU</a>
            </div>
        `;

        container.appendChild(gameCard);
    });
}

// Filter games by category
function filterGames(category) {
    const buttons = document.querySelectorAll('.category-nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let filteredGames;
    if (category === 'all') {
        filteredGames = games;
    } else {
        filteredGames = games.filter(game => game.category === category);
    }

    renderGames(filteredGames);
}

// Search games
function searchGames() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchInput) ||
        game.description.toLowerCase().includes(searchInput)
    );
    renderGames(filteredGames);
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', searchGames);
}

// Play game function
function playGame(gameName) {
    alert(`🎮 ${gameName} wordt geladen...\n\nKlik OK om het spel te starten!`);
    console.log(`Game gestart: ${gameName}`);
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        action: '⚡ Action',
        puzzle: '🧩 Puzzle',
        racing: '🏎️ Racing',
        strategy: '♟️ Strategy',
        sports: '⚽ Sports'
    };
    return labels[category] || category;
}