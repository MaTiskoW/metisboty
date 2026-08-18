/* ==========================================================================
   Metis Community - Discord Bot Pricing Catalog & Interactive Cart Script
   ========================================================================== */

// All Modules Data according to exact specifications
const PRICING_DATA = [
    {
        id: 'ticket-normal',
        category: 'tickets',
        title: 'Tickety Normalne',
        price: 3,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isDojebane: false,
        icon: 'fa-ticket',
        description: 'Standardowa obsługa prywatnych kanałów pomocy i zgłoszeń z podziałem na role.',
        features: [
            'Tworzenie ticketów przyciskiem',
            'Prywatne kanały dla obsługi',
            'Logi zamkniętych ticketów',
            'Obsługa podstawowych uprawnień'
        ]
    },
    {
        id: 'ticket-dojebane',
        category: 'tickets',
        title: 'Tickety Dojebane',
        price: 5,
        badge: 'PRO DOJEBANE',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-ticket-simple',
        description: 'Zaawansowany system ticketów z kategoriami, przyciskami i transkryptami HTML.',
        features: [
            'Rozwijany panel (Select Menu) z kategoriami',
            'Automatyczne transkrypty HTML / TXT',
            'Zarządzanie członkami w panelu (Dodaj/Usuń)',
            'System oceniania pomocy i opinii'
        ]
    },
    {
        id: 'welcome-normal',
        category: 'welcome',
        title: 'Powitania Normalne',
        price: 2,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isDojebane: false,
        icon: 'fa-hand-wave',
        description: 'Estetyczna wiadomość tekstowa ze statystykami powitalnymi dla nowego gracza.',
        features: [
            'Dedykowany kanał powitań',
            'Wspomnienie użytkownika z avatarem',
            'Liczenie aktualnej liczby członków'
        ]
    },
    {
        id: 'welcome-dojebane',
        category: 'welcome',
        title: 'Powitania Dojebane',
        price: 4,
        badge: 'PRO DOJEBANE',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-image',
        description: 'Wysokiej jakości generowane karty graficzne powitań z awatarem i supersamplingiem 2x.',
        features: [
            'Dynamiczna karta graficzna HD z awatarem',
            'Supersampling (SSAA 2x) i neonowe ramki',
            'Personalizowany napis i nazwa serwera',
            'Automatyczny autorole dla nowych osób'
        ]
    },
    {
        id: 'boost-normal',
        category: 'welcome',
        title: 'Boost Info Normalne',
        price: 2,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isDojebane: false,
        icon: 'fa-bolt',
        description: 'Powiadomienia o ulepszeniach serwera na dedykowanym kanale z podziękowaniem.',
        features: [
            'Automatyczne wykrywanie ulepszeń',
            'Wiadomość z podziękowaniem na kanale',
            'Dodatkowa ranga dla Boosterów'
        ]
    },
    {
        id: 'boost-dojebane',
        category: 'welcome',
        title: 'Boost Info Dojebane',
        price: 4,
        badge: 'PRO DOJEBANE',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-gem',
        description: 'Generowana dedykowana karta graficzna dla Boostera z licznikiem ulepszeń.',
        features: [
            'Karta graficzna Boost z profi-designem',
            'Statystyki poziomu ulepszeń serwera',
            'Automatyczny rola z efektem neon'
        ]
    },
    {
        id: 'economy-basic',
        category: 'economy',
        title: 'Podstawowa Ekonomia',
        price: 9,
        badge: 'WALUTA',
        tagClass: 'tag-normal',
        isDojebane: false,
        icon: 'fa-wallet',
        description: 'System ekonomii serwerowej z bazą danych i ustawieniami waluty.',
        features: [
            'Niezawodna baza danych (SQL/JSON)',
            'Komendy: statek, waluta, przelew, daily',
            'Zarządzanie portfelem i bankiem',
            'Ustawienia komend i zarobków'
        ]
    },
    {
        id: 'economy-games-dojebane',
        category: 'economy',
        title: 'Dojebane Gry Ekonomiczne',
        price: 15,
        badge: 'FULL METIS SET',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-dice',
        description: 'Pełny pakiet hazardowy z Metis Community: Blackjack, Automaty (Slots), Coinflip i Ruletka.',
        features: [
            'Blackjack z przyciskami (Hit/Stand)',
            'Automaty do gry (Slot Machine)',
            'Coinflip z wyzwaniami graczy',
            'Ruletka serwerowa z kolorem/liczbą',
            'Topka bogaczy i ekwipunek'
        ]
    },
    {
        id: 'verify-button',
        category: 'security',
        title: 'Weryfikacja Przycisk',
        price: 2,
        badge: 'STANDARD',
        tagClass: 'tag-normal',
        isDojebane: false,
        icon: 'fa-square-check',
        description: 'Szybka i prosta weryfikacja przyciskiem do natychmiastowego nadania roli.',
        features: [
            'Jeden klik w przycisk weryfikacji',
            'Nadanie roli Gracz / Zweryfikowany',
            'Usunięcie roli Niezweryfikowany'
        ]
    },
    {
        id: 'verify-math',
        category: 'security',
        title: 'Weryfikacja Zadanie Math',
        price: 3,
        badge: 'ANTY-BOT',
        tagClass: 'tag-hot',
        isDojebane: false,
        icon: 'fa-calculator',
        description: 'Weryfikacja wymagająca rozwiązania prostego równania matematycznego.',
        features: [
            'Losowe proste zadania matematyczne',
            'Ochrona przed podstawowymi botami raid',
            'Limit czasowy na podanie wyniku'
        ]
    },
    {
        id: 'verify-captcha',
        category: 'security',
        title: 'Weryfikacja Obrazek Captcha',
        price: 5,
        badge: 'MAX SECURITY',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-shield-cat',
        description: 'Zaawansowana weryfikacja z wygenerowanym obrazkiem Captcha do przepisania.',
        features: [
            'Generowanie unikalnego obrazka z kodem',
            'Zniekształcenia tekstu anty-ocr',
            'Całkowity brak przepustowości dla botów',
            'Automatyczny kick przy fałszywych próbach'
        ]
    },
    {
        id: 'security-full',
        category: 'security',
        title: 'System Ochronny Full Zestaw',
        price: 8,
        badge: 'FULL SHIELD',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-shield-halved',
        description: 'Kompleksowy pakiet ochronny Anty-Raid, Anty-Spam, Anty-Link oraz Anty-Bot.',
        features: [
            'Anty-Raid (wykrywanie masowych wejść)',
            'Anty-Spam i filtrowanie wulgaryzmów',
            'Anty-Link (blokada podejrzanych adresów)',
            'Ochrona przed wywaleniem ról / kanałów'
        ]
    },
    {
        id: 'giveaway-normal',
        category: 'giveaway',
        title: 'Giveaway Normalne',
        price: 3,
        badge: 'NORMAL',
        tagClass: 'tag-normal',
        isDojebane: false,
        icon: 'fa-gift',
        description: 'Tworzenie prostych losowań i konkursów z reakcją lub przyciskiem.',
        features: [
            'Ustalanie czasu trwania i nagrody',
            'Automatyczne wyłonienie zwycięzcy',
            'Komenda reroll losowania'
        ]
    },
    {
        id: 'giveaway-dojebane',
        category: 'giveaway',
        title: 'Giveaway Dojebane',
        price: 4,
        badge: 'PRO DOJEBANE',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-wand-magic-sparkles',
        description: 'Zaawansowany system losowań z wymogami ról, boosta oraz panelem interaktywnym.',
        features: [
            'Wymóg konkretnej roli lub ulepszenia serwera',
            'Przycisk dołączenia z licznikiem osób',
            'Zarządzanie wygranymi w panelu admina',
            'Czarna lista użytkowników'
        ]
    },
    {
        id: 'priority-express',
        category: 'other',
        title: 'Priorytet Realizacji',
        price: 2,
        badge: 'EXPRESS',
        tagClass: 'tag-hot',
        isDojebane: false,
        icon: 'fa-bolt-lightning',
        description: 'Błyskawiczne wykonanie i wdrożenie bota na Twój serwer w pierwszej kolejności.',
        features: [
            'Ekspresowy czas wdrożenia',
            'Dedykowany kontakt na Discordzie',
            'Pierwszeństwo w kolejce zleceń'
        ]
    },
    {
        id: 'web-server-beta',
        category: 'other',
        title: 'Strona Internetowa Serwera (Beta)',
        price: 20,
        badge: 'DOMENA GRATIS 95%',
        tagClass: 'tag-dojebane',
        isDojebane: true,
        icon: 'fa-globe',
        description: 'Nowoczesna strona internetowa dla Twojego serwera Discord + tania domena GRATIS w 95% przypadków!',
        features: [
            'Nowoczesny landing page serwera',
            'Przycisk dołączania & widget Discord',
            'Prezentacja regulaminu / ekipiy',
            'Domena gratis w 95% przypadków!'
        ]
    }
];

