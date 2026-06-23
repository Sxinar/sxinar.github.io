layout: post
title: Değiştirilemez (Immutable) Linux Dağıtımları İncelemesi
description: Geleneksel paket yönetimini tarihe gömen imaj tabanlı ve salt okunur kök dizinine sahip Immutable dağıtımların derinlemesine incelemesi
date: 2026-06-23 23:40:00 +03:00
categories:
  - Linux
  - İşletim Sistemi İnceleme
tags:
  - Linux
  - Immutable
  - Silverblue
  - MicroOS
  - NixOS
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true

```
# **Selam**
Eğer son dönemde Linux dünyasındaki "sistemim çöktü" "bağımlılıklar birbirine girdi" veya "son güncellemeden sonra siyah ekranda kaldım" çilelerinden sıkıldıysanız yolunuz muhtemelen yeni nesil Immutable (Değiştirilemez / Atomik) dağıtım furyasına düşmüştür Şimdi benim gözümden Linux ekosisteminin geleceği olarak pazarlanan bu Değiştirilemez Dağıtım mimarisini tüm artı ve eksileriyle inceleyelim
Öncelikle Immutable dağıtım felsefesi alışılagelmiş Ubuntu Arch veya Debian gibi sistemlerden çok farklı bir mantıkla çalışıyor Temel amaç işletim sisteminin çekirdeğini (kök dizinini) kullanıcıdan ve uygulamalardan tamamen soyutlayarak "bozulamaz" bir yapı inşa etmek
### Teknik Özellikler:
 * **Salt Okunur Kök Dizin (Read-Only Rootfs):** Bu mimaride /usr /bin ve /lib gibi kritik sistem dizinleri varsayılan olarak salt okunurdur Kullanıcı veya arkada çalışan bir script sudo yetkisine sahip olsa dahi bu dizinlerdeki dosyaları doğrudan değiştiremez veya silemez
 * **İmaj Tabanlı Güncellemeler (Atomic Updates):** Sistem güncellemeleri geleneksel dağıtımlardaki gibi paket paket (apt upgrade veya pacman -Syu gibi) indirilip canlı sisteme kurulmaz Bunun yerine sistemin yeni sürümü arka planda tek bir "bütünsel imaj" olarak indirilir Güncellemenin aktif olması için sistemin yeniden başlatılması gerekir
 * **Kusursuz Geri Dönüş (Rollback) Mekanizması:** Eğer yeni bir imaj güncellemesi sisteminizde bir hataya sebep olursa veya bilgisayar açılmazsa boot ekranından (GRUB/systemd-boot) tek bir tuşla sistemin bir önceki çalışan kusursuz haline (snapshot veya eski deploy) saniyeler içinde geri dönebilirsiniz
 * **Uygulama Soyutlama ve Konteynerler:** Sistem kararlılığını korumak için kullanıcı uygulamaları Flatpak Snap veya AppImage gibi sandbox (yalıtılmış) formatlarda kurulur Geliştiriciler ve CLI araçları içinse ana sistemi kirletmeyen distrobox veya toolbox gibi D-Bus entegrasyonlu Podman/Docker konteyner yapıları kullanılır
 * **Katmanlı Paketleme (Layering):** Eğer VPN istemcisi veya özel bir sürücü gibi sisteme gömülü olması gereken bir paket kurmak isterseniz bu işlem baz imajın üzerine yeni bir katman (ostree layering) olarak eklenir ve yine bir sonraki açılışta sisteme dahil edilir
## Eleştirdiğim Yanları
##### Benim kendi Linux dağıtım tercihlerim arasında son dönemde popülerleşen ancak geliştirilme ve uygulanma biçiminden bazı noktalarda ciddi anlamda memnun olmadığım bir mimari bu Bunların bana göre başlıca sebepleri ise şunlar
#### Teknik ve Mimari Darboğazlar
 * **Yeniden Başlatma Zorunluluğu ve Boot Süreci Çilesi:** En ufak bir sistem paketini (örneğin basit bir lib kütüphanesini veya sistem sürücüsünü) katman olarak eklediğinizde bile değişikliğin devreye girmesi için bilgisayarı yeniden başlatmak zorundasınız Canlı sistemde anlık modifikasyon yapamamak bir süre sonra insanı gerçekten oyalıyor ve yıldırıyor
 * **Katman Savaşları (Layering Bloat):** Sistem imajının üzerine eklediğiniz her yerel paket (rpm-ostree install vb) imajın yapısını ağırlaştırıyor Çok fazla katman eklediğinizde güncelleme süreleri devasa boyutlara ulaşıyor sistem o "saf ve hafif" imaj ruhunu kaybederek hantallaşıyor
 * **Geliştirici Deneyimi Önündeki Yapay Engeller:** Konteyner teknolojilerine (distrobox) ne kadar hayran olsam da bazen ham sisteme doğrudan erişmesi gereken alt seviye bir donanım aracını veya hata ayıklayıcıyı (debugger) çalıştırmak tam bir işkenceye dönüşüyor Konteynere port yönlendirmek soket bağlamak gibi yapay bürokrasilerle uğraşıyorsunuz
#### Kullanıcı Deneyimi ve Fonksiyonel Kısıtlamalar
 * **Flatpak / Sürücü Uyumsuzlukları:** Masaüstü uygulamalarını tamamen Flatpak ekosistemine zorlaması kağıt üzerinde harika görünse de dosya sistemine erişim izinleri (XDG Desktop Portals) özel temaların Flatpak uygulamalarına tam uygulanamaması ve bazı donanım ivmeli render motorlarının sandbox içinde patlaması kullanıcı deneyimine darbe vuruyor
 * **Kısıtlı Görsel Modifikasyon ve Tweak Zorluğu:** Sistem dosyaları kilitli olduğu için /usr/share/themes veya ikon dizinlerine doğrudan müdahale edemiyorsunuz Her şeyi kullanıcının kendi ev dizinine (~/.local/share) taşımak zorunda kalmak çoklu kullanıcı senaryolarında veya global sistem özelleştirmelerinde ciddi kısıtlamalar yaratıyor
 * **Yüksek Disk Alanı Tüketimi:** Hem sistemin eski çalışan sürümlerini (deployment) yedekte tutması hem de Flatpak/Konteyner yapılarının her uygulamanın kendi çalışma kütüphanesini (runtime) ayrı ayrı indirmesi sebebiyle disk alanı tüketimi geleneksel sistemlere göre çok daha agresif
#### Vizyon ve Topluluk Sorunları
 * **Özgürlük Ruhuna Katı Müdahale:** Linux'un alametifarikası olan "sistemin her vidasını söküp takabilme" felsefesi bu dağıtımlarda sistem güvenliği ve kararlılığı uğruna törpüleniyor Kullanıcıya "sen anlamazsın ben sistemi senin için korurum" diyen muhafazakar bir Apple tavrı seziyorum ve bu durum topluluğun anarşist ruhunu zedeliyor
 * **Kurumsal Güçlerin Dayatması:** Immutable projelerin arkasında genellikle Red Hat (Fedora Silverblue) Canonical (Ubuntu Core) veya SUSE (MicroOS) gibi dev şirketlerin ticari bulut/sunucu vizyonları yatıyor Masaüstü kullanıcısının günlük pratiklerinden ziyade sunucu yönetilebilirliğini masaüstüne dayatma çabası bence vizyoner kullanıcıları uzun vadede uzaklaştırıyor
## Sevilen Yanları
##### Immutable sistemlerin bu kadar sevilmeme ve eleştirilme nedeni varken onu benim gözümde de Linux dünyasının en büyük devrimlerinden biri yapan çok güçlü tarafları da yok değil
#### Kusursuz Kararlılık ve Güvenli Liman Felsefesi
 * **Asla Çökmeyen Bir Sistem (Bulletproof):** Yanlışlıkla rm -rf / çalıştırmayı deneseniz bile sistem size güler geçer Sistem dosyaları salt okunur olduğu için işletim sistemini kendi ellerinizle bozmanız neredeyse imkansızdır
 * **Korkusuzca Güncelleme Yapabilme Lüksü:** Arch Linux kullananların güncelleme yaparken yaşadığı o "acaba bu sefer ne kırılacak?" stresi bu mimaride tamamen sıfırlanıyor En radikal sistem güncellenmesini bile gözü kapalı yapabilirsiniz çünkü en kötü senaryoda bile GRUB menüsünden dün geceki çalışan sürüme dönmek sadece 10 saniyenizi alıyor
 * **Sıfır Temizlik / Bakım İhtiyacı:** Yıllarca kullansanız dahi sistem ilk gün kurulduğu kararlılıkta ve temizlikte kalır Uygulamaları kaldırırken arkalarında bıraktıkları artık kütüphaneler (dependency hell) ana sistemi asla kirletmez çünkü her uygulama kendi yalıtılmış odasında yaşar
#### Çekirdek Yapı ve Dağıtım Kolaylığı
 * **Merkezi Yönetim ve Sürücü Bütünlüğü:** Tüm donanım sürücüleri ve çekirdek modülleri baz imajla birlikte test edilip tek parça halinde geldiği için donanımsal kararsızlıklar ve kernel uyumsuzlukları neredeyse hiç yaşanmaz
 * **Test Edilebilirlik:** Dağıtımı geliştiren ekip kendi bilgisayarında neyi test ettiyse sizin bilgisayarınıza inen imaj da bitis bitine aynısıdır Donanımdan donanıma değişen paket kırılmaları bu sayede minimize edilir
## Immutable Mimariyi Destekleyen Başlıca Dağıtımlar
##### Bu yeni nesil değiştirilemez felsefeyi denemek ve bu deneyimi yaşamak isterseniz ekosistemdeki en güçlü aktörler şu şekilde
 * **Fedora Silverblue / Kinoite:** Bu alanın en olgun en kararlı ve sistemle en entegre çalışan amiral gemisi projesi Mimaride rpm-ostree ve Flatpak ikilisini kusursuz bir optimizasyonla sunuyor
 * **openSUSE MicroOS (Aeon / Kalpa):** Btrfs dosya sisteminin gücünü arkasına alan güncellemeleri otomatik yapıp ters giden bir şey olduğunda otomatik geri sarmayı başaran yuvarlanan sürüm (rolling\ release) tabanlı çok başarılı bir alternatif
 * **NixOS:** Tam olarak imaj tabanlı olmasa da tüm sistemi tek bir konfigürasyon dosyasıyla (configuration.nix) fonksiyonel programlama mantığında inşa eden deklaratif yapısıyla Immutable dünyasının en uç ve en güçlü temsilcisi
 * **Vanilla OS:** Ubuntu tabanıyla başlayıp sonrasında Debian tabanına geçen apx paket yöneticisiyle birden fazla dağıtımın (Arch Fedora Ubuntu) paketlerini aynı anda kendi alt konteynerlerinde çalıştırabilen yenilikçi bir proje
## En İyi Başlangıç Dostu mu?
Bence kesinlikle **hayır** Immutable dağıtımlar Linux'a yeni başlayan sıradan bir kullanıcının Flatpak izinleriyle konteyner mantığıyla veya terminalden bir şey kurmak istediğinde karşılaştığı "Salt okunur dosya sistemi" uyarısıyla baş edebileceği bir yer değil
Ancak bilgisayarında macera aramak istemeyen sadece tarayıcısını açıp işini yapmak isteyen ya da tam aksine sistemiyle sürekli deneyler yapıp ana yapıyı asla bozmak istemeyen **ileri düzey geliştiriciler** için biçilmiş kaftan
## Bitiriş
Sonuç olarak Değiştirilemez (Immutable) dağıtımların bir "özgürlük projesi" değil aksine Linux'un o kaotik ve kırılgan yapısını ehlileştirme ve standartlaştırma projesi olduğunu görüyoruz Yenilikçi deneysel ve her gün sistem ayarlarıyla oynamak isteyen ham performans tutkunları için (bu bence yine ben oluyorum) bazen aşırı kısıtlayıcı bir hapishane hissi yaratabiliyorken arkasına yaslanıp stabilite isteyenler için güvenli bir sığınak sunuyor
Geliştiricilerin geleneksel paket yönetim sistemlerini yavaş yavaş terk etmesi ve Flatpak/Konteyner dünyasına geçmesi gelecekte geleneksel dağıtımların neredeyse tamamen sunucu odalarına veya çok spesifik uç cihazlara sıkışacağı fikrini doğruluyor Masaüstünün geleceği kesinlikle atomik imajlarda yatıyor ancak bu süreçte geliştiricilerin o "yeniden başlatma" ve "yalıtılmış alan bürokrasisi" sorunlarını çözmesi şart
Son cümle olarak Immutable dağıtımlar Linux dünyasını dönüştüren vizyoner birer lider Belki her kullanıcının ilk aşkı olmayacaklar ama geleneksel dağıtımlardan dili yanan sürekli sistem çökmelerinden yorulan kitlenin eninde sonunda sığınacağı nihai liman burası olacak gibi duruyor
Okuduğunuz için teşekkür ederim umarım buraya kadar sıkılmadan beğenerek okumuşsunuzdur
**Aşağıda yorumlarda buluşalım bu yeni nesil değiştirilemez sistemleri tartışalım**
