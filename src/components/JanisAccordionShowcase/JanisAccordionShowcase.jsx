"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./JanisAccordionShowcase.module.scss";

const items = [
	{
		id: 1,
		title: "Quem Somos",
		subtitle: "Aprendizado e diversão pode ser no mesmo lugar!",
		tags: ["Metodologia", "Nossa missão"],
		color: "blue",
		buttonLabel: "Saiba mais",
		images: ["/images/javis/quem-somos-1.jpg", "/images/javis/quem-somos-2.jpg"],
		description:
			"A Javis é um espaço que une tecnologia, educação e cultura gamer para criar experiências de aprendizado e entretenimento. Oferecemos cursos como Robótica e Atleta Digital, que desenvolvem habilidades como lógica, estratégia, disciplina e criatividade. Com uma infraestrutura moderna e máquinas de alta performance, também proporcionamos experiências gamer como Corujões, Aniversários e Pacotes de Horas, reunindo amigos e famílias em um ambiente seguro, imersivo e inovador. Na Javis, aprendizado, tecnologia e diversão caminham juntos, formando jovens e criando experiências marcantes para quem vive o universo gamer.",
	},
	{
		id: 2,
		title: "Nossos Serviços",
		tags: ["Entretenimento", "Festa de Aniversário"],
		color: "sky",
		buttonLabel: "Saiba mais",
		images: ["/images/javis/servicos-1.jpg", "/images/javis/servicos-2.jpg"],
		description:
			"Na Javis, oferecemos experiências gamer imersivas e memoráveis, com estrutura moderna, tecnologia e máquinas de alta performance. Seja para jogar com amigos, comemorar uma ocasião especial ou aproveitar momentos de lazer, criamos um ambiente confortável, seguro e preparado para quem ama a cultura gamer. Aqui, o entretenimento vai além do jogo: é experiência, comunidade e diversão levada a sério.",
	},
	{
		id: 3,
		title: "Nossa estrutura",
		tags: ["Fotos", "Shopping Rio Poty"],
		color: "green",
		buttonLabel: "Saiba mais",
		duration: "Estrutura de Ponta",
		images: [
			"/images/estrutura-1.webp",
			"/images/estrutura-2.webp",
			"/images/estrutura-3.webp",
			"/images/estrutura-4.webp",
		],
		description:
			"A Javis oferece uma infraestrutura moderna e tecnológica, com máquinas de última geração, ambiente climatizado e setup de alta performance, pensados para garantir conforto, foco e qualidade nas atividades. O espaço foi criado para unir educação, tecnologia e entretenimento, com ambientes preparados para aulas, práticas, desafios em equipe e experiências imersivas no universo gamer. Além da formação, a estrutura também recebe momentos de lazer e eventos, como aluguel de máquinas, aniversários gamer e corujões, proporcionando experiências divertidas e marcantes em um ambiente seguro e inovador.",
	},
	{
		id: 4,
		title: "Curso Robótica",
		tags: ["Manoel Nunes", "Prêmio Nobel", "Bolsa EUA"],
		color: "red",
		buttonLabel: "Saiba mais",
		duration: "Carga Horária: 20h",
		images: ["/images/javis/robotica-1.jpg", "/images/javis/robotica-2.jpg"],
		description:
			"No curso de Robótica da Javis, os alunos transformam tecnologia em criação prática. Em vez de aprender apenas conceitos isolados, eles passam por uma jornada completa: identificar problemas reais, desenvolver ideias, construir protótipos e integrar soluções funcionais. Durante o curso, desenvolvem pensamento lógico, autonomia, visão de projeto e capacidade de testar e melhorar suas próprias criações. A aprendizagem acontece por meio de projetos que integram Design Thinking, eletrônica, Arduino, sensores, atuadores e modelagem 3D, estimulando investigação, experimentação e resolução de problemas. Mais do que ensinar robótica, o curso forma jovens capazes de pensar, criar, testar e evoluir soluções, preparando-os para um mundo cada vez mais conectado à inovação.",
	},
	{
		id: 5,
		title: "Curso Atleta Digital",
		tags: ["Extra Curricular", "Design", "Gamer", "Inglês"],
		color: "purple",
		buttonLabel: "Saiba mais",
		duration: "Carga Horária: 78h",
		images: [
			"/images/atleta-digital-1.webp",
			"/images/atleta-digital-2.webp",
		],
		description:
			"Na prática, o aluno aprende sobre competição saudável, conviver melhor e se posicionar melhor. Tudo isso dentro de uma metodologia que une formação comportamental, visão estratégica e repertório digital, utilizando os e-sports para gerar valores que fazem sentido para a vida.",
	},
];

