---
layout: post
title: Neden NPM değil de PNPM?
description: Disk alanınızı sömüren ve dakikalarca süren npm install süreçlerinden sıkıldıysanız, Node.js projelerinizde **pnpm** devrimine geçmenin tam zamanı. Paketleri bilgisayarınıza sadece bir kez indirip projelerinize "Global Store" üzerinden ışık hızında bağlayan pnpm; hem gigabaytlarca disk alanı kazandırıyor hem de kurulum sürelerini milisaniyelere indiriyor.
date: 2026-06-16 23:26:00 +03:00
categories:
  - İnceleme
  - Geliştirme Araçları
tags:
  - npm
  - pnpm
  - teknoloji araçları
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

# Neden npm Değil de pnpm? (Node.js Projelerinde Disk Alanından Tasarruf ve Hız)

Node.js ekosisteminde uzun süre krallığını ilan eden npm (ve daha sonra ona güçlü bir rakip olan yarn), günümüzde yerini hızla **pnpm**’e (Performant npm) bırakıyor.
Eğer bilgisayarınızda birden fazla Node.js projesiyle çalışıyorsanız, her projenin içindeki node_modules klasörlerinin GB'larca disk alanınızı sömürmesinden ve o bitmek bilmeyen npm install süreçlerinden sıkıldıysanız, pnpm tam aradığınız çözüm. Gelin, modern web geliştirme dünyasında npm hantallığını neden tamamen geride bırakmamız gerektiğine ve pnpm'in sunduğu teknik devrime yakından bakalım.

## 1. Benzersiz Disk Alanı Tasarrufu: "Global Store" 

Geleneksel npm veya yarn kullandığınızda, bilgisayarınızdaki 10 farklı projede aynı paket (örneğin lodash, react veya express) varsa, bu paket 10 farklı node_modules klasörüne **ayrı ayrı ve tamamen** indirilir. Bu durum, özellikle disk alanı kısıtlı olan cihazlarda tam bir kara deliğe dönüşür. Bilgisayarınız aynı kod satırlarının binlerce kopyasıyla çöplüğe döner.
**pnpm ise burada ezber bozan bir mimari kullanıyor:**

* Tüm paketleri bilgisayarınızda tek bir merkezi ve güvenli yerde (**Global Store**) saklıyor.
* Projelerinizdeki node_modules klasörüne paketlerin fiziksel dosyalarını kopyalamak yerine, global store'daki dosyalara işaret eden **Hard Link** (Sabit Bağlantı) oluşturuyor.

> **Sonuç:** Bilgisayarınızda bir paketi sadece **bir kez** indiriyorsunuz. 100 farklı projede aynı paketi kullansanız bile, o paket diskinizde sadece tek bir proje kadar yer kaplıyor. Bilgisayarınızda Gb'larca boş alan saniyeler içinde size kalıyor.
> 

## 2. Jet Hızında Asenkron Kurulumlar

npm paketleri kurarken sırayla indirir, çözer ve diske yazar. Bu senkron ve doğrusal süreç, özellikle büyük kurumsal projelerde veya yavaş internet bağlantılarında tam bir işkenceye dönüşebilir. Dakikalarca ekrana bakıp kurulumun bitmesini beklersiniz.
pnpm ise kurulum sürecini 3 ayrı aşamaya bölüyor ve bunları tamamen **paralel (eşzamanlı)** olarak yürütüyor:

1. **Bağımlılık Çözümleme (Dependency Resolution):** Gerekli tüm paketler ve versiyon haritası hızla belirlenir.
2. **Dizin Yapısı Hesaplama (Directory Structure Calculation):** Paketlerin birbirleriyle olan bağları haritalandırılır.
3. **Bağlantılama (Linking):** Global store'da zaten var olan paketler projeye saniyeler içinde hard-link ile bağlanır.
Daha önce bilgisayarınızdaki herhangi bir projede kullandığınız bir paketi yeni bir projeye eklemek istediğinizde, pnpm internetten indirme aşamasını tamamen atlıyor. Paket doğrudan yerel diskinizden bağlandığı için kurulum süreleri internet hızınızdan bağımsız olarak **milisaniyeler** düzeyine iniyor.

## 3. Güvenlik ve "Hayalet Bağımlılıklar" (Phantom Dependencies) Engeli

