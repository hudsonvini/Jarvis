import styles from "./ProgressBar.module.scss";

export default function ProgressBar({ current, total, className }) {
    const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

    return (
        <div
            className={`${styles.track} ${className || ""}`}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${percentage}% completo`}
        >
            <div className={styles.fill} style={{ width: `${percentage}%` }} />
        </div>
    );
}
