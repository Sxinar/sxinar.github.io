---
layout: post
title: COSMIC DE İnceleme
description: System76 tarafından Rust diliyle sıfırdan geliştirilen, modern, modüler ve Wayland tabanlı yeni nesil COSMIC masaüstü ortamı incelemesi.
date: 2026-06-12 18:10:00 +03:00
categories:
  - linux
  - Masaüstü Ortamı İnceleme
tags:
  - Linux
  - Cosmic
  - Pop!_OS
  - Rust
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

**Selam**
Linux dünyasında uzun zamandır ya GNOME'un modernlik adı altında katı , kısıtlayıcı ve eklentilere bağımlı edici dünyasına ya da KDE'nin uçsuz bucaksız ama bazen yorucu özelleştirmeleri arasındaki çizgide mahkumduk. Artık"yeni bir çözüm gelmeyecek mi?" derken, System76 ekibi her şeyi değiştirecek bir hamle yaptı. Karşınızda açık kaynak dünyasının son dönemdeki en heyecan verici, tamamen **Rust** diliyle sıfırdan yazılmış yeni nesil canavarı: **COSMIC DE**.
COSMIC (Computer Operating System Main Interface Components), donanım üreticisi System76 tarafından geliştirilen ve başlangıçta GNOME üzerinde bir eklenti yığınıyken, artık GNOME bağlarını tamamen koparıp bağımsız bir ekosisteme dönüşen fütüristik bir masaüstü ortamıdır.
Teknik Özellikler:

* Arka planda **Rust** diliyle sıfırdan yazılmıştır. Bellek güvenliği (memory safety) en üst düzeydedir ve C/C++ tabanlı masaüstlerindeki ani çökme veya bellek sızıntısı (memory leak) sorunlarını kökten çözer.
* Grafik arayüz çizimleri için GTK veya Qt yerine, tamamen Rust ekosistemine ait modern, donanım ivmeli, modüler ve aşırı hızlı olan **iced** kütüphanesini temel alır.
* Yerleşik pencere yöneticisi ve kompozitörü olan **cosmic-comp**, doğrudan **Wayland** protokolü üzerine inşa edilmiştir. Ekrandaki her kare, her animasyon ve her pencere geçişi GPU tarafından en küçük bir yırtılma (tearing) olmadan, yağ gibi akıcı bir şekilde render edilir.
* Gelişmiş donanım mimarisi sayesinde modern çoklu ekran (multi-monitor) kurulumlarını, değişken yenileme hızlarını (VRR / FreeSync / G-Sync) ve kesirli ölçeklendirmeyi (Fractional Scaling) kutudan çıktığı gibi kusursuz destekler.
* Hem geleneksel panel/dock düzenini seven bağımsız kullanıcıları hem de klavyeden elini kaldırmak istemeyen döşemeli pencere yöneticisi (Tiling Window Manager) hayranlarını tek bir çatıda birleştirir.
* UI elemanlarının çiziminde donanım hızlandırmasından (Vulkan/OpenGL) tam kapasite yararlanır. Grafik kartınızın gücünü sonuna kadar kullanarak CPU üzerindeki yükü sıfıra indirir.
COSMIC Uygulamaları:
* **COSMIC Files:** Rust ile yazılmış, asenkron dosya indeksleme yeteneğine sahip, sekmeli yapısı ve minimalist tasarımıyla adeta ışık hızında çalışan yeni nesil bir dosya yöneticisidir.
* **COSMIC Terminal:** GPU ivmeli ekran işleme motoru sayesinde girdi gecikmesini sıfıra indiren, çoklu sekme ve ekran bölme desteği sunan, terminal fanatikleri için tasarlanmış bir uçbirimdir.
* **COSMIC Settings:** Karmaşık alt menülerde kaybolmanıza izin vermeyen, sol tarafta kategorize edilmiş, sağ tarafta ise duvar kağıdından klavye kısayollarına kadar her şeyi tek bir pencerede toplayan ultra modern bir kontrol merkezidir.
* **COSMIC App Store:** Flatpak ve yerel paket depolarını (APT/RPM vb.) tek bir çatı altında birleştiren, asenkron JSON sorgularıyla uygulamaları saniyeler içinde önünüze döken akıcı bir uygulama mağazasıdır.
* **COSMIC Launcher:** Super (Windows) tuşuna bastığınızda açılan; sadece uygulama başlatmakla kalmayıp sistemde hesap makinesi, dosya arama ve script çalıştırma gibi görevleri de üstlenen akıllı ve aşırı hızlı bir arayüz aracıdır.

