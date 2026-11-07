import type { Lang } from "./types";

export type AboutCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  overview: {
    eyebrow: string;
    heading: string;
    paragraphs: [string, string];
    note: string;
  };
  visionMission: {
    eyebrow: string;
    heading: string;
    visionLabel: string;
    visionText: string;
    missionLabel: string;
    missionPoints: [string, string, string];
  };
  whatWeDo: {
    eyebrow: string;
    heading: string;
    digdeep: {
      title: string;
      description: string;
      points: [string, string, string];
      cta: string;
      urlNote: string;
    };
    consulting: {
      title: string;
      description: string;
      points: [string, string, string];
      cta: string;
    };
  };
  approach: {
    eyebrow: string;
    heading: string;
    steps: Array<{ n: string; title: string; description: string }>;
  };
  cta: {
    eyebrow: string;
    heading: string;
    lead: string;
    button: string;
    whatsappNote: string;
    whatsappPlaceholder: string;
  };
};

const en: AboutCopy = {
  metaTitle: "About Us",
  metaDescription:
    "PT. Tenos Data Teknologi helps organisations put AI to work through consulting and system development, and helps people understand AI through Digdeep Academy.",
  hero: {
    eyebrow: "About Tenos",
    heading: "An AI technology company that builds and teaches.",
    lead: "PT. Tenos Data Teknologi helps organisations put AI to work through consulting and system development, and helps people understand AI through Digdeep Academy.",
    primaryCta: "What We Do",
    secondaryCta: "Contact Tenos",
  },
  overview: {
    eyebrow: "Company overview",
    heading: "Helping businesses and people adopt AI with purpose.",
    paragraphs: [
      "Tenos is a technology company focused on artificial intelligence. We work with organisations to find where AI fits their processes, build the systems that put it to work, and support teams as they use them.",
      "Alongside that work, Tenos runs Digdeep Academy, a learning platform that helps individuals and teams build practical AI and data literacy through structured, hands-on programs.",
    ],
    note: "[Company history, founding year and team size to be confirmed by Tenos]",
  },
  visionMission: {
    eyebrow: "Vision & mission",
    heading: "What guides our work.",
    visionLabel: "Vision",
    visionText:
      "To close the gap between AI’s potential and how people and organizations actually use it.",
    missionLabel: "Mission",
    missionPoints: [
      "Build AI literacy that helps people understand and apply AI in their daily work.",
      "Teach through hands-on programs grounded in real cases, not theory alone.",
      "Build intelligent systems that transform how organizations operate: practical, human, and built to last.",
    ],
  },
  whatWeDo: {
    eyebrow: "What we do",
    heading: "Two business areas, one focus on AI.",
    digdeep: {
      title: "Digdeep Academy",
      description: "An AI education and learning platform developed by Tenos.",
      points: [
        "Practical AI and data literacy for individuals and teams",
        "Structured, hands-on learning programs",
        "Corporate training and mentoring options",
      ],
      cta: "Visit Digdeep Academy",
      urlNote: "[Official Academy URL to be provided]",
    },
    consulting: {
      title: "AI Systems Consulting",
      description:
        "For organisations that want AI to solve real operational problems.",
      points: [
        "AI consulting to identify where AI creates value",
        "AI system development tailored to your processes",
        "Implementation based on business and operational needs",
      ],
      cta: "Discuss Your Needs",
    },
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Technology applied with purpose.",
    steps: [
      {
        n: "01",
        title: "Understand the need",
        description:
          "We start by listening, mapping processes, data and goals before proposing anything.",
      },
      {
        n: "02",
        title: "Build what is relevant",
        description:
          "We design and develop AI solutions that fit how the team actually works.",
      },
      {
        n: "03",
        title: "Apply and keep improving",
        description:
          "We implement with the team and support the system after launch so it keeps delivering.",
      },
    ],
  },
  cta: {
    eyebrow: "Work with Tenos",
    heading: "Let's Build Something Intelligent Together.",
    lead: "Tell us about your goals and challenges. Our team will help you see where AI can fit.",
    button: "Contact Tenos",
    whatsappNote: "Opens WhatsApp · ",
    whatsappPlaceholder: "+62 811-1010-331",
  },
};

