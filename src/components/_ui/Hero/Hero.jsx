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
    const tapeRef = useRef(null);

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
            // initial state
            gsap.set(rootRef.current, { autoAlpha: 1 });

            gsap.set(glowRef.current, { opacity: 0, y: 1000 });
            gsap.set(imageRef.current, { opacity: 0, y: 120, scale: 0.95 });
            gsap.set([rightRef.current, bottomRef.current, buttonRef.current], {
                opacity: 0,
                y: 30,
            });

            gsap.set(lettersRef.current, {
                opacity: 0,
                yPercent: 100,
            });

            // timeline principal
            const tl = gsap.timeline();

            // barra topo entra
            tl.fromTo(
                tapeRef.current,
                { x: 300 },
                {
                    x: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    onComplete: () => {
                        gsap.to(tapeRef.current, {
                            x: "-50%",
                            duration: 8,
                            ease: "none",
                            repeat: -1,
                        });
                    },
                }
            );

            // glow
            tl.to(
                glowRef.current,
                {
                    opacity: 1,
                    y: 400,
                    duration: 1,
                },
                "-=0.4"
            );

            // texto gigante
            tl.to(
                lettersRef.current,
                {
                    opacity: 1,
                    yPercent: 0,
                    stagger: 0.04,
                    duration: 0.8,
                },
                "-=0.5"
            );

            // imagem
            tl.to(
                imageRef.current,
                {
                    opacity: 1,
                    y: 40,
                    scale: 1,
                    duration: 1,
                },
                "-=0.6"
            );

            // infos
            tl.to(
                [bottomRef.current, rightRef.current, buttonRef.current],
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    duration: 0.7,
                },
                "-=0.6"
            );
        }, rootRef);

        return () => ctx.revert();
    }, [isReady]);

    return (
        <section
            ref={rootRef}
            className={`${styles.hero} ${!isReady ? styles.hidden : ""}`}
        >
            {/* TOPO */}
            <div className={styles.topStripeHero} />
            <div className={styles.bottomStrip} />


            <div className={styles.container}>

                <svg className={styles.backLogo} width="339" height="399" viewBox="0 0 339 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M326.409 316.329L252.75 398.5H86.25L12.5908 316.33L60.5244 275.317L115.009 336.093L115.157 336.259H223.843L223.992 336.093L278.475 275.317L326.409 316.329Z" stroke="white" stroke-opacity="0.08"/>
                    <path d="M169.5 0.5C262.692 0.5 338.5 74.5829 338.5 165.605V264.585H0.5V165.605C0.500169 74.5829 76.3083 0.5 169.5 0.5ZM169.5 63.7764C112.05 63.7764 65.2873 109.448 65.2871 165.605V201.31H273.713V165.605C273.713 109.448 226.95 63.7764 169.5 63.7764Z" stroke="white" strokeOpacity="0.08"/>
                </svg>

                {/* <img className={styles.linesHero} src="/images/lines-hero.svg" alt="" /> */}
                <svg className={styles.linesHero} width="226" height="675" viewBox="0 0 226 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M226 0H225V675H226V0Z" fill="url(#paint0_linear_674_100)" fill-opacity="0.5"/>
                    <path d="M155 26H154V675H155V26Z" fill="url(#paint1_linear_674_100)" fill-opacity="0.5"/>
                    <path d="M0 287L4.37118e-08 288L226 288L226 287L0 287Z" fill="url(#paint2_linear_674_100)" fill-opacity="0.5"/>
                    <rect width="1.00001" height="226" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 362)" fill="url(#paint3_linear_674_100)" fill-opacity="0.5"/>
                    <rect width="1.00001" height="226" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 431)" fill="url(#paint4_linear_674_100)" fill-opacity="0.5"/>
                    <rect width="1.00001" height="226" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 501)" fill="url(#paint5_linear_674_100)" fill-opacity="0.5"/>
                    <rect width="1.00001" height="226" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 575)" fill="url(#paint6_linear_674_100)" fill-opacity="0.5"/>
                    <rect width="1.00001" height="226" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 638)" fill="url(#paint7_linear_674_100)" fill-opacity="0.5"/>
                    <path d="M0 222L4.37118e-08 223L226 223L226 222L0 222Z" fill="url(#paint8_linear_674_100)" fill-opacity="0.5"/>
                    <defs>
                    <linearGradient id="paint0_linear_674_100" x1="225.5" y1="0" x2="225.5" y2="675" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_674_100" x1="154.5" y1="26" x2="154.5" y2="675" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_674_100" x1="2.18559e-08" y1="287.5" x2="226" y2="287.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_674_100" x1="0.500005" y1="0" x2="0.500005" y2="226" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_674_100" x1="0.500005" y1="0" x2="0.500005" y2="226" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_674_100" x1="0.500005" y1="0" x2="0.500005" y2="226" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_674_100" x1="0.500005" y1="0" x2="0.500005" y2="226" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_674_100" x1="0.500005" y1="0" x2="0.500005" y2="226" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear_674_100" x1="2.18559e-08" y1="222.5" x2="226" y2="222.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.149038" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.2"/>
                    </linearGradient>
                    </defs>
                </svg>


                {/* GLOW */}
                <div className={styles.glow} ref={glowRef}></div>

                {/* IMAGEM */}
                <div className={styles.imageWrap} ref={imageRef}>
                    <img src={heroImage} alt="Hero" />
                </div>

                {/* TEXTO ESQUERDA */}
                <div className={styles.bottomLeft} ref={bottomRef}>
                    <h1>{bigText}</h1>
                    <p>{subtitle}</p>
                </div>

                {/* DIREITA */}
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

                {/* BOTÃO */}
                <button className={styles.button} ref={buttonRef}>
                    {ctaLabel} →
                </button>
            </div>
        </section>
    );
}