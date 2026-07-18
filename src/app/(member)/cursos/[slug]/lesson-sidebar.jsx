"use client";

import { useState, useMemo } from "react";
import ProgressBar from "@/components/_member/ProgressBar/ProgressBar";
import AttendanceCheck from "@/components/_member/AttendanceCheck/AttendanceCheck";
import styles from "./lesson-sidebar.module.scss";

export default function LessonSidebar({
    modules,
    courseName,
    attendedCount,
    totalCount,
}) {
    const [openModules, setOpenModules] = useState(
        () => new Set(modules.map((m) => m.id))
    );

    const firstUnattendedId = useMemo(() => {
        for (const mod of modules) {
            for (const lesson of mod.lessons) {
                if (!lesson.attended) return lesson.id;
            }
        }
        return null;
    }, [modules]);

    function toggleModule(id) {
        setOpenModules((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }

    return (
        <div className={styles.sidebar}>
            <h2 className={styles.courseTitle}>{courseName}</h2>

            <div className={styles.progressSection}>
                <span className={styles.progressLabel}>
                    {attendedCount}/{totalCount} aulas
                </span>
                <ProgressBar current={attendedCount} total={totalCount} />
            </div>

            {modules.map((mod) => {
                const isOpen = openModules.has(mod.id);

                return (
                    <div key={mod.id} className={styles.moduleGroup}>
                        <button
                            type="button"
                            className={styles.moduleHeader}
                            onClick={() => toggleModule(mod.id)}
                            aria-expanded={isOpen}
                        >
                            <div>
                                <span className={styles.moduleName}>{mod.name}</span>
                                <span className={styles.moduleDuration}>
                                    {mod.totalDuration}min
                                </span>
                            </div>
                            <svg
                                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        {isOpen ? (
                            <div className={styles.lessonsList}>
                                {mod.lessons.map((lesson) => {
                                    const isActive = lesson.id === firstUnattendedId;
                                    return (
                                        <div
                                            key={lesson.id}
                                            className={`${styles.lessonItem} ${isActive ? styles.lessonItemActive : ""}`}
                                        >
                                            <span className={styles.lessonIndex}>
                                                {lesson.order}
                                            </span>
                                            <span className={styles.lessonName}>{lesson.name}</span>
                                            <span className={styles.lessonDuration}>
                                                {lesson.duration}min
                                            </span>
                                            <AttendanceCheck attended={lesson.attended} />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
