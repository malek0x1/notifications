"use client";

import { useState } from "react";
import {
  useMarkAsReadMutation,
  useNotificationsQuery,
  useMarkAllAsReadMutation,
} from "@/app/notifications/hooks";
import { ErrorMessage } from "@/components/error-message";
import { NotificationCardSkeleton } from "@/components/skeleton-loader";
import { type FilterValue } from "./filter-bar";
import { NotificationList } from "./notification-list";
import { PageHeader } from "../header";

export function NotificationsClient() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const { data, isPending, isError, error, refetch } = useNotificationsQuery();
  const { mutate } = useMarkAsReadMutation();
  const { mutate: markAllAsRead } = useMarkAllAsReadMutation();

  const notifications = data ?? [];

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  const visibleNotifications = filteredNotifications.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.message.toLowerCase().includes(search.toLowerCase())
  );

  const handleMarkAsRead = (id: number) => {
    setPendingId(id);
    mutate(id, {
      onSettled: () => setPendingId(null),
    });
  };

  const header = (
    <PageHeader
      filter={filter}
      unreadCount={unreadCount}
      filteredCount={filteredNotifications.length}
      onFilterChange={setFilter}
      onMarkAllAsRead={() => markAllAsRead()}
    />
  );

  if (isPending) {
    return (
      <div className="flex flex-col gap-6">
        {header}
        <ul className="flex flex-col gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <NotificationCardSkeleton />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-6">
        {header}
        <ErrorMessage
          description={error instanceof Error ? error.message : undefined}
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {header}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search notifications..."
        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      />
      <NotificationList
        notifications={visibleNotifications}
        onMarkAsRead={handleMarkAsRead}
        processingId={pendingId}
      />
    </div>
  );
}
