import GoogleSignInButton from "../GoogleSignInButton/GoogleSignInButton";
import styles from "./AuthSocialButtons.module.scss";

const socials = [
    { label: "Apple", image: "/apple.svg" },
    { label: "Facebook", image: "/facebook.svg" },
];

export default function AuthSocialButtons() {
    return (
        <div className={styles.group}>
            <GoogleSignInButton />

            {socials.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    className={styles.button}
                    aria-label={`Continuar com ${item.label}`}
                    disabled
                >
                    <img src={item.image} alt={item.label} />
                </button>
            ))}
        </div>
    );
}
