"use client";

import { useEffect } from "react";

interface ErrorType {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorType) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section>
        <h1>{"Error Page"}</h1>
        <button onClick={reset}>{"reset"}</button>
      </section>
    </main>
  );
};
