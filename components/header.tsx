import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          <Link href="/" transitionTypes={['nav-back']}>Cute Dogs</Link>
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Every HTTP status code deserves a dog
        </p>
      </div>
    </header>
  );
}
