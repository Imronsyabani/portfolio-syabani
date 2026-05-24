# Portfolio Imron Syabani

Website portofolio profesional dengan React.js, menampilkan pengalaman sebagai developer.

## Fitur

- ✨ Animasi fade-in smooth saat scroll
- 🎨 Desain Dark Navy theme dengan aksen hijau, teal, dan orange
- 📱 Responsive design
- 🚀 Performa optimal dengan React + Vite
- 🔗 Social media links (Instagram & LinkedIn)

## Setup

1. Install dependencies:
```bash
npm install
```

2. **PENTING - Setup Gambar Profile:**
   
   Salin gambar profile Anda ke folder `public/` dengan nama `profile.png`
   
   ```bash
   # Dari Windows, salin file ke:
   # /opt/portfolio-syabani/public/profile.png
   ```

   **Rekomendasi untuk gambar profile:**
   - Crop gambar dari kepala hingga perut (portrait shot)
   - Pertahankan struktur kepala dari rambut hingga leher
   - Gunakan background yang bersih atau blur
   - **Saran pakaian:** Kemeja formal atau polo shirt dengan warna solid (putih, biru, atau abu-abu) akan terlihat lebih profesional
   - **Saran pose:** Posisi menghadap kamera dengan sedikit senyum, postur tegak
   - Resolusi minimal: 600x800 pixels
   - Format: PNG atau JPG

3. Jalankan development server:
```bash
npm run dev
```

4. Build untuk production:
```bash
npm run build
```

## Struktur Project

```
portfolio-syabani/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Section hero dengan profile
│   │   ├── Skills.jsx         # Section keahlian
│   │   └── Experience.jsx     # Section pengalaman & projects
│   ├── hooks/
│   │   └── useFadeIn.js       # Custom hook untuk animasi
│   ├── data/
│   │   └── projects.js        # Data project clients
│   ├── App.jsx
│   └── App.css
└── public/
    └── profile.png            # Gambar profile (HARUS DITAMBAHKAN)

```

## Customization

### Mengganti Logo Project Clients

Edit file `src/data/projects.js` dan ganti URL placeholder dengan logo asli:

```javascript
{
  name: "Nama Company",
  url: "https://...",
  logo: "URL_LOGO_ASLI" // Ganti dengan URL logo asli
}
```

### Mengubah Warna

Edit variabel CSS di `src/App.css`:

```css
:root {
  --bg-dark: #0a0e27;
  --bg-secondary: #1a1f3a;
  --accent-green: #22c55e;
  --accent-teal: #14b8a6;
  --accent-orange: #fb923c;
}
```

## Tech Stack

- React 18
- Vite
- CSS3 dengan Custom Properties
- Intersection Observer API untuk animasi

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Dibuat dengan ❤️ menggunakan React + Vite
