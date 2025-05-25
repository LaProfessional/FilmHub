import { useRef, useState } from "react";

export const useCollapsible = () => {
    const [ isClose, setIsClose ] = useState<Boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        const el = contentRef.current;
        if (!el) return;

        setIsClose(prev => {
            if (prev) {
                const scrollHeight = el.scrollHeight;

                requestAnimationFrame(() => {
                    el.style.height = `${ scrollHeight }px`;
                });

            } else {
                el.style.height = `${ el.scrollHeight }px`;

                requestAnimationFrame(() => {
                    el.style.height = "0px";
                });
            }
            return !prev;
        })
    };

    return { toggleMenu, isClose, contentRef };
};