"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./TeachersCarousel.module.scss";

const teachersByGame = {
	cs: [
		{
			id: 1,
			title: "Land1n",
			name: "Paulo",
			role: "Profissional & Professor",
			image: "/images/curso-atleta.png",
		},
		{
			id: 2,
			title: "kinud",
			name: "Anderson Monteiro",
			role: "Profissional & Professor",
			image: "/images/professor-kinud.png",
		},
		{
			id: 3,
			title: "Leloutares",
			name: "Breno",
			role: "Profissional & Professor",
			image: "/images/professor-lelou.png",
		},
		{
			id: 4,
			title: "zakk",
			name: "Guilherme",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-4.png",
		},
	],
	lol: [
		{
			id: 1,
			title: "Damage",
			name: "Lucas Ribeiro",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-5.png",
		},
		{
			id: 2,
			title: "Tockers",
			name: "Matheus",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-6.png",
		},
		{
			id: 3,
			title: "Aegis",
			name: "Rafael Costa",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-7.png",
		},
		{
			id: 4,
			title: "Vision",
			name: "Pedro Lima",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-8.png",
		},
	],
	valorant: [
		{
			id: 1,
			title: "Sacy",
			name: "Gustavo",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-4.png",
		},
		{
			id: 2,
			title: "Less",
			name: "Felipe",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-5.png",
		},
		{
			id: 3,
			title: "Aspas",
			name: "Erick",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-6.png",
		},
		{
			id: 4,
			title: "Cauanzin",
			name: "Cauan",
			role: "Profissional & Professor",
			image: "/images/jarvis/prof-7.png",
		},
	],
};

const gameFilters = [
	{
		key: "cs",
		label: "CS",
		logo: "/images/cslogo.svg",
	},
	{
		key: "lol",
		label: "LoL",
		logo: "/images/lollogo.svg",
	},
	{
		key: "valorant",
		label: "Valorant",
		logo: "/images/valorantlogo.svg",
	},
];

export default function TeachersCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activeGame, setActiveGame] = useState("cs");
	const [visibleCards, setVisibleCards] = useState(3);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const updateVisibleCards = () => {
			if (window.innerWidth <= 767) {
				setVisibleCards(1);
				return;
			}

			if (window.innerWidth <= 1180) {
				setVisibleCards(2);
				return;
			}

			setVisibleCards(3);
		};

		updateVisibleCards();
		window.addEventListener("resize", updateVisibleCards);

		return () => window.removeEventListener("resize", updateVisibleCards);
	}, []);

	const teachers = useMemo(() => {
		return teachersByGame[activeGame] || [];
	}, [activeGame]);

	const maxIndex = Math.max(teachers.length - visibleCards, 0);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
	};

	const handleGameChange = (gameKey) => {
		if (gameKey === activeGame) return;

		setIsAnimating(true);

		setTimeout(() => {
			setActiveGame(gameKey);
			setCurrentIndex(0);

			setTimeout(() => {
				setIsAnimating(false);
			}, 80);
		}, 180);
	};

	return (
		<section className={styles.sectionTeachers}>
			<div className={styles.inner}>
				<div className={styles.topBar}>
					<div className={styles.headingBlock}>
						<span className={styles.eyebrow}>PROFESSORES E-SPORTS</span>

						<p className={styles.description}>
							Conheça alguns dos profissionais que elevam a experiência da
							Jarvis com visão estratégica, repertório de mercado e domínio
							prático.
						</p>
					</div>

					<div className={styles.controls}>
						<div className={styles.gameFilters} aria-label="Filtrar por jogo">
							{gameFilters.map((game) => (
								<button
									key={game.key}
									type="button"
									onClick={() => handleGameChange(game.key)}
									className={`${styles.gameFilterButton} ${
										activeGame === game.key ? styles.gameFilterButtonActive : ""
									}`}
									aria-label={`Mostrar professores de ${game.label}`}
								>
									<img
										src={game.logo}
										alt={game.label}
										className={styles.gameFilterLogo}
									/>
								</button>
							))}
						</div>

						<div className={styles.navButtons}>
							<button
								type="button"
								onClick={handlePrev}
								className={styles.navButton}
								aria-label="Professor anterior"
							>
								<span>←</span>
							</button>

							<button
								type="button"
								onClick={handleNext}
								className={styles.navButton}
								aria-label="Próximo professor"
							>
								<span>→</span>
							</button>
						</div>
					</div>
				</div>

				<div className={styles.sliderViewport}>
					<div
						className={`${styles.sliderTrack} ${
							isAnimating ? styles.sliderTrackChanging : ""
						}`}
						style={{
							transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
						}}
					>
						{teachers.map((teacher) => (
							<article key={`${activeGame}-${teacher.id}`} className={styles.slide}>
								<div className={styles.card}>
                                    
									<div className={styles.cardGlow} />

									<div className={styles.cardHeader}>
										<div className={styles.cardTopIcon}>
											<span />
											<span />
											<span />
										</div>

										<h3 className={styles.cardTitle}>{teacher.title}</h3>

										<p className={styles.cardName}>{teacher.name}</p>

										<div className={styles.cardRole}>
											<i />
											<span>{teacher.role}</span>
										</div>
									</div>

									<div className={styles.mediaArea}>
										<div className={styles.mediaOverlay} />
										<img
											src={teacher.image}
											alt={teacher.name}
											className={styles.teacherImage}
										/>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}