import { notFound } from "next/navigation";
import SidebarShell from "@/components/_member/SidebarShell/SidebarShell";
import LessonSidebar from "./lesson-sidebar";
import CourseHeader from "./course-header";
import CourseTags from "./course-tags";
import VideoPlayer from "./video-player";
import ModuleSection from "./module-section";
import { getCourseBySlug } from "@/data/courses";
import { getModulesByCourse } from "@/data/modules";
import { getLessonsByModule } from "@/data/lessons";
import { isLessonAttended } from "@/data/attendance";
import { getTrailById } from "@/data/trails";
import { mockUser } from "@/data/user";
import styles from "./page.module.scss";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);
    return {
        title: course
            ? `${course.name} | Javis Game Academy`
            : "Curso | Javis Game Academy",
    };
}

export default async function CourseDetailPage({ params }) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    const trail = getTrailById(course.trailId);
    const courseModules = getModulesByCourse(course.id);

    const modulesWithLessons = courseModules.map((mod) => {
        const moduleLessons = getLessonsByModule(mod.id);
        return {
            ...mod,
            lessons: moduleLessons.map((lesson) => ({
                ...lesson,
                attended: isLessonAttended(mockUser.id, lesson.id),
            })),
        };
    });

    const totalLessons = modulesWithLessons.reduce(
        (acc, m) => acc + m.lessons.length,
        0
    );
    const attendedLessons = modulesWithLessons.reduce(
        (acc, m) => acc + m.lessons.filter((l) => l.attended).length,
        0
    );

    return (
        <>
            <SidebarShell>
                <LessonSidebar
                    modules={modulesWithLessons}
                    courseName={course.name}
                    attendedCount={attendedLessons}
                    totalCount={totalLessons}
                />
            </SidebarShell>

            <main className={styles.main}>
                <CourseHeader
                    course={course}
                    trailName={trail?.name}
                    attendedLessons={attendedLessons}
                    totalLessons={totalLessons}
                />
                <CourseTags tags={course.tags} />
                {course.videoUrl ? (
                    <VideoPlayer videoUrl={course.videoUrl} title={course.name} />
                ) : null}

                <section className={styles.gradeSection}>
                    <h2 className={styles.gradeTitle}>Grade do Curso</h2>
                    {modulesWithLessons.map((mod) => (
                        <ModuleSection key={mod.id} module={mod} lessons={mod.lessons} />
                    ))}
                </section>
            </main>
        </>
    );
}
