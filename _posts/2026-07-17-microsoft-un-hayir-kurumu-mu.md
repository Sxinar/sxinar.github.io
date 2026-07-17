---
layout: post
title: Microsoft'un Hayır kurumu mu?
description: GitHub bireysel yazılımcılara neden neredeyse tamamen ücretsiz? Copilot yapay zeka krizini, Azure bulut stratejisini ve GitHub Pages gibi cazip ücretsiz planlari inceliyoruz
date: 2026-07-17 22:28:00 +03:00
categories:
  - İnceleme
  - Geliştirme Araçları
tags:
  - github
  - Microsoft
  - yazılım
  - webdev
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

# Github Microsoftun hayır kurumu mu?

Linux ve Acik kaynak destekcisi olarak neredeyse hepimiz GitHub'ı kullanırken kendimizi şanslı hissediyoruz en azından ben öyle hissediyorum.Tek git push komutuyla belkide en güvenli, en hızlı ve en işlevsel kod deposuna erişiyoruz ve işlem yapıyoruz. Üstelik bunun için cebimizden bir kuruş çıkmıyor.
İşin ucunda Microsoft olunca bazen şu soruyu sormadan düşünmek zor: **"Boyle bir altyapı, işlem gücü arkasında Microsoft olmasına rağmen gerçekten bedava mı?"**
İnternetin o mottosu akillara geliyor: _"Bir şeye para ödemiyorsan, ürün sensindir."_ Ama GitHub özelinde durum biraz daha karmaşık ve aslında çok daha zekice. Microsoft, 2018 yılında GitHub’ı 7.5 milyar dolara satın aldığında, aslında sadece "kod saklama hizmeti" almıyordu. Microsoft, **yazılım dünyasının kalbinin attığı yeri** satın alıyordu.
Gel yapının arkasındaki ticari zekaya,vukuatlara ve bizi cezbeden **GitHub Pages** gibi o cazibeli paketlere bakalım.

## 1. Teknik ve Ekonomik Gerekçeler

Microsoft'un GitHub'ı ücretsiz tutarak aslında arkadan nasıl döngü döndürdüğünü anlamak için platformun ekosistemdeki yerine bakmak gerekiyor. Süreç kabaca şu şekilde işliyor:

```plain
Ücretsiz Kod Depoları -> Yapay Zeka Eğitimi (Copilot) & Bulut Entegrasyonu -> Geliştirici Bağımlılığı -> Kurumsal Lisans & Azure Bulut Satışları
```

### Yapay Zeka Çağının Üretim merkezi (GitHub Copilot)

Teknoloji dünyasında yatıp kalkıp yapay zekayı konuşuyoruz. Yazılımcıların kod yazma hızını katlayan **GitHub Copilot** ise bu devrimin en somut örneklerinden biri. Peki hiç düşündünüz mü; Copilot hangi ara, nasıl bu kadar akıllı hale geldi?
Cevap, GitHub'daki "ücretsiz" kütüphanede saklı. Dünyanın dört bir yanındaki milyonlarca yazılımcı, ücretsiz planı kullanarak platforma her gün milyarlarca satır açık kaynak kod yüklüyor. Microsoft ve ortağı OpenAI, bu devasa kod havuzunu bir eğitim kampı olarak kullanan yapay zeka modellerini eğitiyor. Sistem tamamen öğrenip kusursuzlaştıktan sonra Microsoft, bu yapay zekayı Copilot adı altında, aylık abonelik ücretleriyle hem bireysel yazılımcılara hem de dev şirketlere satıyor.

### Bulut Savaşının Kozu: Azure

