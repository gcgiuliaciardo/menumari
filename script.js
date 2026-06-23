const menuData = [
    {
        category: "Birre",
        icon: "🍺",
        items: [
            { name: "Peroni Nastro Azzurro", price: 3.00 },
            { name: "Corona", price: 3.50 },
            { name: "Raffo Grezza", price: 3.50 },
            { name: "Heineken", price: 3.50 },
            { name: "Becks", price: 3.00 },
            { name: "Peroni Chill Lemon", price: 2.50 },
            { name: "Peroni 0.0", price: 3.00 },
            { name: "B94 Terra Rossa Artigianale", price: 4.50 },
            { name: "B94 Vista Mare IPA Artigianale", price: 4.50 }
        ]
    },
    {
        category: "Lattine",
        icon: "🥤",
        items: [
            { name: "Coca Cola", price: 2.00 },
            { name: "Coca Cola Zero", price: 2.00 },
            { name: "Fanta", price: 2.00 },
            { name: "Sprite", price: 2.00 },
            { name: "Fuze Tea Limone/Pesca", price: 2.00 },
            { name: "Lemon Soda", price: 2.00 },
            { name: "Red Bull", price: 2.50 }
        ]
    },
    {
        category: "Bevande Analcoliche",
        icon: "🧃",
        items: [
            { name: "Succo Pera", price: 2.50 },
            { name: "Succo Pesca", price: 2.50 },
            { name: "Succo Ananas", price: 2.50 },
            { name: "Succo Albicocca", price: 2.50 },
            { name: "Succo Melograna", price: 2.50 },
            { name: "Succo ACE", price: 2.50 },
            { name: "Succo Pesca-Mango", price: 2.50 },
            { name: "Cedrata", price: 2.50 },
            { name: "Gassosa", price: 1.50 },
            { name: "Cocktail San Pellegrino", price: 2.00 },
            { name: "Crodino", price: 2.00 }
        ]
    },
    {
        category: "Cocktails",
        icon: "🍹",
        items: [
            { name: "Gin Tonic/Lemon", price: 6.00 },
            { name: "Vodka Tonic/Lemon/Red Bull", price: 6.00 },
            { name: "Aperol Spritz", price: 4.00 },
            { name: "Campari Spritz", price: 5.00 },
            { name: "Negroni / Negroni Sbagliato", price: 6.00 },
            { name: "Long Island", price: 6.00 },
            { name: "Rum e Cola", price: 6.00 },
            { name: "Malibù e Cola", price: 6.00 },
            { name: "Jager Bomb", price: 6.00 },
            { name: "Sex on the Beach", price: 6.00 },
            { name: "Japanese", price: 6.00 },
            { name: "Cosmopolitan", price: 6.00 },
            { name: "Base", price: 6.00 },
            { name: "Premium", price: 7.00 },
            { name: "Super Premium", price: 8.00 }
        ]
    },
    {
        category: "Distillati",
        icon: "🥃",
        items: [
            { name: "Grappa POLI Bianca", price: 3.00 },
            { name: "Grappa POLI Barricata", price: 3.00 },
            { name: "Tequila ESPOLON Blanco", price: 3.50 },
            { name: "Tequila ESPOLON Reposado", price: 3.50 },
            { name: "Jack Daniel's", price: 3.00 },
            { name: "Lagavulin", price: 5.00 }
        ]
    },
    {
        category: "Amari e Digestivi",
        icon: "🍾",
        items: [
            { name: "Jagermeister", price: 2.50 },
            { name: "Montenegro", price: 3.00 },
            { name: "Petrus", price: 2.50 },
            { name: "Unicum", price: 2.50 },
            { name: "Amaro del Capo", price: 2.50 },
            { name: "Fernet Branca", price: 3.00 }
        ]
    },
    {
        category: "Bollicine",
        icon: "🥂",
        items: [
            { name: "Prosecco Palladio (calice)", price: 3.00 },
            { name: "Prosecco Palladio (bottiglia)", price: 15.50 },
            { name: "Ferrari Blanc de Blancs (calice)", price: 5.00 },
            { name: "Ferrari Blanc de Blancs (bottiglia)", price: 45.00 },
            { name: "Moët & Chandon Imperial", price: 70.00 },
            { name: "Moët & Chandon Ice Imperial", price: 95.00 }
        ]
    },
    {
        category: "Vini",
        icon: "🍷",
        items: [
            { name: "Cantele Chardonnay IGP (calice)", price: 3.50 },
            { name: "Cantele Chardonnay IGP (bottiglia)", price: 18.00 },
            { name: "Cantele Primitivo Rosso IGP (calice)", price: 4.00 },
            { name: "Cantele Primitivo Rosso IGP (bottiglia)", price: 20.00 },
            { name: "Cantele Negramaro Rosato IGP (calice)", price: 3.50 },
            { name: "Cantele Negramaro Rosato IGP (bottiglia)", price: 18.00 },
            { name: "San Marzano Tramari Rosé (calice)", price: 4.50 },
            { name: "San Marzano Tramari Rosé (bottiglia)", price: 22.00 },
            { name: "San Marzano Il Pumo Bianco Frizzante (calice)", price: 3.50 },
            { name: "San Marzano Il Pumo Bianco Frizzante (bottiglia)", price: 18.00 }
        ]
    },
    {
        category: "Cornetteria",
        icon: "🥐",
        items: [
            { name: "Nutella", price: 1.80 },
            { name: "Nutella Bianca", price: 1.80 },
            { name: "Crema", price: 1.80 },
            { name: "Pistacchio", price: 2.00 },
            { name: "Lotus", price: 2.00 },
            { name: "Bigusto", price: 2.30 }
        ]
    },
    {
        category: "Crepes",
        icon: "🥞",
        items: [
            { name: "Nutella", price: 3.50 },
            { name: "Nutella Bianca", price: 3.50 },
            { name: "Fondente", price: 4.00 },
            { name: "Pistacchio", price: 4.00 },
            { name: "Oreo", price: 4.00 },
            { name: "Lotus", price: 4.00 }
        ]
    },
    {
        category: "Crepes Proteiche",
        icon: "💪",
        items: [
            { name: "Burro di Arachidi", price: 4.50 },
            { name: "Burro di Mandorle", price: 5.00 },
            { name: "Burro di Anacardi", price: 5.50 }
        ]
    },
    {
        category: "Crepes Salate",
        icon: "🧀",
        items: [
            { name: "Crudo", price: 4.00 },
            { name: "Cotto", price: 4.00 },
            { name: "Salmone", price: 6.00 }
        ]
    },
    {
        category: "Rosticceria ed Aperitivi",
        icon: "🍕",
        items: [
            { name: "Pizzella", price: 2.50 },
            { name: "Rustico", price: 2.50 },
            { name: "Golosone", price: 2.50 },
            { name: "Arancino Prosciutto", price: 2.50 },
            { name: "Arancino Ragù", price: 2.50 },
            { name: "Calzone Fritto", price: 2.50 },
            { name: "Calzone al Forno", price: 2.50 },
            { name: "Aperitivo Terra (x2)", price: 10.00 },
            { name: "Aperitivo Mare (x2)", price: 15.00 }
        ]
    },
    {
        category: "Frise",
        icon: "🫓",
        items: [
            { name: "Pomodoro", price: 2.50 },
            { name: "Pomodori Secchi e Stracciatella", price: 4.00 },
            { name: "Coppa e Stracciatella", price: 6.00 },
            { name: "Tartare di Tonno", price: 13.00 },
            { name: "Tartare di Gambero", price: 14.00 }
        ]
    }
];

