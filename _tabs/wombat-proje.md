---
layout: page
title: Wombat - Proje
permalink: wombat-proje
icon: fas fa-folder-open
order: null
---

# Wombat Yorum Sistemi – Resmi Dokümantasyon

> Wombat, statik ve dinamik web siteleri için geliştirilmiş, Svelte-Kit tabanlı ve Supabase entegrasyonu ile çalışan hafif bir yorum sistemidir. Tek bir script dosyası üzerinden herhangi bir web sayfasına entegre edilebilir ve modern bir moderasyon altyapısı sunar.

## Temel Özellikler
\* \*\*Minimum Bağımlılık:\*\* Yalnızca yapılandırma dosyası ve entegrasyon scripti ile hızlı başlangıç.
\* \*\*Güvenli Markdown Desteği:\*\* İçeriklerin \`marked\` ve \`DOMPurify\` kütüphaneleri kullanılarak güvenli bir şekilde işlenmesi.
\* \*\*Hiyerarşik Yorum Yapısı:\*\* \`parent_id\` referansı üzerinden iç içe yanıt verebilme kapasitesi.
\* \*\*Gelişmiş Moderasyon:\*\* Yönetici yetkilendirmesi ve \`is_admin\` bayrağı ile yorum onaylama/reddetme mekanizmaları.
\* \*\*Tema Uyumluluğu:\*\* İşletim sistemi veya tarayıcı düzeyindeki \`prefers-color-scheme\` ayarlarına duyarlı karanlık mod entegrasyonu.
\* \*\*Supabase Optimizasyonu:\*\* Kimlik doğrulama, veri depolama ve CORS yapılandırmalarının yerleşik olarak desteklenmesi.

---

## Sistem Mimarisi ve Güvenlik
Sistem, güvenlik ve erişilebilirlik gereksinimlerini karşılamak üzere iki ana bileşene ayrılmıştır:

\* \*\*Halka Açık Arayüz (Widget):\*\* Kullanıcıların yorum yapmasını sağlayan genel bileşen. Örnek URL yapısı: \`https://comments.example.com/widcom.html?id=post-123\`
\* \*\*Yönetim Paneli (Admin):\*\* Moderasyon işlemlerinin yürütüldüğü, erişimi kısıtlanmış alan. Örnek URL yapısı: \`https://comments.example.com/admin.html\`

> \*\*Not:\*\* Yönetim panelinin güvenliğini maksimize etmek için, bu alanın ayrı bir alt alan adında (subdomain) barındırılması, IP adresi kısıtlamaları uygulanması ve sıkılaştırılmış giriş politikaları ile korunması tavsiye edilmektedir.

---

## Kurulum ve Yapılandırma
Yerel geliştirme ortamını hazırlamak için aşağıdaki adımları sırasıyla uygulayınız:

1. \*\*Depoyu Klonlama\*\*
   \`\`\`bash
   git clone [https://github.com/your-username/wombat-widget.git](https://github.com/your-username/wombat-widget.git)
   cd wombat-widget


2. **Bağımlılıkların Yüklenmesi**
Bashnpm install

3. **Supabase Projesinin Hazırlanması**
Supabase platformu üzerinden yeni bir proje oluşturunuz. `auth`, `threads` ve `comments` tablolarını inşa etmek için proje dizininde yer alan `supabase/migrations/00000_init.sql` dosyasındaki SQL sorgularını Supabase SQL editöründe çalıştırınız.
4. **Sunucuyu Başlatma**
Bashnpm run dev
Yerel sunucu `http://localhost:5173` adresinde dinlemeye başlayacaktır.

## Ortam Değişkenleri

Proje kök dizininde bir `.env` dosyası oluşturarak aşağıdaki anahtarları kendi Supabase projenize ait değerlerle tanımlayınız:

Kod snippet'i

```plain
VITE_SUPABASE_URL=[https://YOUR-PROJECT.supabase.co](https://YOUR-PROJECT.supabase.co)
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI...
WIDGET_HOST=[https://comments.example.com](https://comments.example.com)

```

> **Not:** `VITE_` ön eki taşıyan değişkenler, Vite derleyicisi tarafından `import.meta.env` nesnesi üzerinden istemci tarafında erişilebilir hale getirilmektedir.

## Veritabanı Şeması

Veri bütünlüğünü sağlamak amacıyla kullanılan ilişkisel veritabanı yapısı aşağıda sunulmuştur:

