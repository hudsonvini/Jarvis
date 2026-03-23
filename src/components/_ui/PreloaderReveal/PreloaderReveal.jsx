"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import styles from "./PreloaderReveal.module.scss";

export default function PreloaderReveal({
	isVisible = true,
	onComplete,
	logoSrc = "/images/jarvis/logo-white.png",
	logoAlt = "Jarvis Game Academy",
	marqueeText = "Jarvis Game Academy",
}) {
	const rootRef = useRef(null);
	const finderRef = useRef(null);
	const barsRef = useRef([]);
	const marqueeTopRef = useRef(null);
	const marqueeBottomRef = useRef(null);

	const repeatedMarquee = useMemo(() => {
		return new Array(14).fill(marqueeText);
	}, [marqueeText]);

	useEffect(() => {
		if (!isVisible || !rootRef.current) return;

		const ctx = gsap.context(() => {
			const bars = barsRef.current.filter(Boolean);
			const finderFrames = finderRef.current?.querySelectorAll(`.${styles.finderFrame}`);
			const centerLogo = finderRef.current?.querySelector(`.${styles.centerLogo}`);
			const topStripe = rootRef.current?.querySelector(`.${styles.topStripe}`);

			gsap.set(bars, {
				clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
			});

			gsap.set(finderFrames, {
				scale: 0,
				opacity: 1,
				transformOrigin: "50% 50%",
			});

			gsap.set(centerLogo, {
				scale: 0.86,
				opacity: 0,
				transformOrigin: "50% 50%",
			});

			gsap.set(topStripe, {
				yPercent: -120,
			});

			gsap.set(marqueeTopRef.current, {
				x: "100vw",
				opacity: 1,
			});

			gsap.set(marqueeBottomRef.current, {
				x: "100vw",
				opacity: 1,
			});

			const timeline = gsap.timeline({
				onComplete: () => {
					onComplete?.();
				},
			});

			timeline.to(
				topStripe,
				{
					yPercent: 0,
					duration: 0.7,
					ease: "power3.out",
				},
				0.15
			);

			timeline.to(
				bars,
				{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					duration: 1,
					ease: "power4.inOut",
					stagger: {
						amount: 0.5,
						from: "random",
					},
				},
				0.8
			);

			timeline.to(
				[marqueeTopRef.current, marqueeBottomRef.current],
				{
					x: "0vw",
					duration: 4,
					ease: "power4.inOut",
				},
				0
			);

			timeline.to(
				finderFrames,
				{
					scale: 1,
					duration: 0.35,
					ease: "power2.out",
				},
				1.9
			);

			timeline.to(
				centerLogo,
				{
					scale: 1,
					opacity: 1,
					duration: 0.45,
					ease: "power3.out",
				},
				2.1
			);

			timeline.to(
				centerLogo,
				{
					scale: 0.94,
					opacity: 0,
					duration: 0.28,
					ease: "power2.inOut",
				},
				4.95
			);

			timeline.to(
				finderFrames,
				{
					scale: 0,
					duration: 0.5,
					ease: "power2.inOut",
					stagger: 0.075,
				},
				5
			);

			timeline.to(
				bars,
				{
					clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
					duration: 1,
					ease: "power4.inOut",
					stagger: {
						amount: 0.5,
						from: "random",
					},
				},
				5
			);

			timeline.to(
				[marqueeTopRef.current, marqueeBottomRef.current],
				{
					x: "-100vw",
					duration: 4,
					ease: "power4.inOut",
				},
				4
			);

			timeline.to(
				rootRef.current,
				{
					autoAlpha: 0,
					duration: 0.3,
					pointerEvents: "none",
				},
				6.15
			);
		}, rootRef);

		return () => ctx.revert();
	}, [isVisible, onComplete]);

	if (!isVisible) return null;

	return (
		<div className={styles.preloaderRoot} ref={rootRef} aria-hidden="true">
			<div className={styles.preloaderInner}>
				<div className={styles.finderContainer} ref={finderRef}>
					<div className={styles.finderFrame}>
						<span className={styles.cornerBottomLeft} />
						<span className={styles.cornerBottomRight} />
					</div>

					<div className={styles.finderFrame}>
						<span className={styles.cornerBottomLeft} />
						<span className={styles.cornerBottomRight} />
					</div>

					<div className={styles.finderFrame}>
						<span className={styles.cornerBottomLeft} />
						<span className={styles.cornerBottomRight} />
					</div>

					<div className={styles.finderFrame}>
						<span className={styles.cornerBottomLeft} />
						<span className={styles.cornerBottomRight} />
					</div>

					<div className={styles.finderFrame}>
						<span className={styles.cornerBottomLeft} />
						<span className={styles.cornerBottomRight} />
					</div>

					<img
						className={styles.centerLogo}
						src={logoSrc}
						alt={logoAlt}
					/>
				</div>

				<div
					className={`${styles.bar} ${styles.bar1}`}
					ref={(el) => (barsRef.current[0] = el)}
				>
					<div className={styles.marqueeTrack} ref={marqueeTopRef}>
						{repeatedMarquee.map((item, index) => (
							<p key={`top-${index}`} className={styles.marqueeItem}>
								<span className={styles.marqueeBullet}>■</span>
								{item}
							</p>
						))}
					</div>
				</div>

				<div
					className={`${styles.bar} ${styles.bar2}`}
					ref={(el) => (barsRef.current[1] = el)}
				/>

				<div
					className={`${styles.bar} ${styles.bar3}`}
					ref={(el) => (barsRef.current[2] = el)}
				/>

				<div
					className={`${styles.bar} ${styles.bar4}`}
					ref={(el) => (barsRef.current[3] = el)}
				/>

				<div
					className={`${styles.bar} ${styles.bar5}`}
					ref={(el) => (barsRef.current[4] = el)}
				>
					<div className={styles.marqueeTrack} ref={marqueeBottomRef}>
						{repeatedMarquee.map((item, index) => (
							<p key={`bottom-${index}`} className={styles.marqueeItem}>
								<span className={styles.marqueeBullet}>■</span>
								{item}
							</p>
						))}
					</div>
				</div>

				<div className={styles.topStripe} />
			</div>
		</div>
	);
}