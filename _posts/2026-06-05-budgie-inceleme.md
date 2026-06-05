layout: post
title: Budgie DE İnceleme
description: Solus projesi tarafından geliştirilen, modern ve geleneksel hatları birleştiren GNOME tabanlı Budgie DE incelemesi.
date: 2026-06-05 23:10:00 +03:00
categories:
 * Linux
 * Masaüstü Ortamı İnceleme
   tags:
 * Linux
 * Budgie
 * Solus
   image: null
   settings:
   published: true
   pin: false
   math: false
   toc: true
# **Selam**
Linux dünyasındaki "Windows benzeri geleneksel düzen" ile "modern ve minimalist estetik" arasındaki o bitmek bilmeyen çekişmeye şahit olduysanız, yolunuz er ya da geç Budgie masaüstü ortamına düşmüştür. Şimdi gelin, popülaritesi her geçen gün artan Budgie Masaüstü Ortamını kendi gözümden detaylıca inceleyelim.
Öncelikle Budgie, bağımsız bir Linux dağıtımı olan Solus projesi ekibi tarafından geliştirilmeye başlansa da günümüzde **Buddies of Budgie** adındaki bağımsız bir organizasyon tarafından tamamen topluluk odaklı olarak geliştiriliyor.
### Teknik Özellikler:
 * Altyapı olarak **GNOME** stack'ini (yığınını) temel alıyor ve GNOME kütüphanelerinin gücünden faydalanıyor.
 * Pencere Yöneticisi olarak, GNOME'un *Mutter* yazılımından çatallanan **Budgie Window Manager (BWM)** kullanılır. BWM, pencerelerin ekrana çizilmesi ve animasyonların akıcı bir şekilde oynatılması için doğrudan GPU gücünü kullanan kararlı bir yapıya sahiptir.
 * Ekranın sağ tarafından kayarak açılan, bildirimleri, takvimi, ses kontrollerini ve applet'leri tek bir yerde toplayan **Raven** adında harika bir yan panele sahiptir.
 * GNOME ekibinin "her şeyi basitleştirme ve kısıtlama" felsefesinin aksine, geleneksel panel mantığını korur ancak bunu modern, şeffaf ve estetik efektlerle harmanlar.
 * Bellek yönetimi konusunda GNOME'un ağır kabuk (shell) yapısına kıyasla çok daha optimize bir **C** ve **Vala** mimarisi kullanır. Bu sayede bellek sızıntıları minimum düzeydedir.
 * Görüntü sunucusu tarafında uzun süre X11 mimarisine sadık kalan Budgie, son büyük güncellemeleriyle (Budgie 10.x serisinin son varyantları ve Budgie 11 vizyonu) birlikte **Wayland protokolüne resmi ve tam entegre geçiş sürecini** başlatmıştır.
 * Budgie, UI elemanlarının çizimi için şu an kararlı ve olgunlaşmış olan **GTK 3** kütüphanelerini kullansa da, ekosistemi geleceğe taşımak adına **GTK 4** ve **EFL (Enlightenment Foundation Libraries)** kütüphanelerine geçiş için mimariyi tamamen yenilemektedir.
 * Sistemde donanımsal grafik ivmelendirme (GPU) bulunmadığında veya sürücü çökmelerinde, sistem **LLVMpipe** üzerinden CPU tabanlı yedekleme moduna geçerek kararlılığını korur.
### Budgie Uygulamaları ve Bileşenleri:
 * **Budgie Desktop Settings:** Masaüstünün tüm yazı tiplerini, ikon temalarını, Raven panelinin davranışlarını ve dahili eklentileri (applet) tek bir modern arayüzden yönetmenizi sağlayan merkezi kontrol merkezidir.
 * **Budgie Menu:** Kategorize edilmiş, arama odaklı, sistemi yormayan ve asenkron çalışan oldukça hızlı bir varsayılan uygulama menüsüdür.
 * **Raven Sidebar:** Budgie'yi Budgie yapan en ikonik bileşendir. Widget desteği sayesinde hava durumundan medya oynatıcı kontrolüne kadar her şeyi tek bir kayar panelde toplar.
 * **Budgie Run Dialog:** Alt+F2 kombinasyonuyla açılan, sistem kaynaklarını tüketmeden uygulamaları hızlıca tetikleyen şık bir komut çalıştırma aracıdır.
 * **Budgie Polkit:** Grafik arayüzünde kök (root) yetkisi gerektiren işlemler için güvenlik doğrulamasını sağlayan hafif ve güvenli bir ajan mimarisidir.
 * **Budgie Popovers:** Panel üzerindeki simgelere tıklandığında açılan alt menülerin ve bildirimlerin, ekran kartı sürücüleriyle uyumlu bir şekilde, gölgeli ve yumuşak animasyonlarla açılmasını sağlayan arayüz katmanıdır.
