## Merhaba, Ben Sxinar!

Bir yandan eğitim hayatıma devam eden bir öğrenci, diğer yandan vaktinin büyük bir kısmını terminal ekranları, kod editörleri ve sunucu yapılandırmaları arasında geçiren bir Full-Stack geliştiriciyim. Günümüz internet dünyasının giderek hantallaşması, kullanıcı verilerinin ticari bir meta haline gelmesi ve dijital gözetimin artması karşısında alternatif çözümler üretmeyi amaçlayan **Artado** ekosisteminin, kurucu ortaktan sonraki ana geliştiricisi (Core Developer) olarak görev alıyorum.

Öğrencilik hayatımın bana kazandırdığı en büyük artı, sürekli araştırma ve sorgulama dürtüsüdür. Okul sıralarında öğrendiğim teorik bilgileri, açık kaynak dünyasının pratik ve dinamik gerçekleriyle harmanlıyorum. Benim için kod yazmak, sadece bir ödev veya gelecekteki bir meslek değil; dijital dünyayı kendi öğrenci masamdan başlayarak daha özgür, şeffaf ve güvenli bir yer haline getirme mücadelesidir.

Proje geliştirmelerimde özellikle modern web teknolojilerine, sistem otomasyonlarına ve kullanıcı deneyimini doğrudan artıran mikro araçlara odaklanıyorum. Svelte ekosisteminin hafifliği ve hızı, geliştirme felsefemin temel taşlarından birini oluşturuyor.

***

## Dijital Mahremiyet ve Açık Kaynak Felsefem

İnterneti bilgiye ulaşmak, ders çalışmak ve kendimi geliştirmek için aktif olarak kullanan bir genç olarak, her adımımızın izlenmesi ve profillenmesi fikrine her zaman karşı durdum. Bu doğrultuda, geliştirdiğim veya katkı sunduğum tüm projelerde şu iki temel ilkeyi benimsiyorum:

*   **Açık Kaynak (Open-Source):** Kodun gizli kalması, arkasında ne olduğunu bilmediğimiz kapalı kutular yaratır. Yazdığım her satırı topluluğun incelemesine, eleştirmesine ve geliştirmesine açıyorum. Bir öğrenci olarak hatalarımdan öğrenmenin en verimli yolunun bu şeffaflık olduğuna inanıyorum.
*   **Kullanıcı Mahremiyeti (Privacy):** Kullanıcıların verilerini toplamadan, onları birer reklam hedefi haline getirmeden de yüksek performanslı ve kaliteli dijital hizmetler sunulabileceğini kanıtlamak istiyorum.

***

## Geliştirdiğim Projeler ve Ekosistem Bileşenleri

Teoride kalmayıp, her gün yüzlerce kişinin aktif olarak kullandığı canlı sistemlerin altyapısını ve ön yüzünü tasarlıyorum. Üzerinde çalıştığım ana projeler şu şekildedir:

### Artado Search ve ArtStelve Mimarisi
Büyük teknoloji devlerinin takip mekanizmalarına karşı geliştirdiğimiz, gizlilik odaklı arama motoru projemizin kullanıcıya dokunan tüm yüzünü yönetiyorum.
*   **ArtStelve Ön Yüzü:** Geleneksel ve ağır framework'ler (React, Vue vb.) yerine, sanal DOM kullanmayan ve kodu doğrudan optimize edilmiş saf JavaScript'e derleyen **Svelte/SvelteKit** mimarisini tercih ettim. Bu sayede tarayıcıyı yormayan, çok düşük donanımlı cihazlarda bile anında tepki veren bir arayüz ortaya çıkardım.
*   **Sıfır Takip Verisi:** Kullanıcı arama yaptığında tarayıcıya hiçbir takip çerezi (tracking cookie) bırakılmamasını sağlayan ve sorguları şifreleyerek arka uca ileten istemci tarafı güvenlik önlemlerini entegre ettim.

### Artado Proxy Altyapısı
Arama motorumuzun harici kaynaklardan veri çekerken kullanıcıların gerçek IP adreslerini ve kimliklerini sızdırmasını önleyen kritik güvenlik kalkanıdır.
*   **Serverless Edge Teknolojileri:** Node.js tabanlı geliştirdiğim bu altyapıyı Vercel Edge Functions üzerinde çalışacak şekilde optimize ettim. Bu sayede kullanıcı trafiği, dünya genelindeki en yakın uç noktalarda anonimleştirilerek güvenli bir şekilde yönlendiriliyor.

