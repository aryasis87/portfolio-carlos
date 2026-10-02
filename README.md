# Carlos Mendoza — Product Designer & Developer

Portfolio template for Carlos Mendoza, a fictional product designer and full-stack developer: dark case studies that link to six live demo sites (a property marketplace, booking tools, and landing pages), plus notes on prices, schedules, and availability.

**Demo live:** https://portfolio-carlos-eosin.vercel.app

![Tangkapan layar](public/og.jpg)

> Template portfolio dengan persona fiktif. Semua proyek di dalamnya adalah demo live dari koleksi yang sama; tidak ada klien, testimoni, atau logo merek sungguhan. Formulir kontak hanya demo dan mengatakannya.

## Konsep

Persona fiktif Carlos, full-stack developer. Tampilan gelap bergaya dasbor dengan aksen hijau, kartu layanan, dan jejak kerja berurutan; tersedia juga mode terang.

## Isi

- **6 studi kasus** (`/work/[slug]`): tantangan, yang dikerjakan, hasil, dan tautan ke situs live-nya.
- **3 artikel** (`/blog/[slug]`) tentang keputusan desain di proyek-proyek tersebut.
- Angka yang tampil (jumlah proyek, layanan, artikel) dihitung dari isi situs; lama berkarya adalah bagian dari persona fiktif. Tidak ada klaim jumlah klien atau tingkat kepuasan.
- Halaman 404 bergaya sendiri, judul halaman berpola `Halaman — Carlos Mendoza`, dan sitemap memuat setiap studi kasus dan artikel.

| Studi kasus | Demo live |
| --- | --- |
| Propertia | https://properti-propertia.vercel.app |
| Gelanggang Petang | https://reservasi-futsal.vercel.app |
| Tanjung Lengkung | https://reservasi-hotel-kappa.vercel.app |
| Bioskop Kelir | https://reservasi-bioskop.vercel.app |
| Nimbus | https://landing-nimbus.vercel.app |
| SkyWings | https://landing-skywings.vercel.app |

## Halaman

`/` · `/about` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/contact` · `/privacy` · `/terms`

## Gambar & kredit

- `public/images/work/*.webp` — tangkapan layar demo live di tabel atas (karya koleksi ini sendiri).
- `public/images/hero.webp` — "Office Work" oleh Nao Triponez, [StockSnap](https://stocksnap.io/photo/office-work-Q6PIRY9O7M), lisensi CC0.
- `public/images/about.webp` — "Office Work" oleh energepic.com, [StockSnap](https://stocksnap.io/photo/office-work-42H3JH8QI5), lisensi CC0.

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, AOS (animasi gulir), Lucide (ikon), next-themes (mode gelap/terang)
- Font: Inter, Sora (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD (WebSite), sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 7 template portfolio personal di [PortalPorto](https://portal-porto-neon.vercel.app). Dibuat oleh [PintuWeb](https://www.pintuweb.com), jasa pembuatan website.
