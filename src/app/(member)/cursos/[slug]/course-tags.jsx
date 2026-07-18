import TagPill from "@/components/_member/TagPill/TagPill";
import styles from "./course-tags.module.scss";

export default function CourseTags({ tags }) {
    if (!tags || tags.length === 0) return null;

    return (
        <div className={styles.tags}>
            {tags.map((tag) => (
                <TagPill key={tag} label={tag} />
            ))}
        </div>
    );
}
