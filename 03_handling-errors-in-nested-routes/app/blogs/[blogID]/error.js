"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();
  
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      {/* handling the unpredictable error but not good because it reload the whole page */}
      {/* <button onClick={() => window.location.reload()}>Try Again </button> */}

      {/* Reset just reset to the client not server that's the problem. it provide by the error object */}
      <button onClick={() => reset()}>Try Again </button>

      {/* Without reloading the full page but re-render the client side */}
      <button
        onClick={() => {
          startTransition(() => {  // delay from re-render page at client side untill server update 
            router.refresh();
            reset();
          });
        }}
      >
        Try Again{" "}
      </button>
    </div>
  );
}
