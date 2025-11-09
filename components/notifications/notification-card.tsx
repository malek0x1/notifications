import type { Notification } from "@/types/notification";

import { Info, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

import { MarkAsReadButton } from "./mark-as-read-button";

const TYPE_STYLES: Record<Notification["type"], string> = {
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  warning:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  success:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  error: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const ICONS = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle2,
  error: XCircle,
};

interface NotificationCardProps {
  notification: Notification;
  onMarkAsRead: (id: number) => void;
  isProcessing?: boolean;
}

export function NotificationCard({
  notification,
  onMarkAsRead,
  isProcessing = false,
}: NotificationCardProps) {
  const { id, title, message, type, createdAt, isRead } = notification;
  const isUnread = !isRead;
  const Icon = ICONS[type];

  return (
    <article
      className={`rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:border-neutral-700 ${
        isUnread
          ? "bg-neutral-50 shadow-sm dark:bg-neutral-800/50"
          : "opacity-90"
      }`}
    >
      <header className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <span
            className={`inline-flex w-fit items-center rounded-full gap-1 px-2 py-0.5 text-xs font-medium ${TYPE_STYLES[type]}`}
          >
            <Icon className="h-3 w-3" />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          <h3
            className={`mt-3 text-base ${
              isUnread
                ? "font-semibold text-neutral-950 dark:text-neutral-50"
                : "font-medium text-neutral-900 dark:text-neutral-200"
            }`}
          >
            {title}
          </h3>
        </div>
        <time
          className="shrink-0 text-xs text-neutral-500 dark:text-neutral-400"
          dateTime={createdAt}
        >
          {new Date(createdAt).toISOString().slice(0, 16).replace("T", " ")}
        </time>
      </header>
      <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
        {message}
      </p>
      <div className="mt-4 flex justify-end">
        <MarkAsReadButton
          id={id}
          isRead={isRead}
          isProcessing={isProcessing}
          onMarkAsRead={onMarkAsRead}
        />
      </div>
    </article>
  );
}
