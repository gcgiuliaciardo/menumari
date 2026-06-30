const menuData = [
        {
        category: "Caffetteria",
        category_en: "Coffee",
        icon: "☕",
        items: [
            { name: "Caffè", name_en: "Espresso", price: 1.20 },
            { name: "Caffè Decaffeinato", name_en: "Decaf Coffee", price: 1.20 },
            { name: "Caffè Macchiato", name_en: "Macchiato", price: 1.30 },
            { name: "Caffè Corretto", name_en: "Corrected Coffee", description: "caffè con un goccio di sambuca.", description_en: "coffee with a dash of sambuca.", price: 1.80 },
            { name: "Cappuccino", name_en: "Cappuccino", price: 1.80 },
            { name: "Cappuccino Soia", name_en: "Decaf Cappuccino", price: 1.80 },
            { name: "Latte Macchiato", name_en: "Latte Macchiato", price: 2.00 },
            { name: "Ginseng", name_en: "Ginseng Coffee", price: 1.50 },
            { name: "Caffè in Ghiaccio", name_en: "Iced Coffee", description: "Caffè, ghiaccio e latte di mandorla.", description_en: "Coffee, ", price: 1.40 },
            { name: "Caffè Leccese", name_en: "Caffè Leccese", description: "Caffè, ghiaccio e latte di mandorla.", description_en: "Coffee, ice and almond milk.", price: 2.00 },
            { name: "Caffè Shakerato", name_en: "Shaken Iced Coffee", description: "caffè shakerato con ghiaccio.", description_en: "iced coffee shaken with ice.", price: 3.00 },
        ]
    },
    {
        category: "Birre",
        category_en: "Beers",
        icon: "🍺",
        items: [
            { name: "Peroni Nastro Azzurro", name_en: "Peroni Nastro Azzurro", price: 3.00 },
            { name: "Corona", name_en: "Corona", price: 3.50 },
            { name: "Raffo Grezza", name_en: "Raffo Grezza", price: 3.50 },
            { name: "Heineken", name_en: "Heineken", price: 3.50 },
            { name: "Becks", name_en: "Becks", price: 3.00 },
            { name: "Peroni Chill Lemon", name_en: "Peroni Chill Lemon", price: 2.50 },
            { name: "Peroni 0.0", name_en: "Peroni 0.0", price: 3.00 },
            { name: "B94 Terra Rossa Artigianale", name_en: "B94 Terra Rossa Craft Beer", description: "birra artigianale ambrata.", description_en: "amber craft beer.", price: 4.50 },
            { name: "B94 Vista Mare IPA Artigianale", name_en: "B94 Vista Mare Craft IPA", description: "IPA artigianale luppolata.", description_en: "hoppy craft IPA.", price: 4.50 }
        ]
    },
    {
        category: "Lattine",
        category_en: "Canned Drinks",
        icon: "🥤",
        items: [
            { name: "Coca Cola", name_en: "Coca Cola", price: 2.00 },
            { name: "Coca Cola Zero", name_en: "Coca Cola Zero", price: 2.00 },
            { name: "Fanta", name_en: "Fanta", price: 2.00 },
            { name: "Sprite", name_en: "Sprite", price: 2.00 },
            { name: "Fuze Tea Limone/Pesca", name_en: "Fuze Tea Lemon/Peach", price: 2.00 },
            { name: "Lemon Soda", name_en: "Lemon Soda", price: 2.00 },
            { name: "Red Bull", name_en: "Red Bull", price: 2.50 }
        ]
    },
    {
        category: "Bevande Analcoliche",
        category_en: "Soft Drinks",
        icon: "🧃",
        items: [
            { name: "Succo Pera", name_en: "Pear Juice", price: 2.50 },
            { name: "Succo Pesca", name_en: "Peach Juice", price: 2.50 },
            { name: "Succo Ananas", name_en: "Pineapple Juice", price: 2.50 },
            { name: "Succo Albicocca", name_en: "Apricot Juice", price: 2.50 },
            { name: "Succo Melograna", name_en: "Pomegranate Juice", price: 2.50 },
            { name: "Succo ACE", name_en: "Ace Juice", price: 2.50 },
            { name: "Succo Pesca-Mango", name_en: "Peach & Mango Juice", price: 2.50 },
            { name: "Cedrata", name_en: "Cedrata (Citron Soda)", price: 2.50 },
            { name: "Gassosa", name_en: "Gassosa (Lemon Soda)", price: 1.50 },
            { name: "Cocktail San Pellegrino", name_en: "San Pellegrino Cocktail", price: 2.00 },
            { name: "Crodino", name_en: "Crodino", price: 2.00 }
        ]
    },
    {
        category: "Cocktails",
        category_en: "Cocktails",
        icon: "🍹",
        items: [
            { name: "Gin Tonic/Lemon", name_en: "Gin Tonic/Lemon", description: "gin, tonica o lemon soda, ghiaccio.", description_en: "gin, tonic or lemon soda, ice.", price: 6.00 },
            { name: "Vodka Tonic/Lemon/Red Bull", name_en: "Vodka Tonic/Lemon/Red Bull", description: "vodka con tonica, lemon o red bull.", description_en: "vodka with tonic, lemon or red bull.", price: 6.00 },
            { name: "Aperol Spritz", name_en: "Aperol Spritz", description: "aperol, prosecco, soda.", description_en: "aperol, prosecco, soda water.", price: 4.00 },
            { name: "Campari Spritz", name_en: "Campari Spritz", description: "campari, prosecco, soda.", description_en: "campari, prosecco, soda water.", price: 5.00 },
            { name: "Negroni / Negroni Sbagliato", name_en: "Negroni / Negroni Sbagliato", description: "gin o prosecco, vermouth, campari.", description_en: "gin or prosecco, vermouth, campari.", price: 6.00 },
            { name: "Long Island", name_en: "Long Island", description: "mix di superalcolici e cola.", description_en: "mix of spirits and cola.", price: 6.00 },
            { name: "Rum e Cola", name_en: "Rum and Coke", description: "rum, cola, lime.", description_en: "rum, cola, lime.", price: 6.00 },
            { name: "Malibù e Cola", name_en: "Malibu and Coke", description: "malibù, cola, ghiaccio.", description_en: "malibu, cola, ice.", price: 6.00 },
            { name: "Jager Bomb", name_en: "Jager Bomb", description: "jagermeister e red bull.", description_en: "jagermeister and red bull.", price: 6.00 },
            { name: "Sex on the Beach", name_en: "Sex on the Beach", description: "vodka, pesca, ananas, mirtillo.", description_en: "vodka, peach, pineapple, cranberry.", price: 6.00 },
            { name: "Japanese", name_en: "Japanese", description: "cognac, mandorla, limone.", description_en: "cognac, almond, lemon.", price: 6.00 },
            { name: "Cosmopolitan", name_en: "Cosmopolitan", description: "vodka, cointreau, mirtillo, lime.", description_en: "vodka, cointreau, cranberry, lime.", price: 6.00 },
            { name: "Base", name_en: "Base", description: "selezione di cocktail classici.", description_en: "selection of classic cocktails.", price: 6.00 },
            { name: "Premium", name_en: "Premium", description: "cocktail con liquori premium.", description_en: "cocktail with premium spirits.", price: 7.00 },
            { name: "Super Premium", name_en: "Super Premium", description: "cocktail con liquori super premium.", description_en: "cocktail with super premium spirits.", price: 8.00 }
        ]
    },
    {
        category: "Distillati",
        category_en: "Spirits",
        icon: "🥃",
        items: [
            { name: "Grappa POLI Bianca", name_en: "Grappa POLI Bianca", price: 3.00 },
            { name: "Grappa POLI Barricata", name_en: "Grappa POLI Barricata", price: 3.00 },
            { name: "Tequila ESPOLON Blanco", name_en: "Tequila ESPOLON Blanco", price: 3.50 },
            { name: "Tequila ESPOLON Reposado", name_en: "Tequila ESPOLON Reposado", price: 3.50 },
            { name: "Jack Daniel's", name_en: "Jack Daniel's", price: 3.00 },
            { name: "Lagavulin", name_en: "Lagavulin", price: 5.00 }
        ]
    },
    {
        category: "Amari e Digestivi",
        category_en: "Amari & Digestifs",
        icon: "🍾",
        items: [
            { name: "Jagermeister", name_en: "Jagermeister", price: 2.50 },
            { name: "Montenegro", name_en: "Montenegro", price: 3.00 },
            { name: "Petrus", name_en: "Petrus", price: 2.50 },
            { name: "Unicum", name_en: "Unicum", price: 2.50 },
            { name: "Amaro del Capo", name_en: "Amaro del Capo", price: 2.50 },
            { name: "Fernet Branca", name_en: "Fernet Branca", price: 3.00 }
        ]
    },
    {
        category: "Bollicine",
        category_en: "Sparkling Wines",
        icon: "🥂",
        items: [
            { name: "Prosecco Palladio (calice)", name_en: "Prosecco Palladio (glass)", price: 3.00 },
            { name: "Prosecco Palladio (bottiglia)", name_en: "Prosecco Palladio (bottle)", price: 15.50 },
            { name: "Ferrari Blanc de Blancs (calice)", name_en: "Ferrari Blanc de Blancs (glass)", price: 5.00 },
            { name: "Ferrari Blanc de Blancs (bottiglia)", name_en: "Ferrari Blanc de Blancs (bottle)", price: 45.00 },
            { name: "Moët & Chandon Imperial", name_en: "Moët & Chandon Imperial", price: 70.00 },
            { name: "Moët & Chandon Ice Imperial", name_en: "Moët & Chandon Ice Imperial", price: 95.00 }
        ]
    },
    {
        category: "Vini",
        category_en: "Wines",
        icon: "🍷",
        items: [
            { name: "Cantele Chardonnay IGP (calice)", name_en: "Cantele Chardonnay IGP (glass)", price: 3.50 },
            { name: "Cantele Chardonnay IGP (bottiglia)", name_en: "Cantele Chardonnay IGP (bottle)", price: 18.00 },
            { name: "Cantele Primitivo Rosso IGP (calice)", name_en: "Cantele Primitivo Red IGP (glass)", price: 4.00 },
            { name: "Cantele Primitivo Rosso IGP (bottiglia)", name_en: "Cantele Primitivo Red IGP (bottle)", price: 20.00 },
            { name: "Cantele Negramaro Rosato IGP (calice)", name_en: "Cantele Negramaro Rosé IGP (glass)", price: 3.50 },
            { name: "Cantele Negramaro Rosato IGP (bottiglia)", name_en: "Cantele Negramaro Rosé IGP (bottle)", price: 18.00 },
            { name: "San Marzano Tramari Rosé (calice)", name_en: "San Marzano Tramari Rosé (glass)", price: 4.50 },
            { name: "San Marzano Tramari Rosé (bottiglia)", name_en: "San Marzano Tramari Rosé (bottle)", price: 22.00 },
            { name: "San Marzano Il Pumo Bianco Frizzante (calice)", name_en: "San Marzano Il Pumo Sparkling White (glass)", price: 3.50 },
            { name: "San Marzano Il Pumo Bianco Frizzante (bottiglia)", name_en: "San Marzano Il Pumo Sparkling White (bottle)", price: 18.00 }
        ]
    },
    {
        category: "Cornetteria",
        category_en: "Croissants",
        icon: "🥐",
        items: [
            { name: "Nutella", name_en: "Nutella", description: "cornetto farcito con crema alla nocciola.", description_en: "croissant filled with hazelnut cream.", price: 1.80 },
            { name: "Nutella Bianca", name_en: "White Nutella", description: "cornetto farcito con crema bianca alla nocciola.", description_en: "croissant filled with white hazelnut cream.", price: 1.80 },
            { name: "Crema", name_en: "Custard Cream", description: "cornetto farcito con crema pasticcera.", description_en: "croissant filled with custard cream.", price: 1.80 },
            { name: "Pistacchio", name_en: "Pistachio", description: "cornetto farcito con crema al pistacchio.", description_en: "croissant filled with pistachio cream.", price: 2.00 },
            { name: "Lotus", name_en: "Lotus", description: "cornetto farcito con crema Lotus.", description_en: "croissant filled with Lotus cream.", price: 2.00 },
            { name: "Bigusto", name_en: "Two Flavours", description: "cornetto farcito con due gusti a scelta.", description_en: "croissant filled with two flavours of choice.", price: 2.30 }
        ]
    },
    {
        category: "Crepes",
        category_en: "Crepes",
        icon: "🥞",
        items: [
            { name: "Nutella", name_en: "Nutella", description: "crepe con crema alla nocciola.", description_en: "crepe with hazelnut cream.", price: 3.50 },
            { name: "Nutella Bianca", name_en: "White Nutella", description: "crepe con crema bianca alla nocciola.", description_en: "crepe with white hazelnut cream.", price: 3.50 },
            { name: "Fondente", name_en: "Dark Chocolate", description: "crepe con cioccolato fondente.", description_en: "crepe with dark chocolate.", price: 4.00 },
            { name: "Pistacchio", name_en: "Pistachio", description: "crepe con crema al pistacchio.", description_en: "crepe with pistachio cream.", price: 4.00 },
            { name: "Oreo", name_en: "Oreo", description: "crepe con crema e biscotto Oreo.", description_en: "crepe with cream and Oreo cookie.", price: 4.00 },
            { name: "Lotus", name_en: "Lotus", description: "crepe con crema Lotus.", description_en: "crepe with Lotus cream.", price: 4.00 }
        ]
    },
    {
        category: "Crepes Proteiche",
        category_en: "Protein Crepes",
        icon: "💪",
        items: [
            { name: "Burro di Arachidi", name_en: "Peanut Butter", description: "crepe con burro di arachidi.", description_en: "crepe with peanut butter.", price: 4.50 },
            { name: "Burro di Mandorle", name_en: "Almond Butter", description: "crepe con burro di mandorle.", description_en: "crepe with almond butter.", price: 5.00 },
            { name: "Burro di Anacardi", name_en: "Cashew Butter", description: "crepe con burro di anacardi.", description_en: "crepe with cashew butter.", price: 5.50 }
        ]
    },
    {
        category: "Crepes Salate",
        category_en: "Savoury Crepes",
        icon: "🧀",
        items: [
            { name: "Crudo", name_en: "Cured Ham", description: "crepe con prosciutto crudo e formaggio.", description_en: "crepe with cured ham and cheese.", price: 4.00 },
            { name: "Cotto", name_en: "Cooked Ham", description: "crepe con prosciutto cotto e formaggio.", description_en: "crepe with cooked ham and cheese.", price: 4.00 },
            { name: "Salmone", name_en: "Salmon", description: "crepe con salmone e crema di formaggio.", description_en: "crepe with salmon and cream cheese.", price: 6.00 }
        ]
    },
    {
        category: "Rosticceria ed Aperitivi",
        category_en: "Bakery & Appetizers",
        icon: "🍕",
        items: [
            { name: "Pizzella", name_en: "Mini Pizza", description: "pizzella al pomodoro e mozzarella.", description_en: "mini pizza with tomato and mozzarella.", price: 2.50 },
            { name: "Rustico", name_en: "Rustico Pastry", description: "sfoglia ripiena di pomodoro, besciamella e mozzarella.", description_en: "puff pastry filled with tomato, béchamel and mozzarella.", price: 2.50 },
            { name: "Golosone", name_en: "Golosone Pastry", description: "sfoglia ripiena salata.", description_en: "savoury filled puff pastry.", price: 2.50 },
            { name: "Arancino Prosciutto", name_en: "Arancino with Ham", description: "arancino di riso con prosciutto e formaggio.", description_en: "rice arancino with ham and cheese.", price: 2.50 },
            { name: "Arancino Ragù", name_en: "Arancino with Ragù", description: "arancino di riso con ragù.", description_en: "rice arancino with meat ragù.", price: 2.50 },
            { name: "Calzone Fritto", name_en: "Fried Calzone", description: "calzone fritto ripieno.", description_en: "fried filled calzone.", price: 2.50 },
            { name: "Calzone al Forno", name_en: "Baked Calzone", description: "calzone al forno ripieno.", description_en: "baked filled calzone.", price: 2.50 },
            { name: "Aperitivo Terra (x2)", name_en: "Aperitivo Terra (x2)", description: "selezione di stuzzichini misti (2 persone).", description_en: "selection of mixed savoury bites (2 people).", price: 10.00 },
            { name: "Aperitivo Mare (x2)", name_en: "Aperitivo Mare (x2)", description: "selezione di stuzzichini di mare (2 persone).", description_en: "selection of seafood bites (2 people).", price: 15.00 }
        ]
    },
    {
        category: "Frise",
        category_en: "Frise (Salento Bread)",
        icon: "🫓",
        items: [
            { name: "Pomodoro", name_en: "Tomato", description: "frisa con pomodoro fresco e olio.", description_en: "frisa with fresh tomato and oil.", price: 2.50 },
            { name: "Pomodori Secchi e Stracciatella", name_en: "Sun-dried Tomatoes & Stracciatella", description: "frisa con pomodori secchi e stracciatella.", description_en: "frisa with sun-dried tomatoes and stracciatella.", price: 4.00 },
            { name: "Coppa e Stracciatella", name_en: "Coppa & Stracciatella", description: "frisa con coppa piacentina e stracciatella.", description_en: "frisa with coppa ham and stracciatella.", price: 6.00 },
            { name: "Tartare di Tonno", name_en: "Tuna Tartare", description: "frisa con tartare di tonno.", description_en: "frisa with tuna tartare.", price: 13.00 },
            { name: "Tartare di Gambero", name_en: "Prawn Tartare", description: "frisa con tartare di gambero.", description_en: "frisa with prawn tartare.", price: 14.00 }
        ]
    }
];

