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
		duration: "Carga Horária: 20h",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	},
	{
		id: 2,
		title: "Nossos Serviços",
		tags: ["Entretenimento", "Festa de Aniversário"],
		color: "sky",
		buttonLabel: "Saiba mais",
		duration: "Carga Horária: 20h",
		description:
			"Oferecemos experiências criativas, educativas e interativas para crianças, famílias e escolas em um ambiente acolhedor e inspirador.",
	},
	{
		id: 3,
		title: "Nossa estrutura",
		tags: ["Fotos", "Shopping Rio Poty"],
		color: "green",
		buttonLabel: "Saiba mais",
		duration: "Carga Horária: 20h",
		description:
			"Espaços planejados para estimular o desenvolvimento, a curiosidade e o aprendizado prático, com estrutura pensada para diferentes atividades.",
	},
	{
		id: 4,
		title: "Curso Robótica",
		tags: ["Manoel Nunes", "Prêmio Nobel", "Bolsa EUA"],
		color: "red",
		buttonLabel: "Saiba mais",
		duration: "Carga Horária: 20h",
		description:
			"Curso focado em lógica, criatividade e construção prática, incentivando a resolução de problemas de maneira divertida e tecnológica.",
	},
	{
		id: 5,
		title: "Curso Atleta Digital",
		tags: ["Extra Curricular", "Design", "Gamer", "Inglês"],
		color: "purple",
		buttonLabel: "Saiba mais",
		duration: "Carga Horária: 20h",
		description:
			"Um programa multidisciplinar para desenvolver habilidades digitais, criativas e comportamentais em uma jornada moderna e envolvente.",
	},
];

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
						<img src="/images/logo.png" alt="" />
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
										<div className={styles.mediaPlaceholder} />

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
							<div className={styles.visualSticky}>
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
							</div>
						</aside>
					)}
				</div>
			</div>
		</section>
	);
}