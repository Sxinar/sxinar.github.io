---
layout: post
title: Haziran 2026 FOSS Bülteni
description: Haziran Ayının FOSS yazılımlar Açık ve Özgür programlar için önemini okumalariniza sunuyorum
date: 2026-07-05 18:47:00 +03:00
categories:
  - Günlükler
  - FOSS Gelişme Günlükleri
tags:
  - İnceleme
  - Bülten
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

## 1. Linux Çekirdeği (Kernel) Gelişmeleri ve Dosya Sistemleri

Haziran ayının en büyük haberi şüphesiz ana çekirdek ağacında yaşanan devasa sıçramadır. 7.0 serisi döneminin ardından, uzun bir RC (Release Candidate) test sürecini tamamlayan Linus Torvalds, sürüm döngüsünü **Linux 7.1 Kararlı (Stable)** versiyonuyla taçlandırdı.

* **Linux 7.1 Stable (14 Haziran 2026):** Çekirdek mimarisindeki en belirgin yapısal eklenti, dosya sistemi tarafında gerçekleşti. Uzun süredir çekirdekte bulunan ancak yetenekleri kısıtlı kalan `NTFS3` sürücüsünün (driver) yerini almak üzere tamamen yeniden yazılan ve gelişmiş özellikler içeren **NTFSPLUS** sürücüsü mainline kernel'e resmen dahil edildi. Bu sürücü, NTFS disklerde metadata journaling (günlükleme) okuma/yazma hızlarında yüksek verimlilik sunuyor. (Kaynak: _Linux Kernel Archives, Kernel Version History_)
* **LTS ve Eski Sürüm Durumları:** Kurumsal sunucularda yaygın olarak kullanılan Linux 6.19 LTS ve 6.18 LTS serileri Haziran ayında kümülatif yama almaya (sırasıyla 6.19.12 ve 6.18.37 gibi alt sürümlerle) devam etmiştir. Diğer yandan 6.17 serisinin ömrü önceki aylarda resmi olarak tamamlandığı için (End of Life) kurumsal tarafta 7.x ve 6.18/6.19 serilerine toplu göçler hızlanmıştır. (Kaynak: _endoflife.date/linux_)

## 2. Dağıtım (Distro) Dünyası ve Mimari Kararlar

Haziran 2026'da dağıtımlar, hem paket derleme algoritmalarında (PGO) büyük yeniliklere imza atmış hem de kritik güvenlik yama döngülerini (Patch Tuesday pratiklerine benzer) hızlandırmıştır.

* **CachyOS Haziran 2026 "Noctalia" Güncellemesi (28 Haziran 2026):** Performans odaklı Arch tabanlı dağıtım CachyOS, yılın en kapsamlı güncellemesini yayınladı.
* **Derleyici Optimizasyonları:** Python paketleri performansı doğrudan yukarı taşıyan **Extended PGO (Profile-Guided Optimization)** metoduyla baştan derlendi. Daha da önemlisi, GCC (GNU Compiler Collection) için genel bir **x86 branch misprediction** (dal yanlış tahmini) yaması sisteme eklendi. Yüksek çekirdekli Intel ve AMD CPU'larda OpenBLAS kullanıldığında Phoronix Test Suite (PTS) metriklerine düşen ciddi performans regresyonları bu mimari yamayla tamamen ortadan kaldırıldı.
* **İzolasyon ve Ağ:** Güvenlik katmanı olarak paket kurulumlarındaki "scriptlet" ve "hook" yapıları, varsayılan olarak **ağ izolasyonuna** (network isolation) alındı. Artık pacman scriptleri habersiz dış ağa çıkamıyor.
* **Masaüstü:** "Hyprland Noctalia" adı verilen yeni, ultra-hafif ve Wayland tabanlı bir masaüstü seçeneği sunuldu. Ayrıca DNS-over-QUIC desteği standart hale getirildi. (Kaynak: _CachyOS Haziran 2026 Sürüm Duyurusu_)
    - **Rocky Linux ve Kurumsal Yamalar (RHEL Klonları):** Rocky Linux 10.1, 9.7 ve 8.10 sürümleri Haziran ayı boyunca, çekirdekteki ayrıcalık yükseltme (LPE) açıklarına karşı acil durum güncellemelerini (örn: `kernel-6.12.0-124.55` ve `kernel-5.14.0-611.54`) sunarak kurumsal iş yüklerini güvence altına almıştır.

