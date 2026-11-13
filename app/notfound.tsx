import Link from "next/link";

const NotFound = () => {
  return (
    <main id="main" className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 min-h-[65vh] py-20 text-center">
      <div className="text-[10px] font-bold uppercase tracking-widest text-accent">404 · STORY NOT FOUND</div>
      <h1 className="my-5 text-4xl font-semibold tracking-tight">This page is a blank chapter.</h1>
      <p className="mb-7 text-muted">The story you’re looking for isn’t here. Find your next read on the homepage.</p>
      <Link href="/" className="inline-block rounded bg-ink px-5 py-3.5 text-xs text-white transition-colors hover:bg-accent">
        Back to The Daily ↗
      </Link>
    </main>
  );
};

export default NotFound;
