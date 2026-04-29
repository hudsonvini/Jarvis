import Link from "next/link";
import ProgressBar from "@/components/_member/ProgressBar/ProgressBar";
import TagPill from "@/components/_member/TagPill/TagPill";
import { getAttendanceByCourse } from "@/data/attendance";
import { getLessonsByCourse } from "@/data/lessons";
import { getTrailById } from "@/data/trails";
import { mockUser } from "@/data/user";
import styles from "./course-list-item.module.scss";

export default function CourseListItem({ course, index }) {
    const attendance = getAttendanceByCourse(mockUser.id, course.id);
    const attended = attendance.filter((a) => a.isPresent).length;
    const allLessons = getLessonsByCourse(course.id);
    const totalLessons = allLessons.length;
    const trail = getTrailById(course.trailId);
    const hasProgress = attended > 0;

    return (
        <Link href={`/cursos/${course.slug}`} className={styles.item}>
            <span className={styles.index}>
                {String(index).padStart(2, "0")}
            </span>
            <div className={styles.content}>
                <div className={styles.topRow}>
                    <div
                        className={styles.logoPlaceholder}
                        style={{ background: trail?.color ?? "#333" }}
                    >
                        {course.name.substring(0, 3).toUpperCase()}
                    </div>
                    <span className={styles.courseName}>{course.name}</span>
                    <div className={styles.tags}>
                        {course.tags.slice(0, 3).map((tag) => (
                            <TagPill key={tag} label={tag} />
                        ))}
                    </div>
                </div>
                {hasProgress ? (
                    <ProgressBar current={attended} total={totalLessons} />
                ) : null}
            </div>
            <div className={styles.meta}>
                <span>{totalLessons > 0 ? totalLessons : course.totalLessons} aulas</span>
                <span>{course.totalHours}h</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </Link>
    );
}