### NalaZy (Debian/Ubuntu Terminal Optimizasyonu)
Linux dünyasına olan ilgimin ve sistem yöneticiliği merakımın bir ürünü olan, tamamen açık kaynaklı bir terminal verimlilik aracıdır.
*   **Geliştirme Amacı:** Debian tabanlı dağıtımlarda gelişmiş paket yöneticisi olan `nala` komutlarının kullanımını hızlandırmak.
*   **Teknik Detay:** Bash scripting yeteneklerimi kullanarak karmaşık, uzun ve akılda tutulması zor olan sistem güncelleme, temizleme ve paket yönetim komutlarını akıllı alias (takma ad) ve fonksiyon koleksiyonlarına dönüştürdüm.

### Artado Devs & Artado Docs
Ekosistemimizi diğer geliştiricilere açtığımız platformların mimarisini üstleniyorum.
*   **Artado Devs:** Geliştirdiğimiz proxy yapılarını ve arama API'lerini diğer yazılımcıların kendi projelerinde kullanabilmesi için hazırladığımız geliştirici portalıdır.
*   **Artado Docs:** Karmaşık sistem mimarilerini, özellikle yazılıma yeni başlayan öğrenci arkadaşlarımın bile rahatça anlayabileceği seviyeye indirgeyerek hazırladığım resmi dokümantasyon merkezidir.

***

## Teknik Yetkinliklerim (Tech Stack)

Sürekli öğrenen ve teknolojiyi yakından takip eden bir geliştirici olarak, projelerimde modern, kararlı ve performans odaklı araçları seçmeye özen gösteriyorum.

| Alan | Teknolojiler ve Protokoller | Kullanım ve Deneyim Detayları |
| :--- | :--- | :--- |
| **Ön Yüz (Frontend)** | Svelte, SvelteKit, JavaScript (ES6+), Tailwind CSS | Performans odaklı, bileşen tabanlı, responsive ve sıfır hantallık içeren modern web arayüzleri tasarımı. |
| **Arka Yüz (Backend)** | Node.js, TypeScript, PHP | Güvenli API uç noktaları (REST), sunucu tarafı işleme (SSR) süreçleri ve mikro servis mimarilerinin yönetimi. |
| **Sistem ve Altyapı** | Linux (Debian, Ubuntu), Bash Scripting | Sunucu otomasyonları, terminal verimlilik araçları yazımı ve kabuk betikleri ile sistem yönetimi. |
| **Ağ ve Güvenlik** | Proxy Mimarileri, API Entegrasyonları, CORS Politikaları | Veri trafiğinin anonimleştirilmesi, tarayıcı güvenlik başlıklarının yapılandırılması ve veri maskeleme. |
| **Araçlar ve Süreçler** | Git, GitHub, Vercel Deployment | Versiyon kontrolü, takım içi kod koordinasyonu, açık kaynak proje yönetimi ve CI/CD süreçleri. |

***

## Bilinen Tüm Hesaplarım ve İletişim Kanalları

Açık kaynak dünyasında iş birliğine, geri bildirimlere ve birlikte öğrenmeye çok değer veriyorum. Projelerimi incelemek, kaynak kodlara katkıda bulunmak, hata bildiriminde bulunmak ya da yazılım ve öğrencilik hayatı üzerine sohbet etmek isterseniz bana aşağıdaki kanallardan ulaşabilirsiniz:

*   **Açık Kaynak Kod Depom (GitHub):** [github.com/sxinar](https://github.com/sxinar) (NalaZy, ArtStelve ve tüm kişisel deneysel projelerim burada yer almaktadır.)
*   **Artado Ağ Profilim:** [artado.xyz/profile.php?slug=sxinar](https://artado.xyz/profile.php?slug=sxinar) (Ekosistem içerisindeki resmi profil sayfam.)
*   **Topluluk Forumu ve Blog:** [forum.artado.xyz](https://forum.artado.xyz/) (Geliştirici günlüklerimi paylaştığım, projelerimizi tartıştığımız ana platformumuz.)
*   **Kurumsal İletişim E-Posta Adresi:** `sxi@artadosearch.com` (Geliştirme teklifleri, teknik sorular veya akademik iş birlikleri için.)

### Canlı Proje Linkleri

Geliştirilmesinde aktif rol oynadığım platformları doğrudan deneyimleyebilirsiniz:

*   Mahremiyet Odaklı Arama Motoru: [beta.artadosearch.com](https://beta.artadosearch.com)
*   Geliştirici Portalı: [devs.artado.xyz](https://devs.artado.xyz)
*   Teknik Dokümantasyon: [docs.artado.xyz](https://docs.artado.xyz)
*   Geliştirici Forumu: [forum.artado.xyz](https://forum.artado.xyz/)
*   Kullanılan Canlı Proxy Altyapısı: [artados.vercel.app](https://artados.vercel.app)

> "Kod yazmak sadece teknik bir süreç ya da bir meslek icrası değildir; dijital dünyayı, kendi çalışma masamızdan başlayarak daha özgür, şeffaf ve adil bir yapıya kavuşturma zanaatıdır."
