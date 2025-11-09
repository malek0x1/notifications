"use client";
interface ErrorMessageProps {
  title?: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void;
}

export function ErrorMessage({
  title = "Something went wrong",
  description,
  retryLabel,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800/50 dark:bg-red-900/20 dark:text-red-300">
      <div className="font-medium">{title}</div>
      {description ? (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {description}
        </p>
      ) : null}
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 inline-flex cursor-pointer items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-700 dark:hover:bg-red-600"
        >
          {retryLabel ?? "Try again"}
        </button>
      ) : null}
    </div>
  );
}
