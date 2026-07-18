"use client";

import { useState, useMemo } from "react";
import TagPill from "@/components/_member/TagPill/TagPill";
import { courses } from "@/data/courses";
import styles from "./trails-sidebar.module.scss";

const orderingOptions = [
    { value: "recent", label: "Mais recentes" },
    { value: "az", label: "A-Z" },
    { value: "progress", label: "Progresso" },
];

export default function TrailsSidebar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTags, setActiveTags] = useState(new Set());
    const [ordering, setOrdering] = useState("recent");

    const allTags = useMemo(() => {
        const tagSet = new Set();
        courses.forEach((course) => {
            course.tags.forEach((tag) => tagSet.add(tag));
        });
        return Array.from(tagSet).sort();
    }, []);

    function handleTagClick(tag) {
        setActiveTags((prev) => {
            const next = new Set(prev);
            if (next.has(tag)) {
                next.delete(tag);
            } else {
                next.add(tag);
            }
            return next;
        });
    }

    return (
        <div className={styles.sidebarContent}>
            <div>
                <h3 className={styles.sidebarTitle}>Buscar</h3>
                <div className={styles.searchWrapper}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Buscar cursos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Buscar cursos"
                    />
                    <svg
                        className={styles.searchIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>

            <div>
                <h3 className={styles.sidebarTitle}>Tags</h3>
                <div className={styles.tagsGroup}>
                    {allTags.map((tag) => (
                        <TagPill
                            key={tag}
                            label={tag}
                            active={activeTags.has(tag)}
                            onClick={() => handleTagClick(tag)}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className={styles.sidebarTitle}>Ordenar</h3>
                <div className={styles.orderGroup}>
                    {orderingOptions.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            className={`${styles.orderButton} ${
                                ordering === opt.value ? styles.orderButtonActive : ""
                            }`}
                            onClick={() => setOrdering(opt.value)}
                            aria-pressed={ordering === opt.value}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