<h2>Eleştirdiğim Yanları</h2>
Benim gibi sistem mimarisine ve yeni teknolojilere bayılan biri için COSMIC bir başyapıt olsa da, henüz emekleme ve olgunlaşma döneminde olduğu için can sıkan eksikleri var. İşte başlıca eleştirdiğim noktalar:
Genç Ekosistem ve Çocukluk Hastalıkları

* **Eklenti ve Araç Kıtlığı:** Yılların birikimine sahip KDE veya GNOME depolarının aksine COSMIC'in eklenti (applet) ve tema havuzu henüz çok çok ufak. Sistemi kişiselleştirmek ve niş araçlar bulmak şu aşamada oldukça zor.
* **Eski Uygulamalarla Görsel Uyuşmazlık:** Yerleşik uygulamaları _iced_ ile mükemmel görünse de, sisteminize yüklediğiniz eski GTK3 veya ağır Qt/KDE uygulamaları COSMIC altında yer yer görsel potlar oluşturabiliyor, tasarım bütünlüğü bozulabiliyor.
Performans ve Donanım Seçiciliği
* **Yüksek Grafik Kartı Bağımlılığı:** Tamamen GPU donanım ivmesine ve Wayland'e dayandığı için, özellikle eski donanımlarda veya düzgün yapılandırılmamış NVIDIA sürücülerine sahip sistemlerde anlık takılmalar, kare atlamaları veya uyku modundan sonra uyanma sorunları yaşatabiliyor.
* **X11 Desteğinin Olmaması / Zayıflığı:** Geleneksel X11 mimarisini tamamen geride bıraktığı için, arka planda çalışan XWayland katmanı eski oyunlarda veya bazı spesifik ekran kaydetme yazılımlarında performans kayıplarına yol açabiliyor.
Vizyoner Kısıtlamalar
* **Tamamen Pop!_OS Odaklı Gelişim:** Her ne kadar bağımsız bir masaüstü olduğu söylense de, System76 ekibi kararları kendi dağıtımları ve sattıkları bilgisayarların (Thelio, Lemur) ihtiyaçlarına göre alıyor. Bu durum topluluktan gelen bazı genel taleplerin arka plana itilmesine sebep olabiliyor.
COSMIC’in bu henüz yolun başında olmasından kaynaklanan eksikliklerinin yanında, onu Linux dünyasının gelecekteki tek hükümdarı adayı yapan büyüleyici güçleri de var:
<h2>COSMIC Sevilen Yanları</h2>
Rust Dilinin Getirdiği Saf Güç ve Kararlılık
* **Asla Kilitlenmeyen Arayüz:** Rust'ın strict (katı) derleme kuralları sayesinde, sistemde "Segmentation Fault" gibi saçma masaüstü çökmeleri neredeyse imkansızdır. Hatalı bir üçüncü parti eklenti yükleseniz bile, masaüstünün kabuğu (shell) çökmeyip kararlılığını korur.
* **Muazzam Giriş/Çıktı (I/O) Hızı:** Uygulamaların açılış hızları, pencerelerin minimize edilme animasyonları ve dosya kopyalama ekranları o kadar asenkron ve akıcıdır ki, modern bir bilgisayarda donanımınızın gerçek hızını nihayet hissedersiniz.
Hibrit Hibrit Pencere Yönetimi (Hybrid Tiling)
* **Tek Tıkla Döşeme Modu:** Paneldeki tek bir anahtarla sistemi i3wm veya Hyprland gibi dinamik bir pencere yöneticisine (Tiling WM) dönüştürebilirsiniz. Pencereler ekrana otomatik ve milimetrik olarak bölünür. Klavyeden elini kaldırmak istemeyen güç kullanıcıları için bir cennettir. İstediğiniz an normal modda da kullanabilirsiniz.
Geleceğe Tam Uyumlu Mimari
* **Wayland ve Modern Grafik Standartları:** Eski mimarilerin (X11) getirdiği teknik borçları (technical debt) taşımadığı için HDR renk yönetimi, VRR ve yüksek yenileme hızlı oyuncu monitörleriyle kusursuz bir uyum içinde çalışır.

