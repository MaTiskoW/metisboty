/* ==========================================================================
   Metis Community - Discord Bot Pricing Showcase Script
   ========================================================================== */

// All Pricing Data (Compact & PRO versions)
const PRICING_DATA = [
    {
        id: 'ticket-normal',
        category: 'tickets',
        title: 'Tickety Normalne',
        price: 3,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isPro: false,
        icon: 'fa-ticket',
        description: 'Standardowy system zgłoszeń i pomocy z podstawową obsługą ról.',
        features: [
            'Tworzenie ticketów przyciskiem',
            'Prywatne kanały pomocy',
            'Logi zamkniętych ticketów'
        ]
    },
    {
        id: 'ticket-pro',
        category: 'tickets',
        title: 'Tickety PRO',
        price: 5,
        badge: 'PRO',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-ticket-simple',
        description: 'Zaawansowane zgłoszenia z rozwijanymi kategoriami i transkryptami HTML.',
        features: [
            'Rozwijany panel (Select Menu)',
            'Transkrypty rozmów HTML / TXT',
            'Zarządzanie członkami w panelu'
        ]
    },
    {
        id: 'welcome-normal',
        category: 'welcome',
        title: 'Powitania Normalne',
        price: 2,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isPro: false,
        icon: 'fa-hand-wave',
        description: 'Estetyczna wiadomość tekstowa z powitaniem nowego gracza.',
        features: [
            'Dedykowany kanał powitań',
            'Oznaczenie użytkownika',
            'Licznik członków serwera'
        ]
    },
    {
        id: 'welcome-pro',
        category: 'welcome',
        title: 'Powitania PRO',
        price: 4,
        badge: 'PRO',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-image',
        description: 'Generowana karta graficzna HD z awatarem i supersamplingiem 2x.',
        features: [
            'Dynamiczna grafika z awatarem HD',
            'Wyrazisty styl i supersampling 2x',
            'Automatyczne rangowanie powitalne'
        ]
    },
    {
        id: 'boost-normal',
        category: 'welcome',
        title: 'Boost Info Normalne',
        price: 2,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isPro: false,
        icon: 'fa-bolt',
        description: 'Automatyczne powiadomienia o ulepszeniu serwera z podziękowaniem.',
        features: [
            'Wykrywanie boosta serwera',
            'Dedykowana wiadomość dziękczynna',
            'Przydzielanie rangi booster'
        ]
    },
    {
        id: 'boost-pro',
        category: 'welcome',
        title: 'Boost Info PRO',
        price: 4,
        badge: 'PRO',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-gem',
        description: 'Dedykowana wyspecjalizowana karta graficzna dla ulepszającego serwer.',
        features: [
            'Karta graficzna Boost w stylu PRO',
            'Licznik i statystyki poziomu ulepszeń',
            'Automatyczne przydzielanie nagród'
        ]
    },
    {
        id: 'sticky-messages',
        category: 'welcome',
        title: 'Stickymessages',
        price: 0,
        priceText: 'GRATIS od 10 zł',
        badge: 'BONUS',
        tagClass: 'tag-gratis',
        isPro: false,
        icon: 'fa-note-sticky',
        description: 'Automatycznie przypięte wiadomości na dole wybranych kanałów.',
        features: [
            'Zawsze na dole kanału',
            'Darmowy bonus od zamówień 10 zł',
            'Brak limitu edycji treści'
        ]
    },
    {
        id: 'economy-basic',
        category: 'economy',
        title: 'Podstawowa Ekonomia',
        price: 9,
        badge: 'WALUTA',
        tagClass: 'tag-normal',
        isPro: false,
        icon: 'fa-wallet',
        description: 'Baza danych SQL/JSON z komendami walutowymi i portfelem.',
        features: [
            'Baza danych (SQL / JSON)',
            'Komendy: waluta, daily, przelew',
            'Zarządzanie kontem i portfelem'
        ]
    },
    {
        id: 'economy-games-pro',
        category: 'economy',
        title: 'Gry Ekonomiczne PRO',
        price: 15,
        badge: 'METIS SET',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-dice',
        description: 'Kompletny pakiet gier z Metis Community: Blackjack, Automaty, Coinflip i Ruletka.',
        features: [
            'Blackjack z przyciskami oraz Automaty',
            'Coinflip i serwerowa Ruletka',
            'Rankingi bogaczy i ekwipunek'
        ]
    },
    {
        id: 'verify-button',
        category: 'security',
        title: 'Weryfikacja Przycisk',
        price: 2,
        badge: 'STANDARD',
        tagClass: 'tag-normal',
        isPro: false,
        icon: 'fa-square-check',
        description: 'Weryfikacja jednym kliknięciem nadająca rolę zweryfikowanego.',
        features: [
            'Kliknięcie w przycisk weryfikacji',
            'Błyskawiczne nadanie roli',
            'Podstawowy odsiew kont'
        ]
    },
    {
        id: 'verify-math',
        category: 'security',
        title: 'Weryfikacja Math',
        price: 3,
        badge: 'ANTY-BOT',
        tagClass: 'tag-hot',
        isPro: false,
        icon: 'fa-calculator',
        description: 'Weryfikacja wymagająca rozwiązania prostego równania.',
        features: [
            'Losowe działania matematyczne',
            'Skuteczny odsiew prosto zaprogramowanych botów',
            'Limit czasowy na wynik'
        ]
    },
    {
        id: 'verify-captcha',
        category: 'security',
        title: 'Weryfikacja Captcha',
        price: 5,
        badge: 'MAX SECURITY',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-shield-cat',
        description: 'Generowany obrazek Captcha do przepisania uniemożliwiający raid botów.',
        features: [
            'Unikalny obrazek captcha z kodem',
            'Ochrona przed masowymi wejściami',
            'Auto-kick przy błędnych próbach'
        ]
    },
    {
        id: 'security-full',
        category: 'security',
        title: 'System Ochronny Full Zestaw',
        price: 8,
        badge: 'FULL SHIELD',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-shield-halved',
        description: 'Zaawansowana ochrona Anty-Raid, Anty-Spam, Anty-Link oraz Anty-Bot.',
        features: [
            'Anty-Raid & Anty-Spam',
            'Filtrowanie linków i wulgaryzmów',
            'Ochrona ról oraz kanałów'
        ]
    },
    {
        id: 'giveaway-normal',
        category: 'giveaway',
        title: 'Giveaway Normalne',
        price: 3,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isPro: false,
        icon: 'fa-gift',
        description: 'Tworzenie prostych losowań i konkursów z reakcją.',
        features: [
            'Czas trwania i nazwa nagrody',
            'Automatyczny los zwycięzcy',
            'Komenda losowania ponownego'
        ]
    },
    {
        id: 'giveaway-pro',
        category: 'giveaway',
        title: 'Giveaway PRO',
        price: 4,
        badge: 'PRO',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-wand-magic-sparkles',
        description: 'Zaawansowane losowania z wymogami ról, ulepszeń serwera oraz panelem.',
        features: [
            'Wymóg roli lub boosta serwera',
            'Interaktywny przycisk dołączenia',
            'Panel zarządzania konkursami'
        ]
    },
    {
        id: 'priority-express',
        category: 'other',
        title: 'Priorytet Realizacji',
        price: 2,
        badge: 'EXPRESS',
        tagClass: 'tag-hot',
        isPro: false,
        icon: 'fa-bolt-lightning',
        description: 'Najszybsza realizacja i wdrożenie bota w pierwszej kolejności.',
        features: [
            'Błyskawiczne wdrożenie',
            'Pierwszeństwo w kolejce zleceń',
            'Dedykowany kontakt'
        ]
    },
    {
        id: 'web-server-beta',
        category: 'other',
        title: 'Strona Internetowa (Beta)',
        price: 20,
        badge: 'DOMENA GRATIS 95%',
        tagClass: 'tag-pro',
        isPro: true,
        icon: 'fa-globe',
        description: 'Nowoczesna strona WWW serwera + domena gratis w 95% przypadków!',
        features: [
            'Nowoczesny landing page serwera',
            'Widget serwera i przycisk dołączania',
            'Domena gratis w 95% przypadków'
        ]
    }
];

// DOM Elements
const pricingGrid = document.getElementById('pricing-grid');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPricingCards('all');
    setupCategoryFilters();
    setupFAQAccordion();
});

// Render Pricing Cards
function renderPricingCards(filterCategory = 'all') {
    pricingGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? PRICING_DATA 
        : PRICING_DATA.filter(item => item.category === filterCategory);

    filtered.forEach(item => {
        const cardEl = document.createElement('div');
        cardEl.className = `price-card ${item.isPro ? 'pro-card' : ''}`;

        const priceDisplay = item.priceText 
            ? `<div class="card-price-custom">${item.priceText}</div>`
            : `<div class="card-price">${item.price.toFixed(2)} <span class="card-currency">zł</span></div>`;

        cardEl.innerHTML = `
            <div class="card-top">
                <div class="card-icon-wrap">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <span class="card-tag ${item.tagClass}">${item.badge}</span>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
            <ul class="card-features">
                ${item.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
            </ul>
            <div class="card-price-wrap">
                ${priceDisplay}
            </div>
        `;

        pricingGrid.appendChild(cardEl);
    });
}

// Category Filters setup
function setupCategoryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderPricingCards(category);
        });
    });
}

// FAQ Accordion
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}
