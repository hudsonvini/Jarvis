"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.scss";

export default function Hero({
	isReady = false,
	bigText = "ATLETA DIGITAL",
	subtitle = "Take your YouTube channel to the next level with Upstream. The easiest way to build and maintain a 24 hour live stream using pre recorded videos.",
	rightTitle = "NEGOCIOS",
	rightText = "Take your YouTube channel to the next level with Upstream. The easiest way to build and maintain a 24 hour live stream using pre recorded videos.",
	ctaLabel = "VER AGORA",
	heroImage = "/images/jarvis/hero-characters.png",
}) {
	const rootRef = useRef(null);
	const glowRef = useRef(null);
	const imageRef = useRef(null);
	const rightRef = useRef(null);
	const bottomRef = useRef(null);
	const buttonRef = useRef(null);

	const bottomStripRef = useRef(null);
	const backLogoRef = useRef(null);
	const linesHeroRef = useRef(null);

	const lettersRef = useRef([]);
	lettersRef.current = [];

	const addLetter = (el) => {
		if (el && !lettersRef.current.includes(el)) {
			lettersRef.current.push(el);
		}
	};

	const chars = useMemo(() => bigText.split(""), [bigText]);

	useLayoutEffect(() => {
		if (!isReady) return;

		const ctx = gsap.context(() => {
			const backLogoPaths = backLogoRef.current
				? Array.from(
						backLogoRef.current.querySelectorAll(
							"path, rect, line, circle, ellipse, polyline, polygon"
						)
				  )
				: [];

			const linesHeroPaths = linesHeroRef.current
				? Array.from(
						linesHeroRef.current.querySelectorAll(
							"path, rect, line, circle, ellipse, polyline, polygon"
						)
				  )
				: [];

			const allSvgPaths = [...backLogoPaths, ...linesHeroPaths];

			const prepareSvgDraw = (elements) => {
				elements.forEach((el) => {
					try {
						const length = el.getTotalLength ? el.getTotalLength() : 0;

						if (length) {
							el.style.strokeDasharray = `${length}`;
							el.style.strokeDashoffset = `${length}`;
						}

						el.style.opacity = "0";
					} catch (error) {
						el.style.opacity = "0";
					}
				});
			};

			prepareSvgDraw(allSvgPaths);

			gsap.set(rootRef.current, { autoAlpha: 1 });

			gsap.set(glowRef.current, { opacity: 0, y: 1000, scale: 0.85 });
			gsap.set(imageRef.current, { opacity: 0, y: 120, scale: 0.94 });
			gsap.set([rightRef.current, bottomRef.current, buttonRef.current], {
				opacity: 0,
				y: 36,
			});

			gsap.set(lettersRef.current, {
				opacity: 0,
				yPercent: 100,
				rotateX: 18,
				transformOrigin: "50% 100%",
			});

			gsap.set(bottomStripRef.current, {
				xPercent: -120,
				opacity: 1,
				skewX: -12,
			});

			gsap.set(backLogoPaths, {
				stroke: "#7F5CFF",
			});

			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			// 1) backLogo desenha mais devagar com cor temporária
			if (backLogoPaths.length) {
				tl.to(
					backLogoPaths,
					{
						strokeDashoffset: 0,
						opacity: 1,
						duration: 2.15,
						stagger: 0.16,
						ease: "power2.out",
					},
					0
				).to(
					backLogoPaths,
					{
						stroke: "#FFFFFF",
						opacity: 0.08,
						duration: 0.9,
						ease: "power2.out",
					},
					1.55
				);
			}

			// 2) linhas com gradiente começam um pouco depois e duram mais
			if (linesHeroPaths.length) {
				tl.to(
					linesHeroPaths,
					{
						strokeDashoffset: 0,
						opacity: 1,
						duration: 2.45,
						stagger: 0.08,
						ease: "power2.out",
					},
					0.22
				);
			}

			// 3) bottom strip entra já junto no começo
			tl.to(
				bottomStripRef.current,
				{
					xPercent: 0,
					skewX: 0,
					duration: 1.05,
					ease: "expo.out",
				},
				0.12
			);

			// 4) glow entra enquanto svg ainda desenha
			tl.to(
				glowRef.current,
				{
					opacity: 1,
					y: 400,
					scale: 1,
					duration: 1.2,
					ease: "power3.out",
				},
				0.28
			);

			// 5) letras
			tl.to(
				lettersRef.current,
				{
					opacity: 1,
					yPercent: 0,
					rotateX: 0,
					stagger: 0.035,
					duration: 0.9,
					ease: "power3.out",
				},
				0.38
			);

			// 6) imagem
			tl.to(
				imageRef.current,
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.15,
					ease: "power3.out",
				},
				0.5
			);

			// 7) infos
			tl.to(
				[bottomRef.current, rightRef.current, buttonRef.current],
				{
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.75,
					ease: "power3.out",
				},
				0.72
			);
		}, rootRef);

		return () => ctx.revert();
	}, [isReady]);

	return (
		<section
			ref={rootRef}
			className={`${styles.hero} ${!isReady ? styles.hidden : ""}`}
		>
			{/* <div className={styles.topStripeHero} /> */}
			<div className={styles.bottomStrip} ref={bottomStripRef} />

			<div className={styles.container}>
				<svg
					ref={backLogoRef}
					className={styles.backLogo}
					width="339"
					height="399"
					viewBox="0 0 339 399"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M326.409 316.329L252.75 398.5H86.25L12.5908 316.33L60.5244 275.317L115.009 336.093L115.157 336.259H223.843L223.992 336.093L278.475 275.317L326.409 316.329Z"
						stroke="currentColor"
						strokeWidth="1.2"
					/>
					<path
						d="M169.5 0.5C262.692 0.5 338.5 74.5829 338.5 165.605V264.585H0.5V165.605C0.500169 74.5829 76.3083 0.5 169.5 0.5ZM169.5 63.7764C112.05 63.7764 65.2873 109.448 65.2871 165.605V201.31H273.713V165.605C273.713 109.448 226.95 63.7764 169.5 63.7764Z"
						stroke="currentColor"
						strokeWidth="1.2"
					/>
				</svg>

				<svg
					ref={linesHeroRef}
					className={styles.linesHero}
					width="226"
					height="675"
					viewBox="0 0 226 675"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							id="heroLinesGradient"
							x1="0"
							y1="0"
							x2="226"
							y2="675"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0%" stopColor="#F30200" />
							<stop offset="15%" stopColor="#fff" />
							<stop offset="34%" stopColor="#fff" />
							<stop offset="51%" stopColor="#fff" />
							<stop offset="69%" stopColor="#fff" />
							<stop offset="86%" stopColor="#fff" />
							<stop offset="100%" stopColor="#F30200" />
						</linearGradient>
					</defs>

					<path d="M225.5 0V675" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M154.5 26V675" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 287.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 362.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 431.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 501.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 575.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 638.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
					<path d="M0 222.5H226" stroke="url(#heroLinesGradient)" strokeWidth="1" />
				</svg>

				<div className={styles.glow} ref={glowRef} />

				<div className={styles.imageWrap} ref={imageRef}>
					<img src={heroImage} alt="Hero" />
				</div>

				<div className={styles.bottomLeft} ref={bottomRef}>
					<h1>{bigText}</h1>
					<p>{subtitle}</p>
				</div>

				<div className={styles.right} ref={rightRef}>
					<h3>{rightTitle}</h3>
					<p>{rightText}</p>

					<div className={styles.dots}>
						<span className={styles.active}></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<button className={styles.button} ref={buttonRef}>
					{ctaLabel} →
				</button>
			</div>
		</section>
	);
}