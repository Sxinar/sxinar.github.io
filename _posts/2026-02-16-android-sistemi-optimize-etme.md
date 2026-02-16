---
layout: post
title: Android sistemi optimize etme
description: ''
date: 2026-02-16 22:15:00 +03:00
categories:
  - android
tags:
  - optimizasyon
  - android
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

Merhaba.
Biliyorsunuz andoid 7 öncesinde telefonlarda uygulamalar optimize ediliyor diye bir ifade çıkardı.
Android 7 sonrası bu optimizasyonu Android kaldırdı.(sanırım Samsung devam ettiriyor)
Aslında Android 7 ve sonrası eğer bu şartları karşılaşmamış olmanız halinde kendisi yapıyor.
Şartlar:
1. Telefonunuzun şarja takılı olması gerekiyor.
2. 100% şarj durumunda olması gerekiyor.
3. Telefon açık durumda olmalı. Yani kapalı olmamalı.
4. Telefon kullanılmamalı.
5. Telefonda aktif bir işlem yapılmamalı (örnek muzik çalmamalı, video izlenmemeli) ( en az 30 dakika )
Aslında uygulama optimizasyonu pil için gerekli bir şey olduğu için ve yukarıdaki şartları karşılamayanlar için bugün ADB ile nasıl uygulama optimizasyonu yapacağınızı göstereceğim.
Öncelikle ayarlar menüsüne giriyoruz.

NOT:Elimde Şimdilik sadece Xiaomi cihazım olduğu için diğer cihazlar için örnek veremiyorum ama siz yinede aynı yöntemleri deneyin.
MIUI sürüm numarasına tıklıyoruz 5-6 defa (diğerleri için çekirdek sürümüne) sonra geliştirici seçeneklerinde USB hata ayıklama açıyoruz.


![Screenshot_2024-01-24-09-26-10-387_com.android.settings-edit.jpg](https://www.technopat.net/sosyal/eklenti/screenshot_2024-01-24-09-26-10-387_com-android-settings-edit-jpg.2094755/ "Screenshot_2024-01-24-09-26-10-387_com.android.settings-edit.jpg")

![Screenshot_2024-01-24-09-26-23-148_com.android.settings-edit.jpg](https://www.technopat.net/sosyal/eklenti/screenshot_2024-01-24-09-26-23-148_com-android-settings-edit-jpg.2094756/ "Screenshot_2024-01-24-09-26-23-148_com.android.settings-edit.jpg")

![Screenshot_2024-01-24-09-27-06-920_com.android.settings-edit.jpg](https://www.technopat.net/sosyal/eklenti/screenshot_2024-01-24-09-27-06-920_com-android-settings-edit-jpg.2094757/ "Screenshot_2024-01-24-09-27-06-920_com.android.settings-edit.jpg")


[Minimal adb and fastboot](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://xiaomitools.com/minimal-adb-and-fastboot-en/&ved=2ahUKEwj0tpGzs_WDAxWAR_EDHUb_ChEQFnoECBIQAQ&usg=AOvVaw1gjvLiFj04fp6m2__zwxQk) programını bilgisayara indiriyoruz.
Sonra telefinu bilgisayara bağlıyoruz.
Su komutları ADB satırlarına giriyoruz.

adb devices.
`adb shell "cmd package bg-dexopt-job"` . Komutunu girin.

Eğer Android 10 ve üzeri kullanıyorsanız işlem bitdiğinde success yazısı çıkacaktır. Android 7-9 sürümlerindeyse işlem bitince komut penceresinde yeni satıra gecilecektir. Oradan işlemin bitdiğini anlayabilirsiniz. Bu işlemi yeni ROM kurdukdan sonra veya romunuzu güncelledikden sonra (örnek haftalık ROM'lar kullanıyorsanız her hafta yeni güncellemeden sonra bu işlemi yapın) yapmanız önerilir. TWRP üzerinden Wipe/Cache ve Wipe/Dalvik yaptıkdan sonra da bu işlemi yapmanız önerilir. Uygulamalarınız güncellemeden sonra yavaş açılıyorsa, bu işlemi yapmanız cihaza iyi gelecektir.

Konu MIUI forumunda yazılıp burada görsel anlatımlar ile şahsım tarafından desteklenmiştir.

Kaynakça: https://miuiturkiye.net

https://sxi.is-a.dev/android-sistemi-optimize-etme/
Umarım işinize yarar.
