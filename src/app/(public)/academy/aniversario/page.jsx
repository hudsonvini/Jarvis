"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Check,
	Clock3,
	Gamepad2,
	MapPin,
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
	birthdayGallery,
	birthdayPackages,
} from "@/data/birthdayRental";
import styles from "./page.module.scss";
import DotWaveStrip from "@/components/_ui/Home/DotWaveStrip/DotWaveStrip";

const benefits = [
	{
		icon: Gamepad2,
		title: "Arena gamer preparada",
		text: "Setups, consoles e jogos organizados para a turma entrar direto na experiencia.",
	},
	{
		icon: MonitorPlay,
		title: "Telao e parabens",
		text: "Espaco para exibir fotos, nome do aniversariante, placares e momentos do evento.",
	},
	{
		icon: Users,
		title: "Equipe de apoio",
		text: "Monitoria para conduzir partidas, organizar os grupos e manter o roteiro fluindo.",
	},
	{
		icon: ShieldCheck,
		title: "Evento reservado",
		text: "Formato fechado por pacote, com estrutura pensada para familia e convidados.",
	},
];

const experienceSteps = [
	{
		number: "01",
		title: "Escolha o pacote",
		text: "Compare tempo, convidados e beneficios para selecionar o formato ideal.",
	},
	{
		number: "02",
		title: "Siga para a reserva",
		text: "Na proxima tela entram datas disponiveis, dados do evento e pagamento.",
	},
	{
		number: "03",
		title: "Personalize a festa",
		text: "Defina jogos, roteiro, extras e detalhes do parabens com a equipe.",
	},
	{
		number: "04",
		title: "Chegue para celebrar",
		text: "A Javis prepara a arena e acompanha a operacao durante o aniversario.",
	},
];

function packageHref(packageId) {
	return `/academy/aniversario/reserva/${packageId}`;
}

