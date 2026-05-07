export const publicCourses = [
	{
		id: "robotica-nobel",
		slug: "robotica-nobel",
		title: "Robotica Nobel",
		eyebrow: "Laboratorio Maker",
		shortDescription:
			"Construa projetos reais com sensores, motores, logica e prototipagem para resolver desafios do mundo fisico.",
		description:
			"O curso Robotica Nobel foi desenhado para transformar curiosidade em prototipos funcionais. Voce aprende eletronica, programacao, logica, design de solucao e apresentacao de projeto com uma rotina pratica de laboratorio.",
		image: "/images/professor-robotica.png",
		heroImage: "/images/robotica.webp",
		previewImage: "/images/robotica-2.webp",
		footerImage: "/images/robotica.webp",
		vimeoUrl: "https://vimeo.com/76979871",
		accent: "#7f14b7",
		heroBackground:
			"linear-gradient(135deg, #4f1173 0%, #26083f 46%, #09030f 100%)",
		heroDotColor: "rgba(244, 208, 63, 0.46)",
		level: "avancado",
		hours: "78h",
		lessons: "52 aulas",
		students: "89 alunos",
		score: "4.9",
		instructor: "Hudson Vini",
		instructorRole: "Professor de Robotica e Tecnologia",
		instructorImage: "/images/professor-robotica.png",
		price: "R$347,00",
		installments: "ou 12x de R$35,88/mes",
		statusLabel: "Inscricoes abertas",
		tool: "Arduino, sensores e prototipagem",
		language: "Portugues",
		access: "12 meses",
		certificate: "Certificado incluso",
		tags: ["Maker", "Arduino", "Robotica"],
		outcomes: [
			{
				title: "Projetando a solucao",
				text: "Pesquisa, briefing, rascunhos e divisao do desafio em partes testaveis.",
				image: "/images/estrutura-1.webp",
			},
			{
				title: "Circuito e codigo",
				text: "Montagem de sensores, motores e logica de controle para prototipos funcionais.",
				image: "/images/estrutura-2.webp",
			},
			{
				title: "Prototipo final",
				text: "Refino, documentacao e apresentacao de uma solucao com impacto real.",
				image: "/images/estrutura-3.webp",
			},
		],
		modules: [
			{
				number: "01",
				title: "Fundamentos e referencias",
				lessons: [
					"Boas-vindas e apresentacao do laboratorio",
					"Como pensar problemas reais com robotica",
					"Componentes, ferramentas e seguranca",
				],
			},
			{
				number: "02",
				title: "Eletronica aplicada",
				lessons: [
					"Leitura de circuito e protoboard",
					"Sensores digitais e analogicos",
					"Motores, LEDs e atuadores",
					"Testes e debugging de montagem",
				],
			},
			{
				number: "03",
				title: "Programacao e automacao",
				lessons: [
					"Logica de controle",
					"Estados, loops e funcoes",
					"Integrando sensores com decisoes",
					"Desafio guiado de automacao",
				],
			},
			{
				number: "04",
				title: "Projeto final",
				lessons: [
					"Planejamento do prototipo",
					"Construcao e iteracao",
					"Documentacao tecnica",
					"Pitch e apresentacao final",
				],
			},
		],
		faq: [
			{
				question: "Preciso ter experiencia com programacao?",
				answer:
					"Nao. O curso apresenta os fundamentos antes de avancar para desafios mais completos.",
			},
			{
				question: "O curso tem certificado?",
				answer:
					"Sim. A conclusao libera certificado e registro de carga horaria.",
			},
			{
				question: "Os materiais ficam disponiveis?",
				answer:
					"Sim. A estrutura foi pensada para integrar apostilas, assets, aulas e links pela API.",
			},
		],
	},
	{
		id: "front-end-next",
		slug: "front-end-next",
		title: "Front-End com Next.js",
		eyebrow: "Programacao Web",
		shortDescription:
			"Do layout ao deploy: React, componentes, consumo de API e interfaces modernas com performance.",
		description:
			"Uma trilha pratica para construir interfaces profissionais com React e Next.js, passando por componentizacao, rotas, dados mockados, consumo de API, responsividade e deploy.",
		image: "/images/image-front.png",
		heroImage: "/images/servicos-1.webp",
		previewImage: "https://assets.awwwards.com/awards/course/674d91f7a4f6f086603742.webp",
		footerImage: "/images/servicos-1.webp",
		vimeoUrl: "https://vimeo.com/76979871",
		accent: "#4f1173",
		heroBackground:
			"linear-gradient(135deg, #4f1173 0%, #561176 48%, #2a073e 100%)",
		heroDotColor: "rgba(244, 208, 63, 0.5)",
		level: "intermediario",
		hours: "72h",
		lessons: "48 aulas",
		students: "203 alunos",
		score: "5.0",
		instructor: "Hudson Vini",
		instructorRole: "Dev Front-End",
		instructorImage: "/images/professor-kinud.png",
		price: "R$397,00",
		installments: "ou 12x de R$41,08/mes",
		statusLabel: "Turma noturna",
		tool: "React, Next.js e Sass",
		language: "Portugues",
		access: "12 meses",
		certificate: "Certificado incluso",
		tags: ["React", "Next.js", "UI"],
		outcomes: [
			{
				title: "Interface premium",
				text: "Design responsivo, componentes reutilizaveis e acabamento visual.",
				image: "/images/servicos-1.webp",
			},
			{
				title: "Dados dinamicos",
				text: "Estrutura pronta para integrar API, slugs, detalhes e estados.",
				image: "/images/estrutura-4.webp",
			},
			{
				title: "Deploy profissional",
				text: "Performance, organizacao de projeto e publicacao.",
				image: "/images/servicos-2.webp",
			},
		],
		modules: [
			{ number: "01", title: "Base do projeto", lessons: ["Setup Next.js", "Rotas e layouts", "Sass modules"] },
			{ number: "02", title: "Componentes", lessons: ["Cards", "Hero", "Navegacao", "Estados visuais"] },
			{ number: "03", title: "Integracao", lessons: ["Mock API", "Slugs dinamicos", "Loading e erro"] },
			{ number: "04", title: "Publicacao", lessons: ["Build", "Otimização", "Deploy"] },
		],
		faq: [
			{ question: "Preciso saber React?", answer: "Ajuda, mas a trilha revisa os fundamentos essenciais." },
			{ question: "Tem projeto final?", answer: "Sim. A entrega final e uma pagina funcional com dados dinamicos." },
			{ question: "Posso usar no portfolio?", answer: "Sim. Os desafios sao pensados para portfolio." },
		],
	},
	{
		id: "motion-design",
		slug: "motion-design",
		title: "Motion Design",
		eyebrow: "Adobe After Effects",
		shortDescription:
			"Crie animacoes, transicoes, composicoes e pecas visuais com fluxo profissional de motion.",
		description:
			"Uma experiencia para criar pecas animadas com ritmo, composicao, referencias visuais e tecnica de After Effects.",
		image: "/images/image-motion-curso.png",
		heroImage: "/images/quem-somos.webp",
		previewImage: "/images/atleta-digital-1.webp",
		footerImage: "/images/image-motion-curso.png",
		vimeoUrl: "https://vimeo.com/76979871",
		accent: "#7fdc82",
		heroBackground:
			"linear-gradient(135deg, #183f28 0%, #0c251c 48%, #09030f 100%)",
		heroDotColor: "rgba(127, 220, 130, 0.42)",
		level: "iniciante",
		hours: "72h",
		lessons: "48 aulas",
		students: "97 alunos",
		score: "4.8",
		instructor: "FX Leko",
		instructorRole: "Motion Designer",
		instructorImage: "/images/professor-lelou.png",
		price: "R$347,00",
		installments: "ou 12x de R$35,88/mes",
		statusLabel: "Workshop intensivo",
		tool: "After Effects e Photoshop",
		language: "Portugues",
		access: "12 meses",
		certificate: "Certificado incluso",
		tags: ["Motion", "Design", "After Effects"],
		outcomes: [
			{ title: "Direcao visual", text: "Referencias, moodboard e composicao.", image: "/images/quem-somos.webp" },
			{ title: "Animacao", text: "Keyframes, cenas e movimentos ritmados.", image: "/images/atleta-digital-1.webp" },
			{ title: "Finalizacao", text: "Refino, exportacao e apresentacao.", image: "/images/servicos-2.webp" },
		],
		modules: [
			{ number: "01", title: "Referencias", lessons: ["Briefing visual", "Pesquisa de estilo", "Organizacao"] },
			{ number: "02", title: "Design", lessons: ["Composicao", "Assets", "Separacao de camadas"] },
			{ number: "03", title: "Animacao", lessons: ["Keyframes", "Transicoes", "Ritmo"] },
			{ number: "04", title: "Entrega", lessons: ["Render", "Revisao", "Portfolio"] },
		],
		faq: [
			{ question: "Preciso dominar After Effects?", answer: "Nao. O curso comeca pela base do fluxo." },
			{ question: "Recebo arquivos do projeto?", answer: "Sim. A estrutura ja preve assets e arquivos de apoio." },
			{ question: "Tem certificado?", answer: "Sim, ao concluir a carga horaria." },
		],
	},
	{
		id: "atleta-digital",
		slug: "atleta-digital",
		title: "Atleta Digital",
		eyebrow: "E-sports e Performance",
		shortDescription:
			"Treino competitivo com fundamentos de estrategia, reflexo, comunicacao, leitura de jogo e rotina.",
		description:
			"Uma trilha para jogadores que querem evoluir com treino estruturado, fundamentos competitivos e rotina de performance.",
		image: "/images/curso-atleta.png",
		heroImage: "/images/atleta-digital-1.webp",
		previewImage: "/images/atleta-digital-2.webp",
		footerImage: "/images/curso-atleta.png",
		vimeoUrl: "https://vimeo.com/76979871",
		accent: "#f4d03f",
		heroBackground:
			"linear-gradient(135deg, #4f1173 0%, #2a073e 48%, #09030f 100%)",
		heroDotColor: "rgba(244, 208, 63, 0.48)",
		level: "iniciante",
		hours: "72h",
		lessons: "40 aulas",
		students: "156 alunos",
		score: "4.9",
		instructor: "Equipe Javis",
		instructorRole: "Treinadores de E-sports",
		instructorImage: "/images/professor-kinud.png",
		price: "R$297,00",
		installments: "ou 12x de R$30,70/mes",
		statusLabel: "Ao vivo e presencial",
		tool: "Treino, analise e comunicacao",
		language: "Portugues",
		access: "12 meses",
		certificate: "Certificado incluso",
		tags: ["E-sports", "FPS", "Performance"],
		outcomes: [
			{ title: "Rotina de treino", text: "Aquecimento, mira, reflexo e consistencia.", image: "/images/atleta-digital-1.webp" },
			{ title: "Leitura de jogo", text: "Decisao, comunicacao e estrategia.", image: "/images/atleta-digital-2.webp" },
			{ title: "Performance", text: "Metas, revisao e evolucao mensuravel.", image: "/images/curso-atleta.png" },
		],
		modules: [
			{ number: "01", title: "Fundamentos", lessons: ["Setup", "Sensibilidade", "Rotina"] },
			{ number: "02", title: "Mecanica", lessons: ["Mira", "Movimentacao", "Reflexo"] },
			{ number: "03", title: "Estrategia", lessons: ["Comunicacao", "Mapas", "Tomada de decisao"] },
			{ number: "04", title: "Competitivo", lessons: ["Review", "Scrim", "Plano de evolucao"] },
		],
		faq: [
			{ question: "E para iniciantes?", answer: "Sim. A base comeca pelos fundamentos de treino." },
			{ question: "Tem aulas praticas?", answer: "Sim. O curso e centrado em pratica e revisao." },
			{ question: "Funciona para varios jogos?", answer: "A metodologia e aplicavel a diferentes jogos competitivos." },
		],
	},
];

export const comingSoonPublicCourses = [
	{
		id: "ia-criativa",
		title: "IA Criativa para Projetos",
		month: "Junho",
		image: "/images/estrutura-1.webp",
		tags: ["Prompt", "Design", "Automacao"],
	},
	{
		id: "modelagem-3d",
		title: "Modelagem 3D para Makers",
		month: "Julho",
		image: "/images/robotica-2.webp",
		tags: ["3D", "Impressao", "Produto"],
	},
	{
		id: "valorant-performance",
		title: "Valorant Performance Lab",
		month: "Agosto",
		image: "/images/atleta-digital-2.webp",
		tags: ["FPS", "Treino", "E-sports"],
	},
];

export const academyStats = [
	{ value: "12+", label: "trilhas praticas" },
	{ value: "420h", label: "de conteudo aplicado" },
	{ value: "100%", label: "foco em projeto real" },
];

export const coursesPageFooterVisual = {
	image: "/images/cs.png",
	alt: "Javis Academy",
};

export function getPublicCourseBySlug(slug) {
	return publicCourses.find((course) => course.slug === slug);
}
