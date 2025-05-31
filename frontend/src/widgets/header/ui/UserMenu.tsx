import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import styles from "./UserMenu.module.scss";
import { LogOut, Settings, Flag, User, Folder } from "lucide-react";
import Avatar from "@/shared/assets/header/Avatar.png";

export const UserMenu = () => {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.menuContainer} ref={menuRef}>
            <img
                src={Avatar}
                alt="Avatar"
                className={styles.avatar}
                onClick={toggleMenu}
            />
            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.userInfo}>
                        <div className={styles.username}>vokz55</div>
                        <div className={styles.email}>vokz55@yandex.ru</div>
                    </div>
                    <ul className={styles.menuList}>
                        <li><User size={18} />{t("YourProfile")}</li>
                        <li><Folder size={18} />{t("YourCollections")}</li>
                        <li><Flag size={18} />{t("YourTags")}</li>
                        <li><Settings size={18} />{t("Settings")}</li>
                    </ul>
                    <button className={styles.logout}>
                        <LogOut size={18} />
                        {t("Logout")}
                    </button>
                </div>
            )}
        </div>
    );
};
