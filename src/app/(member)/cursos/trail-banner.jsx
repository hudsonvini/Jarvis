import { getCoursesByTrail } from "@/data/courses";
import styles from "./trail-banner.module.scss";

export default function TrailBanner({ trail }) {
    const trailCourses = getCoursesByTrail(trail.id);
    const activeCourses = trailCourses.filter((c) => c.status === "active");

    return (
        <div className={styles.banner}>
            <div
                className={styles.iconWrapper}
                style={{ background: trail.color }}
            >
                {trail.name.substring(0, 2).toUpperCase()}
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{trail.name}</p>
                <p className={styles.description}>{trail.description}</p>
            </div>
            <span className={styles.courseBadge}>
                {activeCourses.length} {activeCourses.length === 1 ? "curso" : "cursos"}
            </span>
        </div>
    );
}