// App State
let cartItems = [];
let appliedPromo = null; // { code: string, discountPct: number }

// DOM Elements
const pricingGrid = document.getElementById('pricing-grid');
const cartItemsList = document.getElementById('cart-items-list');
const navCartCount = document.getElementById('nav-cart-count');

const summarySubtotal = document.getElementById('summary-subtotal');
const summaryBonusRow = document.getElementById('summary-bonus-row');
const summaryDomainRow = document.getElementById('summary-domain-row');
const summaryDiscountRow = document.getElementById('summary-discount-row');
const summaryDiscountVal = document.getElementById('summary-discount-val');
const summaryTotal = document.getElementById('summary-total');

const bonusProgressText = document.getElementById('bonus-progress-text');
const bonusProgressFill = document.getElementById('bonus-progress-fill');

const promoInput = document.getElementById('promo-input');
const promoStatus = document.getElementById('promo-status');
const btnApplyPromo = document.getElementById('btn-apply-promo');
const btnClearCart = document.getElementById('btn-clear-cart');
const btnCopyOrder = document.getElementById('btn-copy-order');
const btnDiscordOrder = document.getElementById('btn-discord-order');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPricingCards('all');
    setupCategoryFilters();
    setupFAQAccordion();
    setupCartEvents();
    updateCartUI();
});

