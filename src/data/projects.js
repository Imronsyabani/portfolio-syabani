const createPartnerImage = (url, name) => {
  const match = url.match(/-(\d+)$|\/(\d+)$/)
  const partnerId = match?.[1] || match?.[2]

  if (!partnerId) {
    return null
  }

  return `https://alphasoft.co.id/web/image/res.partner/${partnerId}/avatar_1920/${encodeURIComponent(name)}`
}

const createProject = (name, url) => ({
  name,
  url,
  image: createPartnerImage(url, name),
})

export const projects = [
  createProject('Apartemen Summit Kelapa Gading', 'https://alphasoft.co.id/en/customers/apartemen-summit-kelapa-gading-2026'),
  createProject('Fitrah Tunas Bangsa (FINSA)', 'https://alphasoft.co.id/en/customers/fitrah-tunas-bangsa-finsa-699'),
  createProject('LPEM FEB UI', 'https://alphasoft.co.id/en/customers/lpem-feb-ui-498'),
  createProject('Perumda Dharma Jaya', 'https://alphasoft.co.id/en/customers/perumda-dharma-jaya-527'),
  createProject('PT Adireksa Buana Sakti', 'https://alphasoft.co.id/en/customers/pt-adireksa-buana-sakti-621'),
  createProject('PT Alex Villas Group', 'https://alphasoft.co.id/en/customers/pt-alex-villas-group-652'),
  createProject('PT Artha Telekomindo', 'https://alphasoft.co.id/en/customers/pt-artha-telekomindo-545'),
  createProject('PT Bintang Putera Autoparts', 'https://alphasoft.co.id/en/customers/pt-bintang-putera-autoparts-689'),
  createProject('PT Circlecom Nusantara Indonesia', 'https://alphasoft.co.id/en/customers/pt-circlecom-nusantara-indonesia-505'),
  createProject('PT Furnimart Mebelindo Sakti', 'https://alphasoft.co.id/en/customers/pt-furnimart-mebelindo-sakti-507'),
  createProject('PT Gunung Bengawan Makmur', 'https://alphasoft.co.id/en/customers/pt-gunung-bengawan-makmur-510'),
  createProject('PT Hema Medhajaya', 'https://alphasoft.co.id/en/customers/pt-hema-medhajaya-2018'),
  createProject('PT Jala Lintas Media', 'https://alphasoft.co.id/en/customers/pt-jala-lintas-media-620'),
  createProject('PT Juara Raga Adidaya', 'https://alphasoft.co.id/en/customers/pt-juara-raga-adidaya-573'),
  createProject('PT Makmur Properti Management', 'https://alphasoft.co.id/en/customers/pt-makmur-properti-management-540'),
  createProject('PT Maxxima Hersam Solusi', 'https://alphasoft.co.id/en/customers/pt-maxxima-hersam-solusi-700'),
  createProject('PT Nindya Karya Divisi Properti', 'https://alphasoft.co.id/customers/pt-nindya-karya-divisi-properti-538'),
  createProject('PT Nusatama Berkah Tbk', 'https://alphasoft.co.id/customers/pt-nusatama-berkah-tbk-535'),
  createProject('PT Olympic Furniture Gemilang', 'https://alphasoft.co.id/customers/pt-olympic-furniture-gemilang-515'),
  createProject('PT Omega Media Global', 'https://alphasoft.co.id/customers/pt-omega-media-global-2021'),
  createProject('PT Ota Indonesia', 'https://alphasoft.co.id/customers/pt-ota-indonesia-574'),
  createProject('PT Prestasi Piranti Informasi', 'https://alphasoft.co.id/customers/pt-prestasi-piranti-informasi-518'),
  createProject('PT Rapid Technologies', 'https://alphasoft.co.id/customers/pt-rapid-technologies-690'),
  createProject('PT Roche Indonesia', 'https://alphasoft.co.id/customers/pt-roche-indonesia-520'),
  createProject('PT Sarana Adikarya Multi Sinergi', 'https://alphasoft.co.id/customers/pt-sarana-adikarya-multi-sinergi-521'),
  createProject('PT Sarana Karyaputera Mandiri', 'https://alphasoft.co.id/customers/pt-sarana-karyaputera-mandiri-522'),
  createProject('PT Tunas Ridean Tbk', 'https://alphasoft.co.id/customers/pt-tunas-ridean-tbk-692'),
  createProject('Subeans', 'https://alphasoft.co.id/customers/subeans-624'),
  createProject('Sumber Urip Farm', 'https://alphasoft.co.id/customers/sumber-urip-farm-536'),
]
