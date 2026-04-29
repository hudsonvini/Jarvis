"use client";

import { logoutAction } from "@/app/actions/auth";
import styles from "./Navbar.module.scss";

export default function LogoutButton() {
    return (
        <form action={logoutAction}>
            <button type="submit" className={styles.logoutButton}>
                Sair
            </button>
        </form>
    );
}
