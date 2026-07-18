import styles from "./FormSpinner.module.scss";

export default function FormSpinner({ size = 16 }) {
    return (
        <span
            className={styles.spinner}
            style={{ width: `${size}px`, height: `${size}px` }}
            aria-hidden="true"
        />
    );
}