#### 
## Eleştirdiğim Yanları
##### Benim kendi Linux dağıtım tercihlerim arasında potansiyelini çok yüksek gördüğüm ama mevcut geliştirilme ve ekosistem stratejilerinden ötürü ciddi hayal kırıklıkları yaşadığım masaüstü ortamlarından biri Budgie. Başlıca sebepleri ise şunlar:
#### Teknik ve Mimari Darboğazlar
 * **GNOME Bağımlılığı ve Sürüm Krizleri:** Budgie arka planda yoğun bir şekilde GNOME kütüphanelerini (Mutter, GLib, GIO) kullandığı için, GNOME'un her büyük sürüm güncellemesinde (örneğin GNOME 45'ten 46'ya geçiş gibi) Budgie tarafında kırılmalar yaşanıyor. Bu durum masaüstünü sürekli bir "GNOME'un arkasını toplama" döngüsüne sokuyor.
 * **Mimari Kararsızlık ve Dil Değişiklikleri:** Projenin geleceği konusunda ekibin net bir karar verememesi; bir dönem tamamen Qt kütüphanelerine geçeceklerini açıklamaları, ardından bu karardan vazgeçip GTK4/EFL tabanına yönelmeleri projenin gelişim hızını baltalıyor ve teknik borç yaratıyor.
 * **Özgün Uygulama Ekosisteminin Olmaması:** Cinnamon'daki X-Apps veya KDE'deki devasa uygulama ailesinin aksine, Budgie'nin kendine ait yerleşik bir dosya yöneticisi, metin editörü veya resim görüntüleyicisi yoktur. Çoğunlukla GNOME uygulamalarını (Nautilus, Gedit vb.) ödünç alır, bu da arayüzde yer yer felsefe ve görsel uyumsuzluk yaratır.
#### Performans, Grafik ve Ekran Protokolü Eksiklikleri
 * **Kaynak Tüketimi Kararsızlığı:** Budgie saf bir XFCE veya MATE kadar hafif olmadığı gibi, sunduğu özellik yelpazesine kıyasla zaman zaman GNOME kadar RAM ve işlemci tüketebiliyor. "Hafiflik" iddiası modern sistemlerde havada kalıyor.
 * **Ağır Panel Animasyonları ve Gecikme:** Özellikle Raven yan paneli çok fazla widget ile doldurulduğunda, açılış ve kapanış animasyonlarında anlık kare düşüşleri (stuttering) ve girdi gecikmesi yaşanabiliyor.
 * **Wayland Geçişinin Sancılı Olması:** Wayland adaptasyonu kağıt üzerinde başlasa da, X11'deki kadar kusursuz bir deneyim sunamıyor; çoklu monitör kurulumlarında ve ekran paylaşımı süreçlerinde hala stabilite sorunları mevcut.
#### Kullanıcı Deneyimi ve Fonksiyonel Kısıtlamalar
 * **İlkel Pencere Yönetimi (Tiling Eksikliği):** Budgie, pencereleri ekrana yerleştirme konusunda oldukça muhafazakar ve yetersiz. Dinamik çalışma alanları ve gelişmiş döşeme modları olmadığı için büyük ekranlarda çok verimsiz bir iş akışı sunuyor.
 * **Eklenti ve Özelleştirme Kısıtlılığı:** KDE Plazma'nın sunduğu o sınırsız evrenin veya Cinnamon'un Spices deposunun yanında Budgie'nin resmi eklenti mağazası oldukça zayıf ve kısır kalıyor. Kullanıcıyı varsayılan gelen eklentilere mahkum ediyor.
 * **Dokunmatik Ekran Desteğinin Sıfıra Yakın Olması:** Raven paneli ne kadar mobil arayüzleri andırsa da, masaüstünün genel işleyişi hibrit cihazlar veya tabletler için hiçbir kaydırma jesti (gesture) ya da adaptif arayüz kolaylığı barındırmıyor.
