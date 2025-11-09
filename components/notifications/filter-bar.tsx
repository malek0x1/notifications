"use client";

import type { NotificationType } from "@/types/notification";

type FilterValue = "all" | NotificationType;

const FILTER_OPTIONS: FilterValue[] = [
  "all",
  "info",
  "warning",
  "success",
  "error",
];

interface FilterBarProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function FilterBar({ value, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTER_OPTIONS.map((option) => {
        const isActive = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full cursor-pointer px-3 py-1 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 dark:focus-visible:outline-neutral-200 ${
              isActive
                ? "bg-neutral-900 text-white shadow-sm dark:bg-neutral-100 dark:text-neutral-900"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {option === "all"
              ? "All"
              : option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
}

export type { FilterValue };
