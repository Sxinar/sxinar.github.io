---
layout: post
title: 'Artado DevLog #1'
description: ''
date: 2026-01-14
categories:
  - Geliştirme Günlüğü
tags:
  - devlog
  - artado
image: null
settings:
  pin: false
  math: false
comments: true
---

Merhabalar! Biz \*\*Artado\*\* ekibi olarak bir süredir gözle görülür bir paylaşım yapmadık. Bunun temel sebebi, yeni özelliklerimizi tam anlamıyla olgunlaştırmadan sizlerle paylaşmak istemeyişimizdi. Bu süreçte boş durmadık; sessizce GitHub üzerinde geliştirmelerimize devam ettik.

Projelerimizin takipçilerinin gelişmeleri daha yakından görebilmesi ve bizim de daha düzenli bir geliştirme disiplini kazanmamız adına \*\*DevLog\*\* serisini başlatıyoruz.

***

### 📑 İçindekiler

\* [ArtStelve: Yenilenen Yüzümüz](#artstelve)

\* [Artado Hybrid Proxy System](#hybrid-proxy)

\* [Kurumsal Web Sitesi Güncellemesi](#kurumsal-site)

\* [Yenilenmiş Artado Docs](#artado-docs)

\* [Artado Forum ve Blog](#topluluk)

***

### 1. ArtStelve: Yenilenen Yüzümüz {#artstelve}

\*\*ArtStelve nedir?\*\* Artado Search için geliştirilmiş, modern bir \*\*Frontend\*\* arayüzüdür.

\* \*\*Altyapı:\*\* Hızı ve stabilitesiyle bilinen \*\*Svelte\*\* framework'ü kullanıldı.

\* \*\*Arayüz:\*\* Çok daha modern ve kullanıcı dostu bir deneyim sunuyor.

\* \*\*Tema Desteği:\*\* Dahili çok sayıda tema desteği eklendi.

\* \*\*Devs Entegrasyonu:\*\* [Artado Devs](https://devs.artado.xyz/workshop/api.php) API'si ile entegre çalışır.

![ArtStelve Arayüzü](https://forum.artado.xyz/assets/files/2026-01-15/1768508205-233429-resim.png)

_Modern Svelte altyapısı ile ArtStelve arayüzü._

> \*\*GitHub:\*\* [sxinar/artstelve](https://github.com/sxinar/artstelve)

> \*\*Ön İzleme:\*\* [artstelve.vercel.app](https://artstelve.vercel.app)

***

### 2. Artado Hybrid Proxy System {#hybrid-proxy}

Bu haftanın ikinci büyük yeniliği ise \*\*Hybrid Proxy\*\* sistemimiz.

\* \*\*Amaç:\*\* Farklı arama motorlarından gelen sonuçları en alakalı şekilde harmanlayarak hızlı ve güvenli bir şekilde sunmak.

\* \*\*Teknoloji:\*\* \*\*TypeScript\*\* ile sıfırdan yazıldı. Self-host (kendi sunucusunda barındırma) işlemleri artık çok daha kolay.

\* \*\*Özelleştirme:\*\* Kullanıcılar arama motorlarını filtreleyebilir.

![Proxy Sistemi](https://forum.artado.xyz/assets/files/2026-01-15/1768508405-193620-resim.png)

***

### 3. Kurumsal Web Sitesi Güncellemesi {#kurumsal-site}

Ana sitemiz [artado.xyz](https://artado.xyz), güvenlik zafiyetlerinden korunmak ve performans stabilitesi için baştan aşağı yenilendi.

\* \*\*Dinamik İçerik:\*\* Artık dinamik içerik kontrol sistemine sahip.

\* \*\*Geliştirici Profilleri:\*\* Katkı sağlayanlar için özel tanıtım sayfaları oluşturuldu. (Örn: [@sxinar Profili](https://artado.xyz/profile.php?slug=sxinar)).

![Kurumsal Site](https://forum.artado.xyz/assets/files/2026-01-15/1768508704-20556-resim.png)

***

### 4. Yenilenmiş Artado Docs {#artado-docs}

Eski dokümantasyon altyapımızı (Bludit) bırakarak, PHP ile kendi dokümantasyon sistemimizi sıfırdan kodladık.

\* \*\*Güvenlik:\*\* Özel kod yapısı sayesinde daha güvenli.

\* \*\*Hız:\*\* Minimalist yapı sayesinde bilgiye ulaşmak çok daha hızlı.

![Artado Docs](https://forum.artado.xyz/assets/files/2026-01-15/1768509608-152003-resim.png)

***

### 5. Forum ve Blog {#topluluk}

\*\*Artado Forum:\*\* Vizyonumuzu en iyi destekleyen; açık kaynaklı, hızlı ve güvenli forum sistemi olan \*\*Flarum\*\*'da karar kıldık.

\*\*Artado Blog:\*\* Sadece kendimize odaklanmak yerine, daha geniş bir teknoloji kitlesine hitap etmek amacıyla WordPress altyapılı blog sayfamızı yayına aldık. [artado.xyz/blog](https://artado.xyz/blog) adresinden ulaşabilirsiniz.

***

### Bizimle İletişime Geçin!

Projelerimize katkıda bulunmak isterseniz:

\* \*\*E-posta:\*\* \`sxi@artadosearch.com\` & \`arda@artadosearch.com\`

\* \*\*Sohbet:\*\* Forumun üst barındaki sohbet butonunu kullanabilirsiniz.

\*\*Okuduğunuz için teşekkürler! Serinin 2. bölümünde görüşmek üzere.\*\*
