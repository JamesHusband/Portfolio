"use client";

import Link from "next/link";
import { NumberPrefix } from "@UI";

type ButtonProps = {
  href: string;
  value: React.ReactNode;
  isNav?: boolean;
  target?: string;
  index?: number;
  className?: string;
};

export function Button({
  href,
  value,
  isNav,
  target,
  index,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={!href.includes("/") && !href.includes(".") ? `#${href}` : href}
      target={href.includes("http") ? "_blank" : target}
      className={
        isNav
          ? "font-mono text-slate hover:text-yellow transition-colors duration-300 flex items-center gap-[5px]"
          : `w-fit font-mono text-yellow border border-yellow rounded px-4 py-2 hover:bg-yellow/10 transition-colors duration-300 ${className}`
      }
    >
      {isNav && index !== undefined && (
        <NumberPrefix number={index + 1} size="sm" />
      )}
      {value}
    </Link>
  );
}
