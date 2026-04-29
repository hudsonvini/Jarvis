import LessonCard from "./lesson-card";
import styles from "./module-section.module.scss";

export default function ModuleSection({ module: mod, lessons }) {
    const totalMinutes = lessons.reduce((acc, l) => acc + l.duration, 0);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>{mod.name}</h3>
                <p className={styles.subtitle}>
                    {lessons.length} aulas &middot; {totalMinutes}min
                </p>
            </div>

            <div className={styles.grid}>
                {lessons.map((lesson, idx) => (
                    <LessonCard key={lesson.id} lesson={lesson} index={idx + 1} />
                ))}
            </div>
        </section>
    );
}
