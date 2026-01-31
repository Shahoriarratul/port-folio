"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#000000] text-white">
      <div className="rounded-lg border border-violet-800 bg-violet-900/20 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
        <p className="mb-4 text-gray-300">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-violet-600 px-6 py-3 transition hover:bg-violet-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
