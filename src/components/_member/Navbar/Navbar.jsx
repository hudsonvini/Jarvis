import Link from "next/link";
import styles from "./Navbar.module.scss";
import JavisLogo from "@/components/_member/JavisLogo/JavisLogo";
import HamburgerButton from "./HamburgerButton";
import LogoutButton from "./LogoutButton";

function getInitials(name = "") {
    return name
        .split(" ")
        .filter((n) => n.length > 0)
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

export default function Navbar({ user }) {
    return (
        <nav className={styles.navbar}>
            <Link href="/cursos" className={styles.logo}>
                <JavisLogo />
            </Link>

            <div className={styles.nav}>
                <Link href="/cursos" className={styles.navLink}>
                    Cursos
                </Link>
                <Link href="/suporte" className={styles.navLink}>
                    Suporte
                </Link>
            </div>

            <div className={styles.userSection}>
                <span className={styles.userName}>{user?.name}</span>
                <div className={styles.avatar}>{getInitials(user?.name)}</div>
                <LogoutButton />
                <HamburgerButton />
            </div>
        </nav>
    );
}