Bugün teknoloji devleri arasındaki en büyük savaş **Bulut Bilişim (Cloud Computing)** alanında yaşanıyor. Amazon (AWS) lider konumundayken, Microsoft kendi bulut servisi olan **Azure** ile liderliği kapmaya çalışıyor. İşte GitHub, bu savaşta Microsoft'un en stratejik hamlesi.
GitHub ile Azure arasına öyle pürüzsüz bir köprü kuruluyor ki, geliştirici başka bir bulut sağlayıcıyla uğraşmak istemiyor. **GitHub Actions** altyapısını kullanan bir yazılımcı, tek bir satır komutla projesini doğrudan Azure sunucularına uçurabiliyor. Kodunuzu saklamak için GitHub'a beş kuruş ödemiyorsunuz ama o kodun çalışması, veritabanının ayakta kalması için her ay Azure'a düzenli olarak fatura ödüyorsunuz.

### Belki sen değil ama Kurumsal Şirketler Faturayı Ödüyor

"Peki tüm bu ücretsiz kullanıcıların maliyetini kim karşılıyor?" diye sorarsanız, cevap çok basit: **Büyük şirketler.**
Banka gibi finans kuruluşları, savunma sanayi şirketleri veya binlerce yazılımcı çalıştıran teknoloji devleri kodlarının güvenliğine, gizliliğine ve erişim yönetimine takıntılıdır. Microsoft bu kurumsal devlere gelişmiş güvenlik taramaları (GitHub Advanced Security) ve şirkete özel izole sunucu çözümleri (GitHub Enterprise) gibi özellikleri kullanıcı başına ciddi ücretlerle satıyor. Onların ödediği bu devasa lisans ücretleri, dünyadaki milyonlarca öğrencinin, hobi geliştiricisinin ve açık kaynak gönüllüsünün ücretsiz olarak sunduğu o harika ekosistemi kolayca Aslında açık kaynağın en büyük destekçisi onlar.

## 2. GitHub’ın Vukuatları

GitHub, tekelleşmenin verdiği güçle zaman zaman açık kaynak topluluğunun kırmızı çizgilerine bastı. İşte platformun geçmişindeki en büyük çalkantılar:

### Telif Hırsızlığı ve Copilot Krizi (Açık Kaynağın Yağmalanması)

GitHub Copilot ilk çıktığında yazılımcılar büyülendi demiştim ya arkasında devasa bir hukuk krizi patlak verdi. GitHub, Copilot’ı eğitirken platformdaki **açık kaynaklı ve lisanslı** kodları kullandı.
Birçok açık kaynak projenin "GPL" gibi katı lisansları vardır ve bu lisanslar kodun sahibine atıfta bulunulmasını zorunlu kılar. Ancak Copilot, bu lisanslı kodları alıp harmanladı ve kurumsal şirketlere ücret karşılığı satılan kapalı devre bir yapay zekanın malı yaptı. Yazılımcılar, kendi yazdıkları kodların kendilerine para karşılığı geri satıldığını görünce haklı olarak çıldırdı ve GitHub’ın kapısı devasa telif davalarıyla çalındı. Topluluk bunu "açık kaynağın kurumsal olarak yağmalanması" olarak nitelendirdi.

### Veri İhlalleri ve Sızıntılar

GitHub, dünyanın en büyük şirketlerinin kaynak kodlarını barındırıyor. Haliyle siber korsanların bir numaralı hedefi. Geçtiğimiz yıllarda GitHub’ın kendi kod imzalama sertifikaları sızdırıldı. Platformda milyonlarca yazılımcının  kodların içine gömdüğü AWS şifreleri, veritabanı parolaları ve API anahtarları botlar tarafından saniyeler içinde taranıp çalınıyor. Ayrıca platformun kendisi de siber saldırılardan muaf değil; geçmişte bazı gizli repository'lere yetkisiz erişim sağlandığı siber ihlaller bizzat itiraf edildi.

## 3. Bizi İçeride Tutan avantajlar GitHub Pages ve Ötesi

