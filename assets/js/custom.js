/* Google Translate Altyapısı */
(function() {
  const gDiv = document.createElement('div');
  gDiv.id = 'google_translate_element';
  gDiv.style.display = 'none';
  document.body.appendChild(gDiv);

  const gtScript = document.createElement('script');
  gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(gtScript);

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({pageLanguage: 'tr', autoDisplay: false}, 'google_translate_element');
  }

  window.setLang = function(lang) {
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
    }
    if (lang === 'tr') {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();
    }
  };

  function injectTranslateUI() {
    if (document.getElementById('custom-translator')) return;

    // Chirpy Sidebar Seçicileri (Farklı versiyonlar için 3 farklı ihtimali kontrol eder)
    const sidebarBottom = document.querySelector('.sidebar-bottom') || 
                          document.querySelector('#sidebar-footer') || 
                          document.querySelector('.sidebar-links');

    if (sidebarBottom) {
      const wrapper = document.createElement('div');
      wrapper.id = 'custom-translator';
      // Sidebar genişliğine uyum sağlaması için margin ve padding ayarı
      wrapper.style.cssText = "padding: 1rem 0; border-top: 1px solid var(--main-border-color); margin: 10px 1.5rem;";
      
      wrapper.innerHTML = `
        <style>
          #goog-gt-tt, .goog-te-balloon-frame, .skiptranslate, .goog-te-banner-frame { display: none !important; }
          body { top: 0px !important; position: static !important; }
          .lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 10px; justify-items: center; }
          .lang-btn { cursor: pointer; font-size: 1.3rem; padding: 5px; border-radius: 8px; transition: all 0.2s ease; border: 1px solid transparent; width: 100%; text-align: center; }
          .lang-btn:hover { background: var(--sidebar-active-color); border-color: var(--sidebar-muted-color); transform: scale(1.1); }
          .lang-label { font-size: 0.75rem; color: var(--sidebar-muted-color); text-transform: uppercase; font-weight: bold; letter-spacing: 1px; padding-left: 5px; }
        </style>
        <span class="lang-label">DİL / LANG</span>
        <div class="lang-grid">
          <div class="lang-btn" onclick="setLang('tr')" title="Türkçe">🇹🇷</div>
          <div class="lang-btn" onclick="setLang('en')" title="English">🇺🇸</div>
          <div class="lang-btn" onclick="setLang('de')" title="Deutsch">🇩🇪</div>
          <div class="lang-btn" onclick="setLang('fr')" title="Français">🇫🇷</div>
          <div class="lang-btn" onclick="setLang('ru')" title="Русский">🇷🇺</div>
          <div class="lang-btn" onclick="setLang('es')" title="Español">🇪🇸</div>
        </div>
      `;
      
      // Sidebar'ın en altına değil, mevcut içeriğin hemen üstüne ekle
      sidebarBottom.parentNode.insertBefore(wrapper, sidebarBottom);
      console.log("Translate UI Başarıyla Yüklendi");
    }
  }

  // Sayfa geçişlerinde (PWA) kaybolmaması için saniyelik kontrol
  setInterval(injectTranslateUI, 1000);
  
})();
