---
layout: page
title: Wombat
permalink: wombat-proje
icon: fas fa-folder-open
order: null
---

# Web Siteleri İçin Hafif, Güvenli ve Bağımsız Bir Yorum Platformu: Wombat'ın Geliştirme Süreci ve Mimarisi

Modern web ekosisteminde, statik veya dinamik fark etmeksizin projelerin en büyük ihtiyaçlarından biri kullanıcı etkileşimidir. Ancak günümüzdeki mevcut üçüncü parti yorum sistemleri, beraberlerinde ciddi bir performans yükü, gizlilik endişeleri ve agresif takipçi (tracker) kodları getiriyor. Kendi geliştirdiğim projelerde bu tarz dışa bağımlılıklardan ve performans kayıplarından uzak durmak adına, kontrolü tamamen geliştiricide olan, hafif ve modern bir alternatif tasarladım: Wombat.

Wombat; SvelteKit ve TypeScript ile inşa edilmiş, backend operasyonları ve veri yönetimi için ise Supabase'in güçlü altyapısından yararlanan bağımsız bir yorum platformudur. Tek bir widget betiği aracılığıyla herhangi bir web sitesine kolayca entegre edilebilen bu platform, hem son kullanıcı tarafında minimalist bir deneyim sunuyor hem de admin panelinde proje sahiplerine detaylı bir yönetim mekanizması sağlıyor.

Uygulamanın canlı sürümünü incelemek isterseniz projenin web sitesini ziyaret edebilirsiniz: https://wombatc.vercel.app

***

## Projenin Temel Öncelikleri ve Özellikleri

Wombat'ı geliştirirken üç ana sütun üzerine odaklandım: Minimum kaynak tüketimi, maksimum veri güvenliği ve esnek yönetim.

* Hafif Gömülü Entegrasyon: Projenin istemci (client) tarafındaki script boyutu ve DOM üzerindeki etkisi minimum düzeyde tutulmuştur. Bu sayede yerleştirildiği sitelerin ilk yüklenme performansını (Core Web Vitals) olumsuz etkilemez.
* Zengin ve Güvenli İçerik Yapısı: Kullanıcıların kendilerini daha iyi ifade edebilmeleri için yorumlarda Markdown formatı desteklenmektedir. Ancak bu durum güvenlik açığı oluşturmaması adına gelişmiş bir filtreleme mekanizmasıyla korunmaktadır.
* Hiyerarşik Tartışma Ağacı: Yorumlar, tek düzeliğin ötesinde parent_id ilişkisiyle hiyerarşik (thread) bir yapıda listelenir. Böylece kullanıcılar belirli bir yoruma doğrudan yanıt verebilir ve derinlemesine tartışmalar yürütülebilir.
* Gelişmiş Etkileşimler: Kullanıcılar yorumlara önceden tanımlanmış reaksiyonlarla geri bildirim bırakabilirler. Bu reaksiyonlar, aynı kullanıcı veya cihaz tekrar tıkladığında akıllı bir durum yönetimiyle kaldırılacak (toggle) şekilde kurgulanmıştır.
* Merkezi Dashboard ve Proje Yönetimi: Geliştiriciler panel üzerinden birden fazla proje oluşturabilir, her projenin yorumlarını bağımsız olarak onaylayabilir, silebilir veya spam olarak işaretleyebilir.

***

## Teknik Mimari ve Teknoloji Seçimleri

Projenin sürdürülebilir, tip güvenli ve performanslı olması için modern bir teknoloji yığını tercih ettim.

### Teknolojik Altyapı

* SvelteKit: Hem yönetim panelinin SSR (Server-Side Rendering) ile hızlıca yüklenmesini sağlamak hem de widget'ın ihtiyaç duyduğu /api/comments gibi API uç noktalarını tek bir çatı altında yönetmek için SvelteKit biçilmiş kaftandı.
* Supabase: Açık kaynaklı bir Firebase alternatifi olan Supabase; PostgreSQL veritabanı ihtiyacını, kullanıcı kimlik doğrulama (Auth) süreçlerini ve satır bazlı güvenlik politikalarını mükemmel şekilde çözüyor.
* Marked & DOMPurify: İstemciden gelen Markdown formatındaki metinler Marked kütüphanesiyle HTML'e dönüştürülür ve hemen ardından DOMPurify filtresinden geçirilerek olası XSS (Cross-Site Scripting) saldırıları tamamen bertaraf edilir.

### Veri Modeli Tasarımı

Sistem mimarisi, ilişkisel bir veritabanı modeli üzerinde yükselmektedir. Ana tablolar ve işlevleri şu şekildedir:

