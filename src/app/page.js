"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";
import Hero from "@/components/_ui/Home/Hero/Hero";
import Navbar from "@/components/_global/Navbar/Navbar";
import CoursesSection from "@/components/_ui/Home/CoursesSection/CoursesSection";
import TeachersCarousel from "@/components/_ui/Home/TeachersCarousel/TeachersCarousel";
import TeachersCarouselSimples from "@/components/_ui/Home/TeachersCarouselSimples/TeachersCarouselSimples";
import TextDecoSection from "@/components/_ui/Home/TextDecoSection/TextDecoSection";
import FaqSection from "@/components/_ui/Home/FaqSection/FaqSection";
import ChampionshipsSlider from "@/components/_ui/Home/ChampionshipsSlider/ChampionshipsSlider";
import FooterReveal from "@/components/_global/FooterReveal/FooterReveal";

export default function Sobre() {
    const [showPreloader, setShowPreloader] = useState(true);
    const [ready, setReady] = useState(false);
    const [footerReady, setFooterReady] = useState(false);

    const handlePreloaderComplete = () => {
        setShowPreloader(false);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setReady(true);

                setTimeout(() => {
                    setFooterReady(true);
                }, 350);
            });
        });
    };

    return (
        <>
            {showPreloader && (
                <PreloaderReveal
                    isVisible={showPreloader}
                    onComplete={handlePreloaderComplete}
                    logoSrc="/images/min-logo-line.svg"
                    marqueeText="Javis Game Academy"
                />
            )}

            {ready && (
                <>
                    <Navbar
                        logoSrc="/images/logo.png"
                        logoAlt="Javis"
                        isReady={ready}
                    />

                    <Hero
                        isReady={ready}
                        bigText="ATLETA DIGITAL"
                        subtitle="O competitivo dentro de eco sistema envolvendo os principais e-Sports, com jogadores profissionais desenvolvendo aulas para você evoluir na teória e prática."
                        rightTitle="EDUCAÇÃO"
                        rightText="Na área educacional, utilizamos games, criação digital e inovação como ferramentas para desenvolver criatividade, estratégia, colaboração, linguística, reflexo e coordenação."
                        heroImage="/images/hero.png"
                    />

                    <main className={styles.main}>
                        <CoursesSection />
                        <TeachersCarousel />
                    </main>

                    <div className={styles.backHome}>
                        <TextDecoSection />
                        <TeachersCarouselSimples />
                        <FaqSection />
                        <ChampionshipsSlider />
                        <div className={styles.areaImage}>
                            <img src='/images/cs.png' alt='cs' />
                        </div>
                    </div>

                </>
            )}

            <FooterReveal isReady={footerReady} />
        </>
    );
}
