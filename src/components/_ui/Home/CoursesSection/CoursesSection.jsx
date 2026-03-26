"use client";

import LevelBadge from "../../LevelBadge/LevelBadge";
import DotWaveSection from "../DotWaveSection/DotWaveSection";
import DotWaveStrip from "../DotWaveStrip/DotWaveStrip";
import styles from "./CoursesSection.module.scss";
import { ArrowRight } from "lucide-react";

export default function CoursesSection() {
	return (
		<section className={styles.containerCourses}>
			<div className={styles.titleArea}>
				<h2>Cursos</h2>
				<p>
					Take your YouTube channel to the next level with Upstream.
					<br />
					The easiest way to build & maintain a 24 hour live stream using pre
					recorded videos.
				</p>
			</div>

			<div className={styles.gridCardsArea}>
				<article className={`${styles.card} ${styles.cardPrincipal}`}>
					<div className={styles.areaText}>
						<h1 className={styles.titleCard}>ROBÓTICA NOBEL</h1>
						<LevelBadge level="avancado" variant="full" />
						<p className={styles.descriptionCard}>
							Este curso nasce alinhado às transformações globais que estão
							redefinindo o mercado. Hoje, o mundo precisa de jovens capazes de
							pensar de forma crítica, resolver problemas reais e usar a
							tecnologia para criar soluções com impacto.
						</p>
						<div className={styles.professorArea}>
							<div className={styles.image}>
								<img
									src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg"
									alt=""
								/>
							</div>
							<div className={styles.vas}>
								<p>PROFESSOR</p>
								<span>Hudson Vini</span>
							</div>
						</div>
					</div>
					<img
						className={styles.imagePrincipal}
						src="/images/professor-robotica.png"
						alt="Professor Robotica"
					/>
					<div className={styles.tagHour}>72h</div>
					<a className={styles.buttonInscrever} href="/sobre">
						Inscrever-se
						<ArrowRight />
					</a>
				</article>

				<article className={`${styles.card} ${styles.cardSecondary1}`}>
					<span className={styles.tag}>Workshop Nextjs</span>
					<h1 className={styles.titleCard}>FRONT-END</h1>
					<LevelBadge level="iniciante" variant="compact" />
					<div className={styles.professorArea}>
						<div className={styles.image}>
							<img
								src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg"
								alt=""
							/>
						</div>
						<div className={styles.infoProf}>
							<p>PROFESSOR</p>
							<span>Hudson Vini</span>
						</div>
					</div>
					<img
						className={styles.imagePrincipal}
						src="/images/image-front.png"
						alt="Professor Robotica"
					/>
					<div className={styles.tagHour}>72h</div>
					<a className={styles.buttonInscrever} href="">
						Inscrever-se
						<ArrowRight />
					</a>
				</article>

				<article className={`${styles.card} ${styles.cardSecondary2}`}>
					<span className={styles.tag}>Workshop Adobe After Effects</span>
					<h1 className={styles.titleCard}>MOTION DESIGN</h1>
					<LevelBadge level="avancado" variant="compact" />
					<div className={styles.professorArea}>
						<div className={styles.image}>
							<img
								src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg"
								alt=""
							/>
						</div>
						<div className={styles.infoProf}>
							<p>PROFESSOR</p>
							<span>FX Leko</span>
						</div>
					</div>
					<img
						className={styles.imagePrincipal}
						src="/images/image-motion-curso.png"
						alt="Professor Robotica"
					/>
					<div className={styles.tagHour}>72h</div>
					<a className={styles.buttonInscrever} href="/sobre">
						Inscrever-se
						<ArrowRight />
					</a>
				</article>

				<article className={`${styles.card} ${styles.cardNumber}`}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
						<path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
					</svg>
					<a href="">Mais Informarções</a>
				</article>

				<div className={styles.rollArea}>
					<InfiniteStrip className={styles.strip} />
				</div>

				<article className={`${styles.card} ${styles.cardBanner}`}>
					<div className={styles.areaText}>
						<div className={styles.topArea}>
							<span className={styles.tag}>
								APRENDA A JOGAR O SEU JOGO FAVORITO
							</span>
							<img
								className={styles.titleAtleta}
								src="/images/text-atleta-digital.svg"
								alt=""
							/>
						</div>

						<div className={styles.bottomArea}>
							<LevelBadge level="iniciante" variant="full" />
							<a className={styles.buttonInscrever} href="/sobre">
								Inscrever-se
								<ArrowRight />
							</a>
						</div>
					</div>
					<img
						className={styles.imagePrincipal}
						src="/images/curso-atleta.png"
						alt="Professor Robotica"
					/>
					<div className={styles.tagHour}>72h</div>
				</article>

				<article className={styles.bannerIdentidadeVisual}>
					{/* <DotWaveSection /> */}
					<DotWaveStrip />
				</article>
			</div>
		</section>
	);
}

export function InfiniteStrip({ className = "", duration = 8 }) {
	return (
		<div
			className={`${styles.stripWrap} ${className}`}
			style={{ "--strip-duration": `${duration}s` }}
			aria-hidden="true"
		/>
	);
}