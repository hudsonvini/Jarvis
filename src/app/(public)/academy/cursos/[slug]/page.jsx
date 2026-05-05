"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
	ArrowRight,
	Award,
	CalendarDays,
	Check,
	Clock3,
	LockKeyhole,
	Play,
	ShieldCheck,
	ShoppingCart,
	Sparkles,
	Star,
	Users,
	Video,
} from "lucide-react";
import Navbar from "@/components/_global/Navbar/Navbar";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";
import FooterReveal from "@/components/_global/FooterReveal/FooterReveal";
import LevelBadge from "@/components/_ui/LevelBadge/LevelBadge";
import { getPublicCourseBySlug, publicCourses } from "@/data/publicCourses";
import styles from "./page.module.scss";

const purchaseBenefits = [
	{ icon: ShieldCheck, text: "Compra 100% segura" },
	{ icon: CalendarDays, text: "12 meses de acesso" },
	{ icon: Video, text: "Acesso a plataforma de aulas" },
	{ icon: Award, text: "Certificado de conclusao" },
];

export default function CourseInternalPage() {
	const params = useParams();
	const course = getPublicCourseBySlug(params?.slug);
	const [showPreloader, setShowPreloader] = useState(true);
	const [ready, setReady] = useState(false);
	const [footerReady, setFooterReady] = useState(false);

	const relatedCourses = useMemo(() => {
		if (!course) return [];

		return publicCourses
			.filter((item) => item.slug !== course.slug)
			.slice(0, 3);
	}, [course]);

	if (!course) {
		notFound();
	}

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
					marqueeText={course.title}
				/>
			)}

			{ready && (
				<>
					<Navbar logoSrc="/images/logo.png" logoAlt="Javis" />

					<main className={styles.page} style={{ "--course-accent": course.accent }}>
						<section className={styles.hero}>
							<div className={styles.heroPattern} aria-hidden="true" />
							<div className={styles.bottomStrip} aria-hidden="true" />

							<div className={styles.heroInner}>
								<div className={styles.heroContent}>
									<span className={styles.courseTag}>{course.eyebrow}</span>
									<h1>{course.title}</h1>
									<p>{course.shortDescription}</p>

									<div className={styles.teacher}>
										<img src={course.instructorImage} alt={course.instructor} />
										<div>
											<span>Com</span>
											<strong>{course.instructor}</strong>
											<small>{course.instructorRole}</small>
										</div>
									</div>

									<div className={styles.purchaseBox}>
										<div className={styles.price}>
											<strong>{course.price}</strong>
											<span>{course.installments}</span>
										</div>

										<Link href="/cadastro" className={styles.buyButton}>
											<ShoppingCart />
											Comprar agora
										</Link>

										<button type="button" className={styles.lockButton}>
											<LockKeyhole />
										</button>
									</div>
								</div>

								<div className={styles.previewShell}>
									<div className={styles.previewCard}>
										<img src={course.previewImage} alt={`Preview ${course.title}`} />
										<div className={styles.previewOverlay} />
										<button type="button" className={styles.playButton} aria-label="Assistir VSL">
											<Play />
										</button>
										<div className={styles.previewBadge}>
											<Video />
											<span>Preview VSL</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className={styles.courseSpecs}>
							<div className={styles.specGrid}>
								<div>
									<span>Nivel</span>
									<LevelBadge level={course.level} variant="compact" />
								</div>
								<div>
									<span>Ferramenta</span>
									<strong>{course.tool}</strong>
								</div>
								<div>
									<span>Idioma</span>
									<strong>{course.language}</strong>
								</div>
								<div>
									<span>Carga horaria</span>
									<strong>{course.hours}</strong>
								</div>
								<div>
									<span>Acesso</span>
									<strong>{course.access}</strong>
								</div>
								<div>
									<span>Certificado</span>
									<strong>{course.certificate}</strong>
								</div>
							</div>
						</section>

						<section className={styles.aboutSection}>
							<div className={styles.sectionIntro}>
								<span>Sobre o curso</span>
								<h2>Uma trilha pratica para sair do conceito e chegar no projeto.</h2>
							</div>

							<div className={styles.aboutText}>
								<p>{course.description}</p>
								<p>
									O conteudo foi organizado para integracao simples com API: ficha
									tecnica, modulos, aulas, beneficios, mentor, FAQ e cursos
									relacionados podem vir diretamente do backend mantendo o mesmo
									contrato de renderizacao.
								</p>
							</div>
						</section>

						<section className={styles.outcomesSection}>
							{course.outcomes.map((item) => (
								<article key={item.title} className={styles.outcomeCard}>
									<img src={item.image} alt={item.title} />
									<div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
								</article>
							))}
						</section>

						<section className={styles.modulesSection}>
							<div className={styles.sectionIntro}>
								<span>Modulos do curso</span>
								<h2>Conteudo pronto para liberar aula por aula.</h2>
							</div>

							<div className={styles.modulesList}>
								{course.modules.map((module) => (
									<article key={module.number} className={styles.moduleCard}>
										<div className={styles.moduleTop}>
											<span>{module.number}</span>
											<h3>{module.title}</h3>
										</div>

										<ul>
											{module.lessons.map((lesson, index) => (
												<li key={lesson}>
													<small>Aula {String(index + 1).padStart(2, "0")}</small>
													<p>{lesson}</p>
												</li>
											))}
										</ul>
									</article>
								))}
							</div>
						</section>

						<section className={styles.investmentSection}>
							<div className={styles.investmentCard}>
								<div>
									<span className={styles.courseTag}>Investimento</span>
									<h2>{course.title}</h2>
									<strong>{course.price} a vista</strong>
									<p>{course.installments}</p>

									<Link href="/cadastro" className={styles.buyButton}>
										<ShoppingCart />
										Comprar agora
									</Link>
								</div>

								<div className={styles.benefitsGrid}>
									{purchaseBenefits.map(({ icon: Icon, text }) => (
										<div key={text}>
											<Icon />
											<span>{text}</span>
										</div>
									))}
								</div>
							</div>
						</section>

						<section className={styles.mentorSection}>
							<img src={course.instructorImage} alt={course.instructor} />
							<div>
								<span>Mentor</span>
								<h2>{course.instructor}</h2>
								<p>
									{course.instructor} conduz as aulas com foco em pratica,
									repertorio e tomada de decisao. A proposta e aproximar o aluno
									de desafios reais, com um fluxo direto para produzir,
									documentar e apresentar o que aprendeu.
								</p>
							</div>
						</section>

						<section className={styles.experienceSection}>
							<div>
								<Sparkles />
								<h2>Feito com experiencia real</h2>
							</div>
							<p>
								A Javis Academy nasce para conectar educacao, games, criatividade
								e tecnologia em uma rotina de pratica. Cada curso e pensado como
								ponte entre aula, projeto e evolucao mensuravel.
							</p>
						</section>

						<section className={styles.faqSection}>
							<div className={styles.sectionIntro}>
								<span>Faq</span>
								<h2>Duvidas frequentes</h2>
							</div>

							<div className={styles.faqList}>
								{course.faq.map((item) => (
									<details key={item.question}>
										<summary>{item.question}</summary>
										<p>{item.answer}</p>
									</details>
								))}
							</div>
						</section>

						<section className={styles.relatedSection}>
							<div className={styles.sectionIntro}>
								<span>Confira mais cursos</span>
								<h2>Continue explorando a Academy.</h2>
							</div>

							<div className={styles.relatedGrid}>
								{relatedCourses.map((item) => (
									<article
										key={item.slug}
										className={styles.relatedCard}
										style={{ "--related-accent": item.accent }}
									>
										<img src={item.image} alt={item.title} />
										<div>
											<span>{item.eyebrow}</span>
											<h3>{item.title}</h3>
											<p>
												<Clock3 />
												{item.hours}
											</p>
											<p>
												<Users />
												{item.students}
											</p>
											<p>
												<Star />
												{item.score}
											</p>
										</div>
										<Link href={`/academy/cursos/${item.slug}`}>
											Saiba mais
											<ArrowRight />
										</Link>
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