<h2>COSMIC Kurulumu Destekleyen Dağıtımlar</h2>
Yeni nesil COSMIC masaüstü ortamını resmi ve en optimize şekilde deneyimlemenizi sağlayan Linux dağıtımları:
Varsayılan Olarak COSMIC ile Gelen Ana Dağıtım:

* **Pop!_OS:** Masaüstünün bizzat yaratıcısı, laboratuvarı ve evidir. COSMIC deneyimini, işletim sistemi çekirdeği ve donanım sürücüleriyle (özellikle NVIDIA) en entegre, en kararlı ve en güncel şekilde sunan amiral gemisi dağıtımdır.
Kurulumda Resmi Olarak COSMIC Paketi Sunan Büyük Dağıtımlar:
* **Fedora (COSMIC Spin / COPR):** Fedora topluluğu, Rust tabanlı bu yeni nesil masaüstünü yakından takip ediyor ve resmi spin çalışmalarıyla Fedora'nın güncel paket altyapısına COSMIC'i entegre ediyor.
* **Arch Linux:** Resmi ve AUR depoları üzerinden, her zaman en güncel Rust derlemeleriyle tamamen "saf" ve üzerinde oynanmamış bir COSMIC masaüstünü terminal üzerinden saniyeler içinde inşa etmenize olanak tanır.
* **openSUSE (Tumbleweed):** Yuvarlanan sürüm avantajıyla COSMIC paketlerini depolarında test ederek kararlı bir Btrfs altyapısı üzerinde kullanıcılarına sunuyor.
En iyi başlangıç dostu mu?
Şu an için **hayır, en iyi başlangıç dostu değil.** Çünkü hala geliştirilme aşamasında olan, bazı küçük hatalar (bug) barındırabilen ve eklenti ekosistemi tam olgunlaşmamış bir ortam. Ancak geliştirme süreci tamamen bittiğinde; şıklığı, hızı ve Pop!_OS'un o sorunsuz yapısıyla birlikte GNOME ve Cinnamon'un tahtını sallayacak en güçlü başlangıç dostu adayıdır.
Bitiriş
Sonuç olarak COSMIC, Linux dünyasında uzun yıllardır süregelen hantallığa, eski kütüphanelere (GTK3/X11) ve eski tasarım felsefelerine karşı yapılmış **en radikal ve en teknolojik devrimdir**. Geçmişin yüklerini taşımayı reddeden, geleceğin Wayland ve Rust dünyasına tamamen gözünü dikmiş cesur bir projedir. Henüz eklenti ekosisteminin zayıflığı ve donanım seçiciliği gibi çocukluk hastalıkları olsa da, sunduğu ham performans ve hibrit pencere yönetimi heyecan vericidir.
Ekibin _iced_ ve _Wayland_ tabanlı bu mimariyi her geçen gün kararlı hale getirmesi, gelecekte GNOME'un o tekelleşmiş ve kısıtlayıcı yapısına en büyük darbeyi vuracaktır. COSMIC, Linux'un gelecekte modern bilgisayarlarda, HDR ekranlarda ve oyuncu sistemlerinde nasıl görünmesi gerektiğinin canlı bir kanıtıdır.
Son cümle olarak; COSMIC sadece eskiyi koruma projesi değil, Linux dünyasını dönüştüren ve geleceğe taşıyan **yeni nesil vizyoner bir lider adayıdır**.
Okuduğunuz için teşekkür ederim, umarım bu heyecan verici Rust canavarı incelemesini de büyük bir keyifle okumuşsunuzdur.
**Aşağıda yorumlarda buluşalım, Rust tabanlı bu geleceği tartışalım!**
