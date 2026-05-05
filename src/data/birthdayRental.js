export const birthdayPackages = [
	{
		id: "start",
		name: "Arena Start",
		price: "R$890",
		duration: "3 horas",
		guests: "ate 20 convidados",
		description:
			"Para comemorar com games, estrutura pronta e acompanhamento basico da equipe Javis.",
		features: [
			"Uso exclusivo da arena gamer",
			"Setup com PCs e consoles",
			"1 monitor de apoio",
			"Playlist e telao para parabens",
		],
		highlight: false,
	},
	{
		id: "premium",
		name: "Arena Premium",
		price: "R$1.490",
		duration: "4 horas",
		guests: "ate 35 convidados",
		description:
			"Experiencia completa para aniversario gamer com campeonato, fotos e suporte de evento.",
		features: [
			"Espaco completo reservado",
			"Mini campeonato com premiacao",
			"2 monitores de apoio",
			"Area para bolo, mesa e fotos",
			"Convite digital personalizado",
		],
		highlight: true,
	},
	{
		id: "ultimate",
		name: "Arena Ultimate",
		price: "R$2.290",
		duration: "5 horas",
		guests: "ate 50 convidados",
		description:
			"Para quem quer ocupar a Javis como uma experiencia premium, com roteiro e operacao dedicada.",
		features: [
			"Espaco completo + lounge",
			"Campeonato narrado",
			"Equipe dedicada no evento",
			"Aftermovie curto do aniversario",
			"Decoracao gamer base",
		],
		highlight: false,
	},
];

export const birthdayCalendarDays = [
	{ day: 1, status: "free", label: "Livre", slots: ["14h", "18h"] },
	{ day: 2, status: "booked", label: "Reservado", slots: [] },
	{ day: 3, status: "free", label: "Livre", slots: ["10h", "15h"] },
	{ day: 4, status: "busy", label: "Poucos horarios", slots: ["19h"] },
	{ day: 5, status: "free", label: "Livre", slots: ["14h", "18h"] },
	{ day: 6, status: "booked", label: "Reservado", slots: [] },
	{ day: 7, status: "free", label: "Livre", slots: ["10h", "16h"] },
	{ day: 8, status: "free", label: "Livre", slots: ["14h"] },
	{ day: 9, status: "busy", label: "Poucos horarios", slots: ["18h"] },
	{ day: 10, status: "booked", label: "Reservado", slots: [] },
	{ day: 11, status: "free", label: "Livre", slots: ["10h", "14h", "18h"] },
	{ day: 12, status: "free", label: "Livre", slots: ["15h"] },
	{ day: 13, status: "booked", label: "Reservado", slots: [] },
	{ day: 14, status: "free", label: "Livre", slots: ["10h", "18h"] },
	{ day: 15, status: "busy", label: "Poucos horarios", slots: ["19h"] },
	{ day: 16, status: "free", label: "Livre", slots: ["14h", "18h"] },
	{ day: 17, status: "booked", label: "Reservado", slots: [] },
	{ day: 18, status: "free", label: "Livre", slots: ["10h", "16h"] },
	{ day: 19, status: "free", label: "Livre", slots: ["14h"] },
	{ day: 20, status: "busy", label: "Poucos horarios", slots: ["18h"] },
	{ day: 21, status: "free", label: "Livre", slots: ["10h", "14h"] },
	{ day: 22, status: "booked", label: "Reservado", slots: [] },
	{ day: 23, status: "free", label: "Livre", slots: ["15h", "19h"] },
	{ day: 24, status: "free", label: "Livre", slots: ["10h"] },
	{ day: 25, status: "busy", label: "Poucos horarios", slots: ["18h"] },
	{ day: 26, status: "booked", label: "Reservado", slots: [] },
	{ day: 27, status: "free", label: "Livre", slots: ["14h", "18h"] },
	{ day: 28, status: "free", label: "Livre", slots: ["10h", "16h"] },
	{ day: 29, status: "busy", label: "Poucos horarios", slots: ["19h"] },
	{ day: 30, status: "free", label: "Livre", slots: ["14h", "18h"] },
];

export const birthdayGallery = [
	{
		title: "Arena gamer",
		image: "/images/atleta-digital-1.webp",
		text: "Estacoes preparadas para jogar, competir e criar partidas guiadas.",
	},
	{
		title: "Lounge da turma",
		image: "/images/quem-somos.webp",
		text: "Area para receber convidados, tirar fotos e organizar o parabens.",
	},
	{
		title: "Experiencia tech",
		image: "/images/estrutura-2.webp",
		text: "Telao, som, setups e monitoria para manter o evento fluido.",
	},
	{
		title: "Momentos do evento",
		image: "/images/servicos-1.webp",
		text: "Espaco pensado para fotos, videos e lembrancas com identidade gamer.",
	},
];

export const birthdayAddons = [
	"Convite digital personalizado",
	"Mini campeonato com ranking",
	"Fotografia do evento",
	"Decoracao tematica gamer",
	"Kit lanche por convidado",
	"Transmissao no telao",
];
