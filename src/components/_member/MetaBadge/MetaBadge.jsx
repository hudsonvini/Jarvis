import styles from "./MetaBadge.module.scss";

export default function MetaBadge({ icon, label }) {
    return (
        <span className={styles.badge}>
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            {label}
        </span>
    );
}
