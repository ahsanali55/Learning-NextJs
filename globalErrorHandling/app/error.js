"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
    console.dir(error)
 
  return (
    <div>
      <p>Something went wrong at home page.</p>
      <button
        onClick={() => {
       
            reset();
       
        }}
      >
        Try Again
      </button>
    </div>
  );
}
