import { modules } from "./modules";

export const lessons = [
  // Front-End com Next.js
  // mod-6-1: Fundamentos HTML & CSS
  { id: "les-6-1-1", moduleId: "mod-6-1", name: "Estrutura de um documento HTML", order: 1, duration: 30, description: "Entenda as tags essenciais e a estrutura semantica do HTML5." },
  { id: "les-6-1-2", moduleId: "mod-6-1", name: "Tags semanticas e acessibilidade", order: 2, duration: 28, thumbnailImage: "/images/lessons/html-semantico.jpg" },
  { id: "les-6-1-3", moduleId: "mod-6-1", name: "CSS: Seletores e Box Model", order: 3, duration: 35 },
  { id: "les-6-1-4", moduleId: "mod-6-1", name: "Flexbox na pratica", order: 4, duration: 32, videoUrl: "https://www.youtube.com/watch?v=flexbox1" },
  { id: "les-6-1-5", moduleId: "mod-6-1", name: "CSS Grid e layouts responsivos", order: 5, duration: 30 },
  { id: "les-6-1-6", moduleId: "mod-6-1", name: "Projeto: Landing page responsiva", order: 6, duration: 25, materialUrl: "/materials/landing-page-starter.zip" },

  // mod-6-2: JavaScript Essencial
  { id: "les-6-2-1", moduleId: "mod-6-2", name: "Variaveis, tipos e operadores", order: 1, duration: 30 },
  { id: "les-6-2-2", moduleId: "mod-6-2", name: "Funcoes e escopo", order: 2, duration: 28 },
  { id: "les-6-2-3", moduleId: "mod-6-2", name: "Arrays e metodos de array", order: 3, duration: 35, thumbnailImage: "/images/lessons/js-arrays.jpg" },
  { id: "les-6-2-4", moduleId: "mod-6-2", name: "Manipulacao do DOM", order: 4, duration: 32 },
  { id: "les-6-2-5", moduleId: "mod-6-2", name: "Async/Await e Fetch API", order: 5, duration: 25, videoUrl: "https://www.youtube.com/watch?v=async1" },

  // mod-6-3: React Basico
  { id: "les-6-3-1", moduleId: "mod-6-3", name: "Introducao ao React e JSX", order: 1, duration: 35 },
  { id: "les-6-3-2", moduleId: "mod-6-3", name: "Componentes e Props", order: 2, duration: 30, thumbnailImage: "/images/lessons/react-components.jpg" },
  { id: "les-6-3-3", moduleId: "mod-6-3", name: "Estado com useState", order: 3, duration: 35 },
  { id: "les-6-3-4", moduleId: "mod-6-3", name: "Efeitos com useEffect", order: 4, duration: 32 },
  { id: "les-6-3-5", moduleId: "mod-6-3", name: "Listas, keys e renderizacao condicional", order: 5, duration: 28 },
  { id: "les-6-3-6", moduleId: "mod-6-3", name: "Formularios e eventos", order: 6, duration: 40, materialUrl: "/materials/react-forms-starter.zip" },

  // mod-6-4: Next.js na Pratica
  { id: "les-6-4-1", moduleId: "mod-6-4", name: "Setup do projeto Next.js", order: 1, duration: 30 },
  { id: "les-6-4-2", moduleId: "mod-6-4", name: "Rotas e navegacao", order: 2, duration: 35, videoUrl: "https://www.youtube.com/watch?v=nextjs-routes" },
  { id: "les-6-4-3", moduleId: "mod-6-4", name: "Server Components vs Client Components", order: 3, duration: 40 },
  { id: "les-6-4-4", moduleId: "mod-6-4", name: "Fetching de dados e cache", order: 4, duration: 35 },
  { id: "les-6-4-5", moduleId: "mod-6-4", name: "Deploy na Vercel", order: 5, duration: 30, materialUrl: "/materials/nextjs-deploy-guide.pdf" },

  // CS2 Competitivo
  // mod-1-1: Fundamentos de Mira e Movimentacao
  { id: "les-1-1-1", moduleId: "mod-1-1", name: "Configuracao ideal do mouse e sensibilidade", order: 1, duration: 30 },
  { id: "les-1-1-2", moduleId: "mod-1-1", name: "Treino de mira: tracking e flicking", order: 2, duration: 35, thumbnailImage: "/images/lessons/cs2-aim.jpg" },
  { id: "les-1-1-3", moduleId: "mod-1-1", name: "Counter-strafing e movimentacao", order: 3, duration: 30 },
  { id: "les-1-1-4", moduleId: "mod-1-1", name: "Peeks e angulos de vantagem", order: 4, duration: 28 },
  { id: "les-1-1-5", moduleId: "mod-1-1", name: "Spray control com AK-47 e M4", order: 5, duration: 32, videoUrl: "https://www.youtube.com/watch?v=spray1" },
  { id: "les-1-1-6", moduleId: "mod-1-1", name: "Workshop: Rotina de treino diaria", order: 6, duration: 25 },

  // mod-1-2: Granadas e Utilitarios
  { id: "les-1-2-1", moduleId: "mod-1-2", name: "Smokes essenciais de Mirage", order: 1, duration: 30 },
  { id: "les-1-2-2", moduleId: "mod-1-2", name: "Smokes essenciais de Inferno", order: 2, duration: 30 },
  { id: "les-1-2-3", moduleId: "mod-1-2", name: "Flashbangs: tecnicas e timings", order: 3, duration: 28, thumbnailImage: "/images/lessons/cs2-flash.jpg" },
  { id: "les-1-2-4", moduleId: "mod-1-2", name: "Molotovs e HE grenades", order: 4, duration: 32 },
  { id: "les-1-2-5", moduleId: "mod-1-2", name: "Execucoes: combinando granadas", order: 5, duration: 30 },

  // mod-1-3: Estrategias de Time
  { id: "les-1-3-1", moduleId: "mod-1-3", name: "Comunicacao e callouts", order: 1, duration: 35 },
  { id: "les-1-3-2", moduleId: "mod-1-3", name: "Funcoes no time: entry, AWP, support", order: 2, duration: 30 },
  { id: "les-1-3-3", moduleId: "mod-1-3", name: "Setups defensivos (CT side)", order: 3, duration: 35 },
  { id: "les-1-3-4", moduleId: "mod-1-3", name: "Execucoes ofensivas (T side)", order: 4, duration: 32 },
  { id: "les-1-3-5", moduleId: "mod-1-3", name: "Leitura de eco e force buy", order: 5, duration: 28 },
  { id: "les-1-3-6", moduleId: "mod-1-3", name: "Anti-strats e adaptacao mid-game", order: 6, duration: 40 },

  // mod-1-4: Pratica Competitiva e Scrims
  { id: "les-1-4-1", moduleId: "mod-1-4", name: "Preparacao para scrims", order: 1, duration: 30 },
  { id: "les-1-4-2", moduleId: "mod-1-4", name: "Analise de demos proprias", order: 2, duration: 35 },
  { id: "les-1-4-3", moduleId: "mod-1-4", name: "Analise de demos profissionais", order: 3, duration: 35 },
  { id: "les-1-4-4", moduleId: "mod-1-4", name: "Mentalidade competitiva e tilt control", order: 4, duration: 30 },
  { id: "les-1-4-5", moduleId: "mod-1-4", name: "Simulado: Torneio interno", order: 5, duration: 40 },

  // Robotica com Arduino
  // mod-4-1: Introducao a Eletronica
  { id: "les-4-1-1", moduleId: "mod-4-1", name: "Circuitos basicos e lei de Ohm", order: 1, duration: 30, description: "Aprenda os fundamentos de circuitos eletricos." },
  { id: "les-4-1-2", moduleId: "mod-4-1", name: "Componentes: resistores, LEDs e capacitores", order: 2, duration: 28 },
  { id: "les-4-1-3", moduleId: "mod-4-1", name: "Protoboard e montagem de circuitos", order: 3, duration: 32, thumbnailImage: "/images/lessons/protoboard.jpg" },
  { id: "les-4-1-4", moduleId: "mod-4-1", name: "Multimetro: medindo tensao e corrente", order: 4, duration: 30 },
  { id: "les-4-1-5", moduleId: "mod-4-1", name: "Projeto: Semaforo com LEDs", order: 5, duration: 30, materialUrl: "/materials/semaforo-led.zip" },

  // mod-4-2: Programacao Arduino
  { id: "les-4-2-1", moduleId: "mod-4-2", name: "Conhecendo o Arduino e a IDE", order: 1, duration: 28 },
  { id: "les-4-2-2", moduleId: "mod-4-2", name: "Setup e loop: primeiro programa", order: 2, duration: 30 },
  { id: "les-4-2-3", moduleId: "mod-4-2", name: "Variaveis e condicionais em C++", order: 3, duration: 32 },
  { id: "les-4-2-4", moduleId: "mod-4-2", name: "Funcoes e bibliotecas", order: 4, duration: 30 },
  { id: "les-4-2-5", moduleId: "mod-4-2", name: "PWM e controle de brilho", order: 5, duration: 28, videoUrl: "https://www.youtube.com/watch?v=pwm1" },
  { id: "les-4-2-6", moduleId: "mod-4-2", name: "Serial Monitor e debug", order: 6, duration: 32 },

  // mod-4-3: Sensores e Atuadores
  { id: "les-4-3-1", moduleId: "mod-4-3", name: "Sensor de temperatura e umidade (DHT11)", order: 1, duration: 30 },
  { id: "les-4-3-2", moduleId: "mod-4-3", name: "Sensor ultrassonico (HC-SR04)", order: 2, duration: 32, thumbnailImage: "/images/lessons/ultrassonico.jpg" },
  { id: "les-4-3-3", moduleId: "mod-4-3", name: "Servomotores e controle de angulo", order: 3, duration: 35 },
  { id: "les-4-3-4", moduleId: "mod-4-3", name: "Motor DC com ponte H (L298N)", order: 4, duration: 35 },
  { id: "les-4-3-5", moduleId: "mod-4-3", name: "Projeto: Carro desviando obstaculos", order: 5, duration: 28, materialUrl: "/materials/carro-obstaculo.zip" },

  // mod-4-4: Projeto Final: Robo Autonomo
  { id: "les-4-4-1", moduleId: "mod-4-4", name: "Planejamento e design do robo", order: 1, duration: 30 },
  { id: "les-4-4-2", moduleId: "mod-4-4", name: "Montagem do chassi e motores", order: 2, duration: 35 },
  { id: "les-4-4-3", moduleId: "mod-4-4", name: "Integrando sensores ao robo", order: 3, duration: 35 },
  { id: "les-4-4-4", moduleId: "mod-4-4", name: "Programando comportamento autonomo", order: 4, duration: 40 },
  { id: "les-4-4-5", moduleId: "mod-4-4", name: "Testes e ajustes finais", order: 5, duration: 30 },
  { id: "les-4-4-6", moduleId: "mod-4-4", name: "Apresentacao dos projetos", order: 6, duration: 30, description: "Apresente seu robo para a turma e receba feedback." },

  // LoL Fundamentos
  // mod-3-1: Mecanicas de Lane
  { id: "les-3-1-1", moduleId: "mod-3-1", name: "Last hitting e wave management", order: 1, duration: 35 },
  { id: "les-3-1-2", moduleId: "mod-3-1", name: "Trading patterns", order: 2, duration: 30 },
  { id: "les-3-1-3", moduleId: "mod-3-1", name: "Recall timings e back otimizado", order: 3, duration: 28 },
  { id: "les-3-1-4", moduleId: "mod-3-1", name: "Matchups: entendendo win conditions", order: 4, duration: 32 },
  { id: "les-3-1-5", moduleId: "mod-3-1", name: "Zona de controle e spacing", order: 5, duration: 30, thumbnailImage: "/images/lessons/lol-spacing.jpg" },
  { id: "les-3-1-6", moduleId: "mod-3-1", name: "Pratica: replays de lane", order: 6, duration: 25 },

  // mod-3-2: Visao e Objetivos
  { id: "les-3-2-1", moduleId: "mod-3-2", name: "Warding: posicoes essenciais", order: 1, duration: 30 },
  { id: "les-3-2-2", moduleId: "mod-3-2", name: "Controle de visao e sweeper", order: 2, duration: 28 },
  { id: "les-3-2-3", moduleId: "mod-3-2", name: "Dragon e Baron: quando contestar", order: 3, duration: 35 },
  { id: "les-3-2-4", moduleId: "mod-3-2", name: "Torres e prioridade de objetivo", order: 4, duration: 30 },
  { id: "les-3-2-5", moduleId: "mod-3-2", name: "Rift Herald e split push", order: 5, duration: 27 },

  // mod-3-3: Macro Game e Rotacoes
  { id: "les-3-3-1", moduleId: "mod-3-3", name: "Conceitos de macro game", order: 1, duration: 35 },
  { id: "les-3-3-2", moduleId: "mod-3-3", name: "Rotacoes e roaming eficiente", order: 2, duration: 32 },
  { id: "les-3-3-3", moduleId: "mod-3-3", name: "Teamfight positioning", order: 3, duration: 35 },
  { id: "les-3-3-4", moduleId: "mod-3-3", name: "Late game decision making", order: 4, duration: 30 },
  { id: "les-3-3-5", moduleId: "mod-3-3", name: "Shotcalling e lideranca", order: 5, duration: 33 },
  { id: "les-3-3-6", moduleId: "mod-3-3", name: "Analise: jogos profissionais", order: 6, duration: 35, videoUrl: "https://www.youtube.com/watch?v=lol-pro1" },

  // Motion Design com After Effects
  // mod-8-1: Interface e Keyframes
  { id: "les-8-1-1", moduleId: "mod-8-1", name: "Tour pela interface do After Effects", order: 1, duration: 30 },
  { id: "les-8-1-2", moduleId: "mod-8-1", name: "Composicoes, layers e timeline", order: 2, duration: 28 },
  { id: "les-8-1-3", moduleId: "mod-8-1", name: "Keyframes e interpolacao basica", order: 3, duration: 35, thumbnailImage: "/images/lessons/ae-keyframes.jpg" },
  { id: "les-8-1-4", moduleId: "mod-8-1", name: "Easy ease e graph editor", order: 4, duration: 32 },
  { id: "les-8-1-5", moduleId: "mod-8-1", name: "Principios de animacao aplicados", order: 5, duration: 30 },
  { id: "les-8-1-6", moduleId: "mod-8-1", name: "Projeto: animacao de logotipo", order: 6, duration: 25, materialUrl: "/materials/logo-animation-assets.zip" },

  // mod-8-2: Motion Graphics Essencial
  { id: "les-8-2-1", moduleId: "mod-8-2", name: "Shape layers e paths", order: 1, duration: 30 },
  { id: "les-8-2-2", moduleId: "mod-8-2", name: "Texto animado e presets", order: 2, duration: 32 },
  { id: "les-8-2-3", moduleId: "mod-8-2", name: "Trim paths e animacoes geometricas", order: 3, duration: 35 },
  { id: "les-8-2-4", moduleId: "mod-8-2", name: "Masks e track mattes", order: 4, duration: 28 },
  { id: "les-8-2-5", moduleId: "mod-8-2", name: "Expressions basicas: wiggle e loop", order: 5, duration: 35 },

  // mod-8-3: Efeitos Visuais e Compositing
  { id: "les-8-3-1", moduleId: "mod-8-3", name: "Chroma key e rotoscopia", order: 1, duration: 35 },
  { id: "les-8-3-2", moduleId: "mod-8-3", name: "Tracking de camera e objetos", order: 2, duration: 32 },
  { id: "les-8-3-3", moduleId: "mod-8-3", name: "Particulas com CC Particle World", order: 3, duration: 30, thumbnailImage: "/images/lessons/ae-particles.jpg" },
  { id: "les-8-3-4", moduleId: "mod-8-3", name: "Color grading e LUTs", order: 4, duration: 35 },
  { id: "les-8-3-5", moduleId: "mod-8-3", name: "Compositing: integrando elementos", order: 5, duration: 33 },
  { id: "les-8-3-6", moduleId: "mod-8-3", name: "Render e exportacao otimizada", order: 6, duration: 35 },

  // mod-8-4: Projeto Final: Showreel
  { id: "les-8-4-1", moduleId: "mod-8-4", name: "Planejamento do showreel", order: 1, duration: 30 },
  { id: "les-8-4-2", moduleId: "mod-8-4", name: "Criacao de pecas: lower thirds", order: 2, duration: 35 },
  { id: "les-8-4-3", moduleId: "mod-8-4", name: "Criacao de pecas: transicoes", order: 3, duration: 35 },
  { id: "les-8-4-4", moduleId: "mod-8-4", name: "Edicao e ritmo do showreel", order: 4, duration: 35, videoUrl: "https://www.youtube.com/watch?v=showreel1" },
  { id: "les-8-4-5", moduleId: "mod-8-4", name: "Apresentacao e feedback", order: 5, duration: 35 },

  // Logica de Programacao
  // mod-7-1: Variaveis e Tipos de Dados
  { id: "les-7-1-1", moduleId: "mod-7-1", name: "O que e programacao?", order: 1, duration: 25 },
  { id: "les-7-1-2", moduleId: "mod-7-1", name: "Variaveis e atribuicao", order: 2, duration: 25 },
  { id: "les-7-1-3", moduleId: "mod-7-1", name: "Tipos: numeros, textos e booleanos", order: 3, duration: 25 },
  { id: "les-7-1-4", moduleId: "mod-7-1", name: "Operadores aritmeticos e logicos", order: 4, duration: 25 },
  { id: "les-7-1-5", moduleId: "mod-7-1", name: "Exercicios praticos", order: 5, duration: 20, materialUrl: "/materials/logica-exercicios-1.pdf" },

  // mod-7-2: Condicionais e Lacos
  { id: "les-7-2-1", moduleId: "mod-7-2", name: "If, else if e else", order: 1, duration: 25 },
  { id: "les-7-2-2", moduleId: "mod-7-2", name: "Switch case", order: 2, duration: 25 },
  { id: "les-7-2-3", moduleId: "mod-7-2", name: "Laco while e do-while", order: 3, duration: 25 },
  { id: "les-7-2-4", moduleId: "mod-7-2", name: "Laco for e for-of", order: 4, duration: 25 },
  { id: "les-7-2-5", moduleId: "mod-7-2", name: "Lacos aninhados", order: 5, duration: 25 },
  { id: "les-7-2-6", moduleId: "mod-7-2", name: "Projeto: jogo de adivinhacao", order: 6, duration: 25, description: "Construa um jogo de adivinhacao usando condicionais e lacos." },

  // mod-7-3: Funcoes e Estruturas de Dados
  { id: "les-7-3-1", moduleId: "mod-7-3", name: "Funcoes: declaracao e chamada", order: 1, duration: 28 },
  { id: "les-7-3-2", moduleId: "mod-7-3", name: "Parametros e retorno", order: 2, duration: 28 },
  { id: "les-7-3-3", moduleId: "mod-7-3", name: "Arrays: criacao e manipulacao", order: 3, duration: 30 },
  { id: "les-7-3-4", moduleId: "mod-7-3", name: "Objetos e propriedades", order: 4, duration: 28 },
  { id: "les-7-3-5", moduleId: "mod-7-3", name: "Projeto final: lista de tarefas", order: 5, duration: 26, materialUrl: "/materials/logica-projeto-final.pdf" },
];

export function getLessonsByModule(moduleId) {
  return lessons
    .filter((lesson) => lesson.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByCourse(courseId) {
  const courseModuleIds = modules
    .filter((mod) => mod.courseId === courseId)
    .map((mod) => mod.id);

  return lessons
    .filter((lesson) => courseModuleIds.includes(lesson.moduleId))
    .sort((a, b) => {
      const modA = modules.find((m) => m.id === a.moduleId);
      const modB = modules.find((m) => m.id === b.moduleId);
      if (!modA || !modB) return 0;
      if (modA.order !== modB.order) return modA.order - modB.order;
      return a.order - b.order;
    });
}
