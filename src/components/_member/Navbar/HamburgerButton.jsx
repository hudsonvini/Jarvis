"use client";

import styles from "./Navbar.module.scss";

export default function HamburgerButton() {
    function handleClick() {
        window.dispatchEvent(new Event("toggle-sidebar"));
    }

    return (
        <button
            type="button"
            className={styles.hamburger}
            onClick={handleClick}
            aria-label="Abrir menu lateral"
        >
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
        </button>
    );
}
