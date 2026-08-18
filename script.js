/* ==========================================================================
   Metis Community - Simple Discord Bot Pricing Script (No Descriptions)
   ========================================================================== */

const PRICING_ITEMS = [
    {
        category: 'tickets',
        title: 'Tickety Normalne',
        price: 3,
        badge: 'NORMAL',
        badgeClass: 'badge-normal',
        isPro: false,
        icon: 'fa-ticket'
    },
    {
        category: 'tickets',
        title: 'Tickety PRO',
        price: 5,
        badge: 'PRO',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-ticket-simple'
    },
    {
        category: 'welcome',
        title: 'Powitania Normalne',
        price: 2,
        badge: 'NORMAL',
        badgeClass: 'badge-normal',
        isPro: false,
        icon: 'fa-hand-wave'
    },
    {
        category: 'welcome',
        title: 'Powitania PRO',
        price: 4,
        badge: 'PRO',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-image'
    },
    {
        category: 'welcome',
        title: 'Boost Info Normalne',
        price: 2,
        badge: 'NORMAL',
        badgeClass: 'badge-normal',
        isPro: false,
        icon: 'fa-bolt'
    },
    {
        category: 'welcome',
        title: 'Boost Info PRO',
        price: 4,
        badge: 'PRO',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-gem'
    },
    {
        category: 'welcome',
        title: 'Stickymessages',
        priceText: 'GRATIS (od 10 zł)',
        badge: 'BONUS',
        badgeClass: 'badge-gratis',
        isPro: false,
        icon: 'fa-note-sticky'
    },
    {
        category: 'economy',
        title: 'Podstawowa Ekonomia',
        price: 9,
        badge: 'WALUTA',
        badgeClass: 'badge-normal',
        isPro: false,
        icon: 'fa-wallet'
    },
    {
        category: 'economy',
        title: 'Gry Ekonomiczne PRO',
        price: 15,
        badge: 'METIS SET',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-dice'
    },
    {
        category: 'security',
        title: 'Weryfikacja Przycisk',
        price: 2,
        badge: 'STANDARD',
        badgeClass: 'badge-normal',
        isPro: false,
        icon: 'fa-square-check'
    },
    {
        category: 'security',
        title: 'Weryfikacja Math',
        price: 3,
        badge: 'ANTY-BOT',
        badgeClass: 'badge-hot',
        isPro: false,
        icon: 'fa-calculator'
    },
    {
        category: 'security',
        title: 'Weryfikacja Captcha',
        price: 5,
        badge: 'MAX SECURITY',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-shield-cat'
    },
    {
        category: 'security',
        title: 'System Ochronny Full Zestaw',
        price: 8,
        badge: 'FULL SHIELD',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-shield-halved'
    },
    {
        category: 'giveaway',
        title: 'Giveaway Normalne',
        price: 3,
        badge: 'NORMAL',
        badgeClass: 'badge-normal',
        isPro: false,
        icon: 'fa-gift'
    },
    {
        category: 'giveaway',
        title: 'Giveaway PRO',
        price: 4,
        badge: 'PRO',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-wand-magic-sparkles'
    },
    {
        category: 'other',
        title: 'Strona Internetowa (Beta)',
        price: 20,
        badge: 'DOMENA GRATIS 95%',
        badgeClass: 'badge-pro',
        isPro: true,
        icon: 'fa-globe'
    },
    {
        category: 'other',
        title: 'Priorytet Realizacji',
        price: 2,
        badge: 'EXPRESS',
        badgeClass: 'badge-hot',
        isPro: false,
        icon: 'fa-bolt-lightning'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pricing-container');
    const tabs = document.querySelectorAll('.filter-tab');

    function render(category = 'all') {
        container.innerHTML = '';

        const items = category === 'all' 
            ? PRICING_ITEMS 
            : PRICING_ITEMS.filter(i => i.category === category);

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = `pricing-item ${item.isPro ? 'pro-item' : ''}`;

            const priceHtml = item.priceText 
                ? `<div class="item-price-custom">${item.priceText}</div>`
                : `<div class="item-price">${item.price.toFixed(2)} <span>zł</span></div>`;

            card.innerHTML = `
                <div class="item-head">
                    <div class="item-icon-title">
                        <i class="fa-solid ${item.icon}"></i>
                        <h3 class="item-title">${item.title}</h3>
                    </div>
                    <span class="badge ${item.badgeClass}">${item.badge}</span>
                </div>
                <div class="item-foot">
                    ${priceHtml}
                </div>
            `;
            container.appendChild(card);
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            render(tab.dataset.category);
        });
    });

    render('all');
});
