"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { FilterBar, type FilterValue } from "./notifications/filter-bar";

const FILTER_LABELS: Record<FilterValue, string> = {
  all: "All notifications",
  info: "Info notifications",
  warning: "Warnings",
  success: "Success updates",
  error: "Errors",
};

interface PageHeaderProps {
  filter: FilterValue;
  unreadCount: number;
  filteredCount: number;
  onFilterChange: (value: FilterValue) => void;
  onMarkAllAsRead: () => void;
}

export function PageHeader({
  filter,
  unreadCount,
  filteredCount,
  onFilterChange,
  onMarkAllAsRead,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Notifications
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Stay up to date with activity and product updates.
          </p>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-between gap-4">
        <FilterBar value={filter} onChange={onFilterChange} />

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
            <span>Unread</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
              {unreadCount}
            </span>
          </div>

          <button
            onClick={onMarkAllAsRead}
            disabled={unreadCount === 0}
            className="text-xs cursor-pointer text-neutral-500 hover:text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed transition dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Mark all as read
          </button>
        </div>
      </div>

      <p
        className="text-xs text-neutral-400 dark:text-neutral-500"
        aria-live="polite"
      >
        Showing {FILTER_LABELS[filter]} ({filteredCount})
      </p>
    </header>
  );
}
