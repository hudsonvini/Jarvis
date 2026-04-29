export const trails = [
  {
    id: "trail-1",
    name: "E-Sports CS2",
    slug: "esports-cs2",
    description:
      "Domine o Counter-Strike 2 com treinos profissionais, estrategias competitivas e analise tatica de partidas.",
    bannerImage: "/images/trails/esports-cs2-banner.jpg",
    icon: "crosshair",
    color: "#ff6b00",
    order: 1,
    subtitle: "Treine como um pro player",
    longDescription:
      "A trilha de E-Sports CS2 oferece um programa completo de treinamento competitivo, desde fundamentos de mira e movimentacao ate estrategias avancadas de time. Com instrutores que competiram em campeonatos nacionais, voce vai evoluir seu jogo para o proximo nivel.",
    heroImage: "/images/trails/esports-cs2-hero.jpg",
    customBannerText: "Seja o MVP do seu time",
  },
  {
    id: "trail-2",
    name: "E-Sports LoL",
    slug: "esports-lol",
    description:
      "Aprenda League of Legends do zero ao competitivo, com foco em macro game, mecanicas e draft.",
    bannerImage: "/images/trails/esports-lol-banner.jpg",
    icon: "sword",
    color: "#00c8ff",
    order: 2,
    subtitle: "Do Bronze ao Challenger",
    heroImage: "/images/trails/esports-lol-hero.jpg",
  },
  {
    id: "trail-3",
    name: "Robotica",
    slug: "robotica",
    description:
      "Construa robos e projetos interativos com Arduino, sensores e impressao 3D.",
    bannerImage: "/images/trails/robotica-banner.jpg",
    icon: "cpu",
    color: "#00ff84",
    order: 3,
    longDescription:
      "Na trilha de Robotica voce vai aprender desde os fundamentos de eletronica e programacao de microcontroladores ate a construcao de robos autonomos e projetos de automacao residencial.",
  },
  {
    id: "trail-4",
    name: "Programacao",
    slug: "programacao",
    description:
      "Aprenda a programar do zero e construa aplicacoes web modernas com as tecnologias mais usadas no mercado.",
    bannerImage: "/images/trails/programacao-banner.jpg",
    icon: "code",
    color: "#f4d03f",
    order: 4,
    subtitle: "Do zero ao deploy",
    longDescription:
      "A trilha de Programacao cobre desde logica basica ate frameworks modernos como React e Next.js, preparando voce para o mercado de desenvolvimento web.",
    heroImage: "/images/trails/programacao-hero.jpg",
    customBannerText: "Construa o futuro com codigo",
  },
  {
    id: "trail-5",
    name: "Motion Design",
    slug: "motion-design",
    description:
      "Crie animacoes profissionais e efeitos visuais com After Effects, Cinema 4D e ferramentas de design.",
    bannerImage: "/images/trails/motion-design-banner.jpg",
    icon: "film",
    color: "#d660ff",
    order: 5,
    heroImage: "/images/trails/motion-design-hero.jpg",
  },
];

export function getTrailBySlug(slug) {
  return trails.find((trail) => trail.slug === slug);
}

export function getTrailById(id) {
  return trails.find((trail) => trail.id === id);
}
