---
layout: post
title: 'NalaZy: Debian ve Nala'
date: 2026-02-13
categories:
  - linux
tags:
  - project
  - debian
  - ubuntu
image: null
settings:
  pin: false
  math: false
---

# 🦥 NalaZy: The Ultimate Shortcut Suite for Nala

NalaZy, Linux terminalinde vakit kaybetmek istemeyen, verimliliğe odaklanan kullanıcılar için geliştirilmiş akıllı bir takma ad (alias) koleksiyonudur. Uzun ve sıkıcı paket yönetimi komutlarını sadece 2-3 tuş vuruşuna indirir.

### 📑 İçindekiler / Table of Contents

\* [Neden NalaZy?](#neden-nalazy)
\* [Özellikler / Features](#ozellikler)
\* [Kısayol Listesi / Alias List](#kisayol-listesi)
\* [Kurulum / Installation](#kurulum)
\* [Kaldırma / Uninstall](#kaldirma)
\* [Katkıda Bulunma / Contributing](#katkida-bulunma)
\* [Lisans / License](#lisans)

***

### 🚀 Neden NalaZy? {#neden-nalazy}

Standart \`apt\` paket yöneticisi işlevsel olsa da yavaştır ve çıktıları karmaşıktır. \`Nala\` ise bu süreci hızlandırır ve güzelleştirir. \*\*NalaZy\*\*, bu hızı kullanıcı alışkanlığıyla birleştirerek:
\* Her komutun başına \`sudo\` yazma derdini bitirir.
\* Komut karmaşasını ortadan kaldırır.
\* \`nala\`nın tüm gücünü (history, parallel downloads) parmaklarınızın ucuna getirir.

### ✨ Özellikler / Features {#ozellikler}

✅ \*\*Otomatik Sudo:\*\* Alias'lar akıllı \`sudo\` desteğiyle gelir.
✅ \*\*Hızlı Kurulum:\*\* Tek komutla tüm sistem hazır hale gelir.
✅ \*\*Hafif:\*\* Sisteminize ağır scriptler eklemez, sadece \`.bashrc\` veya \`.bash_aliases\` dosyanızı yapılandırır.
✅ \*\*Görsel Başarı:\*\* Nala'nın sunduğu zengin ve renkli arayüzü tam verimle kullanır.

### 🛠️ Kısayol Listesi / Alias List {#kisayol-listesi}

| Komut | Karşılığı (Equivalent) | Açıklama (Description) |
| --- | --- | --- |
| \`nu\` | \`sudo nala update\` | Paket listelerini günceller |
| \`nug\` | \`sudo nala upgrade -y\` | Sistemi yükseltir |
| \`ni\` | \`sudo nala install\` | Paket kurar |
| \`nr\` | \`sudo nala remove\` | Paket kaldırır |
| \`ns\` | \`nala search\` | Paket arar |
| \`nh\` | \`nala history\` | İşlem geçmişi |
| \`nar\` | \`sudo nala autoremove\` | Gereksizleri siler |

### 📥 Kurulum / Installation {#kurulum}

Projeyi yerel bilgisayarınıza çekin ve kurulum scriptini çalıştırın:


`git clone `[`https://github.com/Sxinar/NalaZy.git`](https://github.com/Sxinar/NalaZy.git)
`cd NalaZy`
`chmod +x install.sh`
`./install.sh`

Kurulum bittikten sonra değişikliklerin aktif olması için terminali kapatıp açın veya şu komutu yazın:

`source ~/.bashrc`

### 🗑️ Kaldırma / Uninstall {#kaldirma}

Eğer NalaZy kısayollarını kaldırmak isterseniz, `~/.bashrc` dosyanızın en altındaki NalaZy bölümlerini silmeniz yeterlidir.

### 🤝 Katkıda Bulunma / Contributing {#katkida-bulunma}

Geliştirme önerileriniz mi var? Harika!

1. Bu depoyu çatallayın (Fork).
2. Yeni bir özellik dalı oluşturun (`git checkout -b feature/yeniOzellik`).
3. Bir Çekme İsteği (Pull Request) açın.

### 📜 Lisans / License {#lisans}

Bu proje [MIT LICENSE](https://www.google.com/search?q=LICENSE) altında lisanslanmıştır.

### ❓ Sıkça Sorulan Sorular / FAQ {#faq}

<details>

<summary><b>TR: NalaZy sistemime zarar verir mi?</b></summary>

Hayır. NalaZy sadece terminal kısayolları (alias) oluşturur. Sistem dosyalarınızı değiştirmez.

</details>

**⭐ Eğer bu projeyi beğendiyseniz yıldız vermeyi unutmayın!** Developed by Sxinar with ❤️