function MediaGallery({ images = [], isActive, title }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const total = images.length;

	useEffect(() => {
		setCurrentIndex(0);
	}, [images]);

	useEffect(() => {
		if (!isActive) return;
		if (total <= 2) return;

		const interval = window.setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % total);
		}, 2800);

		return () => window.clearInterval(interval);
	}, [isActive, total]);

	if (!images.length) {
		return <div className={styles.mediaPlaceholder} />;
	}

	if (images.length === 1) {
		return (
			<div className={styles.mediaSingle}>
				<img src={images[0]} alt={title} />
			</div>
		);
	}

	if (images.length === 2) {
		return (
			<div className={styles.mediaDouble}>
				{images.map((image, index) => (
					<div key={index} className={styles.mediaDoubleItem}>
						<img src={image} alt={`${title} ${index + 1}`} />
					</div>
				))}
			</div>
		);
	}

	return (
		<div className={styles.mediaSlider}>
			<div
				className={styles.mediaTrack}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className={styles.mediaSlide}>
						<img src={image} alt={`${title} ${index + 1}`} />
					</div>
				))}
			</div>

			<div className={styles.mediaDots}>
				{images.map((_, index) => (
					<span
						key={index}
						className={`${styles.mediaDot} ${
							index === currentIndex ? styles.mediaDotActive : ""
						}`}
					/>
				))}
			</div>
		</div>
	);
}

export default function JanisAccordionShowcase() {
	const [activeIndex, setActiveIndex] = useState(items.length - 1);

	const cardRefs = useRef([]);
	const userInteractedRef = useRef(false);

	const activeItem = useMemo(() => {
		if (activeIndex === null) return null;
		return items[activeIndex];
	}, [activeIndex]);

	useEffect(() => {
		if (!userInteractedRef.current) return;
		if (activeIndex === null) return;

		const activeCard = cardRefs.current[activeIndex];
		if (!activeCard) return;

		const headerOffset = 24;
		const rect = activeCard.getBoundingClientRect();
		const absoluteTop = window.scrollY + rect.top;
		const cardCenter = absoluteTop + rect.height / 2;
		const viewportCenter = window.innerHeight / 2;
		const targetTop = Math.max(cardCenter - viewportCenter - headerOffset, 0);

		window.scrollTo({
			top: targetTop,
			behavior: "smooth",
		});
	}, [activeIndex]);

	const handleOpen = (index) => {
		userInteractedRef.current = true;
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<div className={styles.brandArea}>
						<img src="/images/logo.png" alt="Logo Javis" />
					</div>

					<div className={styles.headerText}>
						<strong>Aprendizado e diversão</strong>
						<span>pode ser no mesmo lugar!</span>
					</div>
				</div>

				<div className={styles.contentGrid}>
					<div className={styles.accordionColumn}>
						{items.map((item, index) => {
							const isActive = activeIndex === index;

							return (
								<button
									key={item.id}
									type="button"
									ref={(el) => {
										cardRefs.current[index] = el;
									}}
									className={`${styles.card} ${styles[item.color]} ${
										isActive ? styles.active : styles.inactive
									}`}
									onClick={() => handleOpen(index)}
									aria-expanded={isActive}
								>
									<div className={styles.cardTop}>
										<div className={styles.cardText}>
											<h3>{item.title}</h3>

											<div className={styles.tags}>
												{item.tags.map((tag) => (
													<span key={tag} className={styles.tag}>
														{tag}
													</span>
												))}
											</div>
										</div>

										<span className={styles.icon}>
											<span
												className={
													isActive ? styles.closeIcon : styles.chevron
												}
											/>
										</span>
									</div>

									<div
										className={`${styles.expandArea} ${
											isActive ? styles.expandAreaOpen : ""
										}`}
									>
										<MediaGallery
											images={item.images}
											isActive={isActive}
											title={item.title}
										/>

										<div className={styles.metaRow}>
											<span>{item.duration}</span>
											<span className={styles.cta}>{item.buttonLabel}</span>
										</div>

										<p>{item.description}</p>
									</div>
								</button>
							);
						})}
					</div>

					{activeItem && (
						<aside className={styles.visualColumn}>
							<div className={styles.visualCard}>
								<div
									className={`${styles.visualGlow} ${styles[activeItem.color]}`}
								/>

								<div className={styles.visualInner}>
									<span className={styles.visualLabel}>Destaque atual</span>
									<h2>{activeItem.title}</h2>
									<p>{activeItem.description}</p>

									<div className={styles.visualTags}>
										{activeItem.tags.map((tag) => (
											<span key={tag}>{tag}</span>
										))}
									</div>

									<div className={styles.visualFooter}>
										<span>{activeItem.duration}</span>
										<button type="button">{activeItem.buttonLabel}</button>
									</div>
								</div>
							</div>
						</aside>
					)}
				</div>
			</div>
		</section>
	);
}