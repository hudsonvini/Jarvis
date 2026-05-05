"use client";

import { useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	CalendarDays,
	Clock3,
	Play,
	Sparkles,
	Star,
	Users,
} from "lucide-react";
import Navbar from "@/components/_global/Navbar/Navbar";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";
import FooterReveal from "@/components/_global/FooterReveal/FooterReveal";
import LevelBadge from "@/components/_ui/LevelBadge/LevelBadge";
import {
	academyStats,
	comingSoonPublicCourses,
	publicCourses,
} from "@/data/publicCourses";
import styles from "./page.module.scss";

export default function CursosPublicPage() {
	const [showPreloader, setShowPreloader] = useState(true);
	const [ready, setReady] = useState(false);
	const [footerReady, setFooterReady] = useState(false);

	const handlePreloaderComplete = () => {
		setShowPreloader(false);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setReady(true);

				setTimeout(() => {
					setFooterReady(true);
				}, 350);
			});
		});
	};

	return (
		<>
			{showPreloader && (
				<PreloaderReveal
					isVisible={showPreloader}
					onComplete={handlePreloaderComplete}
					logoSrc="/images/min-logo-line.svg"
					marqueeText="Javis Academy"
				/>
			)}

			{ready && (
				<>
					<Navbar logoSrc="/images/logo.png" logoAlt="Javis" />

					<main className={styles.page}>

						<section id="cursos-abertos" className={styles.coursesSection}>
							<div className={styles.sectionHeader}>
								<span className={styles.sectionEyebrow}>Learn from the Best</span>
								<h2>Cursos abertos</h2>
								<p>
									Grade mockada para integracao: substitua este array pelo retorno
									da API e mantenha o mesmo contrato visual dos cards.
								</p>
							</div>

							<div className={styles.coursesGrid}>
								{publicCourses.map((course) => (
									<article
										key={course.id}
										className={styles.courseCard}
										style={{ "--course-accent": course.accent }}
									>
										<div className={styles.courseImage}>
											<img src={course.image} alt={course.title} />
											<span>{course.statusLabel}</span>
										</div>

										<div className={styles.courseBody}>
											<div>
												<p className={styles.courseEyebrow}>{course.eyebrow}</p>
												<h3>{course.title}</h3>
												<p className={styles.courseDescription}>{course.shortDescription}</p>
											</div>

											<LevelBadge level={course.level} variant="compact" />

											<div className={styles.courseMeta}>
												<span>
													<Clock3 />
													{course.hours}
												</span>
												<span>
													<CalendarDays />
													{course.lessons}
												</span>
												<span>
													<Users />
													{course.students}
												</span>
											</div>
										</div>

										<div className={styles.courseFooter}>
											<div>
												<span>Professor</span>
												<strong>{course.instructor}</strong>
											</div>
											<div className={styles.score}>
												<Star />
												{course.score}
											</div>
											<Link
												href={`/academy/cursos/${course.slug}`}
												aria-label={`Ver ${course.title}`}
											>
												<ArrowRight />
											</Link>
										</div>
									</article>
								))}
							</div>
						</section>

						<section id="vsl" className={styles.offerSection}>
							<div className={styles.offerPanel}>
								<div className={styles.offerContent}>
									<span className={styles.sectionEyebrow}>Javis Academy</span>
									<h2>Uma escola para quem quer criar, competir e construir.</h2>
									<p>
										Da primeira aula ao projeto final, cada trilha combina
										pratica guiada, repertorio visual, desafios e mentoria para
										transformar curiosidade em producao real.
									</p>

									<div className={styles.stats}>
										{academyStats.map((item) => (
											<div key={item.label}>
												<strong>{item.value}</strong>
												<span>{item.label}</span>
											</div>
										))}
									</div>

									<a href="#cursos-em-breve" className={styles.primaryButton}>
										Ver proximas turmas
										<ArrowRight />
									</a>
								</div>

								<div className={styles.vslCard}>
									<div className={styles.vslMedia}>
										<img src="/images/quem-somos.webp" alt="Javis Academy" />
										<button type="button" aria-label="Assistir apresentacao">
											<Play />
										</button>
									</div>
									<div className={styles.vslInfo}>
										<Sparkles />
										<p>
											Assista a apresentacao da metodologia e veja como as trilhas
											se conectam com games, tecnologia e criacao digital.
										</p>
									</div>
								</div>
							</div>
						</section>

						<section id="cursos-em-breve" className={styles.comingSection}>
							<div className={styles.sectionHeader}>
								<span className={styles.sectionEyebrow}>Roadmap Academy</span>
								<h2>Cursos que estao por vir</h2>
								<p>
									Proximas turmas preparadas para entrar no catalogo assim que a
									grade oficial for liberada.
								</p>
							</div>

							<div className={styles.comingGrid}>
								{comingSoonPublicCourses.map((course) => (
									<article key={course.id} className={styles.comingCard}>
										<img src={course.image} alt={course.title} />
										<div className={styles.comingContent}>
											<span>{course.month}</span>
											<h3>{course.title}</h3>
											<div>
												{course.tags.map((tag) => (
													<small key={tag}>{tag}</small>
												))}
											</div>
										</div>
									</article>
								))}
							</div>
						</section>
					</main>
				</>
			)}

			<FooterReveal isReady={footerReady} />
		</>
	);
}
