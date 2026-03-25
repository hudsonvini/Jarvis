"use client";

import styles from "./LevelBadge.module.scss";

const LEVEL_MAP = {
	iniciante: 1,
	intermediario: 2,
	avancado: 3,
};

function normalizeLevel(level) {
	if (typeof level === "number") {
		return Math.max(1, Math.min(3, level));
	}

	const normalized = String(level || "")
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");

	return LEVEL_MAP[normalized] || 1;
}

function getLevelLabel(level) {
	const value = normalizeLevel(level);

	if (value === 1) return "Iniciante";
	if (value === 2) return "Intermediário";
	return "Avançado";
}

export default function LevelBadge({
	level = "iniciante",
	variant = "full",
	className = "",
	showLabelTop = true,
}) {
	const currentLevel = normalizeLevel(level);
	const label = getLevelLabel(level);

	return (
		<div
			className={`${styles.levelBadge} ${styles[variant]} ${className}`}
			aria-label={`Nível ${label}`}
		>
			{variant === "full" && showLabelTop && (
				<span className={styles.topLabel}>Nível:</span>
			)}

			<div className={styles.row}>
				<div className={styles.icons} aria-hidden="true">
					{Array.from({ length: 3 }).map((_, index) => {
						const active = index < currentLevel;

						return (
							<span
								key={index}
								className={`${styles.diamond} ${
									active ? styles.active : styles.inactive
								}`}
							/>
						);
					})}
				</div>

				<span className={styles.text}>{label}</span>
			</div>
		</div>
	);
}