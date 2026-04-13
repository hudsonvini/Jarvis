import styles from "./AuthShell.module.scss";

export default function AuthShell({
    titleBadge,
    visual,
    children,
}) {
    return (
        <main className={styles.page}>

            <section className={styles.shell}>

                <div className={styles.left}>
                    <span className={styles.badge}>{titleBadge}</span>

                    <div className={styles.cornerTopLeft} />
                    <div className={styles.cornerTopRight} />
                    <div className={styles.cornerBottomLeft} />
                    <div className={styles.cornerBottomRight} />
                    {visual}
                </div>
                <div className={styles.right}>{children}</div>
            </section>

            <div className={styles.bottomBar} />
        </main>
    );
}