SQL

```plain
create table threads (
  id uuid primary key default uuid_generate_v4(),
  project_id text not null,
  page_id text not null,
  page_title text,
  page_url text,
  created_at timestamp with time zone default now()
);

create table comments (
  id uuid primary key default uuid_generate_v4(),
  thread_id uuid references threads(id) on delete cascade,
  parent_id uuid references comments(id),
  content text not null,
  author_name text not null,
  author_email text,
  is_admin boolean default false,
  status text check (status in ('pending','approved','rejected')) default 'pending',
  created_at timestamp with time zone default now()
);

```

> **Uyarı:** Yorumların halka açık arayüzde listelenebilmesi için `status` değerinin `approved` olması gerekmektedir. Yöneticiler tarafından yapılan yorumlar `is_admin = true` mantıksal değeri ile ayrıştırılmaktadır.

## Sistemi Sayfaya Entegre Etme

Wombat bileşenini farklı mimarilerdeki web projelerine entegre etmek için aşağıdaki şablonları kullanabilirsiniz.

### Dinamik Uygulamalar İçin (Örn: Svelte-Kit)

Svelte

```plain
<script lang="ts">
  export let data;
  const postId   = data?.post?.id ?? 'unknown-id';
  const postTitle = data?.post?.title ?? document.title;
  const postUrl   = `${window.location.origin}${window.location.pathname}`;
</script>

<div
  id="wombat_thread"
  data-host="{import.meta.env.VITE_SUPABASE_URL}"
  data-appid="YOUR-APP-ID"
  data-pageid="{postId}"
  data-pagetitle="{postTitle}"
  data-pageurl="{postUrl}"
></div>

<script async defer src="[https://comments.example.com/widget.js](https://comments.example.com/widget.js)"></script>

```

### Statik Sayfalar İçin (Örn: Jekyll, Hugo)

HTML

```plain
<div id="wombat_thread"
     data-host="[https://YOUR-PROJECT.supabase.co](https://YOUR-PROJECT.supabase.co)"
     data-appid="YOUR-APP-ID"
     data-pageid="{{ page.id }}"
     data-pagetitle="{{ page.title | xml_escape }}"
     data-pageurl="{{ site.url }}{{ page.url }}">
</div>

<script async defer src="[https://comments.example.com/widget.js](https://comments.example.com/widget.js)"></script>

```

> **Uyarı:** `data-appid` parametresine mutlaka size tahsis edilen uygulama kimliğini giriniz.

## Geliştirme ve Dağıtım Komutları

| **Komut** | **Açıklama** |
| `npm run dev` | Geliştirme sunucusunu başlatır. Eşzamanlı yenileme (hot-reload) aktiftir. |
| `npm run build` | Projeyi üretim (production) ortamı için derler ve `dist/` klasörüne aktarır. |
| `npm run preview` | Derlenmiş üretim sürümünü yerel statik sunucu üzerinde test eder. |
| `npm run lint` | ESLint ve Prettier standartlarına göre kod analizi gerçekleştirir. |

Üretim aşamasında, derlenen dosyalar bir İçerik Dağıtım Ağına (CDN) yüklenmeli ve ortam değişkenleri ilgili platformun yönetim panelinden (Vercel, Netlify vb.) ayarlanmalıdır.

## Sistem Test Prosedürleri

Uygulamanın sağlığını doğrulamak için aşağıdaki senaryoların test edilmesi önerilmektedir:

- **Kullanıcı Etkileşimi (Widget):** Hedef sayfada yorum formu doldurularak gönderilir. Başarılı gönderim mesajı alındıktan sonra, veritabanında kaydın `status = 'pending'` veya onaylanmamış durumda olduğu teyit edilir.
- **Yönetici İşlemleri (Admin):** Yönetici paneline yetkili kimlik bilgileriyle giriş yapılır. Bekleyen yorum onaylanır ve ana sayfadaki yansıma süreci kontrol edilir.
- **Hiyerarşik Yanıt (Reply):** Onaylanmış bir yoruma yanıt verilir ve yeni girdinin ebeveyn (parent) yorumun altında girintili bir ağaç yapısında görüntülendiği doğrulanır.
- **Satır Bazlı Güvenlik (RLS):** Sisteme giriş yapılmamış anonim kullanıcıların yalnızca onaylanmış içerikleri görebildiği, silme veya güncelleme işlemi gerçekleştiremediği API istekleri üzerinden sınanır.

