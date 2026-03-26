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
							<svg width="371" height="154" viewBox="0 0 371 154" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-outside-1_416_230" maskUnits="userSpaceOnUse" x="-0.400002" y="-0.399902" width="371" height="155" fill="black">
								<rect fill="white" x="-0.400002" y="-0.399902" width="371" height="155"/>
								<path d="M0.999999 2.60009H105.8V26.6001H28.6V64.2001H98.4V88.2001H28.6V142.6H0.999999V2.60009ZM188.859 110H136.459L124.059 142.6H95.2594L150.059 2.60009H162.459C171.126 2.60009 176.993 6.60009 180.059 14.6001L229.859 142.6H201.059L188.859 110ZM143.859 86.8001H181.459L162.859 36.4001H162.659L143.859 86.8001ZM351.5 152.4L335.3 136.4C327.033 141.6 318.3 144.2 309.1 144.2H287.9C277.367 144.2 268.033 142 259.9 137.6C251.9 133.067 245.633 126.8 241.1 118.8C236.7 110.667 234.5 101.267 234.5 90.6001V54.6001C234.5 43.9334 236.7 34.6001 241.1 26.6001C245.633 18.4668 251.9 12.2001 259.9 7.80009C268.033 3.26676 277.367 1.0001 287.9 1.0001H309.1C319.633 1.0001 328.9 3.26676 336.9 7.80009C345.033 12.2001 351.3 18.4668 355.7 26.6001C360.233 34.6001 362.5 43.9334 362.5 54.6001V89.0001C362.5 99.4001 359.433 109.267 353.3 118.6L368.9 134L351.5 152.4ZM309.1 119.8C311.633 119.8 314.167 119.267 316.7 118.2L298.5 100.2L315.9 81.8001L333.3 99.0001C334.367 95.5334 334.9 92.2001 334.9 89.0001V55.8001C334.9 46.7334 332.5 39.4001 327.7 33.8001C323.033 28.2001 316.833 25.4001 309.1 25.4001H287.9C280.167 25.4001 273.9 28.2001 269.1 33.8001C264.433 39.4001 262.1 46.7334 262.1 55.8001V89.4001C262.1 98.4668 264.433 105.8 269.1 111.4C273.9 117 280.167 119.8 287.9 119.8H309.1Z"/>
								</mask>
								<path d="M0.999999 2.60008V1.60008H-9.53674e-07V2.60008H0.999999ZM105.8 2.60008H106.8V1.60008H105.8V2.60008ZM105.8 26.6001V27.6001H106.8V26.6001H105.8ZM28.6 26.6001V25.6001H27.6V26.6001H28.6ZM28.6 64.2001H27.6V65.2001H28.6V64.2001ZM98.4 64.2001H99.4V63.2001H98.4V64.2001ZM98.4 88.2001V89.2001H99.4V88.2001H98.4ZM28.6 88.2001V87.2001H27.6V88.2001H28.6ZM28.6 142.6V143.6H29.6V142.6H28.6ZM0.999999 142.6H-9.53674e-07V143.6H0.999999V142.6ZM0.999999 2.60008V3.60008H105.8V2.60008V1.60008H0.999999V2.60008ZM105.8 2.60008H104.8V26.6001H105.8H106.8V2.60008H105.8ZM105.8 26.6001V25.6001H28.6V26.6001V27.6001H105.8V26.6001ZM28.6 26.6001H27.6V64.2001H28.6H29.6V26.6001H28.6ZM28.6 64.2001V65.2001H98.4V64.2001V63.2001H28.6V64.2001ZM98.4 64.2001H97.4V88.2001H98.4H99.4V64.2001H98.4ZM98.4 88.2001V87.2001H28.6V88.2001V89.2001H98.4V88.2001ZM28.6 88.2001H27.6V142.6H28.6H29.6V88.2001H28.6ZM28.6 142.6V141.6H0.999999V142.6V143.6H28.6V142.6ZM0.999999 142.6H2V2.60008H0.999999H-9.53674e-07V142.6H0.999999ZM188.859 110L189.796 109.65L189.553 109H188.859V110ZM136.459 110V109H135.77L135.525 109.645L136.459 110ZM124.059 142.6V143.6H124.749L124.994 142.956L124.059 142.6ZM95.2594 142.6L94.3282 142.236L93.7941 143.6H95.2594V142.6ZM150.059 2.60008V1.60008H149.377L149.128 2.2356L150.059 2.60008ZM180.059 14.6001L179.126 14.958L179.127 14.9627L180.059 14.6001ZM229.859 142.6V143.6H231.321L230.791 142.238L229.859 142.6ZM201.059 142.6L200.123 142.951L200.366 143.6H201.059V142.6ZM143.859 86.8001L142.922 86.4506L142.419 87.8001H143.859V86.8001ZM181.459 86.8001V87.8001H182.894L182.398 86.4539L181.459 86.8001ZM162.859 36.4001L163.798 36.0539L163.556 35.4001H162.859V36.4001ZM162.659 36.4001V35.4001H161.965L161.722 36.0506L162.659 36.4001ZM188.859 110V109H136.459V110V111H188.859V110ZM136.459 110L135.525 109.645L123.125 142.245L124.059 142.6L124.994 142.956L137.394 110.356L136.459 110ZM124.059 142.6V141.6H95.2594V142.6V143.6H124.059V142.6ZM95.2594 142.6L96.1906 142.965L150.991 2.96458L150.059 2.60008L149.128 2.2356L94.3282 142.236L95.2594 142.6ZM150.059 2.60008V3.60008H162.459V2.60008V1.60008H150.059V2.60008ZM162.459 2.60008V3.60008C166.637 3.60008 170.062 4.56241 172.796 6.42632C175.529 8.28961 177.65 11.1082 179.126 14.958L180.059 14.6001L180.993 14.2422C179.402 10.0919 177.057 6.91055 173.923 4.77386C170.79 2.63777 166.949 1.60008 162.459 1.60008V2.60008ZM180.059 14.6001L179.127 14.9627L228.927 142.963L229.859 142.6L230.791 142.238L180.991 14.2375L180.059 14.6001ZM229.859 142.6V141.6H201.059V142.6V143.6H229.859V142.6ZM201.059 142.6L201.996 142.25L189.796 109.65L188.859 110L187.923 110.351L200.123 142.951L201.059 142.6ZM143.859 86.8001V87.8001H181.459V86.8001V85.8001H143.859V86.8001ZM181.459 86.8001L182.398 86.4539L163.798 36.0539L162.859 36.4001L161.921 36.7463L180.521 87.1463L181.459 86.8001ZM162.859 36.4001V35.4001H162.659V36.4001V37.4001H162.859V36.4001ZM162.659 36.4001L161.722 36.0506L142.922 86.4506L143.859 86.8001L144.796 87.1496L163.596 36.7496L162.659 36.4001ZM351.5 152.4L350.797 153.112L351.524 153.83L352.227 153.087L351.5 152.4ZM335.3 136.4L336.003 135.689L335.439 135.132L334.768 135.554L335.3 136.4ZM259.9 137.6L259.407 138.47L259.416 138.475L259.424 138.48L259.9 137.6ZM241.1 118.8L240.22 119.276L240.225 119.285L240.23 119.293L241.1 118.8ZM241.1 26.6001L240.227 26.1132L240.224 26.1182L241.1 26.6001ZM259.9 7.80009L260.382 8.67632L260.387 8.67357L259.9 7.80009ZM336.9 7.80009L336.407 8.67012L336.416 8.67496L336.424 8.67964L336.9 7.80009ZM355.7 26.6001L354.82 27.0759L354.825 27.0845L354.83 27.0931L355.7 26.6001ZM353.3 118.6L352.464 118.051L352.014 118.736L352.597 119.312L353.3 118.6ZM368.9 134L369.627 134.687L370.299 133.976L369.603 133.288L368.9 134ZM316.7 118.2L317.088 119.122L318.467 118.541L317.403 117.489L316.7 118.2ZM298.5 100.2L297.773 99.513L297.102 100.223L297.797 100.911L298.5 100.2ZM315.9 81.8001L316.603 81.0889L315.876 80.3702L315.173 81.113L315.9 81.8001ZM333.3 99.0001L332.597 99.7113L333.771 100.871L334.256 99.2942L333.3 99.0001ZM327.7 33.8001L326.932 34.4403L326.941 34.4509L327.7 33.8001ZM269.1 33.8001L268.341 33.1492L268.332 33.1599L269.1 33.8001ZM269.1 111.4L268.332 112.04L268.341 112.051L269.1 111.4ZM351.5 152.4L352.203 151.689L336.003 135.689L335.3 136.4L334.597 137.112L350.797 153.112L351.5 152.4ZM335.3 136.4L334.768 135.554C326.65 140.66 318.1 143.2 309.1 143.2V144.2V145.2C318.5 145.2 327.417 142.54 335.832 137.247L335.3 136.4ZM309.1 144.2V143.2H287.9V144.2V145.2H309.1V144.2ZM287.9 144.2V143.2C277.509 143.2 268.344 141.031 260.376 136.721L259.9 137.6L259.424 138.48C267.723 142.969 277.224 145.2 287.9 145.2V144.2ZM259.9 137.6L260.393 136.73C252.55 132.286 246.414 126.15 241.97 118.307L241.1 118.8L240.23 119.293C244.853 127.451 251.25 133.848 259.407 138.47L259.9 137.6ZM241.1 118.8L241.98 118.324C237.67 110.358 235.5 101.126 235.5 90.6001H234.5H233.5C233.5 101.407 235.73 110.975 240.22 119.276L241.1 118.8ZM234.5 90.6001H235.5V54.6001H234.5H233.5V90.6001H234.5ZM234.5 54.6001H235.5C235.5 44.0734 237.67 34.9113 241.976 27.082L241.1 26.6001L240.224 26.1182C235.73 34.2889 233.5 43.7934 233.5 54.6001H234.5ZM241.1 26.6001L241.973 27.0869C246.417 19.1141 252.55 12.984 260.382 8.67632L259.9 7.80009L259.418 6.92387C251.25 11.4162 244.849 17.8194 240.227 26.1132L241.1 26.6001ZM259.9 7.80009L260.387 8.67357C268.353 4.23361 277.514 2.00009 287.9 2.00009V1.00009V9.15527e-05C277.219 9.15527e-05 267.714 2.29991 259.413 6.92661L259.9 7.80009ZM287.9 1.00009V2.00009H309.1V1.00009V9.15527e-05H287.9V1.00009ZM309.1 1.00009V2.00009C319.486 2.00009 328.578 4.23372 336.407 8.67012L336.9 7.80009L337.393 6.93007C329.222 2.2998 319.781 9.15527e-05 309.1 9.15527e-05V1.00009ZM336.9 7.80009L336.424 8.67964C344.387 12.9872 350.513 19.1135 354.82 27.0759L355.7 26.6001L356.58 26.1243C352.087 17.82 345.68 11.413 337.376 6.92055L336.9 7.80009ZM355.7 26.6001L354.83 27.0931C359.265 34.9202 361.5 44.0783 361.5 54.6001H362.5H363.5C363.5 43.7885 361.201 34.28 356.57 26.1071L355.7 26.6001ZM362.5 54.6001H361.5V89.0001H362.5H363.5V54.6001H362.5ZM362.5 89.0001H361.5C361.5 99.1904 358.499 108.868 352.464 118.051L353.3 118.6L354.136 119.149C360.368 109.665 363.5 99.6098 363.5 89.0001H362.5ZM353.3 118.6L352.597 119.312L368.197 134.712L368.9 134L369.603 133.288L354.003 117.888L353.3 118.6ZM368.9 134L368.173 133.313L350.773 151.713L351.5 152.4L352.227 153.087L369.627 134.687L368.9 134ZM309.1 119.8V120.8C311.778 120.8 314.442 120.236 317.088 119.122L316.7 118.2L316.312 117.278C313.891 118.298 311.489 118.8 309.1 118.8V119.8ZM316.7 118.2L317.403 117.489L299.203 99.4891L298.5 100.2L297.797 100.911L315.997 118.911L316.7 118.2ZM298.5 100.2L299.227 100.887L316.627 82.4872L315.9 81.8001L315.173 81.113L297.773 99.513L298.5 100.2ZM315.9 81.8001L315.197 82.5113L332.597 99.7113L333.3 99.0001L334.003 98.2889L316.603 81.0889L315.9 81.8001ZM333.3 99.0001L334.256 99.2942C335.348 95.7447 335.9 92.3121 335.9 89.0001H334.9H333.9C333.9 92.0881 333.385 95.3221 332.344 98.706L333.3 99.0001ZM334.9 89.0001H335.9V55.8001H334.9H333.9V89.0001H334.9ZM334.9 55.8001H335.9C335.9 46.5515 333.448 38.9695 328.459 33.1493L327.7 33.8001L326.941 34.4509C331.552 39.8307 333.9 46.9153 333.9 55.8001H334.9ZM327.7 33.8001L328.468 33.1599C323.599 27.3165 317.109 24.4001 309.1 24.4001V25.4001V26.4001C316.557 26.4001 322.468 29.0837 326.932 34.4403L327.7 33.8001ZM309.1 25.4001V24.4001H287.9V25.4001V26.4001H309.1V25.4001ZM287.9 25.4001V24.4001C279.891 24.4001 273.341 27.3157 268.341 33.1493L269.1 33.8001L269.859 34.4509C274.459 29.0845 280.442 26.4001 287.9 26.4001V25.4001ZM269.1 33.8001L268.332 33.1599C263.482 38.9801 261.1 46.5583 261.1 55.8001H262.1H263.1C263.1 46.9086 265.385 39.8201 269.868 34.4403L269.1 33.8001ZM262.1 55.8001H261.1V89.4001H262.1H263.1V55.8001H262.1ZM262.1 89.4001H261.1C261.1 98.6419 263.482 106.22 268.332 112.04L269.1 111.4L269.868 110.76C265.385 105.38 263.1 98.2916 263.1 89.4001H262.1ZM269.1 111.4L268.341 112.051C273.341 117.885 279.891 120.8 287.9 120.8V119.8V118.8C280.442 118.8 274.459 116.116 269.859 110.749L269.1 111.4ZM287.9 119.8V120.8H309.1V119.8V118.8H287.9V119.8Z" fill="#F6F6F6" fill-opacity="0.41" mask="url(#path-1-outside-1_416_230)"/>
							</svg>

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