* profiles: Kullanıcı bilgilerini ve is_admin gibi rol tabanlı yetki bayraklarını tutar.
* projects: Platformda oluşturulan benzersiz projeleri barındırır. Her projenin yorum akışı kendine özeldir.
* threads: Sayfa bazlı yorum gruplarını yönetir.
* comments: Yorum metni, onay durumu (pending, approved, spam), admin yorumu olup olmadığı bilgisi ve hiyerarşi için parent_id alanlarını içerir.
* comment_reactions: Reaksiyonların durumunu tutar ve suistimali önlemek için IP tabanlı kısıtlamalarla izlenir.
* abuse_limits: Sistem genelinde oran sınırlaması (rate limiting) verilerini saklar.

***

## Güvenlik ve Doğrulama Katmanları

Wombat'ın en çok mesai harcadığım kısımlarından biri güvenlik mimarisidir. Üçüncü parti bir betiğin dış sitelerde güvenle çalışabilmesi için şu önlemleri aldım:

### 1. Veritabanı Seviyesinde Güvenlik (RLS)

Supabase üzerinde tanımlanan Row Level Security (RLS) kuralları sayesinde, bir kullanıcı asla sahip olmadığı bir project_id değerine ait verilere erişemez veya bunları değiştiremez. Veri güvenliği sadece arayüzde değil, doğrudan veritabanı katmanında doğrulanır.

### 2. Oran Sınırlaması (Rate Limiting)

Açık API uç noktalarının botlar tarafından manipüle edilmesini veya spam bombardımanına tutulmasını engellemek amacıyla yorum gönderimi ve reaksiyon bırakma işlemlerinde IP tabanlı oran sınırlaması uygulanmaktadır.

### 3. Admin Yetkilendirmeleri

Sistemdeki hassas rol değişiklikleri sıradan SQL komutlarıyla veya istemci tarafındaki isteklerle yapılamaz. Bunun yerine Supabase üzerinde tanımlanmış, yalnızca mevcut admin yetkisine sahip kullanıcıların tetikleyebileceği SECURITY DEFINER işaretli özel RPC (Remote Procedure Call) fonksiyonları kullanılır.

***

## Entegrasyon ve Kullanım Kılavuzu

Sistemi herhangi bir web sitesine dahil etmek oldukça basittir. Panelden oluşturulan projenin ayarlar sekmesinden alınan kod bloğu, hedef sitenin HTML yapısına yerleştirilir:

Burada dikkat edilmesi gereken en önemli nokta, data-page-id alanının her sayfa veya her blog yazısı için içerik yönetim sisteminiz tarafından dinamik ve benzersiz bir değerle (örneğin sayfa slug'ı) doldurulması gerektiğidir.

***

## Geliştiriciler İçin Kendi Sunucusunda Barındırma (Self-Hosting)

Wombat, bağımsız yapısı gereği tamamen kendi altyapınızda barındırılmaya (self-host) uygun şekilde geliştirilmiştir. Projeyi kendi sunucularınızda ayağa kaldırmak için şu adımları izleyebilirsiniz:

1. Deponun Yerel Ortama Alınması ve Bağımlılıkların Çözülmesi:
`git clone` 
`cd wombat`
`npm install`
2. Veritabanı Şemasının Uygulanması: Supabase panelinizde bir proje başlattıktan sonra, `supabase/migrations/00000_init.sql` dosyasında yer alan şema kurallarını ve RLS politikalarını SQL Editor üzerinde çalıştırarak veritabanınızı hazır hale getirin.
3. Çevre Değişkenlerinin Yapılandırılması: Kök diznde bir .env dosyası oluşturarak Supabase bağlantı bilgilerinizi tanımlayın:
`VITE_SUPABASE_URL=https://PROJE_ADRESINIZ.supabase.co`
`VITE_SUPABASE_ANON_KEY=anon_key_degeriniz`
4. İlk Yönetici Hesabının Tanımlanması: Sisteme kayıt olan ilk kullanıcıya admin yetkisi vermek için Supabase SQL Editor üzerinde şu komutu bir defaya mahsus çalıştırın:
`update public.profiles set is_admin = true where email = 'admin@example.com';`

Bu aşamadan sonra npm run dev komutu ile yerel geliştirme sunucunuzu başlatabilir, npm run build ile üretim ortamı çıktılarını alabilir veya npm run build:widget komutuyla sadece dış sitelere gömülecek olan JavaScript dosyasını derleyebilirsiniz.

***

## Sonuç

Wombat; performans kaybı yaşatmayan, kullanıcı verilerini üçüncü parti reklam şirketlerine satmayan ve tamamen geliştiricinin kontrolünde büyüyen bir platform arayışının sonucudur. Temiz kod yapısı, güvenlik öncelikli tasarımı ve SvelteKit'in getirdiği hız avantajlarıyla modern web projeleri için güçlü bir alternatif konumundadır.

Projeyi daha yakından incelemek, test etmek veya geliştirme süreçlerine katkıda bulunmak için wombatc.vercel.app adresini inceleyebilir, geri bildirimlerinizi doğrudan benimle paylaşabilirsiniz.
