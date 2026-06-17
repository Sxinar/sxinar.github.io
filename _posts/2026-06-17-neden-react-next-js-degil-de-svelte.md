---
layout: post
title: Neden React/Next.js Değil de Svelte?
description: Web Geliştirmede Sanal DOM'a Veda ve Gerçek Hız
date: 2026-06-17 23:36:00 +03:00
categories:
  - İnceleme
  - Geliştirme Araçları
tags:
  - react
  - svelte
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---

# Neden React/Next.js Değil de Svelte?
## Modern Web Geliştirmede Sanal DOM'a Veda ve Gerçek Hız

Web geliştirme dünyası, yıllardır **"Daha fazla kütüphane, daha fazla karmaşıklık"** döngüsüne hapsolmuş durumda. React, piyasaya sürüldüğünde devrimsel bir adım atmıştı; ancak aradan geçen yıllar içerisinde, özellikle Next.js ile birlikte gelen "meta-framework" ağırlığı, geliştirici deneyimini (DX) ve kullanıcı deneyimini (UX) iyileştirmek yerine, teknik borçları (technical debt) derinleştirmeye başladı.

Bugün, `useMemo`, `useCallback`, `useEffect` cehenneminde kaybolmuş, uygulama boyutları megabaytları bulan ve çalışma anında (runtime) sürekli "fark hesaplayan" (diffing) bir yapı yerine; **Svelte** gibi derleme zamanında (build-time) işi bitiren, saf ve yüksek performanslı bir yaklaşıma geçişin zamanı geldi.

---

### 1. Sanal DOM (Virtual DOM) Paradoksu: Neden Hantal?

React ve onun üzerine kurulu tüm framework'lerin temelinde **Virtual DOM** yatar. Peki, Virtual DOM gerçekten gerekli mi?

* **React'in Yöntemi:** Bir state değiştiğinde, React tüm bileşen ağacını baştan oluşturur (render eder), bunu bir önceki "sanal" haliyle karşılaştırır (diffing) ve ancak o zaman gerçek DOM'u günceller.
* **Svelte'in Yöntemi:** Svelte, bir kütüphane değil, bir **derleyicidir (compiler)**. Uygulamanızdaki her bir DOM güncelleme noktasını derleme anında (kodunuzu yazdığınız sırada) analiz eder.

Svelte, "yazılım geliştirme süreci" ile "tarayıcıda çalışma süreci" arasındaki boşluğu ortadan kaldırır. React, tarayıcıda sizin yerinize "ne değişti?" diye sormak için devasa bir çalışma zamanı kütüphanesini indirtmek zorundayken; Svelte, tarayıcının doğrudan anlayacağı optimize edilmiş JavaScript'i önceden hazırlar.

---

### 2. Geliştirici Deneyimi: Hook'ların Esaretinden Kurtulmak

React geliştiricileri, `useEffect` bağımlılık dizileri (dependency arrays) içinde undefined hatalarıyla boğuşmaya veya `useCallback` ile "referans eşitliği" korumaya çalışırken saatlerini harcıyor. Svelte'te ise geliştirme süreci, web'in temel taşları olan HTML, CSS ve JS'e sadık kalır.

#### React ile Sayaç Yazmak:
```jsx
import { useState, useCallback } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // Gereksiz re-render'ı engellemek için callback sarmalaması
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <button onClick={increment}>{count}</button>;
}

```
#### Svelte ile Sayaç Yazmak:
```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>
  {count}
</button>

```
Svelte'te reaktivite, dilin kendisinin bir parçasıdır. Karmaşık hook yapıları yoktur, "boş bağımlılık dizisi" hatası yoktur. Sadece değişkeninizi güncelleyin; Svelte, o değişkenin nerede kullanıldığını derleme anında zaten biliyordur ve sadece ilgili DOM düğümünü cerrahi bir hassasiyetle günceller.
### 3. Bellek ve CPU Yönetimi: "Re-render" Çılgınlığına Son
React'te bir üst bileşendeki state değişikliği, tüm alt bileşen ağacının yeniden hesaplanmasına neden olabilir. Bunu engellemek için memo, useMemo gibi optimizasyon araçlarını kullanmak zorundasınız. Svelte'te ise **"re-render" diye bir kavram yoktur.**
Svelte uygulaması, bir state değişikliğini algıladığında tüm bileşeni tekrar çalıştırmaz. Derleyici, hangi DOM öğesinin hangi değişkene bağlı olduğunu çoktan haritalandırmıştır. Değişken değiştiğinde, sadece ilgili textContent veya attribute değeri doğrudan değiştirilir. Bu, özellikle düşük işlemci gücüne sahip mobil cihazlarda uygulamanızın performanslı çalışmasını sağlar.
### Karşılaştırmalı Analiz Tablosu
| Özellik | React / Next.js | Svelte / SvelteKit |
|---|---|---|
| **Mimari** | Runtime (Çalışma anında yorumlama) | Build-time (Derleme anında optimize) |
| **State Yönetimi** | Hook-tabanlı (useState, useEffect) | Doğrudan atama (let x = 1) |
| **DOM Güncelleme** | Diffing (Virtual DOM - Ağır) | Cerrahi (Direct DOM - Çok Hızlı) |
| **Öğrenme Eğrisi** | Yüksek (Ekosistem karmaşıklığı) | Çok Düşük (HTML/JS Temelleri) |
| **Paket Boyutu** | Büyük (Kütüphane yükü var) | Çok Küçük (Sadece sizin kodunuz) |
| **CSS Yönetimi** | Karmaşık (Styled-components, vb.) | Yerleşik Scoped CSS |
### Neden Geçmelisiniz? (Son Söz)
React, özellikle devasa kurumsal ekipler ve geniş iş pazarı nedeniyle hala bir "standart" olabilir. Ancak, **teknolojiyi sadece popüler olduğu için değil, verimli olduğu için seçen bir geliştiriciyseniz**, Svelte size şu üç büyük avantajı sunar:
 * **Daha az kod, daha az hata:** Yazdığınız her satır kodun bir sorumluluğu vardır. "Boilerplate" kodlardan arınmış bir yapı.
 * **Maksimum performans:** Son kullanıcıya, gereksiz JavaScript kütüphaneleri yükletmeden, sadece saf performansı ulaştırırsınız.
 * **Keyifli bir süreç:** "Framework ile mi savaşıyorum, yoksa uygulama mı geliştiriyorum?" sorusunu sormadan, tamamen ürününüze odaklandığınız bir geliştirme deneyimi.
Web'in geleceği, tarayıcıda çalışan ağır kütüphanelerde değil, derleme anında akıllanan ve tarayıcıya sadece saf, optimize edilmiş kod gönderen araçlardadır. Svelte, bu geleceğin öncüsüdür. Şimdi kendinize ve kullanıcılarınıza bir iyilik yapın; npx sv create my-app komutuyla geleceğe adım atın.
> *Bu içerik, React ekosistemindeki "teknik borçlanma" ve "runtime hantallığına" karşı bir duruş manifestosudur. Siz de projelerinizde Svelte kullanarak disk alanından, CPU'dan ve en önemlisi geliştirici vaktinizden tasarruf edebilirsiniz.*
> 
**Svelte ile yazılmış ilk projenizde yaşadığınız "kodun kısalması ve hızlanması" deneyimini yorumlarda paylaşmaya ne dersiniz?**
```

```
