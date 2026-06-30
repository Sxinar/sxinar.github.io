---
layout: post
title: ProtonMail İnceleme
description: Uzun süredir ikincil olarak kullandığım ProtonMail hizmetini inceliyorum
date: 2026-07-02 22:54:00 +03:00
categories:
  - İnceleme
  - Araçlar
tags:
  - proton
  - protonmail
  - mail
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

# **Selam**

Tuta’nın o 6 ay boyunca girmezsen hesabı sessiz sedasız silme katılığı ve yarattığı kullanıcı paranoyasından sonra, bugün şifreli mail dünyasının en popüler, en çok konuşulan ve tabiri caizse bu işin "rock stari" olan **Proton (eski adıyla ProtonMail)** servisini masaya yatırıyoruz.
İsviçre merkezli bu platform, günümüzde sadece bir e-posta servisi değil; VPN, Drive, Şifre Yöneticisi ve Takvim içeren devasa bir gizlilik ekosistemine dönüştü. Ancak arkasındaki bu parlak imajın yanında, geçmişteki büyük fiyaskoları ve günlük kullanımda insanı çileden çıkaran spam sorunları gibi ciddi eksileri de var.
Senin o lafı dolandırmayan, doğrudan sadede gelen net üslubunla Proton’u tasarımı, performansı, geçmişteki hataları ve tüm artı-eksileriyle en detaylı haliyle inceleyelim.

## 1. Tasarım, Arayüz ve Günlük Kullanım Performansı

Proton’u rakiplerinden, özellikle de Tuta gibi takoz tasarımlı servislerden ayıran en büyük gücü, kullanıcı deneyimine verdiği önemdir.

* **Modern ve Akıcı Arayüz:** Proton’un web arayüzü ve mobil uygulamaları (Android/iOS) oldukça modern, göze hoş gelen ve akıcı bir tasarıma sahip. Gmail kullanan birinin Proton’a geçtiğinde yabancılık çekme süresi neredeyse sıfır. Temalar, özelleştirilebilir klasörler ve modern gelen kutusu düzeni günlük işlerinizi yaparken kendinizi güncel bir uygulamada hissettiriyor.
* **Proton Bridge Lüksü (Ücretli Plan):** Tuta’da olmayan harika bir özellik bu. Eğer ücretli bir plan kullanıyorsanız, Proton Bridge aracılığıyla mailinizi Outlook, Thunderbird veya Apple Mail gibi masaüstü favori mail istemcilerinize şifrelemeyi bozmadan bağlayabiliyorsunuz.
* **Çoklu Cihaz Senkronizasyonu:** Uygulamalar arası bildirim hızı ve senkronizasyon performansı oldukça başarılı. Geleneksel mail servislerinin sunduğu o "yağ gibi akma" hissini, şifreli bir sistemde alabilmek teknik olarak büyük bir başarı.

## 2. Teknik Özellikler ve Gizlilik Mimarisi

Proton da tıpkı Tuta gibi verilerinizi sonuna kadar korumayı vaat eden çok güçlü teknik temeller üzerine kurulu.

* **Uçtan Uca Şifreleme (E2EE) ve Sıfır Bilgi:** Mailleriniz daha cihazınızda şifrelenerek sunucuya gönderilir. Proton çalışanları dahil kimse maillerinizin içeriğini göremez. Şifreleme standart olarak yerleşik PGP (Pretty Good Privacy) protokolünü kullanır.
* **İsviçre Güvencesi Balonu:** Sunucuların tamamı İsviçre’de bulunuyor. Bu durum, AB ve ABD’deki agresif veri gözetleme taleplerine karşı yasal bir koruma kalkanı sağlıyor. Ancak bu durumun dışarıdan göründüğü kadar kusursuz olmadığını birazdan geçmiş hatalar kısmında göreceğiz.
* **Açık Kaynak Kod ve Bağımsız Denetim:** Proton, uygulamalarının tüm kaynak kodlarını internette şeffaf bir şekilde paylaşıyor. Düzenli olarak bağımsız siber güvenlik şirketlerine kendilerini denetletip bu raporları yayınlıyorlar.

## 3. Proton’un Sicili: Geçmişteki Büyük Hatalar ve Fiyaskolar

Proton reklamlarında sürekli "Asla log tutmuyoruz" algısı yaratsa da, geçmişte yaşanan bazı kritik olaylar toplulukta çok büyük güven kırılmalarına yol açtı.

