import styles from "./AttendanceCheck.module.scss";

export default function AttendanceCheck({ attended }) {
    return (
        <span
            className={`${styles.check} ${!attended ? styles.notAttended : ""}`}
            aria-label={attended ? "Presenca confirmada" : "Sem presenca"}
        >
            {attended ? (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
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
                    <circle cx="12" cy="12" r="10" />
                </svg>
            )}
        </span>
    );
}
