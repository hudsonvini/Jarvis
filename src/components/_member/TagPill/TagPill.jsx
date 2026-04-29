import styles from "./TagPill.module.scss";

export default function TagPill({ label, active, onClick, className }) {
    const classes = [
        styles.pill,
        onClick ? styles.clickable : "",
        active ? styles.active : "",
        className || "",
    ]
        .filter(Boolean)
        .join(" ");

    if (onClick) {
        return (
            <button type="button" className={classes} onClick={onClick}>
                {label}
            </button>
        );
    }

    return <span className={classes}>{label}</span>;
}