Bu kadar vukuata, sansüre ve etik tartışmaya rağmen neden çoğumuz GitHub’ı terk edip gitmiyoruz? Çünkü Microsoft ve GitHub, içeride kalmamız için bize tatlı ve maliyetsiz oyuncaklar sunuyor ki, platformdan ayrılmak teknik ve ekonomik olarak mantıksız hale geliyor.

### GitHub Pages: Geleneksel Sunucuların Katili

Normalde statik bir web sitesi (HTML, CSS, JavaScript veya Jekyll, Hugo vb) yaptığınızda, bunu internette yayınlamak için bir hosting şirketi bulmalı ve her yıl  belki ay sunucu parası ödemelisiniz.
GitHub Pages ise size şunu söylüyor: _"Sen sadece kodunu yaz ve benim sistemime yükle. Ben sana tamamen ücretsiz, dünya genelinde ışık hızında açılan (CDN destekli), SSL sertifikası (HTTPS) olan bir barındırma hizmeti vereceğim. İstersen kendi özel alan adını (domain) da kuruş ödemeden bağlayabilirsin."_
Statik dosyaları barındırmak GitHub’ın devasa sunucu parkurları için hiçbir maliyet oluşturmaz. Ancak bu ücretsiz hizmet sayesinde dünyadaki tüm kişisel siteler ve portfolyolar GitHub üzerinde yükselir. Sonuç olarak tarayıcınızın adres çubuğunda sürekli .github.io uzantısını görürsünüz; bu da dünyanın en büyük ve en organik marka reklamıdır.

### Sadece Pages Değil:

* **GitHub Actions:** Normalde projelerinizi test etmek ve otomatik olarak sunucuya yüklemek için (CI/CD) karmaşık yapılar kurup kendi sunucunuzda çalıştırmanız gerekir. GitHub, ayda 2000 dakikaya kadar kendi işlemcilerini size tamamen ücretsiz açar.
* **GitHub Codespaces:** Bilgisayarınızın performansı düşük mü? Hiç sorun değil. GitHub, tarayıcınızın içinde tek tıkla açılan, arkasında canavar gibi bir bulut sunucusunun çalıştığı sanal bir VS Code geliştirme ortamını (Codespaces) her ay belirli bir saate kadar tamamen ücretsiz verir.

## 4. Sonuç: Kusursuz Bir Esaret

Günün sonunda GitHub, teknoloji dünyasının en büyük paradokslarından biridir.
Bir yanda açık kaynak kodları kendi yapay zekasını eğitmek için izinsiz yağmalayan, devletlerin politik baskılarına boyun eğip kullanıcılarını yarı yolda bırakan kurumsal bir dev var. Diğer yanda ise size dünyanın en gelişmiş CI/CD araçlarını, sanal geliştirme ortamlarını ve **GitHub Pages** gibi harika web barındırma hizmetlerini tek kuruş istemeden sunan bir platform.
GitHub bizi çok iyi tanıyor. Yazılımcıların pratikliği, hızı ve ücretsiz araçları ne kadar sevdiğini biliyor. Bize sunduğu bu muazzam ücretsiz imkanlarla kendi hatalarını, sansürlerini ve ticari ajandalarını unutturmayı başarıyor.
Biz GitHub Pages ile ücretsiz sitemizi açıp keyfimize bakarken, Microsoft arkada dünyanın en büyük dijital tekellerinden birini büyütmeye ve hepimizi bu ekosisteme göbekten bağlamaya devam ediyor.
Peki bu kadar konfor için bu esarete değer mi? Sonuçta hepimiz o git push butonuna basmaya seve seve devam ediyoruz.

### Kaynaklar ve Ek Okumalar

1. **Software Freedom Conservancy (SFC):** _Give Up On GitHub Campaign & Copilot Legal Analysis._
2. **Microsoft Investor Relations:** _Annual Cloud Revenue and Developer Tools Growth Reports._
3. **The Verge Tech News:** _GitHub individual accounts in Iran and Crimea blocked due to US sanctions._
