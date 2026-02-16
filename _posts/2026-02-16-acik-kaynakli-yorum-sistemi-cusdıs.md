---
layout: post
title: 'Açık kaynaklı yorum sistemi: CUSDİS'
description: ''
date: 2026-02-16 22:18:00 +03:00
categories:
  - cusdis
tags:
  - cusdis
  - blog
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

Hepinize merhaba arkadaşlar bugün sizlerle kendi blog sayfamda da kullanmış olduğum bir yorum sistemini tanıtacağım.
Disqus Hatırladığım kadarıyla açık kaynak değil ve yavaş çalışıyor.
Cusdis nedir?
Cusdis kullanıcıların oturum açmadan yorum yazabildikleri (ki benim için çok önemli çünkü ben eline sağlık yazmak istersem oturum acmam)
Bir yorum sistemidir.
Sitenize basit bir şekilde entegre edebilirsiniz.
[Cusdis Documentation 2](https://cusdis.com/doc) adresinde dokumentasyon bulunuyor.
Özellikler:
Webhook ekleyerek telegram botu ile mesaj gelince tetikleyebirsiniz.
Ücretsiz hesap ayda 100 gönderi.
Cusdis kendi sunucunuzda barındırılabilir vercel ile.

## [Disqus’a kıyasla](https://cusdis.com/doc#/?id=compared-to-disqus)

Cusdis, Disqus’a TAMAMEN bir alternatif olarak tasarlanmamıştır; küçük siteler (örneğin statik blogunuz) için minimal bir gömülü yorum aracı uygulamayı amaçlamaktadır.

Cusdis’in artıları ve eksileri şunlardır:

### [Artıları](https://cusdis.com/doc#/?id=pros)

- Cusdis açık kaynaklı ve kendi kendini barındırabilen bir uygulamadır, verileriniz size aittir.
- SDK hafiftir (\~5kb sıkıştırılmış)
- Cusdis yorumcunun oturum açmasını gerektirmez. Hiçbir şekilde çerez kullanmıyoruz.

### [Eksileri](https://cusdis.com/doc#/?id=cons)

- Cusdis erken geliştirme aşamasındadır
- Spam filtremiz olmadığı için varsayılan olarak onaylayana kadar görüntülenmeyen yorumları manuel olarak denetlemeniz gerekir.
- Disqus bir şirket, biz değiliz
