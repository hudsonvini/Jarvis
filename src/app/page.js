import Image from "next/image";
import styles from "./page.module.css";
import JanisAccordionShowcase from "@/components/JanisAccordionShowcase/JanisAccordionShowcase";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <JanisAccordionShowcase />

        <Footer />
      </main>
    </div>
  );
}
