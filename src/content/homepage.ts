import type { Lang } from "@/content/types";

/** Shared hero display headline — stays English in both languages. */
export const heroDisplay = {
  line1: "Empowering People",
  line2Before: "& Organizations",
  line2After: "With AI",
} as const;

const en = {
  nav: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
    contactCta: "Contact Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    lead: [
      "Empowering businesses through intelligent AI solutions and shaping the future of learning with ",
      "Digdeep Academy",
      ".",
    ] as [string, string, string],
    primaryCta: { label: "Let's Talk", href: "#ai" },
    secondaryCta: { label: "Explore Tenos", href: "#academy" },
    clientsNote:
      "Simulated placeholder marks (Logoipsum) — not actual Tenos clients.",
  },
  why: {
    eyebrow: "Why choose Tenos",
    heading: "Focused on AI, built around you.",
    reasons: [
      {
        n: "01",
        title: "Literacy First",
        description:
          "We help people understand AI and data clearly, then apply them meaningfully through programs at Digdeep Academy.",
        side: "left" as const,
        icon: "learn" as const,
      },
      {
        n: "02",
        title: "Applied Workflows",
        description:
          "We turn AI knowledge into everyday execution, simplifying work, reducing friction, and accelerating results.",
        side: "left" as const,
        icon: "target" as const,
      },
      {
        n: "03",
        title: "Systems That Scale",
        description:
          "When needed, we design and build AI-powered systems tailored to organizational processes and goals.",
        side: "left" as const,
        icon: "arrow" as const,
      },
    ],
  },
  journey: {
    id: "journeys",
    heading: "Explore Our Products & Services",
    lead: "Discover AI education through Digdeep Academy and tailored AI consulting for intelligent business solutions.",
    items: [
      {
        num: "01",
        title: "Digdeep Academy",
        subtitle: "AI Education & Data Learning",
        description:
          "Structured programs that help individuals and teams build practical skills in AI, data, and analytics.",
        cta: { label: "Explore Academy", href: "#academy" },
      },
      {
        num: "02",
        title: "AI Systems Consulting",
        subtitle: "IT Consulting & Intelligent Systems",
        description:
          "We work with your team to understand needs, build systems, and integrate AI into how your business runs.",
        cta: { label: "Discuss Your Needs", href: "#ai" },
      },
    ],
  },
  academy: {
    id: "academy",
    headingBefore: "Learn AI and Excel with ",
    headingBrand: "Digdeep Academy.",
    lead: [
      "A learning platform by ",
      "Tenos, Digdeep Academy",
      " empowers individuals and teams to build practical AI and data skills through structured, hands-on learning programs.",
    ] as [string, string, string],
    ctaLabel: "Visit Digdeep Academy",
    urlPending: "[Official Academy URL to be provided]",
    photosLabel: "Digdeep Academy photos",
    photoOf: (n: number, total: number) => `Photo ${n} of ${total}`,
    features: [
      {
        title: "B2B Corporate Training",
        description:
          "In-house or online training for company teams, focused on Macro & VBA Excel, AI, analytics, and work automation. Curriculum tailored to your industry and skill gaps.",
        icon: "book" as const,
      },
      {
        title: "Consulting & Problem Solving",
        description:
          "Need solutions, not just classes? We help diagnose bottlenecks, design Excel/VBA automation, build reporting flows, and apply AI to operational company cases.",
        icon: "user" as const,
      },
      {
        title: "Custom Curriculum & Mentoring",
        description:
          "Hybrid program: skill-gap assessment, custom syllabus, post-training mentoring, and knowledge transfer so results stay alive in daily operations.",
        icon: "layers" as const,
      },
    ],
    slides: [
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-1.png",
        alt: "Digdeep Academy online training session",
      },
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-2.png",
        alt: "Participants learning AI tools in Digdeep Academy online class",
      },
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-3.png",
        alt: "Digdeep Academy offline workshop with participants",
      },
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-4.png",
        alt: "Hands-on Digdeep Academy offline training session",
      },
    ],
  },
  consulting: {
    id: "ai",
    eyebrow: "AI Systems Consulting",
    heading: "We build with you, not just for you.",
    lead: "From the first conversation to long-term system care, Tenos partners with your team across the full technology lifecycle.",
    ctaLabel: "Discuss Your Needs",
    whatsappHint: "Opens WhatsApp",
    processSteps: "Process steps",
    stepLabel: (n: number) => `Step ${n}`,
    stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
    numberPending: "[number to be provided]",
    opensNewTab: "(opens in a new tab)",
    steps: [
      {
        n: "01",
        title: "Understanding technology needs",
        description:
          "We start by listening, mapping your processes, data, and goals to find where technology creates real value.",
      },
      {
        n: "02",
        title: "System development",
        description:
          "We design and build reliable systems tailored to how your team actually works.",
      },
      {
        n: "03",
        title: "AI integration into existing systems",
        description:
          "We bring AI capabilities into the tools you already use, without rebuilding everything.",
      },
      {
        n: "04",
        title: "Implementation",
        description:
          "We roll out solutions with your team, handling training, migration, and change management.",
      },
      {
        n: "05",
        title: "System management",
        description:
          "We keep systems healthy after launch with monitoring, maintenance, and continuous improvement.",
      },
    ],
  },
  work: {
    id: "work",
    eyebrow: "Selected work",
    heading: "Work that speaks for itself.",
    lead: "A selection of projects across industries. Examples below are illustrative concepts, not verified client case studies.",
    filters: [
      { id: "all" as const, label: "All" },
      { id: "retail" as const, label: "Retail" },
      { id: "finance" as const, label: "Finance" },
      { id: "education" as const, label: "Education" },
    ],
    filterLabel: "Filter projects",
    projects: [
      {
        id: "retail",
        category: "Retail",
        title: "Demand forecasting dashboard",
        description:
          "A forecasting model and dashboard helping a retailer plan inventory weekly.",
        illustrative: true,
      },
      {
        id: "finance",
        category: "Finance",
        title: "Document intelligence pipeline",
        description:
          "Automated extraction and review of financial documents with AI.",
        illustrative: true,
      },
      {
        id: "education",
        category: "Education",
        title: "Learning analytics platform",
        description:
          "Tracking learner progress across programs with actionable insights.",
        illustrative: true,
      },
    ],
    ctaPrompt: "Have a similar challenge?",
    ctaLabel: "Discuss Your Needs",
    ctaHref: "#contact",
    illustrative: "Illustrative concept",
    viewProject: "View project",
    viewProjectPending: "Case study link to be provided",
  },
  faq: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Got a Question? We're Here to Help.",
    lead: "Find answers to common questions about our AI learning programs and consulting services. Still curious? We'd be happy to help.",
    items: [
      {
        id: "faq-01",
        question:
          "What is the difference between Digdeep Academy and AI Systems Consulting?",
        answer:
          "Digdeep Academy focuses on AI and data education, helping individuals and teams develop practical knowledge and skills. AI Systems Consulting helps businesses identify their needs, develop tailored AI solutions, and implement intelligent systems.",
      },
      {
        id: "faq-02",
        question: "Who can join Digdeep Academy?",
        answer:
          "Digdeep Academy is designed for individuals and teams who want to develop their knowledge and skills in AI, data, and analytics. Explore the available learning programs to find what suits your needs.",
      },
      {
        id: "faq-03",
        question: "What kind of AI solutions does the consulting service provide?",
        answer:
          "The consulting service focuses on understanding your business needs and developing AI-powered systems tailored to your requirements. This may include system development, AI integration, and implementation.",
      },
      {
        id: "faq-04",
        question: "How do I get started with AI Systems Consulting?",
        answer:
          "You can start by contacting our team through WhatsApp. Share your business challenges and requirements, and our team can discuss potential solutions with you.",
      },
      {
        id: "faq-05",
        question: "Do I need technical knowledge to work with TENOS?",
        answer:
          "Not necessarily. Whether you want to learn AI through Digdeep Academy or explore AI solutions for your business, you can start by discussing your goals and needs with us.",
      },
    ],
  },
  finalCta: {
    id: "contact",
    eyebrow: "Let's work together",
    heading: "Ready to bring AI into your business?",
    lead: "Tell us about your operations and goals. We will help you see where AI can fit.",
    academyCta: "Visit Digdeep Academy",
    contactCta: "Contact Us",
  },
  footer: {
    blurb:
      "AI systems consulting for businesses, and AI learning through Digdeep Academy.",
    pages: "Pages",
    ourFocus: "Our Focus",
    contact: "Contact",
    home: "Home",
    about: "About Us",
    contactLink: "Contact",
    consulting: "AI Systems Consulting",
    academy: "Digdeep Academy",
    academyPending: "[Official Academy URL to be provided]",
    whatsapp: "WhatsApp",
    chatWhatsapp: "Chat on WhatsApp",
    email: "Email",
    office: "Office",
    phoneDisplay: "+62 84x xxxx xxxx",
    emailDisplay: "emailexample@gmail.com",
    addressDisplay: "Jl. Bango Raya No.31 B, Pd. Labu, Cilandak, Jakarta Selatan 12450",
    numberPending: "[number to be provided]",
    addressPending: "[address to be provided]",
    legalPending: "[Legal links to be provided]",
    rightsReserved: "All rights reserved.",
    opensNewTab: "(opens in a new tab)",
  },
  skip: "Skip to main content",
};

