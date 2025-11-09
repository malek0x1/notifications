export function NotificationCardSkeleton() {
  return (
    <article className="animate-pulse rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800">
      <header className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3 flex-1">
          <span className="h-4 w-16 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <span className="h-5 w-40 rounded-md bg-neutral-200 dark:bg-neutral-700" />
        </div>
        <span className="h-4 w-20 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      </header>

      <div className="mt-4 h-4 w-full rounded-md bg-neutral-200 dark:bg-neutral-700" />
      <div className="mt-2 h-4 w-3/4 rounded-md bg-neutral-200 dark:bg-neutral-700" />

      <div className="mt-6 flex justify-end">
        <span className="h-8 w-24 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      </div>
    </article>
  );
}
