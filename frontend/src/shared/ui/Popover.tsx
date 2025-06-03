import * as RadixPopover from "@radix-ui/react-popover";
import { useState, useRef, type ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./Popover.module.scss";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside";

interface PopoverProps {
  children: ReactNode;
}

export const Popover = ({ children }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useHandleClickOutside(contentRef, isOpen, setIsOpen);

  return (
    <RadixPopover.Root open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </RadixPopover.Root>
  );
};

Popover.Trigger = RadixPopover.Trigger;
Popover.Portal = RadixPopover.Portal;

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
  variant?: "userMenu";
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

const variantClassMap: Record<string, string> = {
  userMenu: styles.popoverUserMenu
};

Popover.Content = ({
  children,
  className,
  variant,
  align = "center",
  side = "bottom",
}: PopoverContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        className={clsx(
          styles.popoverContent,
          variant && variantClassMap[variant],
          className
        )}
        align={align}
        side={side}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
};