const id: typeof en = {
  nav: {
    home: "Beranda",
    about: "Tentang Kami",
    contact: "Kontak",
    contactCta: "Hubungi Kami",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
  },
  hero: {
    lead: [
      "Memberdayakan bisnis melalui solusi AI yang cerdas dan membentuk masa depan pembelajaran bersama ",
      "Digdeep Academy",
      ".",
    ] as [string, string, string],
    primaryCta: { label: "Mari Bicara", href: "#ai" },
    secondaryCta: { label: "Jelajahi Tenos", href: "#academy" },
    clientsNote:
      "Logo simulasi (Logoipsum) — bukan klien Tenos yang sebenarnya.",
  },
  why: {
    eyebrow: "Mengapa memilih Tenos",
    heading: "Berfokus pada AI, dibangun untuk Anda.",
    reasons: [
      {
        n: "01",
        title: "Literasi Lebih Dulu",
        description:
          "Kami membantu orang memahami AI dan data dengan jelas, lalu menerapkannya secara bermakna melalui program di Digdeep Academy.",
        side: "left" as const,
        icon: "learn" as const,
      },
      {
        n: "02",
        title: "Alur Kerja Terapan",
        description:
          "Kami mengubah pengetahuan AI menjadi eksekusi sehari-hari: menyederhanakan pekerjaan, mengurangi hambatan, dan mempercepat hasil.",
        side: "left" as const,
        icon: "target" as const,
      },
      {
        n: "03",
        title: "Sistem yang Bertumbuh",
        description:
          "Saat dibutuhkan, kami merancang dan membangun sistem berbasis AI yang disesuaikan dengan proses dan tujuan organisasi.",
        side: "left" as const,
        icon: "arrow" as const,
      },
    ],
  },
  journey: {
    id: "journeys",
    heading: "Jelajahi Produk & Layanan Kami",
    lead: "Temukan edukasi AI melalui Digdeep Academy dan konsultasi AI yang disesuaikan untuk solusi bisnis yang cerdas.",
    items: [
      {
        num: "01",
        title: "Digdeep Academy",
        subtitle: "Edukasi AI & Pembelajaran Data",
        description:
          "Program terstruktur yang membantu individu dan tim membangun keterampilan praktis di AI, data, dan analitik.",
        cta: { label: "Jelajahi Academy", href: "#academy" },
      },
      {
        num: "02",
        title: "AI Systems Consulting",
        subtitle: "Konsultasi IT & Sistem Cerdas",
        description:
          "Kami bekerja bersama tim Anda untuk memahami kebutuhan, membangun sistem, dan mengintegrasikan AI ke operasional bisnis.",
        cta: { label: "Diskusikan Kebutuhan Anda", href: "#ai" },
      },
    ],
  },
  academy: {
    id: "academy",
    headingBefore: "Belajar AI dan Excel bersama ",
    headingBrand: "Digdeep Academy.",
    lead: [
      "Platform pembelajaran dari ",
      "Tenos, Digdeep Academy",
      " memberdayakan individu dan tim untuk membangun keterampilan AI dan data praktis melalui program belajar yang terstruktur dan hands-on.",
    ] as [string, string, string],
    ctaLabel: "Kunjungi Digdeep Academy",
    urlPending: "[URL resmi Academy akan disediakan]",
    photosLabel: "Foto Digdeep Academy",
    photoOf: (n: number, total: number) => `Foto ${n} dari ${total}`,
    features: [
      {
        title: "B2B Corporate Training",
        description:
          "Pelatihan in-house atau online untuk tim perusahaan, fokus Macro & VBA Excel, AI, analytics, dan otomasi kerja. Kurikulum disesuaikan industri dan skill gap Anda.",
        icon: "book" as const,
      },
      {
        title: "Konsultasi & Problem Solving",
        description:
          "Butuh solusi, bukan sekadar kelas? Kami bantu diagnosis bottleneck, rancang otomasi Excel/VBA, bangun alur laporan, hingga penerapan AI untuk kasus operasional perusahaan.",
        icon: "user" as const,
      },
      {
        title: "Custom Curriculum & Mentoring",
        description:
          "Program hybrid: asesmen skill gap, silabus kustom, mentoring pasca-training, dan transfer pengetahuan agar hasil tetap hidup di operasional harian.",
        icon: "layers" as const,
      },
    ],
    slides: [
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-1.png",
        alt: "Sesi pelatihan online Digdeep Academy",
      },
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-2.png",
        alt: "Peserta belajar tools AI di kelas online Digdeep Academy",
      },
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-3.png",
        alt: "Workshop offline Digdeep Academy bersama peserta",
      },
      {
        type: "image" as const,
        src: "/images/academy/academy-photo-4.png",
        alt: "Sesi pelatihan hands-on Digdeep Academy secara offline",
      },
    ],
  },
  consulting: {
    id: "ai",
    eyebrow: "AI Systems Consulting",
    heading: "Kami membangun bersama Anda, bukan hanya untuk Anda.",
    lead: "Dari percakapan pertama hingga perawatan sistem jangka panjang, Tenos bermitra dengan tim Anda di seluruh siklus teknologi.",
    ctaLabel: "Diskusikan Kebutuhan Anda",
    whatsappHint: "Membuka WhatsApp",
    processSteps: "Langkah proses",
    stepLabel: (n: number) => `Langkah ${n}`,
    stepOf: (n: number, total: number) => `Langkah ${n} dari ${total}`,
    numberPending: "[nomor akan disediakan]",
    opensNewTab: "(membuka tab baru)",
    steps: [
      {
        n: "01",
        title: "Memahami kebutuhan teknologi",
        description:
          "Kami mulai dengan mendengarkan, memetakan proses, data, dan tujuan Anda untuk menemukan di mana teknologi menciptakan nilai nyata.",
      },
      {
        n: "02",
        title: "Pengembangan sistem",
        description:
          "Kami merancang dan membangun sistem andal yang disesuaikan dengan cara kerja tim Anda.",
      },
      {
        n: "03",
        title: "Integrasi AI ke sistem yang ada",
        description:
          "Kami membawa kemampuan AI ke tools yang sudah Anda gunakan, tanpa membangun ulang semuanya.",
      },
      {
        n: "04",
        title: "Implementasi",
        description:
          "Kami menerapkan solusi bersama tim Anda, termasuk pelatihan, migrasi, dan manajemen perubahan.",
      },
      {
        n: "05",
        title: "Manajemen sistem",
        description:
          "Kami menjaga sistem tetap sehat setelah peluncuran dengan monitoring, pemeliharaan, dan peningkatan berkelanjutan.",
      },
    ],
  },
  work: {
    id: "work",
    eyebrow: "Karya pilihan",
    heading: "Karya yang berbicara sendiri.",
    lead: "Pilihan proyek lintas industri. Contoh di bawah bersifat ilustratif, bukan studi kasus klien yang terverifikasi.",
    filters: [
      { id: "all" as const, label: "Semua" },
      { id: "retail" as const, label: "Retail" },
      { id: "finance" as const, label: "Keuangan" },
      { id: "education" as const, label: "Pendidikan" },
    ],
    filterLabel: "Filter proyek",
    projects: [
      {
        id: "retail",
        category: "Retail",
        title: "Dashboard peramalan permintaan",
        description:
          "Model forecasting dan dashboard yang membantu retailer merencanakan inventori setiap minggu.",
        illustrative: true,
      },
      {
        id: "finance",
        category: "Keuangan",
        title: "Pipeline kecerdasan dokumen",
        description:
          "Ekstraksi dan review otomatis dokumen keuangan dengan AI.",
        illustrative: true,
      },
      {
        id: "education",
        category: "Pendidikan",
        title: "Platform analitik pembelajaran",
        description:
          "Melacak progres peserta di berbagai program dengan insight yang dapat ditindaklanjuti.",
        illustrative: true,
      },
    ],
    ctaPrompt: "Punya tantangan serupa?",
    ctaLabel: "Diskusikan Kebutuhan Anda",
    ctaHref: "#contact",
    illustrative: "Konsep ilustratif",
    viewProject: "Lihat proyek",
    viewProjectPending: "Tautan studi kasus akan disediakan",
  },
  faq: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Punya Pertanyaan? Kami Siap Membantu.",
    lead: "Temukan jawaban atas pertanyaan umum seputar program belajar AI dan layanan konsultasi kami. Masih penasaran? Kami siap membantu.",
    items: [
      {
        id: "faq-01",
        question: "Apa perbedaan Digdeep Academy dan AI Systems Consulting?",
        answer:
          "Digdeep Academy berfokus pada edukasi AI dan data, membantu individu dan tim mengembangkan pengetahuan serta keterampilan praktis. AI Systems Consulting membantu bisnis mengidentifikasi kebutuhan, mengembangkan solusi AI yang disesuaikan, dan mengimplementasikan sistem cerdas.",
      },
      {
        id: "faq-02",
        question: "Siapa yang bisa bergabung dengan Digdeep Academy?",
        answer:
          "Digdeep Academy dirancang untuk individu dan tim yang ingin mengembangkan pengetahuan serta keterampilan di bidang AI, data, dan analitik. Jelajahi program belajar yang tersedia untuk menemukan yang sesuai dengan kebutuhan Anda.",
      },
      {
        id: "faq-03",
        question: "Solusi AI seperti apa yang disediakan layanan konsultasi?",
        answer:
          "Layanan konsultasi berfokus pada memahami kebutuhan bisnis Anda dan mengembangkan sistem berbasis AI yang disesuaikan dengan kebutuhan tersebut. Ini dapat mencakup pengembangan sistem, integrasi AI, dan implementasi.",
      },
      {
        id: "faq-04",
        question: "Bagaimana cara memulai dengan AI Systems Consulting?",
        answer:
          "Anda bisa memulai dengan menghubungi tim kami melalui WhatsApp. Ceritakan tantangan dan kebutuhan bisnis Anda, lalu tim kami akan mendiskusikan solusi yang memungkinkan bersama Anda.",
      },
      {
        id: "faq-05",
        question: "Apakah saya perlu pengetahuan teknis untuk bekerja dengan TENOS?",
        answer:
          "Tidak harus. Baik Anda ingin belajar AI melalui Digdeep Academy maupun menjajaki solusi AI untuk bisnis, Anda bisa memulai dengan mendiskusikan tujuan dan kebutuhan Anda bersama kami.",
      },
    ],
  },
  finalCta: {
    id: "contact",
    eyebrow: "Mari bekerja sama",
    heading: "Siap membawa AI ke bisnis Anda?",
    lead: "Ceritakan operasional dan tujuan Anda. Kami bantu melihat di mana AI dapat berperan.",
    academyCta: "Kunjungi Digdeep Academy",
    contactCta: "Hubungi Kami",
  },
  footer: {
    blurb:
      "Konsultasi sistem AI untuk bisnis, dan pembelajaran AI melalui Digdeep Academy.",
    pages: "Halaman",
    ourFocus: "Fokus Kami",
    contact: "Kontak",
    home: "Beranda",
    about: "Tentang Kami",
    contactLink: "Kontak",
    consulting: "AI Systems Consulting",
    academy: "Digdeep Academy",
    academyPending: "[URL resmi Academy akan disediakan]",
    whatsapp: "WhatsApp",
    chatWhatsapp: "Chat via WhatsApp",
    email: "Email",
    office: "Kantor",
    phoneDisplay: "+62 84x xxxx xxxx",
    emailDisplay: "emailexample@gmail.com",
    addressDisplay: "Jl. Bango Raya No.31 B, Pd. Labu, Cilandak, Jakarta Selatan 12450",
    numberPending: "[nomor akan disediakan]",
    addressPending: "[alamat akan disediakan]",
    legalPending: "[Tautan legal akan disediakan]",
    rightsReserved: "Seluruh hak cipta dilindungi.",
    opensNewTab: "(membuka tab baru)",
  },
  skip: "Lewati ke konten utama",
};

export const homepageCopy = { en, id } as const;

export type HomepageCopy = typeof en;

export function getHomepageCopy(lang: Lang): HomepageCopy {
  return homepageCopy[lang];
}

/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const heroContent = {
  ...heroDisplay,
  ...en.hero,
};
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const whyContent = en.why;
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const journeyCards = en.journey;
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const academyContent = en.academy;
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const consultingContent = en.consulting;
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const workContent = en.work;
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const faqContent = en.faq;
/** @deprecated Prefer getHomepageCopy(lang) / useHomepageCopy() */
export const finalCtaContent = en.finalCta;