export default function BirthdayRentalPage() {
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
					marqueeText="Javis Birthday Arena"
				/>
			)}

			{ready && (
				<>
					<Navbar logoSrc="/images/logo.png" logoAlt="Javis" />

					<main className={styles.page}>
						<section className={styles.hero}>
							<div className={styles.heroMedia}>
								<Image
									src="/images/atleta-digital-1.webp"
									alt="Espaco gamer Javis preparado para aniversario"
									fill
									priority
									sizes="100vw"
								/>
							</div>

							<div className={styles.heroContent}>
								<span className={styles.kicker}>Javis Birthday Arena</span>
								<h1>Aniversario gamer na Javis.</h1>
								<p>
									Uma festa com arena gamer, telao, desafios em grupo, espaco
									para parabens e equipe de apoio para transformar o evento em
									uma experiencia fluida para convidados e familia.
								</p>

								<div className={styles.heroActions}>
									<a href="#pacotes" className={styles.primaryButton}>
										Ver pacotes
										<ArrowRight />
									</a>
									<a href="#espaco" className={styles.secondaryButton}>
										Conhecer o espaco
									</a>
								</div>
							</div>

							{/* <div className={styles.heroStrip} aria-hidden="true" /> */}
						</section>
						
						<DotWaveStrip />

						<section className={styles.introSection}>
							<div className={styles.introText}>
								<span className={styles.kicker}>O que esta incluso</span>
								<h2>Uma festa pensada para jogar, competir e comemorar.</h2>
							</div>

							<div className={styles.benefitsGrid}>
								{benefits.map((benefit) => {
									const Icon = benefit.icon;

									return (
										<article key={benefit.title}>
											<Icon />
											<h3>{benefit.title}</h3>
											<p>{benefit.text}</p>
										</article>
									);
								})}
							</div>
						</section>

						<div className={styles.bannerArea}>
							<img src="http://localhost:3000/_next/image?url=%2Fimages%2Fquem-somos.webp&w=1080&q=75" alt="" />
						</div>


						<section id="pacotes" className={styles.packagesSection}>
							<div className={styles.sectionHeader}>
								<span>Pacotes</span>
								<h2>Escolha o formato do aniversario.</h2>
								<p>
									Aqui a pessoa escolhe o plano. A data, dados do evento e
									pagamento entram na proxima tela do fluxo de reserva.
								</p>
							</div>

							<div className={styles.packageGrid}>
								{birthdayPackages.map((pack) => (
									<article
										key={pack.id}
										className={`${styles.packageCard} ${pack.highlight ? styles.highlight : ""}`}
									>
										{pack.highlight && <span className={styles.bestTag}>Mais escolhido</span>}

										<div className={styles.packageTop}>
											<h3>{pack.name}</h3>
											<strong>{pack.price}</strong>
											<p>{pack.description}</p>
										</div>

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

										<Link href={packageHref(pack.id)}>
											Escolher pacote
											<ArrowRight />
										</Link>
									</article>
								))}
							</div>
						</section>

						<section id="espaco" className={styles.spaceSection}>
							<div className={styles.sectionHeader}>
								<span>O local</span>
								<h2>A Javis pronta para receber a turma.</h2>
								<p>
									O foco da pagina e mostrar estrutura, atmosfera e beneficios:
									o calendario fica reservado para a etapa de compra.
								</p>
							</div>

							<div className={styles.locationPanel}>
								<div className={styles.locationImage}>
									<Image
										src="/images/quem-somos.webp"
										alt="Ambiente da Javis"
										fill
										sizes="(max-width: 980px) 100vw, 50vw"
									/>
								</div>

								<div className={styles.locationContent}>
									<MapPin />
									<h3>Ambiente fechado, roteiro simples e visual gamer.</h3>
									<p>
										A estrutura combina area de jogo, espaco de convivencia,
										suporte tecnico e telao para que o aniversario tenha ritmo de
										evento sem virar trabalho para a familia.
									</p>

									<div className={styles.locationFacts}>
										<div>
											<strong>3h+</strong>
											<span>de experiencia</span>
										</div>
										<div>
											<strong>20-50</strong>
											<span>convidados</span>
										</div>
										<div>
											<strong>100%</strong>
											<span>evento reservado</span>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.galleryGrid}>
								{birthdayGallery.map((item) => (
									<article key={item.title}>
										<Image
											src={item.image}
											alt={item.title}
											fill
											sizes="(max-width: 900px) 100vw, 33vw"
										/>
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
								<div className={styles.experienceIntro}>
									<span className={styles.kicker}>Como funciona</span>
									<h2>Da escolha do pacote ao dia da festa.</h2>
									<p>
										O fluxo foi separado para esta pagina vender a experiencia e
										a proxima tela cuidar de datas, dados e pagamento.
									</p>
								</div>

								<div className={styles.steps}>
									{experienceSteps.map((step) => (
										<article key={step.number}>
											<strong>{step.number}</strong>
											<div>
												<h3>{step.title}</h3>
												<p>{step.text}</p>
											</div>
										</article>
									))}
								</div>
							</div>
						</section>

						<section className={styles.addonsSection}>
							<div className={styles.addonsIntro}>
								<Sparkles />
								<div>
									<span className={styles.kicker}>Extras</span>
									<h2>Complemente a experiencia.</h2>
									<p>
										Adicionais que podem entrar como upsell na etapa de reserva
										ou em contato direto com a equipe.
									</p>
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
								<h2>Comece escolhendo um pacote.</h2>
								<p>
									Depois disso, o fluxo segue para disponibilidade de datas,
									dados da festa e pagamento pelo gateway integrado.
								</p>
							</div>
							<a href="#pacotes" className={styles.primaryButton}>
								Comparar pacotes
								<ArrowRight />
							</a>
						</section>
					</main>
				</>
			)}

			<FooterReveal isReady={footerReady} />
		</>
	);
}
