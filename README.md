# Portfolio Imron Syabani

Website portofolio profesional dengan React.js, menampilkan pengalaman sebagai Odoo Developer.

## Fitur

- ✨ Animasi fade-in smooth saat scroll
- 🎨 Desain profesional dengan tema hitam & coklat
- 📱 Responsive design
- 🚀 Performa optimal dengan React + Vite

## Setup

1. Install dependencies:
```bash
npm install
```

2. **PENTING - Setup Gambar Profile:**
   
   Salin gambar profile Anda ke folder `public/` dengan nama `profile.jpg`
   
   ```bash
   # Dari Windows, salin file:
   # C:\Users\syabani\Documents\WhatsApp Image 2026-05-09 at 13.37.46.jpeg
   # 
   # Ke folder:
   # /opt/portfolio-imron/public/profile.jpg
   ```

   **Rekomendasi untuk gambar profile:**
   - Crop gambar dari kepala hingga perut (portrait shot)
   - Pertahankan struktur kepala dari rambut hingga leher
   - Gunakan background yang bersih atau blur
   - **Saran pakaian:** Kemeja formal atau polo shirt dengan warna solid (putih, biru, atau abu-abu) akan terlihat lebih profesional
   - **Saran pose:** Posisi menghadap kamera dengan sedikit senyum, postur tegak
   - Resolusi minimal: 600x800 pixels
   - Format: JPG atau PNG

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
portfolio-imron/
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
    └── profile.jpg            # Gambar profile (HARUS DITAMBAHKAN)

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
  --bg-dark: #0a0a0a;
  --bg-secondary: #1a1410;
  --brown-primary: #8b6f47;
  --brown-light: #a68a64;
  --brown-dark: #6b5536;
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
