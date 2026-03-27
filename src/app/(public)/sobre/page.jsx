"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import JanisAccordionShowcase from "@/components/JanisAccordionShowcase/JanisAccordionShowcase";
import Footer from "@/components/Footer/Footer";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";

export default function Home() {

  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
    <PreloaderReveal 
      isVisible={showPreloader}
      onComplete={() => setShowPreloader(false)}
      logoSrc="/images/min-logo-line.svg"
      marqueeText="Javis Game Academy"
    />
      <div className={styles.page}>
        <main className={styles.main}>
          <JanisAccordionShowcase />

          <Footer />
        </main>
      </div>
    </>
  );
}
