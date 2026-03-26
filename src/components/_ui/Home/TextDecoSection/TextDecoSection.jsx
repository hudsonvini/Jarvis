"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TextDecoSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

function splitToChars(text) {
	return text.split("").map((char, index) => ({
		id: `${char}-${index}`,
		char,
	}));
}

function RenderChars({ text, className }) {
	const chars = useMemo(() => splitToChars(text), [text]);

	return (
		<span className={className} aria-label={text}>
			{chars.map((item) => (
				<span
					key={item.id}
					className={styles.char}
					aria-hidden="true"
					data-char={item.char === " " ? "space" : "char"}
				>
					{item.char === " " ? "\u00A0" : item.char}
				</span>
			))}
		</span>
	);
}

export default function TextDecoSection({
	eyebrow = "UPSTREAM LIVE AUTOMATION",
	titleLine1 = "Take your YouTube channel to the next level",
	titleLine2 = "with Upstream.",
	titleLine3 = "The easiest way to",
	titleHighlight = "build & maintain",
	titleLine4 = "a 24 hour live stream using pre recorded videos.",
	description = "Take your YouTube channel to the next level with Upstream. The easiest way to build and maintain a 24 hour live stream using pre recorded videos.",
	buttonText = "Get started",
}) {
	const sectionRef = useRef(null);
	const pinWrapRef = useRef(null);
	const buttonRef = useRef(null);
	const backLogoRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const chars = gsap.utils.toArray(`.${styles.char}`);
			const buttonEl = buttonRef.current;

			const backLogoPaths = backLogoRef.current
				? Array.from(
						backLogoRef.current.querySelectorAll(
							"path, rect, line, circle, ellipse, polyline, polygon"
						)
				  )
				: [];

			if (!chars.length) return;

			gsap.set(chars, {
				opacity: 0.12,
			});

			gsap.set(buttonEl, {
				opacity: 0.22,
				backgroundColor: "rgba(241, 202, 38, 0)",
				color: "#ffffff",
				borderColor: "rgba(255, 255, 255, 0.16)",
			});

			backLogoPaths.forEach((el) => {
				try {
					const length = el.getTotalLength ? el.getTotalLength() : 0;

					if (length) {
						el.style.strokeDasharray = `${length}`;
						el.style.strokeDashoffset = `${length}`;
					}

					el.style.opacity = "0.08";
				} catch (error) {
					el.style.opacity = "0.08";
				}
			});

			gsap.set(backLogoPaths, {
				stroke: "#7F5CFF",
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: pinWrapRef.current,
					start: "top top",
					end: "+=2800",
					scrub: 1.6,
					pin: true,
					anticipatePin: 1,
				},
			});

			tl.to(
				chars,
				{
					opacity: 1,
					stagger: {
						each: 0.024,
						from: "start",
					},
					ease: "none",
				},
				0
			);

			if (backLogoPaths.length) {
                tl.to(
                    backLogoPaths,
                    {
                        strokeDashoffset: (index, target) => {
                            const length = target.getTotalLength ? target.getTotalLength() : 0;
                            return length * 0.9;
                        },
                        opacity: 0.12,
                        stagger: 0.08,
                        ease: "none",
                    },
                    0.04
                );
            
                tl.to(
                    backLogoPaths,
                    {
                        strokeDashoffset: (index, target) => {
                            const length = target.getTotalLength ? target.getTotalLength() : 0;
                            return length * 0.72;
                        },
                        opacity: 0.16,
                        stagger: 0.08,
                        ease: "none",
                    },
                    0.18
                );
            
                tl.to(
                    backLogoPaths,
                    {
                        strokeDashoffset: (index, target) => {
                            const length = target.getTotalLength ? target.getTotalLength() : 0;
                            return length * 0.52;
                        },
                        opacity: 0.2,
                        stagger: 0.08,
                        ease: "none",
                    },
                    0.34
                );
            
                tl.to(
                    backLogoPaths,
                    {
                        strokeDashoffset: (index, target) => {
                            const length = target.getTotalLength ? target.getTotalLength() : 0;
                            return length * 0.34;
                        },
                        opacity: 0.26,
                        stagger: 0.08,
                        ease: "none",
                    },
                    0.52
                );
            
                tl.to(
                    backLogoPaths,
                    {
                        strokeDashoffset: (index, target) => {
                            const length = target.getTotalLength ? target.getTotalLength() : 0;
                            return length * 0.16;
                        },
                        opacity: 0.34,
                        stagger: 0.08,
                        ease: "none",
                    },
                    0.7
                );
            
                tl.to(
                    backLogoPaths,
                    {
                        strokeDashoffset: 0,
                        opacity: 0.46,
                        stagger: 0.08,
                        ease: "none",
                    },
                    0.86
                );
            
                tl.to(
                    backLogoPaths,
                    {
                        stroke: "#FFFFFF",
                        opacity: 0.12,
                        ease: "none",
                    },
                    0.965
                );
            }

			tl.to(
				buttonEl,
				{
					opacity: 1,
					backgroundColor: "#f1ca26",
					color: "#09030f",
					borderColor: "#f1ca26",
					ease: "none",
				},
				0.92
			);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className={styles.section} ref={sectionRef}>
			<div className={styles.pinWrap} ref={pinWrapRef}>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.left}>
							<span className={styles.eyebrow}>{eyebrow}</span>

							<h2 className={styles.title}>
								<RenderChars text={titleLine1} className={styles.line} />
								<RenderChars text={titleLine2} className={styles.line} />

								<span className={styles.line}>
									<RenderChars text={`${titleLine3} `} className={styles.inline} />
									<strong className={styles.highlight}>
										<RenderChars text={titleHighlight} className={styles.inline} />
									</strong>
									<RenderChars text={` ${titleLine4}`} className={styles.inline} />
								</span>
							</h2>

							<p className={styles.description}>
								<RenderChars text={description} className={styles.descriptionInline} />
							</p>

							<button className={styles.cta} ref={buttonRef} type="button">
								{buttonText}
							</button>
						</div>

						<div className={styles.right}>
							<svg
								ref={backLogoRef}
								className={styles.backLogo}
								width="339"
								height="399"
								viewBox="0 0 339 399"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}