npm (v3 ve sonrası), node_modules yapısını düzleştirmek (flat) için uğraşır. Yani sizin doğrudan package.json içine yazıp yüklemediğiniz, ancak yüklediğiniz bir paketin ihtiyaç duyduğu alt paketleri de ana node_modules klasörünün köküne çıkartır.
Bu durum çok ciddi iki problem doğuruyor:

* **Hayalet Bağımlılıklar:** Projenizde resmi olarak eklemediğiniz bir paketi, npm kök dizine koyduğu için kodunuzda kazara import edip kullanabiliyorsunuz. Ancak o paketi kullanan üst paket güncellendiğinde veya o bağımlılığı sildiğinde, projeniz üretim ortamında (production) aniden çöküyor.
* **Güvenlik Açıkları:** Kodunuzun normalde erişmemesi ve görmemesi gereken binlerce alt bağımlılığa doğrudan kapı açılmış oluyor.
**pnpm'in Katı ve Güvenli Çözümü:**
pnpm, **sembolik bağlantılar (symlinks)** kullanarak katı ve hiyerarşik bir node_modules yapısı oluşturuyor. Projenizde sadece ve sadece kendi ellerinizle package.json dosyasına yazdığınız paketlere doğrudan erişebiliyorsunuz. Alt bağımlılıklar ise kendi içlerinde izole ve güvenli bir şekilde birbirine bağlanıyor. Projenizin kararlılığı ve güvenliği en üst düzeye çıkıyor.

## npm ve pnpm Karşılaştırma Tablosu

| Özellik | npm | pnpm |
| --- | --- | --- |
| **Disk Alanı Yönetimi** | Her projeye tekrar tekrar indirir (Müsrif) | Tek bir global store kullanır (Çok Cimri) |
| **İlk Kurulum Hızı** | Yavaş / Orta | Çok Hızlı |
| **Tekrar Eden Kurulum Hızı** | Orta | Neredeyse Anlık (Milisaniyeler) |
| **Klasör Yapısı** | Düzleştirilmiş (Flat / Güvensiz) | Sembolik Bağlantılı (Symlinked / Strict) |
| **Hayalet Bağımlılık İzni** | Evet (Büyük risk) | Hayır (Tam Güvenlik) |
| **Monorepo Desteği** | Var (npm workspaces) | Mükemmel ve Çok Gelişmiş |

## Eski Alışkanlıkları Yıkmak: pnpm'e Nasıl Geçilir?

Geçiş süreci inanılmaz derecede basit ve zahmetsiz. Mevcut npm alışkanlıklarınızı ve kas hafızanızı neredeyse hiç değiştirmeden pnpm dünyasına adım atabilirsiniz.
**1. pnpm'i bilgisayarınıza küresel olarak kurun:**

```bash
npm install -g pnpm
```

**2. Mevcut projenizi pnpm'e dönüştürün:**
Eski, hantal node_modules klasörünüzü ve package-lock.json dosyanızı silip terminalde şu komutu çalıştırmanız yeterli:

```bash
pnpm install
```

_Bu komut projenizi tarayacak, global store ile bağlantıları kuracak ve saniyeler içinde kararlı bir pnpm-lock.yaml dosyası oluşturacaktır._
**3. Günlük Komut Pratikleri:**

* Paket eklemek için: npm install paket_adi yerine pnpm add paket_adi
* Paket silmek için: npm uninstall paket_adi yerine pnpm rm paket_adi
* Script çalıştırmak için: npm run dev yerine doğrudan pnpm dev _(Evet, pnpm'de aradaki run kelimesini yazmak zorunda bile değilsiniz!)_

## Bitiriş

Sonuç olarak pnpm; web geliştirme dünyasında uzun yıllardır süregelen kaynak müsrifliğine, hantallığa ve güvenli olmayan esnekliklere karşı yapılmış radikal bir teknolojik devrimdir. Geçmişin getirdiği teknik borçları (technical debt) taşımayı reddeden, geliştirici deneyimini (DX) ve sistem kaynaklarını optimize etmeye odaklanmış vizyoner bir araçtır.
Eğer projelerinizde hala npm kullanıyorsanız, kendinize ve bilgisayarınızın diskine bir iyilik yapın; prangalarınızdan kurtulup pnpm dünyasına geçiş yapın.
Okuduğunuz için teşekkür ederim, umarım bu pnpm incelemesini ve teknolojik dönüşüm rehberini büyük bir keyifle okumuşsunuzdur.
Aşağıda yorumlarda buluşalım; pnpm'e geçtikten sonra diskinizde ne kadar yer açıldığını ve kurulum hızlarındaki farkı tartisalim.
