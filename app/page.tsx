import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <Link href="/notifications" className="text-blue-500 underline">
        Go to Notifications
      </Link>
    </main>
  );
}