## Kullanıcı Arayüzü ve Tasarım Prensipleri

Yönetim paneli ve yorum arayüzü, operasyonel verimliliği artırmak amacıyla tasarlanmıştır.

- **Sadeliğe Odaklanma:** Gereksiz görsel kalabalıktan kaçınılmış, dikkati yalnızca içeriğe yönlendiren bir yaklaşım benimsenmiştir.
- **Tipografik Hiyerarşi:** Okunabilirliği maksimize etmek için boşluk yönetimi (spacing) optimize edilmiştir.
- **Erişilebilirlik:** Form elemanlarında belirgin odak (focus) durumları kullanılmıştır.
- **Mobil Uyumluluk:** Responsive kart düzenleri sayesinde dar ekranlarda veri tüketimi kolaylaştırılmıştır.

## Alternatif Veritabanı Desteği (PocketBase)

Sistem, PocketBase entegrasyonuna olanak tanıyacak esneklikte tasarlanmıştır. `src/services/pocketbase-service.ts` dosyasında yer alan servis arayüzü temel bir iskelet sunmaktadır.

Bağlantının tamamlanması için geliştiriciler tarafından tanımlanması gereken alanlar:

- Veri koleksiyonu (Collection) tanımları
- Kimlik doğrulama (Auth) akışı
- Yorumların listelenmesi ve oluşturulması
- Yönetici onay, red ve yanıt mekanizmaları

Bu mimari sayesinde, arayüz bileşenlerinin yeniden yazılmasına gerek kalmadan farklı bir veritabanı altyapısına geçiş yapılabilmektedir.

## Planlanan İyileştirmeler

Projenin yol haritasında yer alan gelecek modüller:

- Form gönderimlerinde Anti-Spam güvenlik doğrulama adımları
- Yanıt işlemleri için modal (açılır pencere) bileşenleri
- Yönetici panelinde gelişmiş tarih, sayfa ve durum filtreleme özellikleri
- Büyük veri setleri için sayfalama (pagination) veya sonsuz kaydırma (infinite scroll)
- Kullanıcı etkileşimlerini artırmak için e-posta doğrulaması ve Webhook bildirimleri

## Sorun Giderme Kılavuzu

| **Karşılaşılan Sorun** | **Olası Neden** | **Önerilen Çözüm** |
| **CustomElementRegistry Hatası** | `widget.js` script dosyasının sayfada birden fazla kez yüklenmesi. | Script etiketini yalnızca sayfa şablonunun en alt kısmında (örn: `+layout.svelte`) tek bir kez çağırınız. |
| **401/403 Erişim Hataları** | Supabase kimlik bilgilerinin eksikliği veya yanlış yapılandırılması. | `.env` dosyasındaki `VITE_SUPABASE_URL` ve ANON_KEY değerlerini doğrulayınız. Veritabanındaki RLS politikalarının aktif olup olmadığını kontrol ediniz. |
| **Yönetici Paneline Giriş Yapılamıyor** | Yetkili kullanıcının olmaması veya oturumun yönetilememesi. | Supabase Authentication paneli üzerinden yönetici kullanıcısının başarıyla oluşturulduğunu ve istemci tarayıcısının oturum verilerini (session) tutabildiğini teyit ediniz. |
| **Bileşen Görüntüleme Sorunları** | Iframe boyutlandırması veya stil dosyalarının yüklenememesi. | Yüklenen `dist/` dizininde CSS dosyalarının bulunduğundan ve kapsayıcı DOM elementinin yeterli genişliğe sahip olduğundan emin olunuz. |

## Özet

Wombat, statik ve dinamik sistemler için kolayca gömülebilen, Supabase odaklı geliştirilmiş ancak diğer sistemlere uyarlanabilir altyapıya sahip, modern ve self-host edilebilir bir yorum platformudur. Veritabanı seviyesindeki güvenlik politikaları (RLS) ile verilerinizi güvence altına alırken, son kullanıcılara temiz ve operasyonel bir arayüz sunar.

## Wombat önizleme:
<div id="wombat_thread"
  data-host="https://wombatc.vercel.app"
  data-app-id="eae7e901-dc94-40b5-ad11-99a9077fe672"
  data-page-id="{{ PAGE_ID }}"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
></div>
<script async defer src="https://wombatc.vercel.app/widget.js"></script>
