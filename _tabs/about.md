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





<script>
  (function() {
    function startTranslate() {
      // 1. Google Script Yükle
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = function() {
          new google.translate.TranslateElement({pageLanguage: 'tr', autoDisplay: false}, 'google_translate_element');
        };
        const gtScript = document.createElement('script');
        gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(gtScript);
      }

      // 2. Gizli Div
      if (!document.getElementById('google_translate_element')) {
        const gDiv = document.createElement('div');
        gDiv.id = 'google_translate_element';
        gDiv.style.display = 'none';
        document.body.appendChild(gDiv);
      }

      // 3. Sidebar'a Ekle
      const inject = () => {
        if (document.getElementById('custom-translator')) return;
        const sidebar = document.querySelector('#sidebar .sidebar-bottom') || document.querySelector('.sidebar-bottom');
        if (sidebar) {
          const wrapper = document.createElement('div');
          wrapper.id = 'custom-translator';
          wrapper.style.cssText = "padding:15px; border-top:1px solid #444; margin-top:15px; text-align:center;";
          wrapper.innerHTML = `
            <div style="font-size:10px; color:#888; margin-bottom:10px;">DİL DEĞİŞTİR / SELECT LANG</div>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; font-size:20px;">
              <span onclick="window.setLang('tr')" style="cursor:pointer">🇹🇷</span>
              <span onclick="window.setLang('en')" style="cursor:pointer">🇺🇸</span>
              <span onclick="window.setLang('de')" style="cursor:pointer">🇩🇪</span>
              <span onclick="window.setLang('fr')" style="cursor:pointer">🇫🇷</span>
              <span onclick="window.setLang('ru')" style="cursor:pointer">🇷🇺</span>
              <span onclick="window.setLang('es')" style="cursor:pointer">🇪🇸</span>
            </div>
            <style>#goog-gt-tt, .goog-te-banner-frame, .skiptranslate { display: none !important; } body { top: 0px !important; }</style>
          `;
          sidebar.before(wrapper);
        }
      };
      
      window.setLang = function(lang) {
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

      setInterval(inject, 1000);
    }

    // Sayfa yüklendiğinde başlat
    if (document.readyState === 'complete') { startTranslate(); } 
    else { window.addEventListener('load', startTranslate); }
  })();
</script>
