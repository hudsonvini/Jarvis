import SidebarShell from "@/components/_member/SidebarShell/SidebarShell";
import TrailsSidebar from "./trails-sidebar";
import ContinueStudying from "./continue-studying";
import TrailBanner from "./trail-banner";
import CourseListItem from "./course-list-item";
import { trails } from "@/data/trails";
import { courses } from "@/data/courses";
import styles from "./page.module.scss";

export const metadata = {
    title: "Grade de Cursos | Javis Game Academy",
};

export default function CursosPage() {
    return (
        <>
            <SidebarShell>
                <TrailsSidebar />
            </SidebarShell>

            <main className={styles.main}>
                <h1 className={styles.title}>Grade de Cursos</h1>
                <p className={styles.subtitle}>Todas as trilhas e cursos</p>

                <ContinueStudying />

                <section className={styles.trailsSection}>
                    <h2 className={styles.sectionTitle}>Trilhas</h2>
                    <div className={styles.trailsGrid}>
                        {trails.map((trail) => (
                            <TrailBanner key={trail.id} trail={trail} />
                        ))}
                    </div>
                </section>

                <section className={styles.coursesSection}>
                    <h2 className={styles.sectionTitle}>Todos os Cursos</h2>
                    <div className={styles.coursesList}>
                        {courses
                            .filter((c) => c.status === "active")
                            .map((course, index) => (
                                <CourseListItem
                                    key={course.id}
                                    course={course}
                                    index={index + 1}
                                />
                            ))}
                    </div>
                </section>
            </main>
        </>
    );
}
