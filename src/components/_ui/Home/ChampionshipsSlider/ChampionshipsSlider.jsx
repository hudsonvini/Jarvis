"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { championships } from "@/data/championships";
import styles from "./ChampionshipsSlider.module.scss";

export default function ChampionshipsSlider() {
	return (
		<section className={styles.section} aria-labelledby="home-campeonatos-title">
			<div className={styles.header}>
				<span>Competitivo Javis</span>
				<h2 id="home-campeonatos-title">Campeonatos</h2>
				<a href="/academy/campeonatos">
					Ver todos
					<ArrowRight />
				</a>
			</div>

			<div className={styles.slider} aria-label="Lista de campeonatos">
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
								{/* <Image
									src={championship.image}
									alt={championship.name}
									fill
									sizes="(max-width: 760px) 86vw, 420px"
								/> */}
								<img src={championship.image} alt={championship.name} />
								<span>{championship.statusLabel}</span>
							</div>

							<div className={styles.body}>
								<p>{championship.game}</p>
								<h3>{championship.name}</h3>
								<span>{championship.shortDescription}</span>
							</div>
						</a>

						<div className={styles.actions}>
							<a href={championship.link} target="_blank" rel="noreferrer">
								Ver mais
							</a>
							<a
								href={championship.registrationLink}
								target="_blank"
								rel="noreferrer"
								className={styles.secondaryAction}
							>
								Inscrever-se
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
