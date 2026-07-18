import AttendanceCheck from "@/components/_member/AttendanceCheck/AttendanceCheck";
import styles from "./lesson-card.module.scss";

export default function LessonCard({ lesson, index }) {
    return (
        <div className={styles.card}>
            <div className={styles.thumbnail}>
                <span className={styles.lessonBadge}>{index}</span>
                {lesson.attended ? (
                    <span className={styles.attendanceBadge}>
                        <AttendanceCheck attended />
                    </span>
                ) : null}
            </div>
            <div className={styles.info}>
                <p className={styles.lessonName}>{lesson.name}</p>
                <span className={styles.lessonDuration}>{lesson.duration}min</span>
            </div>
        </div>
    );
}
