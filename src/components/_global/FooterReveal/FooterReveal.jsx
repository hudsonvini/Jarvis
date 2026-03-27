"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FooterReveal.module.scss";

gsap.registerPlugin(ScrollTrigger);

function IconX() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M17.53 3H20.5l-6.48 7.41L21.64 21h-5.97l-4.67-6.11L5.65 21H2.67l6.94-7.93L2.36 3h6.12l4.22 5.57L17.53 3Zm-1.05 16h1.65L7.58 4.9H5.8L16.48 19Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconInstagram() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.93 1.32a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.76 3.76 0 0 0 12 8.25Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconTikTok() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M14.9 3c.31 1.78 1.37 3.2 3.05 4 .76.37 1.55.57 2.45.63v2.83c-1.55-.05-3.08-.53-4.4-1.42v5.52c0 3.57-2.6 6.14-6.11 6.14A5.94 5.94 0 0 1 4 14.75c0-3.3 2.65-5.95 5.95-5.95.38 0 .73.03 1.09.11v2.94a3.07 3.07 0 0 0-1.09-.2 3.08 3.08 0 1 0 3.09 3.1V3h1.86Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconArrowUp() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M12 5.5 5.5 12l1.23 1.23 4.4-4.39V19h1.74V8.84l4.4 4.39L18.5 12 12 5.5Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function IconArrowDiagonal() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M7 17 17 7M9 7h8v8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</svg>
	);
}

function IconMenu() {
	return (
		<svg viewBox="0 0 48 48" aria-hidden="true">
			<path d="M10 18H38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
			<path d="M10 30H38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
		</svg>
	);
}

