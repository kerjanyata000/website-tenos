# Website Tenos

Repositori situs [Tenos](https://tenos.id/) — AI enablement untuk individu dan organisasi, dari literasi lewat Digdeep Academy sampai sistem cerdas oleh Tenos Data Teknologi.

Stack: Next.js (App Router), React, TypeScript, dan Tailwind CSS.

## Menjalankan lokal

Butuh Node.js 20 atau lebih baru.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Di Windows PowerShell, salin env dengan:

```powershell
Copy-Item .env.example .env.local
```

## Skrip

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan |
| `npm run lint` | Pemeriksaan ESLint |
| `npm run typecheck` | Pemeriksaan TypeScript |
| `npm run build` | Build produksi |
| `npm start` | Menjalankan hasil build |

## Struktur

```
src/app/          layout, halaman, dan gaya global
src/components/   layout, section, dan UI homepage
src/content/      copy & data halaman
src/styles/       tokens, chrome, motion, homepage CSS
public/           aset statis (ikon, gambar, logo)
.env.example      variabel lingkungan yang aman untuk di-commit
```

Alias impor: `@/` mengarah ke `src/`.

Jangan commit `.env.local`, `node_modules`, atau folder `.next`. Ketiganya sudah masuk `.gitignore`.

## Produksi

Situs yang tayang: [https://tenos.id](https://tenos.id)

## Alur branch

| Branch | Peran | Siapa yang boleh push |
| --- | --- | --- |
| `dev` | Staging | [@hanifabbads](https://github.com/hanifabbads) dan pemilik repo |
| `main` | Production | Hanya lewat pull request yang disetujui [@kerjanyata000](https://github.com/kerjanyata000) |

Hanif hanya bisa bekerja di `dev`. Dia tidak bisa membuat branch lain, dan tidak bisa push langsung ke `main`.

1. Kerja dan push di `dev`.
2. Buka pull request dari `dev` ke `main` saat staging siap naik ke production.
3. Pemilik repo menyetujui review, lalu merge. Push langsung ke `main` ditolak, termasuk force-push dan penghapusan branch.

Aturan ini ditegakkan oleh GitHub ruleset. Berkasnya ada di `.github/rulesets/`, dan pemilik kode ada di `.github/CODEOWNERS`.
