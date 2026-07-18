---
layout: post
title: Firefox güncellemesi sonrası Touchpad Çözümü
description: Linux Firefox güncellemesi sonrası Touchpad Sorunu Çözümü
date: 2026-07-18 23:24:00 +03:00
categories:
  - Linux
  - Sorun Çözüm Rehberleri
tags:
  - Linux
  - Firefox
  - Rehber
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

Firefox güncellemesi sonrası **pinch-to-zoom** ve **akıcı kaydırmanın (smooth scrolling)** bozulması, tarayıcının yerel Wayland yerine **XWayland** moduna düşmesinden kaynaklanır. Zen Browser bu ayarı hazır sunduğu için sorunsuz çalışır.
Çözüm Adımları

1. Yerel Wayland Modunu Aktifleştirme
Firefox'un Wayland üzerinde çalışmasını zorunlamak için terminalde şu komutu çalıştırarak çevre değişkenini ekleyin:

```bash
echo "export MOZ_ENABLE_WAYLAND=1" >> ~/.profile
```

_(Sistem genelinde geçerli olması için /etc/environment dosyasına MOZ_ENABLE_WAYLAND=1 satırını da ekleyebilirsiniz. Değişikliklerin uygulanması için oturumu kapatıp açın.)_

2. Firefox Gelişmiş Ayarları (about:config)
Eğer sorun devam ederse, Firefox adres çubuğuna about:config yazıp onaylayın ve şu değerleri aratarak **true** yapın:

* apz.gtk.touchpad_pinch.enabled → **true** (Pinch-to-zoom için)
* apz.gtk.kinetic_scroll.enabled → **true** (Akıcı kaydırma için)

3. Durum Kontrolü
Firefox'ta about:support sayfasına gidin. **Pencere Sistemi (Window Protocol)** kısmında **wayland** yazıyorsa işlem başarılıdır, touchpad hareketleriniz pürüzsüz çalışacaktır.

Bu rehber BTT.COMMUNİTY üzerinde denenip onaylanıp yazılmıştır.

https://btt.community/t/firefox-guncelleme-sonrasi-touchpad-ile-zoom-ve-scroll-sorunlari/27010/6