#### Vizyon ve Tasarım Sorunları
 * **Kimlik Krizi Yaşaması:** Budgie ne tam anlamıyla geleneksel bir Windows klonudur ne de GNOME veya macOS gibi tamamen modern bir yaklaşımdır. İkisinin ortasında kalması, net bir hedef kitle belirlemesini zorlaştırıyor.
 * **Küçük Geliştirici Ekosistemi:** Arkasında Red Hat, Canonical veya Valve gibi devasa finansal/teknolojik sponsorlar bulunmadığı için inovasyon adımları çok yavaş atılıyor. HDR desteği veya gelişmiş oyun optimizasyonları gibi çağdaş teknolojileri geriden takip etmek zorunda kalıyor.
##### Budgie’nin bu sancılı yönlerinin yanı sıra, onu Linux dünyasında niş ve oldukça sadık bir kitleye ulaştıran çok güçlü ve büyüleyici yanları da var:
## Budgie Sevilen Yanları
#### Kullanım Kolaylığı ve Modern Estetik Felsefesi
 * **Kutudan Çıktığı Anda Harika Görünüyor:** Diğer pek çok masaüstü ortamının aksine, kurulduğu ilk saniyede bile göze hitap eden modern yazı tipleri, gölgelendirmeler, şeffaflık efektleri ve temiz bir tema uyumu ile gelir. İnce ayar yapmakla uğraşmak istemeyenler için görsel bir şölendir.
 * **Raven Panelinin İşlevselliği:** macOS ve Windows 11'deki bildirim ve kontrol merkezlerinin en iyi yönlerini alan Raven paneli, günlük kullanımda takvime, ses çıkış cihazı seçimine ve bildirim geçmişine tek tıkla erişim sunarak muazzam bir pratiklik sağlar.
 * **Temiz ve Sade Ayar Menüsü:** Kullanıcıyı karmaşık terminal komutlarına veya iç içe geçmiş binlerce alt menüye boğmaz. İhtiyacınız olan her şey "Budgie Desktop Settings" altında net ve anlaşılır biçimde sunulur.
#### Kararlılık ve Güvenli Geliştirme Politikası
 * **Gereksiz Maceralardan Uzak Duruyor:** Çekirdek masaüstü deneyimini bozacak radikal, deneysel ve kararsız özellikleri sisteme aniden entegre etmez. Bu sayede güncelleme sonrasında masaüstünün çökme riski minimumdur.
 * **GNOME Altyapısının Olgunluğu:** Sıfırdan bir ekran işleme motoru yazmak yerine GNOME'un yıllardır test edilmiş, güvenlik açıkları kapatılmış alt kütüphanelerini kullandığı için temel katmanda kaya gibi sağlam bir kararlılık sunar.
#### Kullanıcı Odaklı ve Topluluk Ruhuna Bağlılık
 * **Kurumsal Baskılardan Uzak Gelişim:** Herhangi bir şirketin ticari kaygıları veya veri toplama (telemetri) dayatmaları olmadan, tamamen "Buddies of Budgie" topluluğunun ve son kullanıcıların istekleri doğrultusunda şekillenir.
 * **Modüler Panel Yapısı:** Alt, üst veya yan paneller oluşturmak, bunları dock (uygulama çekmecesi) moduna getirmek ve panel elemanlarının yerini sürükle-bırak ile değiştirmek inanılmaz derecede kolaydır.
#### 
## Solus ve Geliştirici Ekiplerin Beğenmediğim Noktaları:
 * **Geliştirme Sürecindeki Yönetim Krizleri:** Geçmişte Solus projesinin liderlerinin (Ikey Doherty ve sonrasındaki ekipler) projeyi aniden bırakması, sunucuların aylarca çevrimdışı kalması gibi skandallar, Budgie'nin ana vatanında kurumsal ve yönetimsel olarak ne kadar kırılgan bir geçmişe sahip olduğunu gösteriyor.
 * **Kararsız Yol Haritaları:** Yıllardır konuşulan "Budgie 11" sürümünün ve büyük mimari değişikliğin sürekli ertelenmesi, toplulukta bir vizyon eksikliği ve heyecan kaybı yaratıyor.
 * **Dağıtımların Üvey Evlat Muamelesi Yapması:** Budgie'yi ana masaüstü olarak benimseyen büyük ve popüler dağıtım sayısı çok az. Bu durum, bizzat Budgie ekibinin diğer büyük Linux ekosistemleriyle (örneğin Fedora veya Arch toplulukları) yeterince entegre ve agresif bir diplomasi yürütememesinden kaynaklanıyor.
 * **Yenilikçi Akımlara Karşı Muhafazakar Tutum:** Gelişmiş pencere yöneticisi özellikleri (tiling) veya dinamik sanal masaüstü tasarımları gibi modern Linux kullanıcılarının çok sevdiği trendleri "tasarım felsefemize uymuyor" diyerek reddetmeleri, kullanıcı tabanının genişlemesini engelliyor.
