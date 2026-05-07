"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	CalendarDays,
	Check,
	Clock3,
	Gamepad2,
	MonitorPlay,
	PartyPopper,
	ShieldCheck,
	Sparkles,
	Users,
} from "lucide-react";
import Navbar from "@/components/_global/Navbar/Navbar";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";
import FooterReveal from "@/components/_global/FooterReveal/FooterReveal";
import {
	birthdayAddons,
	birthdayCalendarDays,
	birthdayGallery,
	birthdayPackages,
} from "@/data/birthdayRental";
import styles from "./page.module.scss";

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export default function BirthdayRentalPage() {
	const [showPreloader, setShowPreloader] = useState(true);
	const [ready, setReady] = useState(false);
	const [footerReady, setFooterReady] = useState(false);
	const [selectedDay, setSelectedDay] = useState(
		birthdayCalendarDays.find((day) => day.status !== "booked")
	);

	const availability = useMemo(() => {
		const free = birthdayCalendarDays.filter((day) => day.status === "free").length;
		const busy = birthdayCalendarDays.filter((day) => day.status === "busy").length;
		const booked = birthdayCalendarDays.filter((day) => day.status === "booked").length;

		return { free, busy, booked };
	}, []);

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
					marqueeText="Javis Birthday Arena"
				/>
			)}

			{ready && (
				<>
					<Navbar logoSrc="/images/logo.png" logoAlt="Javis" />

					<main className={styles.page}>
						{/* <section className={styles.hero}>
							<div className={styles.heroPattern} aria-hidden="true" />
							<div className={styles.heroGlow} aria-hidden="true" />
							<div className={styles.bottomStrip} aria-hidden="true" />

							<div className={styles.heroInner}>
								<div className={styles.heroCopy}>
									<span className={styles.kicker}>Javis Birthday Arena</span>
									<h1>Alugue a Javis para um aniversario gamer premium.</h1>
									<p>
										Um espaco imersivo para celebrar com amigos, setups gamers,
										telao, campeonato, area para parabens e uma equipe preparada
										para conduzir a experiencia.
									</p>

									<div className={styles.heroActions}>
										<a href="#agenda" className={styles.primaryButton}>
											Ver datas livres
											<CalendarDays />
										</a>
										<a href="#pacotes" className={styles.secondaryButton}>
											Comparar pacotes
											<ArrowRight />
										</a>
									</div>
								</div>

								<div className={styles.heroVisual}>
									<img src="/images/atleta-digital-1.webp" alt="Espaco gamer Javis" />
									<div className={styles.heroCard}>
										<span>Pacotes a partir de</span>
										<strong>R$890</strong>
										<small>evento reservado por horario</small>
									</div>
								</div>

								<div className={styles.heroStats}>
									<div>
										<Users />
										<strong>50</strong>
										<span>convidados</span>
									</div>
									<div>
										<Gamepad2 />
										<strong>3h+</strong>
										<span>de arena</span>
									</div>
									<div>
										<MonitorPlay />
										<strong>VSL</strong>
										<span>preview do espaco</span>
									</div>
								</div>
							</div>
						</section> */}

						<section id="agenda" className={styles.bookingSection}>
							<div className={styles.sectionHeader}>
								<span>Agenda mockada</span>
								<h2>Escolha uma data livre para reservar o espaco.</h2>
								<p>
									A estrutura ja separa dias livres, dias reservados e dias com
									poucos horarios. Depois, basta substituir este mock pelo retorno
									da API de agenda.
								</p>
							</div>

							<div className={styles.bookingGrid}>
								<div className={styles.calendarPanel}>
									<div className={styles.calendarTop}>
										<div>
											<span>Maio 2026</span>
											<strong>Disponibilidade</strong>
										</div>
										<div className={styles.legend}>
											<span className={styles.free}>Livre</span>
											<span className={styles.busy}>Poucos horarios</span>
											<span className={styles.booked}>Reservado</span>
										</div>
									</div>

									<div className={styles.weekGrid}>
										{weekDays.map((day) => (
											<span key={day}>{day}</span>
										))}
									</div>

									<div className={styles.daysGrid}>
										{birthdayCalendarDays.map((day) => (
											<button
												key={day.day}
												type="button"
												className={`${styles.dayButton} ${styles[day.status]} ${
													selectedDay?.day === day.day ? styles.selected : ""
												}`}
												onClick={() => setSelectedDay(day)}
											>
												<strong>{day.day}</strong>
												<span>{day.label}</span>
											</button>
										))}
									</div>
								</div>

								<aside className={styles.scheduleCard}>
									<span>Data selecionada</span>
									<h3>{selectedDay?.day} de maio</h3>
									<p>
										{selectedDay?.status === "booked"
											? "Esta data ja esta reservada. Escolha outro dia livre no calendario."
											: "Horarios disponiveis para conversar com a equipe e iniciar a pre-reserva."}
									</p>

									<div className={styles.slotList}>
										{selectedDay?.slots.length ? (
											selectedDay.slots.map((slot) => <button key={slot}>{slot}</button>)
										) : (
											<small>Nenhum horario disponivel</small>
										)}
									</div>

									<div className={styles.availabilityStats}>
										<div>
											<strong>{availability.free}</strong>
											<span>dias livres</span>
										</div>
										<div>
											<strong>{availability.busy}</strong>
											<span>com poucos horarios</span>
										</div>
										<div>
											<strong>{availability.booked}</strong>
											<span>reservados</span>
										</div>
									</div>

									<Link href="/cadastro" className={styles.primaryButton}>
										Iniciar pre-reserva
										<ArrowRight />
									</Link>
								</aside>
							</div>
						</section>

						<section id="pacotes" className={styles.packagesSection}>
							<div className={styles.sectionHeader}>
								<span>Pacotes</span>
								<h2>Compare formatos e escolha o tamanho da festa.</h2>
							</div>

							<div className={styles.packageGrid}>
								{birthdayPackages.map((pack) => (
									<article
										key={pack.id}
										className={`${styles.packageCard} ${pack.highlight ? styles.highlight : ""}`}
									>
										{pack.highlight && <span className={styles.bestTag}>Mais escolhido</span>}
										<h3>{pack.name}</h3>
										<strong>{pack.price}</strong>
										<p>{pack.description}</p>

										<div className={styles.packageMeta}>
											<span>
												<Clock3 />
												{pack.duration}
											</span>
											<span>
												<Users />
												{pack.guests}
											</span>
										</div>

										<ul>
											{pack.features.map((feature) => (
												<li key={feature}>
													<Check />
													{feature}
												</li>
											))}
										</ul>

										<Link href="/cadastro">
											Quero este pacote
											<ArrowRight />
										</Link>
									</article>
								))}
							</div>
						</section>

						<section className={styles.spaceSection}>
							<div className={styles.sectionHeader}>
								<span>O espaco</span>
								<h2>Arena, lounge e estrutura pronta para receber.</h2>
								<p>
									O aniversario pode combinar jogo livre, desafios em grupo,
									parabens no telao e uma experiencia guiada para que a familia
									nao precise operar nada durante o evento.
								</p>
							</div>

							<div className={styles.galleryGrid}>
								{birthdayGallery.map((item, index) => (
									<article key={item.title} className={index === 0 ? styles.largePhoto : ""}>
										<img src={item.image} alt={item.title} />
										<div>
											<h3>{item.title}</h3>
											<p>{item.text}</p>
										</div>
									</article>
								))}
							</div>
						</section>

						<section className={styles.experienceSection}>
							<div className={styles.experiencePanel}>
								<div>
									<span>Como funciona</span>
									<h2>Da visita a celebracao, tudo com roteiro simples.</h2>
								</div>

								<div className={styles.steps}>
									<article>
										<strong>01</strong>
										<h3>Escolha data e pacote</h3>
										<p>Veja horarios livres, selecione o formato e envie a pre-reserva.</p>
									</article>
									<article>
										<strong>02</strong>
										<h3>Personalize a experiencia</h3>
										<p>Defina jogos, numero de convidados, extras e roteiro do parabens.</p>
									</article>
									<article>
										<strong>03</strong>
										<h3>Chegue para celebrar</h3>
										<p>A equipe prepara o espaco e acompanha a operacao do evento.</p>
									</article>
								</div>
							</div>
						</section>

						<section className={styles.addonsSection}>
							<div className={styles.addonsIntro}>
								<Sparkles />
								<div>
									<span>Extras para vender mais</span>
									<h2>Adicione experiencias ao aluguel.</h2>
								</div>
							</div>

							<div className={styles.addonsGrid}>
								{birthdayAddons.map((addon) => (
									<div key={addon}>
										<PartyPopper />
										<span>{addon}</span>
									</div>
								))}
							</div>
						</section>

						<section className={styles.finalCta}>
							<div>
								<ShieldCheck />
								<h2>Transforme a Javis no palco do aniversario.</h2>
								<p>
									Reserve uma data, receba a confirmacao da equipe e monte uma
									experiencia gamer com cara de evento premium.
								</p>
							</div>
							<a href="#agenda" className={styles.primaryButton}>
								Consultar agenda
								<CalendarDays />
							</a>
						</section>
					</main>
				</>
			)}

			<FooterReveal isReady={footerReady} />
		</>
	);
}
