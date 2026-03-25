"use client";

import styles from "./DotWaveSection.module.scss";

export default function DotWaveSection() {
	return (
		<section className={styles.section}>
			<div className={styles.background}>
				<div className={styles.dotLayer}></div>
				<div className={styles.wave}></div>
				<div className={styles.waveSoft}></div>
				<div className={styles.vignette}></div>
			</div>

			<div className={styles.container}>
				<div className={styles.content}>
					<span className={styles.kicker}>Experiência imersiva</span>

					<h2 className={styles.title}>
						Uma seção com matriz de pontos animada em movimento contínuo.
					</h2>

					<p className={styles.description}>
						Os pontos ganham vida com uma iluminação em formato de onda,
						criando um fundo sofisticado, tecnológico e com presença visual.
					</p>

					<div className={styles.actions}>
						<button className={styles.primaryButton}>Explorar</button>
						<button className={styles.secondaryButton}>Saiba mais</button>
					</div>
				</div>
			</div>
		</section>
	);
}