export type NotificationType = "info" | "warning" | "success" | "error";

export const NOTIFICATION_TYPES: readonly NotificationType[] = [
  "info",
  "warning",
  "success",
  "error",
];

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
  userId: number;
}

