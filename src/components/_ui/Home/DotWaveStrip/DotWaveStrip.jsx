"use client";

import styles from "./DotWaveStrip.module.scss";

export default function DotWaveStrip() {
	return (
		<section className={styles.strip}>
			<div className={styles.background}>
				<div className={styles.dotLayer}></div>

				<div className={styles.waveTrack}>
					<div className={styles.wave}></div>
					<div className={styles.waveClone}></div>
				</div>

				<div className={styles.waveTrackSoft}>
					<div className={styles.waveSoft}></div>
					<div className={styles.waveSoftClone}></div>
				</div>

				<div className={styles.vignette}></div>
			</div>

			<div className={styles.centerAsset}>
				<img
					src="/images/min-logo.svg"
					alt="Elemento central"
					className={styles.centerImage}
				/>
			</div>
		</section>
	);
}