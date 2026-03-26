"use client";

import { useEffect, useRef } from "react";
import styles from "./FaqSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
	{
		number: "01",
		title: "CURSOS",
		description:
			"Formações práticas para elevar seu nível técnico, criativo e estratégico dentro do universo gamer.",
	},
	{
		number: "02",
		title: "PACOTE DE HORAS",
		description:
			"Uma solução flexível para quem precisa de acompanhamento, direção e execução sob demanda.",
	},
	{
		number: "03",
		title: "ANIVERSÁRIO",
		description:
			"Experiências imersivas para eventos especiais com estrutura, entretenimento e atmosfera marcante.",
	},
	{
		number: "04",
		title: "CAMPEONATOS",
		description:
			"Organização de disputas e ativações competitivas com identidade visual forte e presença profissional.",
	},
];

export default function FaqSection() {
	const sectionRef = useRef(null);
	const giantWordRef = useRef(null);
	const slotRef = useRef(null);
	const itemRefs = useRef([]);
	const lineRefs = useRef([]);
	const bottomStripRef = useRef(null);

	itemRefs.current = [];
	lineRefs.current = [];

	const addItemRef = (el) => {
		if (el && !itemRefs.current.includes(el)) {
			itemRefs.current.push(el);
		}
	};

	const addLineRef = (el) => {
		if (el && !lineRefs.current.includes(el)) {
			lineRefs.current.push(el);
		}
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
			const section = sectionRef.current;
			if (!section) return;

			const giantWord = giantWordRef.current;
			const slot = slotRef.current;
			const strip = bottomStripRef.current;

			const itemCards = itemRefs.current;
			const lines = lineRefs.current;

			const numberEls = itemCards.map((item) =>
				item.querySelector(`.${styles.itemNumber}`)
			);
			const titleEls = itemCards.map((item) =>
				item.querySelector(`.${styles.itemTitle}`)
			);
			const descEls = itemCards.map((item) =>
				item.querySelector(`.${styles.itemDescription}`)
			);

			gsap.set(giantWord, {
				opacity: 0,
				y: 40,
			});

			gsap.set(slot, {
				opacity: 0,
				scale: 0.92,
				rotate: 8,
			});

			gsap.set(strip, {
				opacity: 0,
				y: 36,
			});

			gsap.set(numberEls, {
				opacity: 0,
				x: -48,
				filter: "blur(8px)",
			});

			gsap.set(titleEls, {
				opacity: 0,
				y: 28,
				filter: "blur(8px)",
			});

			gsap.set(descEls, {
				opacity: 0,
				y: 20,
				filter: "blur(10px)",
			});

			gsap.set(lines, {
				scaleX: 0,
				opacity: 0.6,
				transformOrigin: "left center",
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 72%",
					end: "bottom 70%",
					toggleActions: "play none none reverse",
				},
			});

			tl.to(
				giantWord,
				{
					opacity: 1,
					y: 0,
					duration: 1.1,
					ease: "power3.out",
				},
				0
			);

			tl.to(
				slot,
				{
					opacity: 1,
					scale: 1,
					rotate: 0,
					duration: 1.1,
					ease: "power3.out",
				},
				0.12
			);

			itemCards.forEach((_, index) => {
				const base = 0.42 + index * 0.34;

				tl.to(
					numberEls[index],
					{
						opacity: 1,
						x: 0,
						filter: "blur(0px)",
						duration: 0.72,
						ease: "power3.out",
					},
					base
				)
					.to(
						titleEls[index],
						{
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							duration: 0.72,
							ease: "power3.out",
						},
						base + 0.08
					)
					.to(
						descEls[index],
						{
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							duration: 0.75,
							ease: "power3.out",
						},
						base + 0.15
					)
					.to(
						lines[index],
						{
							scaleX: 1,
							opacity: 1,
							duration: 0.85,
							ease: "power2.out",
						},
						base + 0.18
					);
			});

			tl.to(
				strip,
				{
					opacity: 1,
					y: 0,
					duration: 0.95,
					ease: "power3.out",
				},
				1.55
			);

			const slotSvg = slot?.querySelector("svg");
			if (slotSvg) {
				const paths = slotSvg.querySelectorAll("path, line, polyline, circle, rect, ellipse");
				paths.forEach((path) => {
					try {
						const length = path.getTotalLength?.();
						if (!length) return;
						path.style.strokeDasharray = `${length}`;
						path.style.strokeDashoffset = `${length}`;
					} catch (err) {
						// ignora elementos que não suportem getTotalLength
					}
				});

				ScrollTrigger.create({
					trigger: slot,
					start: "top 80%",
					onEnter: () => {
						gsap.to(paths, {
							strokeDashoffset: 0,
							duration: 2.4,
							ease: "power2.out",
							stagger: 0.06,
						});
					},
					onLeaveBack: () => {
						paths.forEach((path) => {
							try {
								const length = path.getTotalLength?.();
								if (!length) return;
								gsap.set(path, { strokeDashoffset: length });
							} catch (err) {
								// ignora
							}
						});
					},
				});
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className={styles.faqSection} ref={sectionRef}>
			<div className={styles.inner}>
				<div className={styles.headerRow}>
					<div className={styles.giantWordWrap}>
						<div className={styles.giantWord} ref={giantWordRef}>
							FAQ
						</div>
					</div>

					<div className={styles.visualSlot} ref={slotRef}>
						<div className={styles.visualRingText}>
							SERVIÇOS • AMBIENTES • EXPERIÊNCIAS • PERFORMANCE •
						</div>

						<div className={styles.visualCore} />

						{/*
							COLE AQUI O SVG REAL DEPOIS.
							Se quiser animar o desenho dele, basta que ele tenha stroke.
						*/}
						<div className={styles.visualSvgPlaceholder}>
							{/* Exemplo opcional:
							<SeuSvg className={styles.visualSvg} />
							*/}
						</div>
					</div>
				</div>

				<div className={styles.itemsWrap}>
					{faqItems.map((item, index) => (
						<div className={styles.itemBlock} key={item.number} ref={addItemRef}>
							<div className={styles.lineTop} ref={addLineRef} />

							<div className={styles.itemRow}>
								<div className={styles.itemNumber}>{item.number}</div>

								<div className={styles.itemContent}>
									<h3 className={styles.itemTitle}>{item.title}</h3>
									<p className={styles.itemDescription}>{item.description}</p>
								</div>
							</div>

							{index === faqItems.length - 1 && (
								<div className={styles.lineBottomStatic} />
							)}
						</div>
					))}
				</div>

				<div className={styles.bottomStrip} ref={bottomStripRef}>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span className={styles.longSegment} />
				</div>
			</div>
		</section>
	);
}