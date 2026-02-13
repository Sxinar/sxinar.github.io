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

\* \*\*İçerik Üretimi:\*\* Yazılım dünyasındaki deneyimlerimi ve teknolojik gelişmeleri burada ve \*\*[forum.artado.xyz](https://forum.artado.xyz/)\*\* adresindeki proje forumumluzda paylaşıyorum.

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

<div id="secoment-app" style="max-width: 650px; margin: 20px auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px; color: #333;">Yorumlar</h3>
    
    <div id="comment-list" style="min-height: 50px; margin-bottom: 30px;">
        <div class="loading-spinner">Yükleniyor...</div>
    </div>

    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border: 1px solid #e1e4e8;">
        <h4 style="margin-top: 0; color: #555;">Bir yorum bırakın</h4>
        <input type="text" id="sc-name" placeholder="Adınız" style="width: 100%; padding: 12px; margin-bottom: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px;">
        <textarea id="sc-msg" placeholder="Mesajınız..." style="width: 100%; height: 100px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; resize: vertical;"></textarea>
        <button onclick="sendCom()" style="margin-top: 10px; background: #007bff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s;">
            Gönder
        </button>
    </div>
</div>

<style>
    .comment-item { background: white; padding: 15px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #007bff; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.2s; }
    .comment-item:hover { transform: translateX(5px); }
    .comment-meta { display: flex; align-items: center; margin-bottom: 8px; }
    .comment-author { font-weight: bold; color: #2c3e50; font-size: 15px; }
    .comment-date { font-size: 12px; color: #95a5a6; margin-left: 10px; }
    .comment-text { color: #444; line-height: 1.5; font-size: 14px; }
    .loading-spinner { text-align: center; color: #888; padding: 20px; font-style: italic; }
</style>

<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

    const firebaseConfig = {
        apiKey: "AIzaSyAGw79xzO43dw5Vts7f2iV6vmA_BLxBJ1A",
        authDomain: "secoment.firebaseapp.com",
        projectId: "secoment",
        storageBucket: "secoment.firebasestorage.app",
        messagingSenderId: "1028497467881",
        appId: "1:1028497467881:web:b6af0d2301ec5323120378"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const pageId = window.location.pathname;

    const q = query(collection(db, "comments"), 
              where("pageId", "==", pageId), 
              where("approved", "==", true),
              orderBy("createdAt", "desc"));

    onSnapshot(q, (snap) => {
        const listDiv = document.getElementById("comment-list");
        if (snap.empty) {
            listDiv.innerHTML = "<p style='color:#999;'>İlk yorumu siz yapın!</p>";
            return;
        }
        let html = "";
        snap.forEach(d => {
            const data = d.data();
            const date = data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : "...";
            html += `
                <div class="comment-item">
                    <div class="comment-meta">
                        <span class="comment-author">${data.name}</span>
                        <span class="comment-date">${date}</span>
                    </div>
                    <div class="comment-text">${data.text}</div>
                </div>`;
        });
        listDiv.innerHTML = html;
    });

    window.sendCom = async () => {
        const n = document.getElementById("sc-name");
        const t = document.getElementById("sc-msg");
        if(!n.value || !t.value) return alert("Lütfen boş bırakmayın!");
        
        try {
            await addDoc(collection(db, "comments"), {
                name: n.value, text: t.value, pageId: pageId, approved: false, createdAt: serverTimestamp()
            });
            alert("Teşekkürler! Yorumunuz onaylandıktan sonra burada görünecektir.");
            t.value = "";
        } catch(e) { alert("Hata: " + e.message); }
    };
</script>

