"use client";

interface MarkAsReadButtonProps {
  id: number;
  isRead: boolean;
  isProcessing?: boolean;
  onMarkAsRead: (id: number) => void;
}

export function MarkAsReadButton({
  id,
  isRead,
  isProcessing = false,
  onMarkAsRead,
}: MarkAsReadButtonProps) {
  const handleClick = () => {
    onMarkAsRead(id);
  };

  const buttonText = isRead
    ? "Read"
    : isProcessing
    ? "Marking..."
    : "Mark as read";

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isRead || isProcessing}
      className="rounded-md cursor-pointer px-3 py-1.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-400 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:disabled:text-neutral-600"
    >
      {buttonText}
    </button>
  );
}