export default function FooterReveal({ isReady = false }) {
	const footerRef = useRef(null);
	const spacerRef = useRef(null);

	useEffect(() => {
		const footerEl = footerRef.current;
		const spacerEl = spacerRef.current;

		if (!footerEl || !spacerEl) return;

		const isTouchDevice =
			typeof window !== "undefined" &&
			("ontouchstart" in window ||
				navigator.maxTouchPoints > 0 ||
				window.matchMedia("(pointer: coarse)").matches);

		const mm = gsap.matchMedia();

		const ctx = gsap.context(() => {
			mm.add("(min-width: 769px)", () => {
				gsap.set(footerEl, {
					position: "fixed",
					left: 0,
					bottom: "-100svh",
					width: "100%",
					height: "100svh",
					minHeight: "100svh",
				});

				gsap.set(spacerEl, { height: "100vh" });

				gsap.to(footerEl, {
					bottom: 0,
					ease: "none",
					scrollTrigger: {
						trigger: spacerEl,
						start: "top bottom",
						end: "bottom bottom",
						scrub: true,
						invalidateOnRefresh: true,
					},
				});
			});

			mm.add("(max-width: 768px)", () => {
				gsap.set(footerEl, {
					position: "relative",
					left: "auto",
					bottom: "auto",
					width: "100%",
					height: "auto",
					minHeight: "unset",
				});

				gsap.set(spacerEl, { height: 0 });
			});

			if (isTouchDevice && window.innerWidth > 768) {
				gsap.set(footerEl, { bottom: 0 });
			}
		}, footerEl);

		const handleResize = () => {
			ScrollTrigger.refresh();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			mm.revert();
			ctx.revert();
		};
	}, []);

	const handleScrollTop = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<div
				ref={spacerRef}
				className={`${styles.footerSpacer} ${isReady ? styles.isReady : styles.isHidden}`}
				aria-hidden="true"
			/>

			<footer
				ref={footerRef}
				className={`${styles.footer} ${isReady ? styles.isReady : styles.isHidden}`}
			>
				<div className={styles.outerScene}>
					<div className={styles.heroBackdrop}>
						<div className={styles.heroGlowTop} aria-hidden="true" />
						<div className={styles.heroGlowBottom} aria-hidden="true" />

						<div className={styles.heroImageWrap} aria-hidden="true">
							{/* <img
								src="/images/jarvis/footer-woman.png"
								alt=""
								className={styles.heroImage}
							/> */}
						</div>

						<div className={styles.heroContent}>
							<h2 className={styles.heroTitle}>
								Experiência Personalizada,
								<br />
								feita para quem quer
								<br />
								evoluir de verdade.
							</h2>

							<a href="/contato" className={styles.heroButton}>
								<span>Comece Agora</span>
								<IconArrowDiagonal />
							</a>
						</div>
					</div>

					<div className={styles.panel}>
						{/* <div className={styles.stripeBar} aria-hidden="true" /> */}

						<div className={styles.inner}>
							<div className={styles.decorPurple} aria-hidden="true" />
							<div className={styles.decorYellow} aria-hidden="true" />
							<div className={styles.decorGrid} aria-hidden="true" />

							<div className={styles.topArea}>
								<div className={styles.brandMini}>
									<div className={styles.brandMiniMark} aria-hidden="true">
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
									</div>

									<div className={styles.brandMiniText}>
										<span className={styles.brandMiniName}>Jarvis</span>
										<span className={styles.brandMiniSub}>GAME ACADEMY</span>
									</div>
								</div>

								<div className={styles.menuGhost} aria-hidden="true">
									<IconMenu />
								</div>
							</div>

							<div className={styles.columns}>
								<div className={styles.column}>
									<h4 className={styles.columnTitle}>Jarvis</h4>

									<nav className={styles.linkList} aria-label="Navegação do footer">
										<a href="/">Home</a>
										<a href="/sobre">Sobre</a>
										<a href="/cursos">Cursos</a>
										<a href="/mentorias">Mentorias</a>
										<a href="/blog">Blog</a>
									</nav>
								</div>

								<div className={styles.column}>
									<h4 className={styles.columnTitle}>Biblioteca</h4>

									<div className={styles.linkList}>
										<a href="/metodo">Método Jarvis</a>
										<a href="/trilhas">Trilhas de Aprendizado</a>
										<a href="/projetos">Projetos Reais</a>
										<a href="/comunidade">Comunidade</a>
									</div>
								</div>

								<div className={styles.column}>
									<h4 className={styles.columnTitle}>Informação</h4>

									<div className={styles.infoList}>
										<a href="mailto:contato@jarvis.com.br">contato@jarvis.com.br</a>
										<a href="tel:+5586999999999">+55 86 99999-9999</a>
										<p>Segunda - Sexta</p>
										<p>8h às 18h</p>
									</div>
								</div>

								<div className={styles.column}>
									<div className={styles.legalBlock}>
										<p>Plataforma educacional:</p>
										<strong>Jarvis Academy</strong>
									</div>

									<div className={styles.legalBlock}>
										<p>Atendimento e suporte:</p>
										<span>Disponível em dias úteis</span>
									</div>
								</div>
							</div>

							<div className={styles.middleRow}>
								<div className={styles.socials}>
									<a href="#" aria-label="X">
										<IconX />
									</a>

									<a href="#" aria-label="Instagram">
										<IconInstagram />
									</a>

									<a href="#" aria-label="TikTok">
										<IconTikTok />
									</a>
								</div>

								<button
									type="button"
									className={styles.backToTop}
									onClick={handleScrollTop}
									aria-label="Voltar ao topo"
								>
									<IconArrowUp />
								</button>
							</div>

							<div className={styles.brandHero}>
								<div className={styles.brandHeroText}>
									<span className={styles.brandHeroName}>Jarvis</span>
									<span className={styles.brandHeroBadge}>®</span>
								</div>

							</div>

							<div className={styles.bottomBar}>
								<p className={styles.copy}>
									© 2026 Jarvis. Todos os direitos reservados.
								</p>

								<div className={styles.bottomLinks}>
									<a href="/cookies">Cookies</a>
									<a href="/privacidade">Política de privacidade</a>
									<a href="/termos">Termos de uso</a>
									<a href="/editorial">Processo editorial</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}