// Formatta il prezzo
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + '€';
}

// Crea slug per ID
function slugify(text) {
    return text.toLowerCase()
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}

// Genera HTML per una categoria
function createCategoryHTML(categoryData) {
    const slug = slugify(categoryData.category);
    const itemsHTML = categoryData.items.map(item => `
        <div class="menu-item">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                ${item.description ? `<div class="item-description">${item.description}</div>` : ''}
            </div>
            <div class="item-price">${formatPrice(item.price)}</div>
        </div>
    `).join('');

    return `
        <section class="category-section" data-category="${slug}" id="${slug}">
            <div class="category-header">
                <span class="category-icon">${categoryData.icon}</span>
                <h2 class="category-title">${categoryData.category}</h2>
            </div>
            <div class="items-grid">
                ${itemsHTML}
            </div>
        </section>
    `;
}

// Genera pulsanti di navigazione
function createNavButtons() {
    const navContainer = document.querySelector('.nav-container');
    
    menuData.forEach(cat => {
        const slug = slugify(cat.category);
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.dataset.category = slug;
        btn.textContent = cat.category;
        navContainer.appendChild(btn);
    });
}

// Gestisce il filtro delle categorie
function handleCategoryFilter() {
    const navContainer = document.querySelector('.nav-container');
    const sections = document.querySelectorAll('.category-section');
    
    navContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('nav-btn')) return;
        
        // Aggiorna pulsanti attivi
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const selectedCategory = e.target.dataset.category;
        
        // Filtra sezioni
        sections.forEach(section => {
            if (selectedCategory === 'all' || section.dataset.category === selectedCategory) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
        
        // Scroll to top of menu se non è "all"
        if (selectedCategory !== 'all') {
            const targetSection = document.getElementById(selectedCategory);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Inizializza il menù
function initMenu() {
    const menuContainer = document.querySelector('.menu-container');
    
    // Genera HTML per tutte le categorie
    const menuHTML = menuData.map(createCategoryHTML).join('');
    menuContainer.innerHTML = menuHTML;
    
    // Crea pulsanti di navigazione
    createNavButtons();
    
    // Attiva filtro categorie
    handleCategoryFilter();
}

// Avvia quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initMenu);
