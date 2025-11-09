import { NotificationsClient } from "@/components/notifications/notifications-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "View and manage your notifications",
};

export default function NotificationsPage() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 py-6 sm:py-10">
        <NotificationsClient />
      </div>
    </section>
  );
}
