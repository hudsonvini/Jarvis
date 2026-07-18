export const modules = [
  // Front-End com Next.js (course-6)
  { id: "mod-6-1", courseId: "course-6", name: "Fundamentos HTML & CSS", order: 1, totalLessons: 6, totalDuration: 180 },
  { id: "mod-6-2", courseId: "course-6", name: "JavaScript Essencial", order: 2, totalLessons: 5, totalDuration: 150 },
  { id: "mod-6-3", courseId: "course-6", name: "React Basico", order: 3, totalLessons: 6, totalDuration: 200 },
  { id: "mod-6-4", courseId: "course-6", name: "Next.js na Pratica", order: 4, totalLessons: 5, totalDuration: 170 },

  // CS2 Competitivo (course-1)
  { id: "mod-1-1", courseId: "course-1", name: "Fundamentos de Mira e Movimentacao", order: 1, totalLessons: 6, totalDuration: 180 },
  { id: "mod-1-2", courseId: "course-1", name: "Granadas e Utilitarios", order: 2, totalLessons: 5, totalDuration: 150 },
  { id: "mod-1-3", courseId: "course-1", name: "Estrategias de Time", order: 3, totalLessons: 6, totalDuration: 200 },
  { id: "mod-1-4", courseId: "course-1", name: "Pratica Competitiva e Scrims", order: 4, totalLessons: 5, totalDuration: 170 },

  // Robotica com Arduino (course-4)
  { id: "mod-4-1", courseId: "course-4", name: "Introducao a Eletronica", order: 1, totalLessons: 5, totalDuration: 150 },
  { id: "mod-4-2", courseId: "course-4", name: "Programacao Arduino", order: 2, totalLessons: 6, totalDuration: 180 },
  { id: "mod-4-3", courseId: "course-4", name: "Sensores e Atuadores", order: 3, totalLessons: 5, totalDuration: 160 },
  { id: "mod-4-4", courseId: "course-4", name: "Projeto Final: Robo Autonomo", order: 4, totalLessons: 6, totalDuration: 200 },

  // LoL Fundamentos (course-3)
  { id: "mod-3-1", courseId: "course-3", name: "Mecanicas de Lane", order: 1, totalLessons: 6, totalDuration: 180 },
  { id: "mod-3-2", courseId: "course-3", name: "Visao e Objetivos", order: 2, totalLessons: 5, totalDuration: 150 },
  { id: "mod-3-3", courseId: "course-3", name: "Macro Game e Rotacoes", order: 3, totalLessons: 6, totalDuration: 200 },

  // Motion Design com After Effects (course-8)
  { id: "mod-8-1", courseId: "course-8", name: "Interface e Keyframes", order: 1, totalLessons: 6, totalDuration: 180 },
  { id: "mod-8-2", courseId: "course-8", name: "Motion Graphics Essencial", order: 2, totalLessons: 5, totalDuration: 160 },
  { id: "mod-8-3", courseId: "course-8", name: "Efeitos Visuais e Compositing", order: 3, totalLessons: 6, totalDuration: 200 },
  { id: "mod-8-4", courseId: "course-8", name: "Projeto Final: Showreel", order: 4, totalLessons: 5, totalDuration: 170 },

  // Logica de Programacao (course-7)
  { id: "mod-7-1", courseId: "course-7", name: "Variaveis e Tipos de Dados", order: 1, totalLessons: 5, totalDuration: 120 },
  { id: "mod-7-2", courseId: "course-7", name: "Condicionais e Lacos", order: 2, totalLessons: 6, totalDuration: 150 },
  { id: "mod-7-3", courseId: "course-7", name: "Funcoes e Estruturas de Dados", order: 3, totalLessons: 5, totalDuration: 140 },
];

export function getModulesByCourse(courseId) {
  return modules
    .filter((mod) => mod.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}
