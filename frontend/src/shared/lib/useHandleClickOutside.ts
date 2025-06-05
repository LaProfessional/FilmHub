import { useEffect, type RefObject } from "react";

export const useHandleClickOutside = <T extends HTMLElement>(
    ref: RefObject<T | null>,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, ref, setIsOpen]);
};