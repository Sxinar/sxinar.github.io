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

### Dil Seçenekleri / Languages

<div class="custom-translator-grid">
  <span onclick="runLang('tr')" class="lang-link">🇹🇷 Türkçe</span>
  <span onclick="runLang('en')" class="lang-link">🇺🇸 English</span>
  <span onclick="runLang('de')" class="lang-link">🇩🇪 Deutsch</span>
  <span onclick="runLang('fr')" class="lang-link">🇫🇷 Français</span>
  <span onclick="runLang('ru')" class="lang-link">🇷🇺 Русский</span>
</div>

<div id="google_translate_element" style="display:none"></div>

<style>
  .custom-translator-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
  .lang-link {
    padding: 12px;
    border: 1px solid var(--main-border-color);
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    color: var(--text-color);
    font-weight: bold;
    background: var(--card-bg);
    user-select: none;
  }
  .lang-link:hover {
    background: var(--sidebar-active-color);
    color: white !important;
  }
  /* Sayfa kaymasını önlemek için */
  .skiptranslate { display: none !important; }
  body { top: 0px !important; position: static !important; }
</style>

<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<script>
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'tr',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
  }

  function runLang(langCode) {
    // 1. Google'ın içindeki gizli seçiciyi bul ve tetikle
    var select = document.querySelector('select.goog-te-combo');
    if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
    }
    
    // 2. Çerezleri de her ihtimale karşı set et
    var domain = window.location.hostname;
    document.cookie = "googtrans=/tr/" + langCode + "; path=/; domain=" + domain;
    document.cookie = "googtrans=/tr/" + langCode + "; path=/";
    
    // 3. Eğer hemen çevrilmezse sayfayı tazele
    setTimeout(function() {
        if (langCode === 'tr') {
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            location.reload();
        } else {
            location.reload();
        }
    }, 300);
  }
</script>
