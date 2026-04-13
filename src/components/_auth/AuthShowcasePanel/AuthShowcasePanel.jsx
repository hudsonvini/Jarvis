"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AuthShowcasePanel.module.scss";

const slides = [
    // {
    //     title: "NEGOCIOS",
    //     description:
    //         "Take your YouTube channel to the next level with Upstream. The easiest way to build and maintain a 24 hour live stream using pre recorded videos.",
    //     image: "/images/image-front.png",
    //     alt: "Experiencia gamer em destaque",
    // },
    {
        title: "CRIACAO",
        description:
            "Desenvolva novas habilidades com conteudo visual, pratica guiada e uma trilha feita para acelerar sua evolucao dentro do universo digital.",
        image: "/images/quem-somos.webp",
        alt: "Ambiente criativo da academia",
    },
    {
        title: "PERFORMANCE",
        description:
            "Monte sua jornada com foco em estrategia, ritmo e constancia para transformar aprendizado em resultado com mais clareza.",
        image: "/images/atleta-digital-2.webp",
        alt: "Aluno em momento de performance",
    },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function AuthShowcasePanel() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, AUTO_PLAY_INTERVAL);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.panel}>
            <div className={styles.media}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.title}
                        className={`${styles.slideMedia} ${index === activeSlide ? styles.active : ""}`}
                        aria-hidden={index !== activeSlide}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            sizes="(max-width: 1023px) 100vw, 60vw"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.copy}>
                <span className={styles.kicker}>{slides[activeSlide].title}</span>
                <p>{slides[activeSlide].description}</p>
            </div>

            <div className={styles.progress} aria-label="Slides de destaque">
                {slides.map((slide, index) => (
                    <button
                        key={slide.title}
                        type="button"
                        className={`${styles.progressItem} ${index === activeSlide ? styles.progressActive : ""}`}
                        aria-label={`Ir para slide ${index + 1}`}
                        aria-pressed={index === activeSlide}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