// Stato lingua corrente
let currentLang = 'it';

const i18n = {
    it: { subtitle: "Scopri le nostre proposte", all: "Tutto", footer: "I prezzi possono variare. Chiedi al personale per allergeni e intolleranze.", langBtn: "EN" },
    en: { subtitle: "Discover our menu", all: "All", footer: "Prices may vary. Ask staff about allergens and intolerances.", langBtn: "IT" }
};

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
    const categoryName = currentLang === 'en' ? (categoryData.category_en || categoryData.category) : categoryData.category;

    const itemsHTML = categoryData.items.map(item => {
        const itemName = currentLang === 'en' ? (item.name_en || item.name) : item.name;
        const itemDesc = currentLang === 'en' ? item.description_en : item.description;
        return `
        <div class="menu-item">
            <div class="item-info">
                <div class="item-name">${itemName}</div>
                ${itemDesc ? `<div class="item-description">${itemDesc}</div>` : ''}
            </div>
            <div class="item-price">${formatPrice(item.price)}</div>
        </div>
    `;
    }).join('');

    return `
        <section class="category-section" data-category="${slug}" id="${slug}">
            <div class="category-header">
                <span class="category-icon">${categoryData.icon}</span>
                <h2 class="category-title">${categoryName}</h2>
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
    navContainer.querySelectorAll('.nav-btn:not([data-category="all"])').forEach(btn => btn.remove());

    menuData.forEach(cat => {
        const slug = slugify(cat.category);
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.dataset.category = slug;
        btn.textContent = currentLang === 'en' ? (cat.category_en || cat.category) : cat.category;
        navContainer.appendChild(btn);
    });
}

// Gestisce il filtro delle categorie
function handleCategoryFilter() {
    const navContainer = document.querySelector('.nav-container');

    navContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('nav-btn')) return;

        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const selectedCategory = e.target.dataset.category;
        const sections = document.querySelectorAll('.category-section');

        sections.forEach(section => {
            if (selectedCategory === 'all' || section.dataset.category === selectedCategory) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });

        if (selectedCategory !== 'all') {
            const targetSection = document.getElementById(selectedCategory);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Aggiorna i testi statici dell'interfaccia
function updateStaticTexts() {
    const t = i18n[currentLang];
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('.nav-btn[data-category="all"]').textContent = t.all;
    document.querySelector('.footer p').textContent = t.footer;
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) langBtn.textContent = t.langBtn;
}

// Gestisce il cambio lingua
function handleLangToggle() {
    const langBtn = document.querySelector('.lang-toggle');
    if (!langBtn) return;
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'it' ? 'en' : 'it';
        renderMenu();
    });
}

// Renderizza l'intero menù nella lingua corrente
function renderMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const menuHTML = menuData.map(createCategoryHTML).join('');
    menuContainer.innerHTML = menuHTML;

    createNavButtons();
    updateStaticTexts();

    document.querySelector('.nav-btn[data-category="all"]').classList.add('active');
}

// Inizializza il menù
function initMenu() {
    renderMenu();
    handleCategoryFilter();
    handleLangToggle();
}

// Avvia quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initMenu);
