"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import styles from "./Navbar.module.scss";

gsap.registerPlugin(SplitText);

const socials = [
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
];

const legalLinks = [
    { label: "Politica de Cokies", href: "#" },
    { label: "Accessibilidade", href: "#" },
    { label: "Privacidade", href: "#" },
];

const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "Cadastro", href: "/cadastro" },
    { label: "Login", href: "/login" },
    { label: "Pacotes de Hora", href: "/sobre" },
    { label: "Cursos", href: "/sobre" },
    { label: "Aniversário", href: "/sobre" },
    { label: "Sobre", href: "/sobre" },
];

const secondaryLinks = [
    { label: "Playground", href: "#" },
    { label: "Build Something", href: "#" },
    { label: "Activity Feed", href: "#" },
    { label: "Profile", href: "#" },
];

export default function Navbar({
    logoSrc = "/logo.png",
    logoAlt = "Logo",
}) {
    const rootRef = useRef(null);
    const topStripWrapRef = useRef(null);
    const stripIntroRef = useRef(null);
    const stripLoopTrackRef = useRef(null);
    const logoRef = useRef(null);
    const togglerRef = useRef(null);

    const splitInstanceRef = useRef(null);
    const menuTimelineRef = useRef(null);
    const introTimelineRef = useRef(null);
    const stripLoopTweenRef = useRef(null);
    const introTimeoutRef = useRef(null);

    const isAnimatingRef = useRef(false);
    const isMenuOpenRef = useRef(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const navBgs = gsap.utils.toArray(`.${styles.navBg}`);
            const navItems = rootRef.current?.querySelector(`.${styles.navItems}`);
            const togglerLines = togglerRef.current?.querySelectorAll("span");

            if (!navItems || !navBgs.length || !togglerLines?.length) return;

            splitInstanceRef.current = new SplitText(`.${styles.splitTarget}`, {
                type: "lines",
                mask: "lines",
                linesClass: styles.line,
            });

            const linkBlocks = [
                `.${styles.navSocials} .${styles.line}, .${styles.navLegal} .${styles.line}`,
                `.${styles.navPrimaryLinks} .${styles.line}`,
                `.${styles.navSecondaryLinks} .${styles.line}`,
            ];

            gsap.set(topStripWrapRef.current, {
                autoAlpha: 0,
            });

            gsap.set(stripIntroRef.current, {
                xPercent: 108,
                force3D: true,
            });

            gsap.set(logoRef.current, {
                autoAlpha: 0,
                y: -14,
            });

            gsap.set(togglerLines, {
                xPercent: 115,
                autoAlpha: 0,
                force3D: true,
            });

            gsap.set(navBgs, {
                scaleY: 0,
                transformOrigin: "top top",
            });

            gsap.set(navItems, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            });

            gsap.set(linkBlocks.join(", "), {
                yPercent: 100,
                force3D: true,
            });

            menuTimelineRef.current = gsap.timeline({
                paused: true,
                onComplete: () => {
                    isAnimatingRef.current = false;
                },
                onReverseComplete: () => {
                    gsap.set(linkBlocks.join(", "), {
                        yPercent: 100,
                    });
                    isAnimatingRef.current = false;
                },
            });

            menuTimelineRef.current.to(navBgs, {
                scaleY: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.inOut",
            });

            menuTimelineRef.current.to(
                navItems,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.8,
                    ease: "power3.inOut",
                },
                "-=0.62"
            );

            menuTimelineRef.current.add(() => {
                linkBlocks.forEach((selector, index) => {
                    gsap.to(selector, {
                        yPercent: 0,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "power3.out",
                        delay: index * 0.04,
                        force3D: true,
                        overwrite: "auto",
                    });
                });
            }, "-=0.05");

            introTimelineRef.current = gsap.timeline({
                paused: true,
            });

            introTimelineRef.current.set(topStripWrapRef.current, {
                autoAlpha: 1,
            });

            introTimelineRef.current.to(stripIntroRef.current, {
                xPercent: 0,
                duration: 1.55,
                ease: "expo.out",
                force3D: true,
            });

            introTimelineRef.current.to(
                logoRef.current,
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                },
                "-=0.46"
            );

            introTimelineRef.current.to(
                togglerLines,
                {
                    xPercent: 0,
                    autoAlpha: 1,
                    duration: 0.72,
                    stagger: 0.1,
                    ease: "power3.out",
                    force3D: true,
                    overwrite: "auto",
                    clearProps: "transform",
                },
                "-=0.34"
            );

            introTimelineRef.current.add(() => {
                stripLoopTweenRef.current = gsap.to(stripLoopTrackRef.current, {
                    xPercent: -50,
                    duration: 14,
                    ease: "none",
                    repeat: -1,
                    force3D: true,
                });
            }, "-=0.18");

            introTimeoutRef.current = window.setTimeout(() => {
                introTimelineRef.current?.play(0);
            }, 1500);
        }, rootRef);

        return () => {
            if (introTimeoutRef.current) {
                window.clearTimeout(introTimeoutRef.current);
            }

            if (stripLoopTweenRef.current) {
                stripLoopTweenRef.current.kill();
            }

            if (introTimelineRef.current) {
                introTimelineRef.current.kill();
            }

            if (menuTimelineRef.current) {
                menuTimelineRef.current.kill();
            }

            if (splitInstanceRef.current) {
                splitInstanceRef.current.revert();
            }

            ctx.revert();
        };
    }, []);

    const handleToggleMenu = () => {
        if (isAnimatingRef.current || !menuTimelineRef.current) return;

        isAnimatingRef.current = true;

        if (!isMenuOpenRef.current) {
            menuTimelineRef.current.play(0);
        } else {
            menuTimelineRef.current.reverse();
        }

        isMenuOpenRef.current = !isMenuOpenRef.current;
        setIsMenuOpen(isMenuOpenRef.current);
    };

    return (
        <header
            ref={rootRef}
            className={styles.navbarShell}
        >
            <div
                ref={topStripWrapRef}
                className={styles.topStripWrap}
            >
                <div
                    ref={stripIntroRef}
                    className={styles.topStripIntro}
                >
                    <div className={styles.topStripViewport}>
                        <div
                            ref={stripLoopTrackRef}
                            className={styles.topStripTrack}
                        >
                            <div className={styles.topStripeHero}></div>
                            <div className={styles.topStripeHero}></div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={styles.navbar}>
                <div
                    ref={logoRef}
                    className={styles.navLogo}
                >
                    <Link href="/">
                        <Image
                            src={logoSrc}
                            alt={logoAlt}
                            width={176}
                            height={44}
                        />
                    </Link>
                </div>

                <button
                    ref={togglerRef}
                    type="button"
                    className={`${styles.navToggler} ${isMenuOpen ? styles.open : ""}`}
                    onClick={handleToggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div className={styles.navContent}>
                <div className={styles.navBg}></div>
                <div className={styles.navBg}></div>
                <div className={styles.navBg}></div>
                <div className={styles.navBg}></div>

                <div className={styles.navItems}>
                    <div className={styles.navItemsCol}>
                        <div className={styles.navSocials}>
                            {socials.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={styles.splitTarget}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className={styles.navLegal}>
                            {legalLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={styles.splitTarget}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.navItemsCol}>
                        <div className={styles.navPrimaryLinks}>
                            {primaryLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={styles.splitTarget}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className={styles.navSecondaryLinks}>
                            {secondaryLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={styles.splitTarget}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