const id: AboutCopy = {
  metaTitle: "Tentang Kami",
  metaDescription:
    "PT. Tenos Data Teknologi membantu organisasi memanfaatkan AI melalui konsultasi dan pengembangan sistem, serta membantu orang memahami AI melalui Digdeep Academy.",
  hero: {
    eyebrow: "Tentang Tenos",
    heading: "An AI technology company that builds and teaches.",
    lead: "PT. Tenos Data Teknologi membantu organisasi memanfaatkan AI melalui konsultasi dan pengembangan sistem, serta membantu orang memahami AI melalui Digdeep Academy.",
    primaryCta: "Layanan Kami",
    secondaryCta: "Hubungi Tenos",
  },
  overview: {
    eyebrow: "Profil perusahaan",
    heading: "Helping businesses and people adopt AI with purpose.",
    paragraphs: [
      "Tenos adalah perusahaan teknologi yang berfokus pada kecerdasan buatan. Kami bekerja bersama organisasi untuk menemukan di mana AI cocok dengan proses mereka, membangun sistem yang menjalankannya, dan mendampingi tim saat menggunakannya.",
      "Selain itu, Tenos menjalankan Digdeep Academy, platform pembelajaran yang membantu individu dan tim membangun literasi AI dan data yang praktis melalui program terstruktur dan langsung praktik.",
    ],
    note: "[Sejarah perusahaan, tahun berdiri, dan jumlah tim akan dikonfirmasi oleh Tenos]",
  },
  visionMission: {
    eyebrow: "Visi & misi",
    heading: "What guides our work.",
    visionLabel: "Visi",
    visionText:
      "Menutup kesenjangan antara potensi AI dan cara orang serta organisasi benar-benar menggunakannya.",
    missionLabel: "Misi",
    missionPoints: [
      "Membangun literasi AI agar orang memahami dan menerapkan AI dalam pekerjaan sehari-hari.",
      "Mengajar melalui program langsung praktik berbasis kasus nyata, bukan sekadar teori.",
      "Membangun sistem cerdas yang mengubah cara organisasi beroperasi: praktis, manusiawi, dan dibuat untuk bertahan lama.",
    ],
  },
  whatWeDo: {
    eyebrow: "Yang kami lakukan",
    heading: "Two business areas, one focus on AI.",
    digdeep: {
      title: "Digdeep Academy",
      description:
        "Platform edukasi dan pembelajaran AI yang dikembangkan oleh Tenos.",
      points: [
        "Literasi AI dan data yang praktis untuk individu dan tim",
        "Program belajar terstruktur dan langsung praktik",
        "Pilihan pelatihan korporat dan mentoring",
      ],
      cta: "Kunjungi Digdeep Academy",
      urlNote: "[URL resmi Academy akan diberikan]",
    },
    consulting: {
      title: "AI Systems Consulting",
      description:
        "Untuk organisasi yang ingin AI menyelesaikan masalah operasional nyata.",
      points: [
        "Konsultasi AI untuk menemukan di mana AI memberi nilai",
        "Pengembangan sistem AI yang disesuaikan dengan proses Anda",
        "Implementasi sesuai kebutuhan bisnis dan operasional",
      ],
      cta: "Diskusikan Kebutuhan Anda",
    },
  },
  approach: {
    eyebrow: "Pendekatan kami",
    heading: "Technology applied with purpose.",
    steps: [
      {
        n: "01",
        title: "Memahami kebutuhan",
        description:
          "Kami mulai dengan mendengarkan, memetakan proses, data, dan tujuan sebelum mengusulkan apa pun.",
      },
      {
        n: "02",
        title: "Membangun yang relevan",
        description:
          "Kami merancang dan mengembangkan solusi AI yang sesuai dengan cara kerja tim sebenarnya.",
      },
      {
        n: "03",
        title: "Menerapkan dan terus menyempurnakan",
        description:
          "Kami mengimplementasikan bersama tim dan mendampingi sistem setelah diluncurkan agar terus memberi hasil.",
      },
    ],
  },
  cta: {
    eyebrow: "Bekerja dengan Tenos",
    heading: "Let's Build Something Intelligent Together.",
    lead: "Ceritakan tujuan dan tantangan Anda. Tim kami akan membantu melihat di mana AI bisa berperan.",
    button: "Hubungi Tenos",
    whatsappNote: "Membuka WhatsApp · ",
    whatsappPlaceholder: "+62 811-1010-331",
  },
};

export function getAboutCopy(lang: Lang): AboutCopy {
  return lang === "id" ? id : en;
}
