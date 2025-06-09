import { useState } from "react";

export const useFilters = (isMulti?: boolean) => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([0]);

    const handleSelectItem = (index: number) => {
        setActiveIndexes((prev) => {
            let newIndexes: number[];

            if (!isMulti) {
                newIndexes = [index];
            } else if (index === 0) {
                newIndexes = [0];
            } else {
                newIndexes = prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index];
                newIndexes = newIndexes.filter((i) => i !== 0);
            }

            return newIndexes;
        });
    };

    const resetFilter = () => {
        setActiveIndexes([0]);
    };

    return { activeIndexes, handleSelectItem, resetFilter };
};