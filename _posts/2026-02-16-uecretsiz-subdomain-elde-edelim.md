---
layout: post
title: Ücretsiz subdomain elde edelim
description: ''
date: 2026-02-16 22:08:00 +03:00
categories:
  - genel
tags:
  - domain
  - is-a.dev
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

Merhabalar nasılsınız?
Malum artık teknoloji çağındayız ve bence bu çağda tüm üyelerinin bir blog sayfasi olmalı.
İmkanlar da geliştiği için masraflı bir yöntem değil github+vercel veya direkt github pages kullanılarak blog sayfamızı elde edebiliyoruz.
Yalan yok .github.io alan adına sahip bir site gerçekten gereksiz uzun gözüküyor.
Benim gözümü kanatıyor en azından.
Tam bu esnada imdadımıza “is-a.dev” yetişiyor.
Yalan yok bu alan adının da .github.io alan adından üstün bir yanı yok ama daha kısa en azından.
Ayrıca github dışında projeleriniz için de kullanabilirsiniz.
Peki nasıl “is-a.dev” alan adına sahip olabilirim?

Basit yöntem:
Discord sunucusuna 2 katılın , komutlar kanalına gidin ve çalıştırın /register . Bot size birkaç soru soracak ve ardından PR’nizi ve alan adınızı otomatik olarak oluşturacaktır. Bot ayrıca alan adının silinmesine ve düzenlenmesine de olanak tanır.

Öncelikle İs-a.dev adresine gidiyoruz 7 (Meraklısına)
Daha sonra Github reposuna gidiyoruz. 1
Daha sonra ise Bu bağlantıya tıklayarak projeyi forkluyoruz.
Daha sonra forkladığımız proje sayfasına giriyoruz.
Ben kendi adıma konuşuyorum /domains adresine gidiyoruz ve “kendi-adin.json” adlı bir dosya oluşturuyoruz.


`{`

` "owner": `

`{ "username": "sxi", "email": "ornek@sxi.tr" }, `

`"record": { "URL": "https://sxi.tr" } }`


Dosyasını yapıştırıyoruz fakat siz düzenleme yapacaksınız daha sonra pull request atıyoruz ve alan adı kaydıni bekliyoruz.
Bilgilendirme: Bu makale ilk olarak kişisel blogum üzerinde paylaşılmış olup daha sonra düzenlenerek btt üzerine yeniden paylaşılmıştır makale kendi dokümantasyondan yararlanılmıştır.
Dokümantasyon merak ediyorsanız:[Documentation for is-a.dev](https://www.is-a.dev/docs/)
