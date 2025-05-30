import { useRef, useState } from "react";

export const useCollapsible = () => {
    const [ isClose, setIsClose ] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        const el = contentRef.current;
        if (!el) return;

        const scrollHeight = el.scrollHeight;

        el.style.transition = "height 0.3s ease";
        el.style.overflow = "hidden";

        if (isClose) {
            el.style.height = "0px";

            requestAnimationFrame(() => {
                el.style.height = `${ scrollHeight }px`;
            });

            const handleTransitionEnd = () => {
                el.style.height = "auto";
                el.removeEventListener("transitionend", handleTransitionEnd);
            };

            el.addEventListener("transitionend", handleTransitionEnd);
        } else {
            el.style.height = `${ el.scrollHeight }px`;

            requestAnimationFrame(() => {
                el.style.height = "0px";
            });
        }
        setIsClose(!isClose);
    };

    return { toggleMenu, isClose, contentRef };
};
