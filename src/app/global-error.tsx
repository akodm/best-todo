"use client";

import { useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

interface ErrorType {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorType) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section>
        <h1>{"Global Error Page"}</h1>
        <button onClick={reset}>{"reset"}</button>
      </section>
    </main>
  );
};