* **Fransız Aktivist Olayı (IP Teslim Etme Skandalı):** Proton’un tarihindeki en büyük kara leke budur. Fransız polisi bir iklim aktivistinin peşine düştü ve İsviçre polisi aracılığıyla Proton’dan veri istedi. Proton, o güne kadar bas bas bağırdığı "IP logu tutmuyoruz" söylemine rağmen, mahkeme kararını alır almaz aktivistin IP adresini ve cihaz bilgilerini arkada gizlice kaydetmeye başladı ve polise teslim etti. Aktivist yakalandı. Proton bu olaydan sonra gizlilik politikasındaki o iddialı cümleleri "Yasal olarak zorunlu kalırsak kaydederiz" şeklinde değiştirmek zorunda kaldı.
* **Devlet Taleplerine Boyun Eğme Oranı:** İsviçre yasaları federal seviyede devreye girdiğinde, yerel şirketlerin devlet taleplerine karşı durma şansı sıfırdır. Proton’un her yıl yayınladığı şeffaflık raporlarına bakarsanız, siber suçlar veya uluslararası yasal talepler doğrultusunda her yıl binlerce hesap için devletlerle veri (içerik değil, metadata; yani kim, ne zaman, hangi cihazla girdi gibi bilgiler) paylaştığını görebilirsiniz.
* **Siber Saldırılar ve Çökmeler:** Geçmiş yıllarda Proton çok ciddi DDoS saldırılarına maruz kaldı ve sistemleri günlerce felç oldu. İnsanlar en kritik iş maillerine saatlerce erişemedi. Altyapıyı toparladılar ancak o dönemde sisteme bağımlı olan kullanıcıları çok mağdur ettiler.

## 4. Büyük Dert: Gelen Kutunuza Neden Bu Kadar Çok Spam Düşüyor?

Gelelen kutunuzun bir süre sonra adeta bir spam havuzuna dönmesi, Proton kullanan birçok kişinin ortak çilesi. Bunun arkasında çok net iki teknik sebep var:

* **Şifrelemenin Getirdiği Körlük (Filtreleme Sorunu):** Proton’un tüm felsefesi gelen mailleri sunucuya girdiği an şifrelemek üzerine kurulu. Sunucu mailin içeriğini okuyamadığı için, arkada çalışan filtreleme algoritmaları mailin içindeki o "dolandırıcılık, sahte link veya bahis reklamı" kelimelerini Gmail gibi tarayıp tespit edemiyor. Yani şifreleme teknolojisi, spam filtrelerinin elini kolunu bağlıyor. Sadece mailin geldiği IP adresine veya başlığına bakarak karar vermeye çalışıyorlar ve bu da filtreleri çok zayıflatıyor.
* **Proton Uzantılarının Hedef Olması:** İnternet korsanları ve reklamcılar, gizlilik odaklı insanların Proton kullandığını çok iyi biliyor. Bu yüzden @proton.me veya @protonmail.com uzantılı adreslere toplu bot saldırıları ve rastgele spam dataları fırlatıyorlar. Adresiniz bir kere bir veri sızıntısıyla internete düştüyse, Proton'un filtreleri o spam dalgasını engellemekte çok yetersiz kalıyor.

## 5. Hesap Silme Politikası: Tuta'ya Karşı Açık Ara Kazandığı Yer

Tuta’nın tepesinde Demokles’in kılıcı gibi sallanan o katı 6 ay kuralına bakınca, Proton bu konuda kullanıcıya resmen nefes aldırıyor.

* **12 Ay Hareketsizlik Süresi:** Proton'un resmi politikasına göre ücretsiz bir hesabın "hareketsiz" (inactive) sayılması için tam **12 ay (1 yıl)** boyunca hiç giriş yapılmamış olması gerekiyor.
* **Sizi Asla Habersiz Bırakmaz:** Tuta gibi sessiz sedasız hesabınızı kapatıp arkandan kapıyı kilitlemiyorlar. Proton, eğer hesabınızı 1 yıldır kullanmıyorsan ve silme aşamasına geldiyse, hesabına tanımladığın o yedek kurtarma mailine defalarca uyarı mesajı gönderiyor. "Bakın, bu hesaba uzun süredir girmiyorsunuz, silinecektir, lütfen bir kez giriş yapın" diye seni önceden mutlaka uyarıyor.
* **Asla Kalıcı Olarak Çöp Etmez:** Eğer geçmişte Proton'a 1 dolar bile destek olduysanız, en düşük ücretli paketi bile bir kez satın aldıysanız hesabınızı ömür boyu asla ama asla silmiyorlar.

## Sonuç Olarak

Proton Mail; harika arayüzü, gelişmiş ekosistemi (VPN, Drive vb.) ve kullanıcıyı strese sokmayan insancıl hesap silme politikasıyla şu an piyasadaki en güçlü alternatif. Ancak geçmişteki IP teslim etme fiyaskoları nedeniyle "yüzde yüz anonimlik" iddiası bir parça havada kalıyor. Ayrıca şifreleme körlüğü yüzünden yaşanan o spam mail çilesine karşı kendi filtrelerinizi (Sieve Filters) iyi ayarlamanız veya internet sitelerine kayıt olurken takma isim (alias) servisleri kullanmanız şart.
Yine de tüm bu eksilerine rağmen; 6 ay girmedin diye hesabını kalıcı olarak çöpe atan Tuta ile kıyaslandığında, önemli hesaplarınızı bağlamak ve uzun vadeli kullanmak için Proton kesinlikle çok daha güvenilir ve mantıklı bir liman.
Okuduğunuz için teşekkür ederim umarım buraya kadar sıkılmadan beğenerek okumuşsunuzdur.
**Aşağıda yorumlarda buluşalım sizin Proton Mail deneyimleriniz nasıl, bu spam sorununu siz de yaşıyor musunuz**
