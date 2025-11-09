import type { Notification } from "@/types/notification";

import { NotificationCard } from "./notification-card";

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (id: number) => void;
  processingId?: number | null;
}

export function NotificationList({
  notifications,
  onMarkAsRead,
  processingId,
}: NotificationListProps) {
  if (notifications.length === 0) {
    return (
      <p
        className="rounded-xl border border-dashed 
      border-neutral-200 bg-white p-8 text-center text-sm 
      text-neutral-500
      dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
      >
        No notifications to show right now.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {notifications.map((notification) => (
        <li key={notification.id}>
          <NotificationCard
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            isProcessing={processingId === notification.id}
          />
        </li>
      ))}
    </ul>
  );
}
