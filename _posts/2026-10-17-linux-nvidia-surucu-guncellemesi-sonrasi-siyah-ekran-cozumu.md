---
layout: post
title: Linux Nvidia Sürücü Güncellemesi Sonrası Siyah Ekran Hatası ve Çözümü
description: Linux Nvidia Sürücü Güncellemesi Sonrası Siyah Ekran Hatası ve Çözümü
date: 2026-10-17 21:44:00 +03:00
categories:
  - Linux
  - Sorun Çözüm Rehberleri
tags:
  - Linux
  - GNU
image: null
settings:
  published: true
  pin: false
  math: false
  toc: true
---


# Linux Nvidia Surucu Guncellemesi Sonrasi Siyah Ekran Hatasi ve Kesin Cozumu

Linux islem sistemlerinde gerceklestirilen ekran karti surucusu guncellemeleri, ozellikle tescilli (proprietary) Nvidia suruculerinde bazen Xorg veya Wayland sunucusunun cokmesine neden olur. Bu durum, grafik arayuzun tamamen devre disi kalmasina ve bilgisayarin acilista siyah ekranda takilmasina yol acar. Masustu ortamina erisilemedigi icin kullanicilar acisindan kritik bir kriz ani olusturan bu sorun, komut satiri araciligiyla kalici olarak cozulebilir.

Bu kapsamli rehber, masustu arayuzune ulasamayan kullanicilarin TTY konsolu uzerinden surucu cakismalarini nasil giderecegini, sistemi kararli duruma nasil getirecegini ve resmi Nvidia suruculerini hatasiz bir sekilde nasil yeniden kuracagini adim adim aciklamaktadir.

---

