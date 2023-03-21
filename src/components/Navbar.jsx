import Link from "next/link";
import React from "react";
import styles from "../styles/components/Navbar.module.scss";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        setTheme("light");
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>
                <div
                    className={`${styles.logo} ${
                        theme === "light" ? styles.invert : ""
                    }`}
                >
                    <img src="/logo.png" alt="" />
                    apperDen
                </div>
            </Link>
            <div className={styles.nav_items}>
                <Link href="/about" className={styles.link}>
                    Seach
                </Link>
                <Link href="/about" className={styles.link}>
                    About
                </Link>
                <Link href="/contactUs" className={styles.link}>
                    Contact Us
                </Link>
            </div>
            <div className={styles.signUp}>
                <button className={styles.loginBtn}>login sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