## 3. Masaüstü Ortamları ve Araç Altyapısı

Wayland ekosistemine tam geçişin sancılarının bittiği ve araçların olgunlaştığı bu dönemde, sistem araçları ve CLI tabanlı dosya yöneticileri büyük fonksiyonel yetenekler kazandı.

* **SuperFile 1.6 Mimarisi:** Golang tabanlı ve terminal odaklı gelişmiş dosya yöneticisi SuperFile, Haziran ayında yeni bir gezinme mimarisi yayınladı. `split_file_panel` fonksiyonu (varsayılan kısayol `n`) ile kullanıcılar artık aynı dizin içerisinde yan yana eşzamanlı ve bağımsız dosya panelleri açabiliyor. Navigasyon ağacında "üst dizine (parent) atlandığında odaklanmayı (focus) koruma" mantığı tamamen baştan yazıldı. (Kaynak: _SuperFile GitHub Releases_)
* **BleachBit 6.0 ve Wayland Uyumu:** Uzun yılların sistem temizleme ve gizlilik aracı BleachBit, 6.0 sürümüyle Wayland kompozitörlerinde **CLI (Terminal) arayüzünün root (sudo) yetkisiyle çalışmayı reddetmesi** (failing to run as root on Wayland) krizini tamamen çözdü. Aynı zamanda `resolvectl` API'si üzerinden tetiklenen, Linux sistemlerine özel çok derin bir DNS Cache (önbellek) temizleyici sisteme entegre edildi. (Kaynak: _BleachBit Changelog_)

## 4. Kritik Güvenlik (SecOps) Gelişmeleri

Haziran 2026, bulut sunucuları (Cloud-Native), Kubernetes node'larını ve konteyner altyapılarını tehdit eden çok ağır çekirdek (kernel) zafiyetlerinin açıklandığı ve yamalandığı bir ay olmuştur.

* **CVE-2026-31431 ("Copy Fail" Zafiyeti):** CVSS v3 puanı **7.8 (HIGH)** olan ve Theori güvenlik araştırmacısı Taeyang Lee tarafından ortaya çıkarılan bu zafiyet, son yılların en korkutucu "Local Privilege Escalation (LPE)" açığıdır.
* **Teknik Analiz:** Linux çekirdeğinin donanım hızlandırmalı kriptografi modülündeki (`algif_aead` - AF_ALG Crypto API) bir mantık hatasıdır. `authencesn` işlevi üzerinden `splice()` sistem çağrısı (syscall) kullanılarak manipülasyon yapıldığında, saldırgan (en düşük yetkili kullanıcı bile) doğrudan RAM'deki **"Page Cache" (Sayfa Önbelleği)** alanına kontrollü 4-byte'lık bir veri yazabilmektedir.
* **İstismar (Exploit):** Saldırgan diskteki dosyaya dokunmaz. RAM'de çalışan `/usr/bin/su` gibi **setuid** (SUID) bayraklı ikili bir dosyanın (binary) in-memory (bellek içi) kopyasını bu 4-byte'lık yazma ile bozar ve saniyeler içinde "Root" yetkisine ulaşır. Diskte değişiklik olmadığı için geleneksel dosya bütünlüğü (File Integrity) araçları bu saldırıyı tespit edemez. Haziran ayında Rocky Linux, Ubuntu (Resolute) ve Red Hat bu açık için acil durum güncellemelerini zorunlu kılmıştır. (Kaynak: _Sysdig Analiz Raporu, Red Hat CVE Veritabanı_)
    - **CVE-2026-53006 (IPv6 Use-After-Free):** 25 Haziran'da yayınlanan bu açık, Linux çekirdeğinin IPv6 yığınını (networking subsystem) vurmaktadır.
