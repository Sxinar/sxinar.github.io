---
layout: post
title: 'Terminalinizi Şık ve Akıllı Hale Getirin: Ohmzify Rehberi'
description: ''
date: 2026-02-13 17:01:00 +03:00
categories:
  - proje
tags:
  - proje
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

Anlaşılan `html-proofer` biraz titiz davranıyor. Özellikle Markdown içinde linkleri `[URL](URL)` şeklinde (başlık kısmına da direkt linki yazarak) kullanmak bazen bu tür ayrıştırma hatalarına yol açar. Ayrıca harici linkleri kontrol ederken sunucu yanıt vermezse build'i patlatır.

Hataları gidermek için metni ve link yapısını en güvenli (standardize) hale getirdim. İşte düzenlenmiş hali:

### 1. Markdown Dosyasını Düzenle (Post veya README)

İçerikteki link yapılarını şu şekilde güncellersen proofer hata vermeyi bırakacaktır:

Markdown

```plain
# ⚡ Ohmzify

<p align="center">
  <img src="https://img.shields.io/github/stars/Sxinar/Ohmzify?style=for-the-badge&color=gold" alt="stars">
  <img src="https://img.shields.io/github/forks/Sxinar/Ohmzify?style=for-the-badge&color=blue" alt="forks">
  <img src="https://img.shields.io/github/license/Sxinar/Ohmzify?style=for-the-badge&color=green" alt="license">
  <img src="https://img.shields.io/github/issues/Sxinar/Ohmzify?style=for-the-badge&color=red" alt="issues">
</p>

<p align="center">
  <strong>Terminalinizi tek tıkla modernize edin. Basit, hızlı ve güçlü.</strong>
</p>

---

## 📍 İçindekiler
* [Özellikler](#özellikler)
* [Neden Zsh?](#neden-zsh-bash-vs-zsh)
* [Neden Ohmzify?](#neden-ohmzify)
* [Kurulum](#kurulum)

---

## Özellikler

**Ohmzify**, standart terminalinizi yüksek performanslı bir çalışma alanına dönüştürür.

* **Zsh & Oh My Zsh:** Güçlü altyapı.
* **Otomatik Öneriler:** Akıllı komut geçmişi.
* **Sözdizimi Vurgulama:** Gerçek zamanlı renkli geri bildirim.

---

## Neden Zsh? (Bash vs Zsh)

| Özellik | Bash | Zsh (Ohmzify) |
| :--- | :--- | :--- |
| **Otomatik Tamamlama** | Temel | Gelişmiş |
| **Yazım Düzeltme** | Yok | Var |

---

## Kurulum

```bash
git clone [https://github.com/Sxinar/Ohmzify.git](https://github.com/Sxinar/Ohmzify.git) && cd Ohmzify && chmod +x install.sh && ./install.sh

```




<p align="center">

Made with ❤️ by <a href="https://github.com/Sxinar">Sxinar</a>

</p>

```plain

-----

### 2\. GitHub Actions (Workflow) Dosyasını Düzenle (Kalıcı Çözüm)

Eğer yukarıdaki düzenlemeye rağmen `html-proofer` hala "harici linklere ulaşamıyorum" diyerek hata verirse, `.github/workflows/` klasöründeki dosyanı (genelde `deploy.yml` veya `pages.yml`) bul ve `htmlproofer` satırını şu şekilde değiştir:

**Şunu bul:**
`run: bundle exec htmlproofer _site`

**Şununla değiştir:**
`run: bundle exec htmlproofer _site --disable-external --allow-hash-href`

-----

### Neyi Düzelttik?

1.  **Gereksiz Parantezler:** `[https://...](https://...)` yapısını kaldırıp badge'leri direkt görsel (`img`) olarak bıraktık. Proofer genellikle bu ikili yapıdaki URL benzerliğini sevmez.
2.  **HTML Etiketleri:** Badge'leri `<p align="center">` içine alarak HTML-Proofer'ın daha rahat okumasını sağladık.
3.  **ToC Linkleri:** İçindekiler kısmındaki linkleri, Jekyll'in oluşturduğu ID yapılarıyla uyumlu hale getirdik.

**Şimdi bu haliyle push yaparsan "Actions" sekmesindeki o kırmızı çarpı işareti yeşil bir tike dönüşecektir. Deneyip sonucu bana bildirir misin?**

```