## Budgie Kurulumu Destekleyen Dağıtımlar
##### Budgie masaüstü ortamını varsayılan olarak sunan ve kurulum aşamasında resmi olarak seçmenize izin veren Linux dağıtımları ise bu şekilde:
#### Varsayılan Olarak Budgie ile Gelen Dağıtımlar:
 * **Solus (Budgie Edition):** Masaüstünün doğduğu, eOPKG paket yönetim sistemiyle birlikte en saf, en optimize ve en entegre Budgie deneyimini sunan amiral gemisi dağıtımdır.
 * **Ubuntu Budgie:** Ubuntu'nun resmi topluluk lezzetlerinden (flavor) biridir. Ubuntu'nun geniş sürücü, kararlılık ve paket desteğini Budgie'nin estetik arayüzü ve kendine has hoşgeldin (Welcome) aracıyla harika harmanlar.
#### Kurulumda Resmi Olarak Budgie Seçeneği Sunan Büyük Dağıtımlar:
 * **Fedora (Budgie Spin):** Fedora'nın güncel, yenilikçi ve kurumsal standartlardaki paket altyapısını, üzerinde oynanmamış saf bir Budgie masaüstü ortamıyla buluşturur.
 * **Arch Linux:** Resmi kurulum betiği (archinstall) veya manuel kurulum esnasında masaüstü seçimi adımında Budgie seçilerek, arka planda hiçbir gereksiz (bloat) uygulama olmadan tertemiz bir sistem kurulmasına imkan tanır.
 * **Manjaro (Budgie Edition):** Arch tabanlı bu popüler dağıtım, topluluk sürümleri kapsamında Budgie'yi güncel paketlerle ve şık bir varsayılan tema yapılandırmasıyla sunar.
 * **EndeavourOS:** Grafiksel kurulum ekranında (Calamares) tek tıkla saf ve Arch tabanlı bir Budgie deneyimi inşa etmenizi sağlar.
 * **openSUSE (Tumbleweed / Leap):** Güçlü YaST yönetim aracı ve Btrfs dosya sistemiyle birlikte Budgie masaüstünü depolarında resmi olarak barındırır.
## En iyi başlangıç dostu mu?
Bence Budgie, görselliğe önem veren modern kullanıcılar için harika bir başlangıç dostu alternatiftir. Ancak kurumsal bağımsızlığı, kendine ait uygulama ekosisteminin olmaması ve bazı teknik tıkanıklıkları nedeniyle **"En İyi Başlangıç Dostu"** tahtını GNOME veya Linux Mint (Cinnamon) gibi devlere kaptırıyor. Yine de estetik arayanlar için kesinlikle ilk üçtedir.
## Bitiriş
Sonuç olarak Budgie'nin, GNOME'un katı ve kısıtlayıcı dünyasından kaçan ama geleneksel masaüstü ortamlarının (Cinnamon, XFCE) o demode, yaşlı görsel çizgisinde de boğulmak istemeyen kullanıcılar için harika bir "orta yol" projesi olduğunu görüyoruz. Saf performans ve derinlemesine özelleştirme isteyen ileri düzey kullanıcılar için (benim gibi) yer yer kısıtlayıcı ve yetersiz bir deneyim sunsa da, bilgisayarı açıp hemen işine odaklanmak ve bunu yaparken de şık bir arayüze bakmak isteyenler için güvenli bir limandır.
Ancak ekibin Wayland geçişini tam anlamıyla kusursuzlaştıramaması ve GTK4/EFL tabanına geçişteki kararsızlıkları, gelecekte projenin önünde ciddi bir teknik borç (technical debt) dağının birikmesine yol açıyor. Eğer bu kabuk değişimi hızlıca tamamlanmazsa, Budgie modern donanımların ve grafik teknolojilerinin gerisinde kalma riskiyle yüzleşebilir.
Son cümle olarak; Budgie Linux dünyasını peşinden sürükleyen vizyoner bir devrimci değil; fakat estetiği, sadeliği ve işlevselliği tek bir potada eritmeyi başaran, Linux'un o asık suratlı imajını yıkan en kibar geçiş köprülerinden biridir.
Okuduğunuz için teşekkür ederim, umarım Budgie uyarlamasını da en az ilki kadar beğenmişsinizdir.
**Aşağıda yorumlarda buluşalım, Budgie hakkındaki düşüncelerinizi tartışalım!**
