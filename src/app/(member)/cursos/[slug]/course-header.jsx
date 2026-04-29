import MetaBadge from "@/components/_member/MetaBadge/MetaBadge";
import ProgressBar from "@/components/_member/ProgressBar/ProgressBar";
import styles from "./course-header.module.scss";

export default function CourseHeader({
    course,
    trailName,
    attendedLessons,
    totalLessons,
}) {
    return (
        <header className={styles.header}>
            {trailName ? <p className={styles.trailLabel}>{trailName}</p> : null}
            <h1 className={styles.title}>{course.name}</h1>
            <p className={styles.description}>
                {course.longDescription || course.description}
            </p>

            <div className={styles.metaRow}>
                <MetaBadge label={`${totalLessons} Aulas`} />
                <MetaBadge label={`${course.totalHours}h de conteudo`} />
                <MetaBadge label="Certificado de Conclusao" />
                <MetaBadge label={course.isPresencial ? "Presencial" : "Online"} />
            </div>

            {course.isPresencial && course.schedule ? (
                <p className={styles.schedule}>{course.schedule}</p>
            ) : null}

            <div className={styles.progressSection}>
                <ProgressBar current={attendedLessons} total={totalLessons} />
                <p className={styles.progressLabel}>
                    {attendedLessons} de {totalLessons} aulas concluidas
                </p>
            </div>
        </header>
    );
}
