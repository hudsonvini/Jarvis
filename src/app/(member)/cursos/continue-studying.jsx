import Link from "next/link";
import ProgressBar from "@/components/_member/ProgressBar/ProgressBar";
import { courses } from "@/data/courses";
import { getAttendanceByCourse } from "@/data/attendance";
import { getLessonsByCourse } from "@/data/lessons";
import { getTrailById } from "@/data/trails";
import { mockUser } from "@/data/user";
import styles from "./continue-studying.module.scss";

export default function ContinueStudying() {
    const coursesInProgress = courses.filter((course) => {
        const attendance = getAttendanceByCourse(mockUser.id, course.id);
        return attendance.length > 0;
    });

    if (coursesInProgress.length === 0) return null;

    return (
        <section className={styles.section}>
            <p className={styles.sectionLabel}>Continuar Estudando</p>
            <div className={styles.cards}>
                {coursesInProgress.map((course) => {
                    const attendance = getAttendanceByCourse(mockUser.id, course.id);
                    const attended = attendance.filter((a) => a.isPresent).length;
                    const allLessons = getLessonsByCourse(course.id);
                    const totalLessons = allLessons.length;
                    const trail = getTrailById(course.trailId);

                    return (
                        <Link
                            key={course.id}
                            href={`/cursos/${course.slug}`}
                            className={styles.card}
                        >
                            <div
                                className={styles.cardLogo}
                                style={{ background: trail?.color ?? "#333" }}
                            >
                                {course.name.substring(0, 3).toUpperCase()}
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.cardName}>{course.name}</p>
                                <p className={styles.cardMeta}>
                                    {trail?.name ?? "Trilha"}
                                </p>
                                <div className={styles.progressRow}>
                                    <ProgressBar current={attended} total={totalLessons} />
                                    <span className={styles.progressText}>
                                        {attended} de {totalLessons} aulas
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
