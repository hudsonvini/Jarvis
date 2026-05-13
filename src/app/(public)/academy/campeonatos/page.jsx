"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/_global/Navbar/Navbar";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";
import FooterReveal from "@/components/_global/FooterReveal/FooterReveal";
import { championships } from "@/data/championships";
import styles from "./page.module.scss";

export default function CampeonatosPage() {
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
					marqueeText="Javis Campeonatos"
				/>
			)}

			{ready && (
				<>
					<Navbar logoSrc="/images/logo.png" logoAlt="Javis" />

					<main className={styles.page}>
						<section className={styles.hero}>
							<div>
								<span>Competitivo Javis</span>
								<h1>Campeonatos</h1>
								<p>
									Disputas, ativacoes e torneios para jogadores e equipes que
									querem viver o competitivo com estrutura profissional.
								</p>
							</div>
						</section>

						<section className={styles.championshipsSection}>
							<div className={styles.sectionHeader}>
								<span>Calendario competitivo</span>
								<h2>Escolha seu campeonato</h2>
								<p>
									Os links abaixo sao externos e podem ser trocados diretamente
									no arquivo de dados de cada campeonato.
								</p>
							</div>

							<div className={styles.grid}>
								{championships.map((championship) => (
									<article
										key={championship.id}
										className={styles.card}
										style={{ "--card-accent": championship.accent }}
									>
										<a
											className={styles.cardMainLink}
											href={championship.link}
											target="_blank"
											rel="noreferrer"
											aria-label={`Abrir detalhes de ${championship.name}`}
										>
											<div className={styles.media}>
												<Image
													src={championship.image}
													alt={championship.name}
													fill
													sizes="(max-width: 720px) 100vw, (max-width: 1320px) 50vw, 25vw"
												/>
												<span>{championship.statusLabel}</span>
											</div>

											<div className={styles.body}>
												<p>{championship.game}</p>
												<h3>{championship.name}</h3>
												<span>{championship.shortDescription}</span>
											</div>
										</a>

										<div className={styles.actions}>
											<a
												href={championship.link}
												target="_blank"
												rel="noreferrer"
											>
												Ver mais
											</a>
											<a
												href={championship.registrationLink}
												target="_blank"
												rel="noreferrer"
												className={styles.secondaryAction}
											>
												Inscrever-se
												<ArrowUpRight />
											</a>
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
