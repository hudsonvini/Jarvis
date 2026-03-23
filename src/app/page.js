"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import PreloaderReveal from "@/components/_ui/PreloaderReveal/PreloaderReveal";

export default function Sobre() {

  const [showPreloader, setShowPreloader] = useState(true);

  return (  
    <>
      {showPreloader && (
				<PreloaderReveal
					isVisible={showPreloader}
					onComplete={() => setShowPreloader(false)}
					logoSrc="/images/min-logo-line.svg"
					marqueeText="Jarvis Game Academy"
				/>
			)}

      <div className={styles.page}>
        <main className={styles.main}>
          
        </main>
      </div>
    </>
  );
}