## Icindekiler
- [Sorunun Kaynagi ve Belirtileri](#sorunun-kaynagi-ve-belirtileri)
- [Gerekli On Hazirliklar ve Kurtarma Yontemleri](#gerekli-on-hazirliklar-ve-kurtarma-yontemleri)
- [Adim Adim Cozum Rehberi](#adim-adim-cozum-rehberi)
  - [Adim 1: TTY Konsoluna Erisim Saglama](#adim-1-tty-konsoluna-erisim-saglama)
  - [Adim 2: Bozuk Nvidia Suruculerini Tamamen Kaldirma](#adim-2-bozuk-nvidia-suruculerini-tamamen-kaldirma)
  - [Adim 3: Sistemi Yeniden Baslatma ve Acik Kaynak Surucuye Donus](#adim-3-sistemi-yeniden-baslatma-ve-acik-kaynak-surucuye-donus)
  - [Adim 4: Kararli Resmi Nvidia Surucusunu Yeniden Kurma](#adim-4-kararli-resmi-nvidia-surucusunu-yeniden-kurma)
- [Alternatif Durumlar ve Ek Ipuclari](#alternatif-durumlar-ve-ek-ipuclari)
- [Sik Sorulan Sorular (SSS)](#sik-sorulan-sorular-sss)

---

## Sorunun Kaynagi ve Belirtileri

Sistem acilisinda imlecin bulunmadigi tamamen siyah bir ekranda kaliyorsaniz, ekranda yalnizca sol ust kosede yanip sonen bir metin imleci varsa ya da oturum acma ekrani (Display Manager) donguye girip surekli basa sariyorsa, grafik alt sisteminde bir uyumsuzluk yasanmaktadir.

Bu durum genellikle sunu sebeplerden kaynaklanir:
* Yeni cekirdek (kernel) surumu ile Nvidia modullerinin (DKMS) derlenememesi.
* Paket yoneticisi guncellemeleri sirasinda bagimliliklarin eksik kalmasi.
* Wayland veya X11 protokolleri ile yeni surucu surumu arasinda olusan cakismalar.

---

## Gerekli On Hazirliklar ve Kurtarma Yontemleri

Grafik arayuz calismadigi icin fare hareketleri veya standart grafiksel kisayollar islevsizdir. Ancak Linux cekirdegi arka planda sanal konsollari calistirmaya devam eder. Bu asamada klavye girdileri dogrudan cekirdege ulasir ve sistemi komut satiri uzerinden yonetmenize olanak tanir.

---

## Adim Adim Cozum Rehberi

### Adim 1: TTY Konsoluna Erisim Saglama
Bilgisayariniz siyah ekrandayken grafik arayuzden tamamen bagimsiz, metin tabanli bir terminal oturumu acmak icin klavyenizden su tus kombinasyonunu tuslayin:

```text
Ctrl + Alt + F3

```

*(Not: F3 tusu sisteminizde farkli bir sanal terminale atanmissa F4, F5 veya F6 tus kombinasyonlarini da deneyebilirsiniz.)*

Ekran siyahliktan cikip bir yazi ekranina donustugunde sistem sizden kullanici oturum bilgilerini isteyecektir:

1. **login:** kismina sistem kullanici adinizi yazip Enter tusuna basin.
2. **Password:** kismina sifrenizi girin.

> **Onemli Guvenlik Notu:** Linux sistemlerde sifre girerken guvenlik sebebiyle ekranda hicbir karakter, yildiz veya nokta belirmez. Bu durum tamamen normaldir. Sifrenizi eksiksiz yazip dogrudan **Enter** tusuna basin.

---

### Adim 2: Bozuk Nvidia Suruculerini Tamamen Kaldirma

Sistem oturumunu basariyla actiktan sonra, guncellemeyle bozulmus veya eksik derlenmis olan eski Nvidia paketlerini sistemden tamamen temizlemeniz gerekir. Hatali kalintilarin temizlenmesi, temiz bir kurulum icin zorunludur.

Kullandiginiz Linux dagitimina uygun komut grubunu calistirin:

* **Ubuntu, Linux Mint ve Debian Tabanli Dagitimlar Icin:**
```bash
sudo apt-get purge "*nvidia*"
sudo apt autoremove --purge

```


* **Fedora ve RHEL Tabanli Dagitimlar Icin:**
```bash
sudo dnf remove "*nvidia*"

```


* **Arch Linux ve Manjaro Tabanli Dagitimlar Icin:**
```bash
sudo pacman -Rns $(pacman -Qq | grep nvidia)

```



---

### Adim 3: Sistemi Yeniden Baslatma ve Acik Kaynak Surucuye Donus

Surucu paketleri tamamen kaldirildiktan sonra, grafik alt sisteminin varsayilan ve kararli olan acik kaynak kodlu `nouveau` surucusune geri donmesini saglamak icin sistemi yeniden baslatin:

```bash
sudo reboot

```

Yeniden baslatma isleminin ardindan sisteminiz normal acilis rutinine donecek ve grafik masustu arayuzune (GNOME, KDE, XFCE vb.) sorunsuz bir sekilde erisebileceksiniz.

---

### Adim 4: Kararli Resmi Nvidia Surucusunu Yeniden Kurma

Masustu ortamina ulastiktan sonra terminal uygulamasini acin ve guncel, kararli resmi tescilli Nvidia surucusunu yeniden sisteminize entegre edin:

* **Ubuntu ve Linux Mint Icin:**
```bash
sudo ubuntu-drivers install
sudo reboot

```


* **Fedora Icin:**
```bash
sudo dnf install akmod-nvidia
sudo reboot

```


* **Arch Linux Icin:**
```bash
sudo pacman -S nvidia nvidia-utils nvidia-settings
sudo reboot

```



Kurulum tamamlandiktan sonra bilgisaturanizi son bir kez yeniden baslattiginizda sisteminiz Nvidia suruculeriyle sorunsuz bir sekilde calismaya devam edecektir.

---

## Alternatif Durumlar ve Ek Ipuclari

* **Guvenlik Mod (Recovery Mode) Kullanimi:** Eger standart yontemlerle TTY ekranina erisemiyorsaniz, bilgisayari yeniden baslatip onyukleme sirasinda acilan **Grub Bootloader** menusunden **Advanced Options for Linux** secenegine girerek **Recovery Mode** satirini secebilir ve buradan **Root** komut satirina gecis yapabilirsiniz.
* **Nouveau Cakisma Kontrolu:** Bazi ozel durumlarda acik kaynakli `nouveau` surucusu arkada planda calismaya devam ederek tescilli surucunun yuklenmesini engelleyebilir. Bu gibi senaryolarda `/etc/modprobe.d/blacklist.conf` dosyasina `blacklist nouveau` kuralinin ekli oldugundan emin olunmalidir.

---

## Sik Sorulan Sorular (SSS)

### TTY ekraninda sifremi yazarken neden hicbir sey gorunmuyor?

Linux terminal guvenligi geregi sifre karakterlerini (yildiz veya gizleme simgesi dahi olsa) ekrana yansitmaz. Sifrenizi klavyeden yazip dogrudan Enter tusuna basmaniz yeterlidir, sistem sifrenizi arkada planda kabul edecektir.

### Suruculeri kaldirdiktan sonra masustu acilmazsa ne yapmaliyim?

Eger temizlik sonrasinda masustu gelmiyorsa, ekran kartinizin modeline uygun en kararli surucu surumunu ureticinin resmi web sitesinden veya paket yoneticinizin eski kararli havuzlarindan manuel olarak secmeniz gerekebilir.

### Bu sorun her guncellemede tekrarlar mi?

Genellikle cekirdek guncellemeleri ile DKMS modullerinin es zamanli guncellenememesinden kaynaklanir. Duzenli sistem guncellemelerinde paket bagimliliklarinin eksiksiz tamamlandigindan emin olmak bu sorunun tekrarlanma riskini en aza indirir.

```

```