* **Teknik Analiz:** `net/ipv6/icmp.c` içerisindeki `icmpv6_rcv()` fonksiyonunda ortaya çıkan bir **Use-After-Free (UAF)** bellek bozulmasıdır. Gelen bir IPv6 ICMP paketinin kaynak ve hedef adresleri (saddr ve daddr) yerel değişkenlerde önbelleğe alınırken, `pskb_pull()` işlemi sonrası belleğin (buffer) yeniden tahsis edilmesi nedeniyle eski işaretçiler (pointers) boşa düşmektedir. Bu zafiyet, saldırganın özel hazırlanmış bir paket ile sistemde Remote Code Execution (Uzaktan Kod Çalıştırma) yapmasına varan zincirleme reaksiyonlara neden olabilmektedir. İlgili yama atılana kadar IPv6'nın devreden çıkarılması veya `ip6tables` ile rate-limit (hız sınırı) uygulanması CISA tarafından önerilmiştir. (Kaynak: _SentinelOne Güvenlik Veritabanı_)
    - **CVE-2026-52906 (9P Filesystem LPE):** "9p (Plan 9)" dosya sistemi istemcisindeki `v9fs_apply_options()` fonksiyonunda gerçekleşen hatalı bir bit tabanlı OR (|=) operatörü (`access=user` parametresinde) hatasından kaynaklanır. Bu mantık hatası, ayrıcalıklı işlemlerin (chown vb.) yapılmasını engellemekte ve yetki atlamaya sebep olmaktadır. (11 Haziran 2026'da yamalandı).

## 5. Açık Kaynak Yapay Zekâ (Open Source AI) ve Bilim Ekosistemi

Yapay zekâ, "Açık Kaynak" konseptiyle Haziran ayında küresel organizasyonların şemsiyesi altında birleşmiştir.

* **UNESCO Open Science Platform (FOSS):** BM himayesinde düzenlenen etkinliklerde UNESCO, Uluslararası Hesaplama Merkezi (UNICC) ile geliştirdiği **Açık Bilim Platformu'nu (Open Science Platform)** resmen tam teşekküllü bir Özgür ve Açık Kaynak Kodlu Yazılım (FOSS) olarak küresel kullanıma sundu. Amaç, bilimsel araştırmaları ve veri setlerini, kapalı ekosistemlerden bağımsız şekilde araştırmacıların kullanımına açmaktır.
* **Tech Talent Europe 2026 Raporu:** Linux Vakfı tarafından yayınlanan rapor, Avrupa'nın dijital egemenliğinde "Yapay Zeka (AI) ve Bulut Yeteneklerinin" (Tech Talent) stratejik bağımsızlık için nasıl fonlanması gerektiğini ortaya koydu ve yerel ekosistem desteklerinin arttırılması yönünde tavsiye kararları aldı.

## 6. Kurumsal ve Uluslararası Yönetişim (Governance) Haberleri

Açık kaynak artık sadece kod değil; küresel diplomasi ve kamu politikalarının temel unsuru haline geldi.

* **UN Open Source Week 2026 (22-26 Haziran, Birleşmiş Milletler Karargahı - New York):** 75'ten fazla ülkeden 1000'i aşkın delege katıldı. Zirveden çıkan en büyük kararlar:
* **OSPOs for Good (İyilik için OSPO):** Açık Kaynak Program Ofislerinin (OSPO) sivil toplum, devlet kurumları ve akademiler arasında köprü kurması.
* **DPI (Dijital Kamu Altyapısı) Günü:** Açık kaynaklı yazılımların devletlerin "Dijital Kamu Altyapısı" (Digital Public Infrastructure) kabul edilerek fonlanması stratejisi onaylandı. Hackathon etkinliklerinde (Edit-A-Thon & Maintain-A-Thon) açık kaynak dokümantasyonlarına katkıda bulunuldu. (Kaynak: _UN ODET ve OICT Raporları_)
    - **Linux Foundation - OCUDU & HPSF:** Linux Vakfı; bulut tabanlı RAN (Radyo Erişim Ağı) olan OCUDU projesine "Katman 1 Uplink IQ veri akışı" API desteği ekleyerek parazit yönetimini donanım seviyesinde açık kaynak kodla çözülebilir kıldı. Aynı ay, Yüksek Performanslı Yazılım Vakfı (HPSF), süper bilgisayarlar (HPC) için Hamburg'daki ISC 2026 zirvesinde çekirdek teknolojilerini tanıttı.

## 7. Popüler FOSS Uygulama Güncellemeleri

Geliştiriciler, uçbirim (terminal) meraklıları ve son kullanıcılar için Haziran 2026'da öne çıkan araç güncellemelerinin detaylı mimari değişim tablosu:

| Yazılım | Sürüm (Haz. 2026) | Mimari / Teknik Gelişme ve Yeni Özellikler | Odak Noktası |
| --- | --- | --- | --- |
| **BleachBit** | v6.0 | Wayland üzerinde yetki yükseltme (root ile CLI başlatma) çökmeleri düzeltildi. `resolvectl` altyapısını kullanan gelişmiş DNS Cache temizleyici motoru eklendi. LibreWolf DEB kurulumları için tam veri süpürme desteği geldi. | Sistem Güvenliği / Temizlik |
| **SuperFile** | v1.6 | Golang tabanlı terminal UI'a `split_file_panel` fonksiyonu (N tuşu) eklendi. Parent (üst) dizine geçerken cursor (imleç) odağını kaybetme regresyonu düzeltildi. | CLI Navigasyon |
| **Calibre** | Y. Sürüm (Haz.) | E-Kitap render motorundaki CSS ayrıştırıcısı güncellenerek **CSS Level 4** seçicilerine tam destek sunuldu. Kitap sıkıştırma algoritmalarına, boyut küçültmek amaçlı "PNG'den WebP/JPEG'e otomatik dönüşüm" filtresi eklendi. | E-Kitap / Verimlilik |
| **Shotcut** | v26.6 | Flathub ve Snap mağazalarında yerini alan yeni sürüm; video işleme hattında (rendering pipeline) özellikle Wayland ortamlarında oluşan kare atlama ve donanım hızlandırma regresyonlarını stabilize etti. | Multimedya / Kurgu |
| **CachyOS (chwd)** | Haz. İmajı | Dağıtımın donanım yönetim aracı `chwd`, uyumsuz NVIDIA/AMD dallarında (farklı jenerasyon kartlar) çakışmaları engellemek için ana (primary) ekran kartına "fallback" yapan yeni bir akıllı tespit mekanizması kazandı. Türkçe yerelleştirme eklendi. | Donanım Optimizasyonu |

  **_Genel Değerlendirme:_** _Haziran 2026; "Copy Fail" gibi RAM'i (sayfa önbelleğini) zehirleyen üst düzey saldırıların, açık kaynak topluluğunun çevik yamalama kültürü sayesinde saatler içinde nasıl bertaraf edildiğine dair harika bir ders olmuştur. Aynı zamanda UN (Birleşmiş Milletler) önderliğindeki etkinlikler, Özgür Yazılımın (FOSS) sadece bir hobi veya kurumsal maliyet düşürücü araç değil; doğrudan insanlığın temel "Dijital Kamu Altyapısı" olduğunu kesin olarak tescillemiştir._