// Render Pricing Cards
function renderPricingCards(filterCategory = 'all') {
    pricingGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? PRICING_DATA 
        : PRICING_DATA.filter(item => item.category === filterCategory);

    filtered.forEach(item => {
        const isSelected = cartItems.some(i => i.id === item.id);

        const cardEl = document.createElement('div');
        cardEl.className = `price-card ${item.isDojebane ? 'dojebane-card' : ''} ${isSelected ? 'selected' : ''}`;
        cardEl.dataset.id = item.id;

        cardEl.innerHTML = `
            <span class="card-tag ${item.tagClass}">${item.badge}</span>
            <div class="card-icon-wrap">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
            <ul class="card-features">
                ${item.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
            </ul>
            <div class="card-price-wrap">
                <div class="card-price">${item.price.toFixed(2)} <span class="card-currency">zł</span></div>
            </div>
            <button class="card-add-btn btn-card-add" onclick="toggleCartItem('${item.id}')">
                <i class="fa-solid ${isSelected ? 'fa-circle-check' : 'fa-plus'}"></i>
                <span>${isSelected ? 'W Koszyku' : 'Dodaj do Zamówienia'}</span>
            </button>
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

// Toggle Item in Cart
function toggleCartItem(itemId) {
    const item = PRICING_DATA.find(i => i.id === itemId);
    if (!item) return;

    const existingIdx = cartItems.findIndex(i => i.id === itemId);
    if (existingIdx > -1) {
        cartItems.splice(existingIdx, 1);
        showToast(`Usunięto: ${item.title}`, 'info');
    } else {
        cartItems.push(item);
        showToast(`Dodano do koszyka: ${item.title}`, 'success');
    }

    // Refresh UI
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category || 'all';
    renderPricingCards(activeFilter);
    updateCartUI();
}

// Remove item directly from cart list
function removeFromCart(itemId) {
    cartItems = cartItems.filter(i => i.id !== itemId);
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category || 'all';
    renderPricingCards(activeFilter);
    updateCartUI();
    showToast('Usunięto moduł z koszyka', 'info');
}

// Update Cart UI, calculations & Progress Bars
function updateCartUI() {
    // 1. Update Cart Items List
    if (cartItems.length === 0) {
        cartItemsList.innerHTML = `
            <li class="empty-cart-msg">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Twój koszyk jest pusty. Wybierz moduły z cennika powyżej!</p>
            </li>
        `;
    } else {
        cartItemsList.innerHTML = cartItems.map(item => `
            <li class="cart-item-single">
                <div class="cart-item-left">
                    <i class="fa-solid ${item.icon} text-accent"></i>
                    <span class="cart-item-name">${item.title}</span>
                </div>
                <div class="cart-item-right">
                    <span class="cart-item-price">${item.price.toFixed(2)} zł</span>
                    <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="Usuń">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </li>
        `).join('');
    }

    // 2. Nav Cart Count Badge
    navCartCount.textContent = cartItems.length;

    // 3. Subtotal calculation
    const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    summarySubtotal.textContent = `${subtotal.toFixed(2)} zł`;

    // 4. Bonus Stickymessages Check (>= 10 PLN)
    const bonusThreshold = 10;
    const hasBonus = subtotal >= bonusThreshold;

    if (hasBonus) {
        summaryBonusRow.style.display = 'flex';
        bonusProgressText.textContent = '🎉 Odblokowano darmowy bonus Stickymessages!';
        bonusProgressText.classList.add('text-green');
        bonusProgressFill.style.width = '100%';
    } else {
        summaryBonusRow.style.display = 'none';
        const needed = bonusThreshold - subtotal;
        const pct = Math.min(100, Math.max(0, (subtotal / bonusThreshold) * 100));
        bonusProgressText.textContent = `Brakuje ${needed.toFixed(2)} zł do darmowego bonusu`;
        bonusProgressText.classList.remove('text-green');
        bonusProgressFill.style.width = `${pct}%`;
    }

    // 5. Free Domain Check (if website included)
    const hasWebsite = cartItems.some(i => i.id === 'web-server-beta');
    summaryDomainRow.style.display = hasWebsite ? 'flex' : 'none';

    // 6. Discount calculation
    let discountAmount = 0;
    if (appliedPromo) {
        discountAmount = subtotal * (appliedPromo.discountPct / 100);
        summaryDiscountRow.style.display = 'flex';
        summaryDiscountVal.textContent = `-${discountAmount.toFixed(2)} zł (${appliedPromo.discountPct}%)`;
    } else {
        summaryDiscountRow.style.display = 'none';
    }

    // 7. Final Total calculation
    const finalTotal = Math.max(0, subtotal - discountAmount);
    summaryTotal.textContent = `${finalTotal.toFixed(2)} zł`;
}

// Setup Cart Action Events
function setupCartEvents() {
    // Clear Cart
    btnClearCart.addEventListener('click', () => {
        if (cartItems.length === 0) return;
        cartItems = [];
        appliedPromo = null;
        promoInput.value = '';
        promoStatus.textContent = '';
        renderPricingCards(document.querySelector('.filter-btn.active').dataset.category || 'all');
        updateCartUI();
        showToast('Koszyk został wyczyszczony', 'info');
    });

    // Apply Promo Code
    btnApplyPromo.addEventListener('click', applyPromoCode);
    promoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyPromoCode();
    });

    // Copy Order Summary
    btnCopyOrder.addEventListener('click', copyOrderToClipboard);
}

// Promo Code Logic
function applyPromoCode() {
    const code = promoInput.value.trim().toUpperCase();
    if (!code) {
        promoStatus.textContent = 'Proszę wpisać kod rabatowy.';
        promoStatus.className = 'promo-status text-pink';
        return;
    }

    // Any promo code provided by user or referrer will give 10% discount!
    appliedPromo = {
        code: code,
        discountPct: 10
    };

    promoStatus.textContent = `✅ Zastosowano kod: ${code} (-10% rabatu)`;
    promoStatus.className = 'promo-status text-green';
    updateCartUI();
    showToast(`Kod ${code} został aktywowany (-10%)!`, 'success');
}

// Copy Order to Clipboard
function copyOrderToClipboard() {
    if (cartItems.length === 0) {
        showToast('Wybierz przynajmniej jeden moduł przed skopiowaniem!', 'error');
        return;
    }

    const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const hasBonus = subtotal >= 10;
    const hasWebsite = cartItems.some(i => i.id === 'web-server-beta');
    const discountAmount = appliedPromo ? subtotal * (appliedPromo.discountPct / 100) : 0;
    const finalTotal = Math.max(0, subtotal - discountAmount);

    let summaryText = `🛒 **ZAMÓWIENIE METIS BOTS**\n`;
    summaryText += `-----------------------------------\n`;
    summaryText += `**Wybrane moduły:**\n`;
    cartItems.forEach(item => {
        summaryText += `• ${item.title} — ${item.price.toFixed(2)} zł\n`;
    });

    if (hasBonus) {
        summaryText += `• 🎁 **Stickymessages** (GRATIS od 10 PLN!)\n`;
    }
    if (hasWebsite) {
        summaryText += `• 🌐 **Domena WWW** (GRATIS w 95% przypadków)\n`;
    }

    summaryText += `-----------------------------------\n`;
    summaryText += `Suma: ${subtotal.toFixed(2)} zł\n`;
    if (appliedPromo) {
        summaryText += `Kod Rabatowy: **${appliedPromo.code}** (-10%)\n`;
        summaryText += `Rabat: -${discountAmount.toFixed(2)} zł\n`;
    }
    summaryText += `**ŁĄCZNA KWOTA: ${finalTotal.toFixed(2)} PLN**\n`;

    navigator.clipboard.writeText(summaryText).then(() => {
        showToast('📋 Skopiowano treść zamówienia do schowka!', 'success');
    }).catch(err => {
        showToast('Nie udało się skopiować automatycznie.', 'error');
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

// Toast Notifications Helper
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = 'fa-info-circle text-cyan';
    if (type === 'success') icon = 'fa-circle-check text-green';
    if (type === 'error') icon = 'fa-circle-exclamation text-pink';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
