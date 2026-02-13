/* Google Translate Başlatıcı */
const gtScript = document.createElement('script');
gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(gtScript);

window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({pageLanguage: 'tr', autoDisplay: false}, 'google_translate_element');
}

/* CSS ve HTML Enjeksiyonu */
const injectTranslate = () => {
    if (document.getElementById('custom-translator')) return;

    // Stil Ekleme
    const style = document.createElement('style');
    style.innerHTML = `
        #goog-gt-tt, .goog-te-balloon-frame, .skiptranslate, .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; position: static !important; }
        .custom-lang-wrapper { padding: 1rem; border-top: 1px solid var(--main-border-color); margin-top: 10px; }
        .lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px; }
        .lang-btn { cursor: pointer; font-size: 1.1rem; padding: 4px; border-radius: 4px; text-align: center; transition: 0.2s; }
        .lang-btn:hover { background: var(--sidebar-active-color); }
        .lang-label { font-size: 0.7rem; color: var(--sidebar-muted-color); text-transform: uppercase; font-weight: bold; }
    `;
    document.head.appendChild(style);

    // Gizli Google Div'i
    const gDiv = document.createElement('div');
    gDiv.id = 'google_translate_element';
    gDiv.style.display = 'none';
    document.body.appendChild(gDiv);

    // Sidebar'a Yerleştirme
    const sidebarBottom = document.querySelector('#sidebar .sidebar-bottom');
    if (sidebarBottom) {
        const wrapper = document.createElement('div');
        wrapper.id = 'custom-translator';
        wrapper.className = 'custom-lang-wrapper';
        wrapper.innerHTML = `
            <span class="lang-label">Dil / Language</span>
            <div class="lang-grid">
                <div class="lang-btn" onclick="setLang('tr')" title="Türkçe">🇹🇷</div>
                <div class="lang-btn" onclick="setLang('en')" title="English">🇺🇸</div>
                <div class="lang-btn" onclick="setLang('de')" title="Deutsch">🇩🇪</div>
                <div class="lang-btn" onclick="setLang('fr')" title="Français">🇫🇷</div>
                <div class="lang-btn" onclick="setLang('ru')" title="Rusça">🇷🇺</div>
                <div class="lang-btn" onclick="setLang('es')" title="İspanyolca">🇪🇸</div>
            </div>
        `;
        sidebarBottom.before(wrapper);
    }
};

/* Dil Değiştirme Fonksiyonu */
window.setLang = (lang) => {
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
    }
    if (lang === 'tr') {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    }
};

// Sayfa her yüklendiğinde çalıştır (Chirpy PWA dostu)
setInterval(injectTranslate, 
            1000);
