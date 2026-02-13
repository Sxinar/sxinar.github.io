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


<div id="secoment-section" style="max-width:600px; margin:auto;">
    <h4>Yorumlar</h4>
    <div id="comment-list">Yükleniyor...</div>
    <div style="margin-top:20px; border-top:1px solid #ddd; padding-top:10px;">
        <input type="text" id="sc-name" placeholder="Adınız" style="width:100%; margin-bottom:5px;">
        <textarea id="sc-msg" placeholder="Yorumunuz..." style="width:100%; height:80px;"></textarea>
        <button onclick="sendCom()" style="width:100%; padding:10px; background:#28a745; color:white; border:none;">Gönder</button>
    </div>
</div>

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
    const pageId = window.location.pathname; // Otomatik sayfa ID'si

    const q = query(collection(db, "comments"), 
              where("pageId", "==", pageId), 
              where("approved", "==", true),
              orderBy("createdAt", "desc"));

    onSnapshot(q, (snap) => {
        let h = "";
        snap.forEach(d => {
            h += `<div style="padding:10px; border-bottom:1px solid #eee;">
                    <b>${d.data().name}:</b><br>${d.data().text}
                  </div>`;
        });
        document.getElementById("comment-list").innerHTML = h || "Henüz onaylı yorum yok.";
    });

    window.sendCom = async () => {
        const n = document.getElementById("sc-name").value;
        const t = document.getElementById("sc-msg").value;
        if(!n || !t) return alert("Boş bırakmayın!");
        await addDoc(collection(db, "comments"), {
            name: n, text: t, pageId: pageId, approved: false, createdAt: serverTimestamp()
        });
        alert("Yorumunuz iletildi, onay bekliyor.");
        document.getElementById("sc-msg").value = "";
    };
</script>
