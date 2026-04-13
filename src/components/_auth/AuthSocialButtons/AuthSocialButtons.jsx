import styles from "./AuthSocialButtons.module.scss";

const socials = [
    { label: "Google", image: "/google.svg" },
    { label: "Apple", image: "/apple.svg" },
    { label: "Facebook", image: "/facebook.svg" },
];

export default function AuthSocialButtons() {
    return (
        <div className={styles.group}>
            {socials.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    className={styles.button}
                    aria-label={`Continuar com ${item.label}`}
                >
                    <img src={item.image} alt={item.label} />
                </button>
            ))}
        </div>
    );
}
