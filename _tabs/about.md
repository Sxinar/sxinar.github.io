---
title: Hakkımda
permalink: about
icon: fas fa-info-circle
order: 4
---

***

## Merhaba, ben Sxinar! 👋

Ben bir \*\*Açık Kaynak (Open-Source) tutkunu\*\*, Full-stack geliştirici ve dijital gizlilik savunucusuyum. İnterneti daha özgür, daha hızlı ve daha şeffaf hale getirmek isteyen \*\*Artado\*\* ekibinin kurucudan sonraki Ana geliştiricisiyim.

Genellikle modern web teknolojileri (özellikle \*\*Svelte\*\*), sistem otomasyonları ve kullanıcı deneyimini iyileştiren araçlar üzerine çalışıyorum.

***

### 🚀 Neler Yapıyorum?

\* \*\*[Artado Search](https://artado.xyz):\*\* Mahremiyet odaklı arama motoru projemizde, kullanıcıların verilerini koruyarak en doğru bilgiye ulaşmasını sağlayan frontend (ArtStelve) ve proxy sistemlerini geliştiriyorum.

\* \*\*[NalaZy](https://github.com/Sxinar/NalaZy):\*\* Debian tabanlı sistemlerde \`nala\` kullanımını hızlandıran akıllı alias koleksiyonu gibi terminal verimlilik araçları üretiyorum.

\* \*\*İçerik Üretimi:\*\* Yazılım dünyasındaki deneyimlerimi ve teknolojik gelişmeleri burada ve \*\*[forum.artado.xyz](https://forum.artado.xyz/)\*\* adresindeki proje forumumuzda paylaşıyorum.

***

### 🛠️ Teknoloji Yığınım (Stack)

| Alan | Teknolojiler |

| \*\*Frontend\*\* | Svelte, SvelteKit, JavaScript, Tailwind CSS |

| \*\*Backend\*\* | Node.js, TypeScript, PHP |

| \*\*Araçlar\*\* | Git, Docker, Bash Scripting, Linux (Debian/Ubuntu) |

| \*\*Sistem\*\* | Proxy Yapıları, API Entegrasyonları, Web Güvenliği |

***

### 🌐 Beni Takip Edin

Projelerimi incelemek, katkıda bulunmak veya sadece merhaba demek isterseniz bana aşağıdaki kanallardan ulaşabilirsiniz:

\* \*\*GitHub:\*\* [@sxinar](https://github.com/sxinar)

\* \*\*Artado Profil:\*\* [sxinar @ Artado](https://artado.xyz/profile.php?slug=sxinar)

\* \*\*Blog:\*\* [forum.artado.xyz]https://forum.artado.xyz/)

\* \*\*E-posta:\*\* \`sxi@artadosearch.com\`

> "Kod yazmak sadece bir iş değil, dijital dünyayı daha iyi bir yer haline getirme sanatıdır."

***



<div id="translator-anchor"></div>

<script>
(function() {
  const initTranslator = () => {
    if (document.getElementById('permanent-translator')) return;

    // 1. Google Altyapısı
    const gDiv = document.createElement('div');
    gDiv.id = 'google_translate_element';
    gDiv.style.display = 'none';
    document.body.appendChild(gDiv);

    const gtScript = document.createElement('script');
    gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(gtScript);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement({pageLanguage: 'tr', autoDisplay: false}, 'google_translate_element');
    };

    // 2. Sabit Panel Oluştur (Ekranın sol altına yapışır)
    const panel = document.createElement('div');
    panel.id = 'permanent-translator';
    panel.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 999999;
      background: var(--sidebar-bg, #1b1b1e);
      border: 1px solid var(--main-border-color, #444);
      padding: 10px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      display: flex;
      gap: 10px;
      align-items: center;
    `;

    panel.innerHTML = `
      <style>
        #goog-gt-tt, .goog-te-banner-frame, .skiptranslate { display: none !important; }
        body { top: 0px !important; position: static !important; }
        .l-btn { cursor: pointer; font-size: 20px; transition: transform 0.2s; }
        .l-btn:hover { transform: scale(1.3); }
      </style>
      <span class="l-btn" onclick="applyLang('tr')">🇹🇷</span>
      <span class="l-btn" onclick="applyLang('en')">🇺🇸</span>
      <span class="l-btn" onclick="applyLang('de')">🇩🇪</span>
      <span class="l-btn" onclick="applyLang('fr')">🇫🇷</span>
      <span class="l-btn" onclick="applyLang('ru')">🇷🇺</span>
    `;

    document.body.appendChild(panel);
  };

  window.applyLang = (lang) => {
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

  // Sayfa yüklendiğinde ve her 2 saniyede bir (PWA için) kontrol et
  window.addEventListener('load', initTranslator);
  setInterval(initTranslator, 2000);
  initTranslator(); // Anında çalıştır
})();
</script>

